import React, {Component} from 'react';
import {users} from '../../utils/mock-data';
import {Button, Table as TableRS} from 'reactstrap'

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: users
        };
    };

    getAlive = a => a? 'SI' : 'NO';
    action = alive => alive? 'matar' : 'revivir';
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

    myHandleTogleAlive = (usr) => {
        return ( () => {
            this.state.users[usr.id-1].alive = !usr.alive
            this.setState(
                users,
            )
        })
    }

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
                        <tr className = {this.painting(usr)} key = {usr.id}>
                            <td>{usr.id}</td>
                            <td>{usr.name}</td>
                            <td>{usr.age}</td>
                            <td>{this.getAlive(usr.alive)}</td>
                            <td>
                                <Button onClick = {this.myHandleTogleAlive(usr)} >  {this.action(usr.alive)}    </Button>
                            </td>
                        </tr>
                        )
                        )}
                </tbody>
            </TableRS>
        );
    } 
}

//<Button color= "primary" onClick= {this.handlerToggleAlive(usr)}> {this.getAction(usr.alive)}</Button>

export default Table;
