import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [pets,setPets]=useState([])
  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployeeList(data));
  }, []);
  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/pets")
      .then((res) => res.json())
      .then((info) => setPets(info));
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeList.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
