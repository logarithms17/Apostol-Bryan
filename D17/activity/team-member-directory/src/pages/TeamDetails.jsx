import { useParams } from "react-router-dom";
import team from "../team-data/team";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

const TeamDetails = () => {
  console.log("teamDetails");
  const { id } = useParams();
  console.log(id);
  const member = team.find((team) => {
    return team.id === parseInt(id);
  });
  console.log(member);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {member.role}
          </Card.Subtitle>
          {/* <Card.Link href=`{`mailto:${member.email}`}>{member.email}</Card.Link> */}
          <Card.Link href={`mailto:${member.email}`}>{member.email}</Card.Link>
        </Card.Body>
      </Card>

      <Link to="/team" style={{ textDecoration: "none" }}>
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Back
        </button>
      </Link>
    </div>
  );
};

export default TeamDetails;
