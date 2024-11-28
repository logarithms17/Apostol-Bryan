import team from "../team-data/team";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Team = () => {
  console.log(team);
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        {team.map((item, index) => (
          <ListGroup.Item style={{ cursor: "pointer" }} key={item.id}>
            <Link
              to={`${item.id}`}
              style={{
                textDecoration: "none",
              }}
            >
              {item.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Team;
