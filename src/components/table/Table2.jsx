import React, {Component} from 'react';
import {users} from '../../utils/mock-data';
import {Table as TableRS} from 'reactstrap';
import Tr from '../tr/Tr';

class Table2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: users
        };
    };


  
    painting = user => user.alive? 'bg-success' : 'bg-danger';

    handlerToggleAlive = (user) => {
        //const u = this.state.users.findIndex(e => e.id === user.id)
        return (event) => {
            const nL = this.state.users[user.id-1];
            nL.alive = !nL.alive;
            
            console.log(event.target, user);
            this.setState (
                users,
            )
        }
    };



    render(){
        return(
            <TableRS striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Alive</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.users.map(usr => (
                            <Tr usr = {usr} > </Tr>
                        )
                        )}
                </tbody>
            </TableRS>
        );
    } 
}

//<Button color= "primary" onClick= {this.handlerToggleAlive(usr)}> {this.getAction(usr.alive)}</Button>

export default Table2;
