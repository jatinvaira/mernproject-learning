import React from "react";
import { useParams } from "react-router-dom";

function EmployeeDetails() {
  const { id } = useParams();

  // Fetch employee details using the ID from the URL parameter
  // Display the details of the selected employee
  return (
    <div>
      <h1>Employee Details</h1>
      <p>Employee ID: {id}</p>
      {/* Fetch and display other details of the employee */}
    </div>
  );
}

export default EmployeeDetails;
