"use client";

export default async function validateJwt() {
  const token = localStorage.getItem("accessToken");
  const url = "http://localhost:8080/api/v1/demo-controller";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return true;
    } else {
      console.error("Request failed with status: ", response.status);
      return false;
    }
  } catch (error) {
    console.error("Fetch error: ", error);
    return false;
  }
}
