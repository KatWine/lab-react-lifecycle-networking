import React, { useState } from 'react';
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);

  const handleShowPets = () => {
    setShowPets(!showPets);
  };

  return (
    <article className="employee">
      <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName} ${employee.postfix}`}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleShowPets}>{showPets ? 'Hide Pets' : 'Show Pets'}</button>
      {showPets && <PetList employeeId={employee.id} />}
    </article>
  );
};

export default Employee;

