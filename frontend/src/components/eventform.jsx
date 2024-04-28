// EventForm.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const EventForm = ({ onEventSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
 
  const navigate = useNavigate();


 async function handleFormSubmit (e) {
    e.preventDefault();

    // Validate form inputs (you can add more validation logic)
    if (!title || !description || !date || !time || !venue) {
      alert('Please fill in all fields');
      return;
    }


      
    // Create an event object with the form data
    const response = await fetch('http://localhost:4001/api/events',{
             
    method :'POST',
    headers:{
        'Content-Type':'application/json',
      },

      body:JSON.stringify({
        
        title,
        description,
        date,
        time,
        venue,
        
      }),
});

    // Call the onEventSubmit callback to handle the submitted event
    
     const data = await response.json();
    console.log(data);
    navigate('/upcomingEvents');
    



    // Clear the form fields after submission
    setTitle('');
    setDescription('');
 
    setDate('');
    setTime('');
    setVenue('');
  };

  return (
    <div>
       
       <div className='event-form-container'>
        <h2 className='form-step'>Create Event</h2>
        <form onSubmit={handleFormSubmit}>
         
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            
            
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <label>
              Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <br />
            <label>
              Venue:
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Create Event</button>
       
        </form>

       </div> 
      
    </div>
  );
};

export default EventForm;
