import { useLoaderData } from "react-router-dom";
import SeminarsList from "../components/SeminarsList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const seminars = useLoaderData();
  console.log(seminars);

  return (
    <div className="flex flex-col gap-10 mt-10">
      <button onClick={() => navigate("/seminar")} className="">
        Create a seminar
      </button>
      <SeminarsList seminars={seminars} />
    </div>
  );
};

export default Dashboard;

export const loader = async () => {
  const response = await axios.get("http://localhost:5000/api/seminars");
  console.log(response);

  if (response.status === 400) {
    throw new Response(JSON.stringify(response.data), { status: 400 });
  }

  return response.data;
};
