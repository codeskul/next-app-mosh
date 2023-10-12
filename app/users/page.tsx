import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: { revalidate: 10 },   // Revalidate serverside data cache every 10 seconds
    cache: "no-store",    // disable server side data cache (Dynamic at request time)
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
