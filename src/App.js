
import React from "react";
import UsersList from "./UsersList.js";

function App() {

  const handleEmployeAdd = (newEmployee) => {
    console.log(`Employee: "${newEmployee.name}" has been added`)
  };

  const handleEmployeeRemove = (deletedEmployee) => {
    console.log(`Employee: "${deletedEmployee.name}" has been removed`)
  };

  return (
    <div className="App">
      <UsersList 
        usersNumber={3}
        onEmployeeAdd={handleEmployeAdd}
        onEmployeeRemove={handleEmployeeRemove}
      />
    </div>
  );
};

export default App;
