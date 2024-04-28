import React, { useEffect, useState } from "react";
import CustomCard from "../components/customcard";

import Row from "react-bootstrap/Row";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/events"); // Replace with your actual API endpoint
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Row xs="auto" className="g-4">
        {events.map((event, index) => (
          <CustomCard
            key={index}
            title={event.title}
            eventID={event._id}
            imageSrc={
              "https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M="
            } // You should have a field for imageSrc in your Event model
            content={event.description}
            date={event.date}
            time={event.time}
            venue={event.venue}
          />
        ))}
      </Row>
    </div>
  );
};
export default UpcomingEvents;
