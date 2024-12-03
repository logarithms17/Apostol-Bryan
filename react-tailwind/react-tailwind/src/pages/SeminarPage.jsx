import React from "react";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

const SeminarPage = () => {
  return (
    <div className="flex flex-col border p-4 rounded-lg bg">
      <h1>Create a Seminar</h1>
      <Form method="post" className="flex flex-col space-y-4">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          required
          className="border p-2"
        />

        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Enter description..."
          required
          className="border p-2"
        />

        <label>Date:</label>
        <input type="date" name="date" required className="border p-2" />

        <h1>Time Frame:</h1>
        <label>Start Time:</label>
        <input
          type="time"
          name="timeFrame.from" // Nested timeFrame object
          required
          className="border p-2"
        />
        <label>End Time:</label>
        <input
          type="time"
          name="timeFrame.to" // Nested timeFrame object
          required
          className="border p-2"
        />

        <label>Venue:</label>
        <input
          type="text"
          name="venue"
          placeholder="Enter venue"
          required
          className="border p-2"
        />

        <h1>Speaker:</h1>
        <label>Name:</label>
        <input
          type="text"
          name="speaker.name" // Nested speaker object
          required
          className="border p-2"
        />
        <label>Image:</label>
        <input
          type="file"
          name="speaker.image" // Nested speaker object for image
          accept="image/*"
          required
          className="border p-2"
        />
        <label>LinkedIn:</label>
        <input
          type="text"
          name="speaker.linkedin" // Nested speaker object
          required
          className="border p-2"
        />

        <label>Fee:</label>
        <input type="number" name="fee" required className="border p-2" />

        <label>Available Slots:</label>
        <input
          type="number"
          name="slotsAvailable"
          required
          className="border p-2"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Create Seminar
        </button>
      </Form>
    </div>
  );
};

export default SeminarPage;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const formatDate = (date) => new Date(date).toISOString().split("T")[0];
  data.date = formatDate(data.date);

  console.log("Formatted Data:", data);

  const token = localStorage.getItem("token");

  const response = await axios.post(
    "http://localhost:5000/api/seminars",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);

  if (response.status === 400) {
    throw new Response(JSON.stringify(response.data), { status: 400 });
  }

  return redirect("/confirm");
};
