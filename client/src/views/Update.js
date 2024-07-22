import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const { removeFromDom } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://moviereviewz.azurewebsites.net/api/people/" + id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      });
  }, []);

  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .patch("https://moviereviewz.azurewebsites.net/api/people/" + id, {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const deletePerson = (personId) => {
    axios
      .delete("https://moviereviewz.azurewebsites.net/api/people/" + personId)
      .then((res) => {
        removeFromDom(personId); //after delete, update personList at Main view
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Note</h1>
      <Link to={"/"}>go back home</Link>
      <form onSubmit={updatePerson}>
        <p>
          <label>Note Title</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Note Body</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        <input type="submit" value="Edit Note" />
        <button
          onClick={(e) => {
            deletePerson(id);
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default Update;
