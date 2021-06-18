import React from 'react'

const UserList = ({user,users}) => {
    return (
        <div>
            {
                users && users.map(user=>{
                    return(
                        <div className='user_container' key={users.id}>
                            <h2 className='user_name'>{user.name}</h2>
                            <div className='user_information'>
                                <p className='name'><span className='title'>Name:</span>{user.name}</p>
                                <p className='username'><span className='title'>username:</span>{user.username}</p>
                                <p className='email'><span className='title'>Email:</span>{user.email}</p>
                                <p className='street'><span className='title'>Street:</span>{user.street}</p>
                                <p className='city'><span className='title'>City:</span>{user.city}</p>
                                <p className='phone'><span className='title'>Phone:</span>{user.phone}</p>
                                <p className='website'><span className='title'>website:</span>{user.website}</p>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default UserList
