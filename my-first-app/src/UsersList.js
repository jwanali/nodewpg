import React,{Component} from 'react';

class UsersList extends Component {
    constructor(){
        super();
    } 
    render() {
        const { usersData,removeUser } = this.props;
        const Users = usersData.map((user,index) => {
            return (
                <ul key = {index} style = {{fontFamily : "arial",fontWeight:"bold"}}>
                    <li>client {index+1}</li>
               <li>name: {user.name.toUpperCase()}</li>
               <li>lastName: {user.lastName.toUpperCase()}</li>
               <li>password: {user.password}</li>
               <li>email: {user.email}</li>
               <li>birthDay: {user.birthday}</li>
               <li>country: {user.country.toUpperCase()}</li>
               <button onClick = {() =>removeUser(index)}>Remove</button>
                </ul>
            )
            })
      return (
          <div>{Users}</div>
      )
    }
}
  export default UsersList;