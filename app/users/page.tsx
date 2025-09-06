import React from "react";

const UserPage = async () => {
  interface User {
    id: string;
    name: string;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: User[] = await res.json();

  return (
    <>
      <div>User Page...</div>
      <div>{new Date().toLocaleTimeString()}</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
