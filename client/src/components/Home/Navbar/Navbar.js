import React from "react";
import navStyles from "./Navbar.module.css";
// import { Button } from "@mui/material";
// import { signOut } from 'firebase/auth';
// import { auth } from "../../firebaseConfig";
export default function Navbar() {
  return (
    <>
      <div className={navStyles.container}>
        <div className={navStyles.logo}>
          <span>
            <img
              height={37}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNa8lP5GaSyjXmodmSXUfgRjk1No2KW-S-A&usqp=CAU"
              alt="NA"
              style={{ borderRadius: "50%" }}
            />
          </span>{" "}
          <b>Quizzy</b>
        </div>

      </div>
    </>
  );
}
