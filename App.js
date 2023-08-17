
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
  //funcion que se pasa al nuevo componente para modificar la lista de users, agrega un nuevo user:
  const handleEmployeeAdd = (newEmployee) => {
    setUsers(users.concat(newEmployee))
  };
  //funcion que se pasa al nuevo componente para eliminar un user:
  const handleEmployeeRemove = (deletedEmployee) => {
    let newUsersList = users.slice();
    newUsersList.splice(deletedEmployee,1);
    setUsers(newUsersList);
  };

  return (
    <div className="App">
      <UsersList 
        employees={users} 
        showEmployees={showEmployees} 
        onEmployeeAdd={handleEmployeeAdd} 
        onEmployeeRemove={handleEmployeeRemove}
      />
    </div>
  );
};

export default App;
