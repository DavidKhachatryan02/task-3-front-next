"use client";
// import { useSelector } from "react-redux";
//import api from "~/api";
import { TextField, InputAdornment } from "@mui/material";
//import Cookies from "js-cookie";
//import axios from "axios";
//import AndroidIcon from "@mui/icons-material/Android";
//import GitHubIcon from "@mui/icons-material/GitHub";
// import { selectUser } from "~/store/selectors/userSelectors";

const styles = {
  container: "flex flex-col gap-3.5 xl:w-1/5 ",
  title: "text-sky-900 text-base font-medium leading-loose",
};

const UserAccounts = () => {
  // Cookies.set(
  //   "accessToken",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyOTY2OTc0LCJleHAiOjE2OTI5NjcwNzR9.0luyMHbtZJxPn4N5dBEgYeteNxxsKLUY9HWPRXUVe7c"
  // );
  // Cookies.set("refreshToken", "testUser1refreshToken");

  // const getUserData = async () => {
  //   try {
  //     const response = await api.auth.getUser();
  //     const { slackUserName, gitHubUserName } = response;

  //     console.log("Slack User Name:", slackUserName);
  //     console.log("GitHub User Name:", gitHubUserName);

  //     return { slackUserName, gitHubUserName };
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //     throw error;
  //   }
  // };
  // getUserData().then().catch();

  return (
    <div className={styles.container}>
      <p className={styles.title}>My accounts</p>
      <TextField
        disabled
        label="Slack"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <AndroidIcon /> */}
            </InputAdornment>
          ),
        }}
        // value={slackUserName}
        variant="standard"
      />
      <TextField
        disabled
        label="GitHub"
        // value={gitHubUserName}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <GitHubIcon /> */}
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  );
};

export default UserAccounts;
