import React from 'react'
import blogImg from '../assets/Blog-post/blog1.png'
import '../styles/Category.css'
function Category() {
    return (
       
        
                <div className='row'>

                    <div className='col-2'>
                            <h1>
                                Welcome to Bernix Blogging site
                    
                            </h1>

                            <p>Success isn't always about greatness. It's about consistency.
                    Consistent hard work gains success. Greatness will come  </p>
              
                    </div>

                    <div className='col-2'>
                            <img src={blogImg}/>
                    </div>

                    
                    
                </div>

  
  
    )
}

export default Category
