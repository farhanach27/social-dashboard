import React, {useState} from 'react';
import validator from 'validator';
import axios from 'axios';
import { withRouter} from 'react-router-dom';

const Login  = (props) => {
    
    const [ email, setEmail] = useState('')
    const [error, setError] = useState('')

    

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        if(!email){
            setError(`email can't be empty - please enter an email`)
        }else if(validator.isEmail(email)) {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then( (res) => {
                const users = res.data
                const selectedUser = users.find( (user) => {
                    return user.email === email
                })
                if(selectedUser.id){
                    localStorage.setItem('id',selectedUser.id)
                    props.history.push('/profile')
                    props.handleAuth()
                }
                
            })
            .catch( (err) => {
                if(err.message){
                    setError('record not found - enter valid email')
                }
            })
        } else {
            setError('invalid format- enter correct email ')
        }
    }

    const handleChange = (e) => {
            setEmail(e.target.value)
    }

    return (
        <div> 
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='enter email'
                    value={email}
                    onChange={handleChange} 
                /> <br/>

                <input type='submit' value='Login'/>
                {error  && <p style={{color:'red'}}>{error}</p> }           
            </form>
        </div>
    )
}

export default withRouter(Login);