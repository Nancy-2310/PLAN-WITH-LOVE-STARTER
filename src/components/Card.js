import React, { useState } from 'react';
function Card({id ,name , info ,image  ,price,removeTour} ){
    const[readmore,setReadmore]=useState(false);
    const description=readmore ? info :`${info.substring(0,100)}...`; 
    
    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt='not found'></img>
            <div className="tourinfo">
                <h4 className="tourprice">₹ {price}</h4>
                <h4 className="tourname">{name}</h4>
            </div>
            <div className="description">
                {description} 
                <span className="readmore" onClick={readmoreHandler}>
                    {readmore ? 'Show less':'Read more'}
                </span>
            </div>
            <button className='btnred' onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    )
}
export default Card;