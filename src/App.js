
import React from "react";
import { useState } from 'react';
import UsersList from "./components.js";

function App() {
  //Estado que se van a pasar/propagar al nuevo componente, representan la lista de usuarios:
  const [users, setUsers] = useState([0]);
  //Funcion que muestra los users preestablecidos (que estan en funcion de usersNumber)
  const showEmployees = (noEmployees) => {
    setUsers(noEmployees);
  };
  //funcion que se pasa al nuevo componente para modificar la lista de users, agrega un nuevo user
  const handleEmployeAdd = (newEmployee) => {
    setUsers(users.concat(newEmployee))
  };

  return (
    <div className="App">
      <UsersList employees={users} showEmployees={showEmployees} usersNumber={3} onEmployeeAdd={handleEmployeAdd}/>
    </div>
  );
};

export default App;
