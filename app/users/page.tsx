import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: { revalidate: 10 },   // Revalidate serverside data cache every 10 seconds
    cache: "no-store", // disable server side data cache (Dynamic at request time)
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleString()}</p>
      <div className="overflow-x-auto">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
