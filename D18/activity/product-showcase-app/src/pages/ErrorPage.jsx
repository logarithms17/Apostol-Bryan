import React from "react";
import AppNavbar from "../components/AppNavbar";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  console.log(error.data);

  let title = "An error occurred";
  let message;

  try {
    let parsedError = JSON.parse(error.data);
    if (error.status === 404) {
      title = "Not found";
      message = "Could not find the requested page.";
    } else if (error.status === 500) {
      title = "Server Error";
      message = parsedError.message || "Internal server error occurred.";
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <AppNavbar />
      <main
        style={{
          textAlign: "center",
          marginTop: "200px",
        }}
      >
        <h1 style={{ color: "red", fontSize: "80px" }}>{title}</h1>
        <p style={{ fontSize: "40px" }}>{message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
