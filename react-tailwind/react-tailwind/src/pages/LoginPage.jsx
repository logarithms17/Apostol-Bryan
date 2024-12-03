import axios from "axios";
import { redirect, useActionData, Form } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const AdminAuthPage = () => {
  const data = useActionData();
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center border p-4 border-black w-1/4 rounded-xl py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
      <Form
        method="post"
        style={{ display: "flex", flexDirection: "column" }}
        className="gap-2"
      >
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
          className="placeholder:text-sm bg-slate-100 rounded px-2"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Please enter your password"
          className="placeholder:text-sm bg-slate-100 rounded px-2"
        />
        <button className="">Login</button>
      </Form>
    </div>
  );
};

export default AdminAuthPage;

export const action = async ({ request }) => {
  const formData = await request.formData();

  console.log(formData);

  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

  const response = await axios.post("http://localhost:5000/api/auth/login", {
    email,
    password,
  });

  const token = response.data.token;

  localStorage.setItem("token", token);

  console.log(response);
  if (response.status === 400) {
    throw new Response(JSON.stringify(response.data), { status: 400 });
  }

  Notify.success("Login successful");

  return redirect("/dashboard");
};
