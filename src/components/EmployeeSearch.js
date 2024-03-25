import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';

const EmployeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, data, error } = useQuery(GET_USERS);

  const handleUserClick = (user) => {
    // Placeholder logic for handling user click
    console.log(`Clicked on user: ${user.firstName} ${user.lastName}`);
    // You can replace this with the actual logic you want to execute
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data.users;

  const filteredUsers = users.filter(({ firstName, lastName, title, department }) =>
    [firstName, lastName, title, department].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Employee FILTERING</h2>
      <input
        type="text"
        placeholder="Search by name, title, or department"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.length === 0 ? (
          <li>No matching users found.</li>
        ) : (
          filteredUsers.map((user) => (
            <li key={user._id} onClick={() => handleUserClick(user)}>
              {`${user.firstName} ${user.lastName} - ${user.title}, ${user.department}`}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default EmployeeSearch;
