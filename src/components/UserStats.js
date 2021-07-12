import React from 'react';
import UserProfile from './UserProfile';
import UserPosts from './UserPosts';
import {Link, Route, withRouter} from 'react-router-dom';

const UserStats = (props) => {
    const {handleAuth, loggedIn} = props
 
    return (
        <div>
            {!loggedIn ? <Route to='/' /> : (
                <>
                <Link onClick={ () => {
                    localStorage.removeItem('id')
                    alert('Successfully logged out')
                    handleAuth()
                }} to='/'>Logout</Link>
                <UserProfile />
                <UserPosts /> 
            </> ) }
            
        </div>
    )
}


export default withRouter(UserStats);