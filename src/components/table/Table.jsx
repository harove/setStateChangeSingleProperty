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
    getAction = a => a? 'matar' : 'revivir';

    handlerToggleAlive = (user) => {
        const u = this.state.users.findIndex(e => e.id === user.id)
        return (event) => {
            const nL = this.state.users[u];
            nL.alive = !nL.alive;
            console.log(event.target, user);
            // this.setState ({
            //     users,
            // })
        }
    }

    render(){
        return(
            <TableRS>
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
                        <tr key = {usr.id}>
                            <td>{usr.id}</td>
                            <td>{usr.name}</td>
                            <td>{usr.age}</td>
                            <td>{this.getAlive(usr.alive)}</td>
                            <td>
                                <Button onClick= {this.handlerToggleAlive(usr)}> {this.getAction(usr.alive)}</Button>
                            </td>
                        </tr>
                        )
                        )}
                </tbody>
            </TableRS>
        );
    } 


}

export default Table;
