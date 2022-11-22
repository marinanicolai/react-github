import React, { useEffect, useState } from "react";

function Card() {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((users) => console.log(users));
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <>
          <h1>{user.login}</h1>
        </>
      ))}
      {/* <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
