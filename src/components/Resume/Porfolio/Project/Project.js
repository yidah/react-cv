import React from 'react';

const project = (props)=>{
    return(
        <>
        <div>
          <img src={props.imgSrc} alt={props.imgAlt}/>
        </div>
        <div>
          <h2>{props.project}</h2>
          <a href={props.codeHref}>View Code</a>
          <p>{props.desc}</p>
        </div>
        </>
    )
}

export default project;