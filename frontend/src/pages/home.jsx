import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import EventForm from "../components/eventform";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1>Welcome to the Event Management Website!</h1>
        <p>
          This website is a one-stop shop for all your event management needs.
          You can use it to create and manage events. To get started, simply
          create an account and then click on the "Create Event" button. You
          will then be guided through the process of creating your event. We
          hope you find this website to be a helpful tool for managing your
          events. If you have any questions, please do not hesitate to contact
          us.
        </p>
        <br />
        <br />
        <br />

        <div className="events">
          <p>
            {" "}
            If you want to Create your own Event Please Fill the Form to Create
            Events
          </p>
        </div>

        <EventForm />
      </div>
    </div>
  );
};

export default Home;
