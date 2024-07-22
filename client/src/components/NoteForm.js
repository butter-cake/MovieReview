import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default (props) => {
  //keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();

    //make a post request to create a new person
    axios
      .post("https://moviereviewz.azurewebsites.net/api/people", {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  //onChange to update firstName and lastName
  return (
    <form onSubmit={onSubmitHandler}>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <p>
        <label>Movie Title</label>
        <br />
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </p>
      <p>
        <label>Movie Review Notes</label>
        <br />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </p>
      {/* {(props.link == "new")? <input type="Create"/>: <input type="submit"/>} */}
      <input type="submit" value="Create New" />
    </form>
  );
};
