import { formDataType } from "./signupvalidation";

export function registerUser(userData: formDataType) {
  const url = "http://localhost:8080/api/v1/auth/register";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("accessToken", `${data.token}`);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
}
