import React from 'react';
import { Link, Route } from 'react-router-dom';
import './RegistrationPg.css';
import { Button, Container, Form} from 'reactstrap';


class Registration extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            name: "",
            emailError: "",
            passwordError: "",
            nameError: ""
        };
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    
    handleSubmit(){
        const validEmailRegex =  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if(this.state.email.includes(RegExp)|| this.state.password.length<3|| this.state.name.length<5){
            this.setState({nameError:"full name should be greater than 5 characters"})
            this.setState({emailError: "invalid email"})
            this.setState({passwordError: "password should be greater then 3 letters"})
            
        }
        else{
            alert("Successfully registered!")
        }

    }

    render(){
        return(
            <div>
                 
            <div className= "Regcontainer">                
                <Container>
                <form className= "RegistrationPg" onSubmit= {this.handleSubmit}>
                <h2 style={{color: "black"}}>Create a new Account</h2>
                <Form.Group>
                    <input type= "text" 
                           name= "name" 
                           placeholder= "Enter your full name" 
                           onChange= {(event)=>{this.setState({name:event.target.value})}}/>
                           <p style={{color: "red"}}>{this.state.nameError}</p>
                
                    <input type= "email" 
                           name= "email" 
                           placeholder= "Enter your Email"  
                           onChange= {(event)=> {this.setState({email: event.target.value})}}/>
                           <p style={{color: "red"}}>{this.state.emailError}</p>
                    
                    <input type= "password" 
                           name= "password" 
                           placeholder= "Enter password" 
                           onChange= {(event)=>{this.setState({password: event.target.value})}}/>
                           <p style={{color: "red"}}>{this.state.emailError}</p>
                  
                    <Button variant="success" className= "btn-lg btn-block" type= "submit" 
                    onClick={this.handleSubmit}>Create</Button>
                    <small>or</small>
                    <Link to= "./loginPg">
                    <Button variant="primary" className= "btn-lg btn-block">Login</Button>
                    </Link>
                    </Form.Group>
                </form>
          
                </Container>
            </div>
            </div>
        );
    }
}
export default Registration;