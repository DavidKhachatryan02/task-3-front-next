import client from "../client";

export default {
  login: (data) => client.post("/login", data),
  refreshToken: (data) => client.post("/refreshToken", data),
  getUser: () => client.get("/getMe"),
};
