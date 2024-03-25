import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const EmployeeCreate = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    dateOfJoining: "",
    title: "",
    department: "",
    employeeType: "",
  });

  const [createUser] = useMutation(CREATE_USER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const validateInput = () => {
    // Validate age
    if (input.age < 20 || input.age > 70) {
      alert("Age must be between 20 and 70");
      return false;
    }

    // Validate Title
    const allowedTitles = ["Employee", "Manager", "Director", "VP"];
    if (!allowedTitles.includes(input.title)) {
      alert("Invalid title. Allowed values: Employee, Manager, Director, VP");
      return false;
    }

    // Validate Department
    const allowedDepartments = ["IT", "Marketing", "HR", "Engineering"];
    if (!allowedDepartments.includes(input.department)) {
      alert(
        "Invalid department. Allowed values: IT, Marketing, HR, Engineering"
      );
      return false;
    }

    // Validate EmployeeType
    const allowedEmployeeTypes = [
      "FullTime",
      "PartTime",
      "Contract",
      "Seasonal",
    ];
    if (!allowedEmployeeTypes.includes(input.employeeType)) {
      alert(
        "Invalid employee type. Allowed values: FullTime, PartTime, Contract, Seasonal"
      );
      return false;
    }

    return true;
  };

  const handleCreateUser = () => {
    if (validateInput()) {
      createUser({
        variables: { input: { ...input } },
      });
    }
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={input.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={input.age}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Date of Joining:
          <input
            type="date"
            name="dateOfJoining"
            value={input.dateOfJoining}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Title:
          <select name="title" value={input.title} onChange={handleInputChange}>
            <option value="">Select Title</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Director">Director</option>
            <option value="VP">VP</option>
          </select>
        </label>
        <br />

        <label>
          Department:
          <select
            name="department"
            value={input.department}
            onChange={handleInputChange}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
          </select>
        </label>
        <br />

        <label>
          Employee Type:
          <select
            name="employeeType"
            value={input.employeeType}
            onChange={handleInputChange}
          >
            <option value="">Select Employee Type</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Contract">Contract</option>
            <option value="Seasonal">Seasonal</option>
          </select>
        </label>
        <br />

        <button type="button" onClick={handleCreateUser}>
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
