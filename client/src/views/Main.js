import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteList from "../components/NoteList";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        setPeople(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const removeFromDom = (personId) => {
    setPeople(people.filter((person) => person._id != personId));
  };

  const newNote = () => {
    navigate("/notes/new");
  };

  return (
    <div>
      <h1>Movie Reviews</h1>
      <h3>Leave a review!</h3>
      <button
        onClick={(e) => {
          newNote();
        }}
      >
        Write a review
      </button>

      {/* <PersonForm/> */}
      <hr />
      {loaded && <NoteList people={people} removeFromDom={removeFromDom} />}
    </div>
  );
};

export default Main;
