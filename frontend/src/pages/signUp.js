
import Header from '../components/Header'
import React from 'react'
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import Swal from 'sweetalert2'
import GoogleLogin from 'react-google-login';
import Footer from '../components/Footer'
import LogIn from './LogIn'
import '../styles/account.css'
/* import'../styles/logs.css' */


class SignUp extends React.Component{
    
    state={
        newUser:{
            username:"",
            password:"",
            name:"",
            surname:"",
            mail:"",
            passwordValidation: "",
            role:"",
            loginGoogle:"false"
        },
        errors:{
            username:"",
            password:"",
            name:"",
            surname:"",
            mail:"",
            passwordValidation: ""
        } 
    }
    
    getForm = async e =>{
        const property = e.target.name
        const value = e.target.value
        await this.setState({
            newUser:{
                ...this.state.newUser,
                [property]: value
            }
        })
   
    }
    submit = async e =>{
        
        const errors = this.state.errors
        
        const validEmailRegex = RegExp( 	
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const validPassword = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/)

        errors.username =
            this.state.newUser.username.length < 2
            ? "The username must be at least 2 characters long! "
            : ""
        errors.passwordValidation =
            this.state.newUser.password !== this.state.newUser.passwordValidation
            ? "The entered passwords do not match"
            : ""
        errors.password = 
            validPassword.test(this.state.newUser.password)
            ?""
            :"Password must be at least 6 characters, and must include one upper case letter, one lower case letter, and one numeric digit"
        errors.name =
            this.state.newUser.name.length < 2
            ? "The name must be 2 at least characters long! "
            : ""
        errors.surname =
            this.state.newUser.surname.length < 2
            ? "The surname must be at least 2 characters long! "
            : ""
        errors.mail = 
            validEmailRegex.test(this.state.newUser.mail)
            ? ""
            : "Enter a valid email"
        
        this.setState({
            errors
        })
        if (this.state.errors.username === "" && this.state.errors.passwordValidation === "" && this.state.errors.password === "" && this.state.errors.name=== "" && this.state.errors.surname=== "" && this.state.errors.mail=== "" ){
             const response = await this.props.createAccount(this.state.newUser)
            
             if (response.success === true){
               
                
                
            }else{
                if (response.username !== ""){
                    this.setState({
                        errors:{
                            ...this.state.errors,
                            username:response.username
                        } 
                    })
                }
                if (response.mail !== ""){
                    this.setState({
                        errors:{
                            ...this.state.errors,
                            mail:response.mail
                        } 
                    })
                }
            }
             
        }
        
        
        //
    }
    
    responseGoogle = async (response) =>{

        this.setState({
            ...this.state,
            newUser:{
                username:response.profileObj.email,
                password:response.profileObj.googleId+response.profileObj.familyName.replace(/ /g, "")+response.profileObj.familyName.trim().charAt(0).toUpperCase() + response.profileObj.familyName.trim().charAt(0).toLowerCase(),
                name:response.profileObj.givenName,
                surname:response.profileObj.familyName.trim(),
                mail: response.profileObj.email,
                passwordValidation:response.profileObj.googleId+response.profileObj.familyName.replace(/ /g, "")+response.profileObj.familyName.trim().charAt(0).toUpperCase() + response.profileObj.familyName.trim().charAt(0).toLowerCase(),
                loginGoogle: true
                
            }
        })
        const res = await this.props.createAccount(this.state.newUser)
       
        if (res.success === true){   
            
        }else{
            if (res.username !== ""){
                Swal.fire({  title: 'Please sign into your account!',  text: `You are already register with this Google account`,  icon: 'warning',  showConfirmButton: false, timer: 3000,allowOutsideClick: false})
            }
            
        }
    }

    
    render(){

        return (
            <>
            <Header />
            <h3 className="titleHouses">CREA UNA CUENTA</h3>
            
            <div className="signContainer">
                <div className="inputs">
                    <span className={this.state.errors.mail === "" ? "" : "logError"}>{this.state.errors.mail}</span>
                    <input className="mail" type="mail" placeholder="Email" name="mail" autocomplete="off" onChange={this.getForm} />
                    
                    <span className={this.state.errors.username === "" ? "" : "logError"}>{this.state.errors.username}</span>
                    <input className="account" type="text" placeholder="Nombre de usuario" name="username" autocomplete="off" onChange={this.getForm} />
                    
                    <span className={this.state.errors.password === "" ? "" : "logError"}>{this.state.errors.password}</span>
                    <input className="password" type="password" placeholder="Contraseña" name="password" autocomplete="off" onChange={this.getForm} />
                    
                    <span className={this.state.errors.passwordValidation === "" ? "" : "logError"}>{this.state.errors.passwordValidation}</span>
                    <input className="passwordCheck" type="password" placeholder="Por favor, repita su contraseña" name="passwordValidation" autocomplete="off" onChange={this.getForm}  />
                    
                    <span className={this.state.errors.name === "" ? "" : "logError"}>{this.state.errors.name}</span>
                    <input className="name" type="text" placeholder="Nombre completo" name="name" autocomplete="off" onChange={this.getForm}  />
                    
                    <span className={this.state.errors.surname === "" ? "" : "logError"}>{this.state.errors.surname}</span>
                    <input className="surname" type="text" placeholder="Apellido/s" name="surname" autocomplete="off" onChange={this.getForm} />
                </div>
                <button className="send" onClick={this.submit}><span>Crear cuenta </span></button>
                <p className="or">O</p>
                <GoogleLogin
                    className="googleBtn"
                    clientId="410495293057-2vf4ipg2vojn0pdvjg2p4pc8269vcbbq.apps.googleusercontent.com"
                    buttonText="Create account with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            
            <Footer/>

            </>
        )
    }
}

const mapDispatchToProps = {
    createAccount: usersActions.createUser
}

const mapStateToProps = (state) =>{
    return{
        userLog: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)