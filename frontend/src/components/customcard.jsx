import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
const CustomCard = ({
  title,
  imageSrc,
  content,
  date,
  time,
  venue,
  eventID,
}) => {
  let badgeText;
  let badgeVariant;

  var givenDateStr = date;
  var givenDate = new Date(givenDateStr);
  var standardDateFormat = givenDate.toISOString().split("T")[0];

  var currentDate = new Date();

  if (givenDate >= currentDate) {
    badgeText = "Active";
    badgeVariant = "success";
  } else {
    badgeText = "Inactive";
    badgeVariant = "danger";
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:4001/api/events/${eventID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Event deleted successfully");
        window.location.reload();
        // Call the parent component's onDelete callback to update the state
      } else {
        const data = await response.json();
        alert(`Failed to delete event: ${data.error}`);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <Badge className=" badge rounded-pill" bg={badgeVariant}>
            {badgeText}
          </Badge>
          <span className="visually-hidden">unread messages</span>
        </div>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Venue: {venue}</ListGroup.Item>
          <ListGroup.Item>Date: {standardDateFormat}</ListGroup.Item>
          <ListGroup.Item>Time: {time}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button
            variant="danger"
            className="card-button"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash} fixedWidth /> Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;
