// src/components/EmployeeDirectory.js
import React from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import EmployeeCreate from "./EmployeeCreate";

const EmployeeDirectory = () => {
  return (
    <div>
      {/* <h2>Employee Directory</h2> */}
      {/* <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
          </li> */}
      <EmployeeSearch />
      <EmployeeTable />
      <EmployeeCreate />
    </div>
  );
};

export default EmployeeDirectory;
