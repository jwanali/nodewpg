import React, { Component } from 'react';
import UsersList from './UsersList';
const regex = /^[a-z0-9]+$/i;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex =/^[a-z0-9]+$/i



class CreaeAcount extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            lastName: '',
            password: '',
            email:'',
            birthday: '',
            country:'',
            message:'',
            file :'',
            isValidEmail :true,
            isValidusername : true,
            isValidPassword: true,
        }
        this.state = this.initialState;
    }
    handleChange= event => {
        console.log(event.target.value);
        const {name,value} = event.target;
        if (name === 'name') {
            this.setState(()=>({isValidusername:true}))
        }
        if (name === 'password') {
            this.setState(()=>({isValidPassword:true}))
        }
        if (name === 'email') {
            this.setState(()=>({isValidEmail:true}))
        }
        this.setState({[name] : value})
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        let condition0 = false;
        let condition1 = false;
        let condition2 = false;
        if (regex.test(this.state.name)) {
            condition0 = true;
            this.setState(()=>({isValidusername:true}))
        } else {
            condition0 = false;
            this.setState(()=>({isValidusername:false}))
            
        }
        if (emailRegex.test(this.state.email)) {
            condition1 = true;
            this.setState(()=>({isValidEmail:true}))
        } else {
            condition1 = false;
            this.setState(()=>({isValidEmail:false}))
        }
        if (passwordRegex.test(this.state.password)) {
            condition2 = true;
            this.setState(()=>({isValidPassword:true}))
        } else {
            condition2 = false;
            this.setState(()=>({isValidPassword:false}))
        }
        if (condition0 && condition1 && condition2 ) {
            const users = this.props.state.users;
            let usedAcount1 = false;
            let usedAcount2 = false;
            for (let i = 0; i <= users.length-1;i++) {
                if (this.state.name === users[i].name) {
                    alert(`pleas change username`);
                    usedAcount1 = true;
                    break;
                }
                if (this.state.email === users[i].email) {
                    alert(`pleas change email address`);
                    usedAcount2 = true;
                    break;
                }
            }
            if (usedAcount2 || usedAcount1) {
                
            } else {
                alert (`Hello ${this.state.name} `)
                this.props.handleSubmit(this.state);
           
                this.setState(this.initialState);
            }
        }
    }
    render() {
        const {name,  message , file,lastName,password,email,birthday,country,isValidEmail,isValidPassword,isValidusername} = this.state;
       return(
            <form  className = "createAcount" >
                <label>Username
                <input type="text" name="name" value ={name} style= {{backgroundColor: isValidusername?"antiquewhite": "rgb(219, 120, 139)"}} onChange = {this.handleChange} placeholder="name" />
                </label>
                <label>Last name</label>
                <input type="text" name="lastName" value = {lastName} style={{backgroundColor:"antiquewhite"}} onChange = {this.handleChange}  placeholder="lastName" />
                <label>password</label>
                <input type="password" name="password" value = {password} style= {{backgroundColor: isValidPassword?"antiquewhite": "rgb(219, 120, 139)"}} onChange = {this.handleChange}  placeholder="password" />
                <label>Email</label>
                <input type="text" name="email" value = {email} style= {{backgroundColor: isValidEmail?"antiquewhite": "rgb(219, 120, 139)"}} onChange = {this.handleChange}   placeholder="email" />
                <label>Birthday</label>
                <input type="date" name="birthday" value = {birthday} style={{backgroundColor:"antiquewhite"}} onChange = {this.handleChange}  placeholder="birthday" />
                <label>Country</label>
                <select name="country" value= {country} style={{backgroundColor:"antiquewhite"}} onChange = {this.handleChange}  >
                   <option style={{backgroundColor:"antiquewhite"}}></option>
                   <option >Canada</option>
                   <option>Kurdistan</option>
                   <option >Argentina</option>
                   <option >India</option>
                   <option >Rusia</option>
                   <option >Germany</option>
                   <option >Syria</option>
                   <option >UK</option>
                   <option >France</option>
                   <option >Austria</option>
                   <option >Belgium</option>
                   <option >China</option>
                   <option >Egypt</option>
                   <option >USA</option>
               </select>
                <label for="">please tell us about yourself</label>
                <textarea name="message" type = "text" value = {message}  onChange = {this.handleChange} placeholder = "message" cols="30" rows="2"></textarea>
                <label for="">Attach a file</label>
                <input type="file"value= {file} name="file" id=""></input>
                <button type="button" value="Submit" onClick={this.onFormSubmit} >Register</button>
            </form>
        )
    }
}
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            usernameOrEmail: '',
            password: '',
            isValidUsernameOrEmail :true,
            isValidPassword: true,
            
        }
        this.state = this.initialState;
        
    }
    
    handleChange = (event) => {
        console.log(event.target.value);
        const {name,value} = event.target;
        this.setState({[name] : value,isValidPassword:true,isValidUsernameOrEmail:true})
    }
    
    submitHandler = (event) => {
        event.preventDefault();
         let condition0 = false;
         let condition1 = false;
         const usernameOrEmail = this.state.usernameOrEmail;
         const password = this.state.password;
         const users = this.props.state.users
         if (regex.test(usernameOrEmail) || emailRegex.test(usernameOrEmail) ) {
           this.setState(()=>({isValidUsernameOrEmail:true,usernameOrEmail:"", password: ""}))
            condition0 = true;
          } else { 
            this.setState(()=>({isValidUsernameOrEmail:false}))
            condition0 = false;
          }
          if (passwordRegex.test(password) ) {
            this.setState(()=>({isValidPassword:true,usernameOrEmail:"", password: ""}))
             condition1 = true;
           } else { 
             this.setState(()=>({isValidPassword:false}))
             condition1 = false;
           }
            let userAndPasswordMatched = false;
            let index =0 ;
            if (condition0 && condition1) {
                for(let i = 0 ; i <= users.length-1; i++) {
                    if (((this.state.usernameOrEmail === users[i].name) ||(this.state.usernameOrEmail === users[i].email)) &&(this.state.password === users[i].password)) {
                        userAndPasswordMatched = true;
                        index = i;
                        break;
                    } 
                }
            }
            if (userAndPasswordMatched) {
                alert (`Welcome ${users[index].name} you are logged in`);
            } else {
                alert('Please make sure to be registered before sign in');
            }
        }
    render() {
        const sendPasswordByEmail = (event) => {
            event.preventDefault();
             let condition = false;
             const usernameOrEmail = this.state.usernameOrEmail;
             const users = this.props.state.users;
             for(let i = 0 ; i <= users.length-1; i++) {
                 if ((users[i].name === usernameOrEmail) || (users[i].email === usernameOrEmail) ) {
                    condition = true;
                    alert(`a password had sent to email address ${users[i].email}`)
                 }
             }
             if (condition) {} else{
                 alert('please make sure that the emil or user name is correct')
             }
        }
        const {password,usernameOrEmail,isValidUsernameOrEmail,isValidPassword} = this.state; 
        const ForgetPass = function () {
            return (
                 <div>
                 <a className = "forgetPass" onClick = {sendPasswordByEmail} href = "index2.html">forget password</a>
                 </div>
                 )
             }
        return(
            <div>
                <form    className = "Login" id = "login">
                <input className = "usernameOrEmailClass" value={usernameOrEmail} style= {{backgroundColor:isValidUsernameOrEmail?"antiquewhite": "rgb(219, 120, 139)"}} name="usernameOrEmail" onChange={this.handleChange} placeholder = "username or email" type = "userid"></input>
                <input className = "passwordClass" value={password} style={{backgroundColor:isValidPassword?"antiquewhite": "rgb(219, 120, 139)"}} name = "password"onChange={this.handleChange} placeholder = "password" type = "password"></input>
                <button className = "SbmitUser"onClick = {this.submitHandler} state = {this.state}>sign in</button>
                </form>
               <ForgetPass />
            </div>
        )
    }
}
    
class Login extends Component {
         state = {
             users : [
                {
                    name: 'jwanali',
                    lastName: 'ali',
                    password: 'jwan1234',
                    email:'ciwan_ali@hotmail.com',
                    birthday: '10/01/1979',
                    country : 'Canada',
                    message : 'helle everyone',
                    file : 'file.pdf',
                },
                {
                    name: 'jwan123',
                    lastName: 'ali',
                    password: 'jwanali1',
                    email:'cana1979@gmail.com',
                    birthday: '10/01/1979',
                    country : 'Syria',
                    message : 'helle everyone',
                    file : 'file.pdf',
                }
             ],
             isClick: false,
         }  ;
     removeUser = index => {
         const {users} = this.state;
         this.setState({
             users : users.filter((user, i ) => {
                 return i !==index
             }),
         })
     }
     handleSubmit = user => {
         const {users} = this.state;
        
         this.setState({users: [...this.state.users, user]});
         console.log('hhh',users)
     }
     showFormHandler = ()=>{
        const clicked = this.state.isClick;
        this.setState({isClick :!clicked})  
        console.log(this.state.isClick,this.state)      
    }
     
    render() {
        const SignUp = user =>{
            return(
                    <fieldset>
                        <div>
                            <button onClick = {this.showFormHandler}  className = "creatAcount"  >{this.state.isClick?'hide':'sign up'}</button>
                            {this.state.isClick && <CreaeAcount  state={this.state} handleSubmit={this.handleSubmit} />}                  
                        </div>  
                    </fieldset>
            )
        }
      const  {users} = this.state
        return (
            <>
            <SignIn state = {this.state} />
            
            <SignUp state = {this.state} />
             <UsersList usersData = {users} removeUser ={this.removeUser} />
           
            </>
        )
    }
}
export default Login;