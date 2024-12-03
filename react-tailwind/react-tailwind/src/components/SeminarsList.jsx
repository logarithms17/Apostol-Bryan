import axios from "axios";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SeminarsList = ({ seminars }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await deleteSeminarAction(id);

      if (response.status === 400) {
        throw new Response(JSON.stringify(response.data), { status: 400 });
      }

      console.log(response);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
    };
    
    const handleUpdate = async (id) => {
        console.log(id);
        
    }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Seminars List</h1>
      <ul className="flex flex-col gap-10">
        {seminars.map((seminar) => (
          <li key={seminar._id} className="border p-4 border-black rounded-xl">
            <p>Title: {seminar.title}</p>
            <p>Description: {seminar.description}</p>
            <p>
              Date:{" "}
              {new Date(seminar.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>From: {seminar.timeFrame.from}</p>
            <p>To: {seminar.timeFrame.to}</p>
            <p>Venue: {seminar.venue}</p>
            <p>Speaker:</p>
            <p>{seminar.speaker.name}</p>
            <img src={seminar.speaker.image} className="w-20" alt="" />
            <p>{seminar.linkedin}</p>
            <p>{seminar.fee}</p>
            <p>{seminar.slotsAvailable}</p>
            <button className="mr-2">Update</button>
            <button onClick={() => handleDelete(seminar._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeminarsList;

// delete seminar
export const deleteSeminarAction = async (seminarId) => {
  const token = localStorage.getItem("token");

  console.log(seminarId);

  const response = await axios.delete(
    `http://localhost:5000/api/seminars/${seminarId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 400) {
    throw new Response(JSON.stringify(response.data), { status: 400 });
  }

  return response.data;
};

