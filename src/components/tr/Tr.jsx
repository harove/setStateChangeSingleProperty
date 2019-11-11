import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {users} from '../../utils/mock-data';

class Tr extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: users
        }
    }

    action = alive => alive? 'matar' : 'revivir';
    painting = user => user.alive? 'bg-success' : 'bg-danger';
    getAlive = a => a? 'SI' : 'NO';

    myHandleTogleAlive = (usr) => {
        return ( () => {
            this.state.users[usr.id-1].alive = !usr.alive
            this.setState(
                users,
            )
        })
    }
   
    render() {
        const {usr} = this.props;
        return(
            <tr className = {this.painting(usr)} key = {usr.id}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.age}</td>
                <td>{this.getAlive(usr.alive)}</td>
                <td>
                    <Button onClick = {this.myHandleTogleAlive(usr)} >  {this.action(usr.alive)} </Button>
                </td>
            </tr>
        )
    }
}
export default Tr;
