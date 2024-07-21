import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonForm from "../components/NoteForm";

const Detail = (props) => {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + id)
      .then((res) => setPerson(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Write a movie review</h1>
      <h2>Write a new review!</h2>
      <Link to={"/"}>go back home</Link>
      {/* <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p> */}
      <PersonForm link={"new"} />
    </div>
  );
};

export default Detail;
