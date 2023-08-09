
import React from "react";
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Button} from "@mui/material";

//import Button from "@mui/material";    onAddEmployee, onRemoveEmployee
//employees = estado que se pasa desde el componente App, lista de users
//showEmployees = funcion que se pasa desde App para mostrar los employees que estan en funcion de usersNumber
//usersNumner = numero de users preestablecido
//onEmployeeAdd = funcion que se pasa desde App para agregar un employee nuevo
function UsersList({employees, showEmployees, usersNumber, onEmployeeAdd, }) {
   //aqui se arma la lista inicial de usuarios 
   var usersList = [];
    const names = ["Julie","Lindsey","Megan","Emily","Crystal","Ashley","Noah","James","William","Henry","Lucas","Daryl","Asher","Harry","Joshua","Noah","Paul","Andrew","Bruce","Donald","Hank"];
    const lastNames = ["Williams","Fox","Thompson","Smith","Murphy","Smith","Johnson","Brown","Jones","Davis","Anderson","Thomas","Moore","Lee","White","Robinson","Walker","Allen","Scott","Adams","Turner"];
    const countries = ["Andorra","Austria","Belgium","Canada","China","France","Germany","Russia","Madagascar"];
    const numbers = ["1","2","3","4","5","6","7","8","9"];

    for (let i = 0; i<usersNumber; i++) {
        let employee = {
            "name": `${names[Math.floor(Math.random()*names.length)]} ${lastNames[Math.floor(Math.random()*lastNames.length)]}`,
            "countrie" : `${countries[Math.floor(Math.random()*countries.length)]}`,
            "numberEmployee": `${numbers[Math.floor(Math.random()*numbers.length)]}${numbers[Math.floor(Math.random()*numbers.length)]}${numbers[Math.floor(Math.random()*numbers.length)]}${numbers[Math.floor(Math.random()*numbers.length)]}`
        };
        usersList.push(employee);
    };
    //Funcion que verifica que la funcion pasada (onEmployeeAdd) es funcion y sí si lo es, la llama pasandole 
    // el nuevo user/employee generado aleatoriamente aquí,  
    const handleClickAdd = () => {
        if (onEmployeeAdd) {
            let newEmployee = {
                "name": `${names[Math.floor(Math.random()*names.length)]} ${lastNames[Math.floor(Math.random()*lastNames.length)]}`,
                "countrie" : `${countries[Math.floor(Math.random()*countries.length)]}`,
                "numberEmployee": `${numbers[Math.floor(Math.random()*numbers.length)]}${numbers[Math.floor(Math.random()*numbers.length)]}${numbers[Math.floor(Math.random()*numbers.length)]}${numbers[Math.floor(Math.random()*numbers.length)]}`
            };            
            onEmployeeAdd(newEmployee);
        }
    };
    //funcion que ejecuta la funcion swohEmployees pasandole la lista de users inicial
    const handleShowEmployees = () => {
        showEmployees(usersList);
    };

    //aqui se establece la lista inicial como el edo actual de users
    //const varusersList = Array(props.usersNumber).fill("usuarioX");
    
    //const [users, setUsers] = useState(usersList);
    
    return (
        <TableContainer>
            <Button onClick={handleShowEmployees}>Show Employees</Button>
            <Button onClick={handleClickAdd}>Add Employee</Button>
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