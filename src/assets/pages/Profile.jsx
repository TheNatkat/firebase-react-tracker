import React from 'react'

const Profile = ({setPage}) => {

    const handleSubmit = () => {
        setPage('home');
    }

  return (
     <div className="home">
            <div className="main-box">
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        placeholder="Profile Photo URL"
                    />
                    <button>Edit</button>
                </form>
            </div>
        </div>
  )
}

export default Profile