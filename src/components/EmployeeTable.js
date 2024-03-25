import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";

const EmployeeTable = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  const [deleteUser] = useMutation(
    gql`
      mutation DeleteUser($id: ID!) {
        deleteUser(id: $id) {
          _id
        }
      }
    `,
    {
      refetchQueries: [{ query: GET_USERS }],
    }
  );

  const [updateUser] = useMutation(
    gql`
      mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
        updateUser(id: $id, input: $input) {
          _id
          firstName
          lastName
          age
          dateOfJoining
          title
          department
          employeeType
        }
      }
    `,
    {
      refetchQueries: [{ query: GET_USERS }],
    }
  );

  const [editingIds, setEditingIds] = useState({});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data.users;

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log(`User with ID ${userId} deleted successfully`);
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
    }
  };

  const handleUpdate = async (userId, updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (response.ok) {
        console.log(`User with ID ${userId} updated successfully`);
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
    }
  };

  const handleEdit = (userId) => {
    setEditingIds({ ...editingIds, [userId]: true });
  };

  return (
    <div>
  <h2>Employee Table</h2>
  <table>
    <thead>
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age</th>
        <th>DateOfJoining</th>
        <th>Title</th>
        <th>Department</th>
        <th>EmployeeType</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td>
            {editingIds[user._id] ? (
              <input type="text" defaultValue={user.firstName} id={`firstName-${user._id}`} />
            ) : (
              user.firstName
            )}
          </td>
          <td>
            {editingIds[user._id] ? (
              <input type="text" defaultValue={user.lastName} id={`lastName-${user._id}`} />
            ) : (
              user.lastName
            )}
          </td>
          <td>
            {editingIds[user._id] ? (
              <input type="number" defaultValue={user.age} id={`age-${user._id}`} />
            ) : (
              user.age
            )}
          </td>
          <td>
            {editingIds[user._id] ? (
              <input type="date" defaultValue={user.dateOfJoining} id={`dateOfJoining-${user._id}`} />
            ) : (
              user.dateOfJoining
            )}
          </td>
          <td>
            {editingIds[user._id] ? (
              <input type="text" defaultValue={user.title} id={`title-${user._id}`} />
            ) : (
              user.title
            )}
          </td>
          <td>
            {editingIds[user._id] ? (
              <input type="text" defaultValue={user.department} id={`department-${user._id}`} />
            ) : (
              user.department
            )}
          </td>
          <td>
            {editingIds[user._id] ? (
              <input type="text" defaultValue={user.employeeType} id={`employeeType-${user._id}`} />
            ) : (
              user.employeeType
            )}
          </td>
          <td>
            {editingIds[user._id] ? (
              <div>
                <button
                  onClick={() => {
                    const firstNameInput = document.getElementById(`firstName-${user._id}`);
                    const lastNameInput = document.getElementById(`lastName-${user._id}`);
                    const ageInput = document.getElementById(`age-${user._id}`);
                    const dateOfJoiningInput = document.getElementById(`dateOfJoining-${user._id}`);
                    const titleInput = document.getElementById(`title-${user._id}`);
                    const departmentInput = document.getElementById(`department-${user._id}`);
                    const employeeTypeInput = document.getElementById(`employeeType-${user._id}`);
                    
                    if (firstNameInput && lastNameInput && ageInput && dateOfJoiningInput && titleInput && departmentInput && employeeTypeInput) {
                      handleUpdate(user._id, {
                        firstName: firstNameInput.value,
                        lastName: lastNameInput.value,
                        age: parseInt(ageInput.value),
                        dateOfJoining: dateOfJoiningInput.value,
                        title: titleInput.value,
                        department: departmentInput.value,
                        employeeType: employeeTypeInput.value,
                      });
                    }
                  }}
                >
                  Save
                </button>
                <button onClick={() => setEditingIds({})}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit(user._id)}>Edit</button>
            )}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default EmployeeTable;
