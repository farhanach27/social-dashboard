import axios from 'axios';
import React,{useEffect, useState} from 'react';


const UserProfile = (props) => {
    const [user, setUser] = useState({})
 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('id')}`)
            .then((res) =>{
                const data = res.data
                setUser(data)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])

    return (
        <div className='row'>
            <div className='container-md-6'>
                <h2>{user.name}</h2>
                <p><b>email</b> - {user.email} </p>
                <p><b>phone</b> - {user.phone} </p>
            </div>
            {user.company && 
            <div className='container-md-6'>
                <h2>Company</h2>
                <p><b>Name</b> - {user.company.name} </p>
                <p><b>CatchPhrase</b> - {user.company.catchPhrase} </p>
                </div>
            }
        </div>
    )
}

export default UserProfile;