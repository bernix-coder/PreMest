import React from 'react'
import image from '../images/image-mockups.png'
import '../styles/About.css'
function About() {
    return (
        <>
            <div className='container'>
                    <div className='row'>
                        
                    <div className='col-2 ' >
                            <img src={image} alt='mockup'/>
                            <p>Take your financial life online. 
Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</p>
                        </div>
                        <div className='col-2' >
                            <h1>Next generation digital banking</h1>
                            <p>Take your financial life online. 
Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</p>
                        
                        <button>Request Invite</button>
                        </div>

                    </div>
            </div>
        </>
    )
}

export default About
