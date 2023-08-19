
import React, { useEffect } from "react";
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Button} from "@mui/material";

function UsersList({usersNumber, onEmployeeAdd, onEmployeeRemove}) {
    const [employees, setEmployees] = useState([]);
   //aqui se arma la lista inicial de usuarios 
    var usersListInit = [];
    const names = ["Julie","Lindsey","Megan","Emily","Crystal","Ashley","Noah","James","William","Henry","Lucas","Daryl","Asher","Harry","Joshua","Noah","Paul","Andrew","Bruce","Donald","Hank"];
    const lastNames = ["Williams","Fox","Thompson","Smith","Murphy","Smith","Johnson","Brown","Jones","Davis","Anderson","Thomas","Moore","Lee","White","Robinson","Walker","Allen","Scott","Adams","Turner"];
    const countries = ["Andorra","Austria","Belgium","Canada","China","France","Germany","Russia","Madagascar"];

    const createUserObject = () => {
        let newEmployee = {
            "name": `${names[Math.floor(Math.random()*names.length)]} ${lastNames[Math.floor(Math.random()*lastNames.length)]}`,
            "countrie" : `${countries[Math.floor(Math.random()*countries.length)]}`,
            "numberEmployee": `${Math.floor(Math.random()*(9000)) + 1000}`
        }
        return newEmployee;
    };

    for (let currentUser = 0; currentUser<usersNumber; currentUser++) {
        let employee = createUserObject();
        usersListInit.push(employee);
    };
    
    //Aquí se muestra la lista inicial recien generada:
    useEffect(() => {
        setEmployees(usersListInit);
    }, []);

    //Esta funcion selecciona un indice/user/employee de la lista de users/employees existente
    const selectUserObject = () => {
        let employee = Math.floor(Math.random()*(employees.length));
        return employee;
    };

    const handleClickAdd = () => {
        let newEmployee = createUserObject();
        setEmployees(employees.concat(newEmployee));  

        if (onEmployeeAdd) {
            onEmployeeAdd(newEmployee);
        };
    };

    const handleClickRemove = () => {
        let selectedEmployee = selectUserObject();
        let deletedEmployee=employees[selectedEmployee]

        let newUsersList = employees.slice();
        newUsersList.splice(selectedEmployee,1);

        if (onEmployeeRemove) {
            onEmployeeRemove(deletedEmployee);
        };

        setEmployees(newUsersList);
    }

    return (
        <TableContainer>
            <Button onClick={handleClickAdd}>Add Employee</Button>
            <Button onClick={handleClickRemove}>Remove Employee</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Employee</strong></TableCell>
                        <TableCell><strong>Countrie</strong></TableCell>
                        <TableCell><strong>Number employe</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((item,index) =>(
                      <TableRow key={index}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.countrie}</TableCell>
                          <TableCell>{item.numberEmployee}</TableCell>
                      </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersList;