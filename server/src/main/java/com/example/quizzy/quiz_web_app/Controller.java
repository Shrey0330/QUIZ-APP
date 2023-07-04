package com.example.quizzy.quiz_web_app;

import java.util.ArrayList;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Controller {

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/data")
    @ResponseBody
    public String uploadData(@RequestBody String data) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(
                "https://spring-demo-1b38f-default-rtdb.firebaseio.com/quiz.json",
                data,
                String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            return "Data uploaded successfully!";
        } else {
            return "Failed to upload data to the API server.";
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/quiz")
    public ResponseEntity<?> getQuiz(@RequestParam("category") String itemid) {
        try {
            String uri = "https://spring-demo-1b38f-default-rtdb.firebaseio.com/quiz.json?orderBy=\"category\"&equalTo="+itemid;
            System.out.println(itemid);

            RestTemplate restTemplate = new RestTemplate();
            String result = restTemplate.getForObject(uri, String.class);

            Object file = JSONValue.parse(result);
            JSONObject jsonObjectdecode = (JSONObject) file;
            Map<String, Map<String, Object>> map = jsonObjectdecode;
            ArrayList<Map<String, Object>> questionList = new ArrayList<>();

            for (Map<String, Object> question : map.values()) {
                questionList.add(question);
            }

            return new ResponseEntity<>(questionList, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error!, Please try again", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
