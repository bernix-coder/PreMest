import React from 'react'

function Forms() {
    return (
        <>
           <div className='container'> 
            <h2>Sign Up and stand a chance of winning</h2>
                <div>
                    <label>Name:</label><br></br>
                    <input type='text' placeholder='Enter your name'/>
                </div>

                <div>
                    <label>Email:</label><br></br>
                    <input type='email' placeholder='Enter your email'/>
                </div>

                <div>
                    <label>Phone Number:</label><br></br>
                    <input type='tel' placeholder='Enter your contact number'/>
                </div>

                <div>
                    <label>Password:</label><br></br>
                    <input type='password' placeholder='Enter your password'/>
                </div>

                <div>
                    <label>Confirm Password:</label><br></br>
                    <input type='text' placeholder='Confirm Password'/>
                </div>

                <button>Sign Up</button>

            </div>  
        </>
    )
}

export default Forms
