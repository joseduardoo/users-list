
import React, { useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Button} from "@mui/material";

//import Button from "@mui/material";    onAddEmployee, onRemoveEmployee
//employees = estado que se pasa desde el componente App, lista de users
//showEmployees = funcion que se pasa desde App para mostrar los employees que estan en funcion de usersNumber
//usersNumner = numero de users preestablecido
//onEmployeeAdd = funcion que se pasa desde App para agregar un employee nuevo
function UsersList({employees, showEmployees, onEmployeeAdd, onEmployeeRemove}) {
   //aqui se arma la lista inicial de usuarios 
    var usersListInit = [];
    const usersNumber = 4;
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
        showEmployees(usersListInit);
    }, []);

    const removeUserObject = () => {
        let employee = Math.floor(Math.random()*(employees.length));
        return employee;
    };

    //Funcion que verifica que la funcion pasada (onEmployeeAdd) es funcion y sí si lo es, la llama pasandole 
    // el nuevo user/employee generado aleatoriamente aquí,  
    const handleClickAdd = () => {
        if (onEmployeeAdd) {
            let newEmployee = createUserObject();          
            onEmployeeAdd(newEmployee);
        }
    };

    const handleClickRemove = () => {
        if (onEmployeeRemove) {
            let deletedEmployee = removeUserObject();
            onEmployeeRemove(deletedEmployee);
        }
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