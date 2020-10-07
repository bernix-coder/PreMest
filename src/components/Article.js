import React from 'react'
import money from '../images/image-currency.jpg'
import rest from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import con from '../images/image-confetti.jpg'
import '../styles/Article.css'
function Article() {
    return (
        <>
           <div className='container'>
               <h3>Latest Article</h3>
                <div className='row'>
                    <div className='col-4'>
                        <img src={money} alt='dollar'/>
                        <small>By Bella Adjei</small>
                        <h4> Receive money in any currency with no fees</h4>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single … </p>
                    </div>

                    <div className='col-4'>
                        <img src={rest} alt='dollar'/>
                        <small>By Wilson Hutton</small>
                        <h4> Treat yourself without worrying about money </h4>
                        <p> Our simple budgeting feature allows you to separate out your spending and set 
 
 realistic limits each month. That means you …

 </p>
                    </div>

                    <div className='col-4'>
                        <img src={plane} alt='dollar'/>
                        <small>
 By Claire Robinson</small>
                        <h4> Take your Easybank card wherever you go</h4>
                        <p> We want you to enjoy your travels. 
This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …

 
 </p>
                    </div>

                    <div className='col-4'>
                        <img src={con} alt='dollar'/>
                        <small>Rita Yawson</small>
                        <h4> Our invite-only Beta accounts are now live!</h4>
                        <p> After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...

   </p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Article
