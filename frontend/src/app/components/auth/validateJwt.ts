"use client";

export async function validateJwt() {
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

export async function revalidateJWT(email: string, password: string) {
  const url = "http://localhost:8080/api/v1/auth/authenticate";
  const data = { email: email, password: password };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseJson = await response.json();
      localStorage.setItem("accessToken", responseJson.token);
      window.location.assign(`${process.env.NEXT_PUBLIC_API_URL}/secured`);
    } else {
      throw new Error("Please check your name or password or Signup!");
    }
  } catch (error) {
    console.log(error);
  }
}
