import { API_BASE_URL } from "../api/constants.mjs";
import * as storage from "../storage/index.mjs";

export async function login(profile) {
  const action = "/auction/auth/login";
  const loginURL = API_BASE_URL + action;

  const response = await fetch(loginURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    const json = await response.json();
    throw new Error(json.errors[0].message);
  }

  const { accessToken, ...user } = await response.json();
  console.log("Login successful");

  storage.save("token", accessToken);
  storage.save("profile", user);
}