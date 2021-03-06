import React from 'react'
import '../styles/ChooseUs.css'
import api from '../images/icon-api.svg'
import online from '../images/icon-online.svg'
import board from '../images/icon-onboarding.svg'
import budget from '../images/icon-budgeting.svg'
function ChooseUs() {
    return (
        <>
           <div className='container'>
                <div className='text'>
                    <h2> Why choose Easybank?</h2>
                    <p> We leverage Open Banking to turn your bank account into your financial hub. <br/>Control 
 your finances like never before.

             </p>
                </div>

                <div className='row'>
                    <div className='col-4'>
                            <img src={online} alt='online_banking'/>
                            <h4>Online Banking</h4>
                            <p> Our modern web and mobile applications allow you to keep track of your finances 
 
 wherever you are in the world.</p>
                    </div>


                    <div className='col-4'>
                            <img src={budget} alt='simple'/>
                            <h4>Simple Budgeting</h4>
                           <p>See exactly where your money goes each month. Receive notifications when you’re 
  
  close to hitting your limits.
  
   </p>
                    </div>


                    <div className='col-4'>
                            <img src={board} alt='boarding'/>
                            <h4>Fast Onboarding</h4>
                           <p> We don’t do branches. Open your account in minutes online and start taking control 
 
 of your finances right away.</p>
                    </div>

                    
                    <div className='col-4'>
                            <img src={api} alt='api'/>
                            <h4>Open API</h4>
                           <p> Manage your savings, investments, pension, and much more from one account. Tracking 
  y
our money has never been easier</p>
                    </div>
                </div>
        
        </div> 
        </>
    )
}

export default ChooseUs
