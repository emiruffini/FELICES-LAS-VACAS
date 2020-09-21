import React, { useState } from 'react'
import { connect } from "react-redux"
import usuarioActions from '../redux/actions/usuarioActions'

const Registro = (props) => {
    
    const [newUser, setNewUser] = useState({
        name: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        urlpic: '',
        // logWithGoogle: false,
    })

    const readInput = e => {
        const value = e.target.value
        //const value = e.target.name === "urlpic" ? e.target.files[0] : e.target.value
        setNewUser({
            ...newUser,
            [e.target.name]: value
        })
    }

    const sendInfo = async e => {
        e.preventDefault()
        if (newUser.username === '' || newUser.password === '' || newUser.name === '' || newUser.lastname === '' || newUser.email === '') {
            alert('error un campo requerido está vacío')
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error!',
            //     text: 'All camps are required, please take a look again',
            // })
        } else {

            // const fd = new FormData()
            // fd.append("name", newUser.name)
            // fd.append("lastname", newUser.lastname)
            // fd.append("username", newUser.username)
            // fd.append("password", newUser.password)
            // fd.append("email", newUser.email)
            // fd.append("urlpic", newUser.urlpic)
            // fd.append("logWithGoogle", newUser.logWithGoogle)
            // fd.append("firstTime", newUser.firstTime)
            // fd.append("favConsole", newUser.favConsole)

            await props.createAccount(newUser)
        }
    }
 
    // const responseGoogle = (response) => {
    //     props.createAccountGoogle({
    //         name: response.profileObj.givenName,
    //         lastname: response.profileObj.familyName,
    //         username: response.profileObj.email,
    //         password: response.profileObj.googleId,
    //         email: response.profileObj.email,
    //         urlpic: response.profileObj.imageUrl,
    //         logWithGoogle: true,
    //     })
    // }

    return (
        <>
            <div >
                <div style={{
                    backgroundImage:'url(https://cdn.vox-cdn.com/thumbor/huKShwndQtYTHqv9DutaVj_WLcw=/cdn.vox-cdn.com/uploads/chorus_asset/file/4231919/apple-imac-0130.0.0.jpg)',
                    backgroundRepeat:'no-reapeat',
                    backgroundSize:'cover',
                    backgroundPositionY:'90%',
                    padding: '20vh 0vh'
                    }}>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <h1 className="text-center responsiveText">Create new account</h1>
                    <label>Name</label>
                    <input style={{
                        borderRadius: '3vw'
                    }} type='text' name='name' placeholder='Type your name'
                        onChange={readInput} />
                    <label>Lastname</label>
                    <input style={{
                        borderRadius: '3vw'
                    }} type='text' name='lastname' placeholder='Type your lastname'
                        onChange={readInput} />
                    <label >Username</label>
                    <input style={{
                        borderRadius: '3vw'
                    }} type='text' name='username' placeholder='Choose your username (Min 5 characters)'
                        onChange={readInput} />
                    <label>Password</label>
                    <input style={{
                        borderRadius: '3vw'
                    }} type='password' name='password' placeholder='Choose your password (Min 5 characters)'
                        onChange={readInput} />
                    <label>Email</label>
                    <input style={{
                        borderRadius: '3vw'
                    }} type='text' name='email' placeholder='Type an email correct'
                        onChange={readInput} />
                    {/* <label htmlFor="urlpic">Select your profile pic</label>
                    <input style={{
                        borderRadius: '3vw'
                    }} type='file' name='urlpic' id="urlpic"
                        onChange={readInput} /> */}

                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    createAccount: usuarioActions.createAccount,
    // createAccountGoogle: usersActions.createAccountGoogle,
}

export default connect(null, mapDispatchToProps)(Registro)