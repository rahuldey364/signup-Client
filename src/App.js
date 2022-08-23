import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class App extends Component{
    constructor(){
        super()
        this.state={
            fullName : "",
            userName: "",
            email:"",
            password:""
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName: event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            userName: event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const registered = {
            fullName:this.state.fullName,
            userName : this.state.userName,
            email:this.state.email,
            password:this.state.password
        }
        axios.post("https://signup-application.herokuapp.com/signUp", registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName : "",
            userName: "",
            email:"",
            password:""
        })
    }
    render(){
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text' placeholder='full name' onChange={this.changeFullName} value ={this.state.fullName} className = 'form-control ferm-group my-3' />
                            <input type='text' placeholder='user name' onChange={this.changeUserName} value ={this.state.userName} className = 'form-control form-group my-3' />
                            <input type='text' placeholder='email' onChange={this.changeEmail} value ={this.state.email} className = 'form-control form-group my-3' />
                            <input type='text' placeholder='password' onChange={this.changePassword} value ={this.state.password} className = 'form-control form-group my-3' />
                            <input type='submit' className='btn btn-danger btn-lg btn-block my-3' value ='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App