import React from 'react';

const skill = (props)=>{
    return(
        <div>
            <p>{props.skill}</p>
            <p>{props.percentage}</p>
        </div>
    )
}

export default skill;