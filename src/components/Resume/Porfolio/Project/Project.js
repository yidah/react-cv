import React from 'react';
import Auxi from '../../../../hoc/Auxi';

const project = (props)=>{
    return(
        <Auxi>
        <div>
          <img src={props.imgSrc} alt={props.imgAlt}/>
        </div>
        <div>
          <h2>{props.project}</h2>
          <a href={props.codeHref}>View Code</a>
          <p>{props.desc}</p>
        </div>
        </Auxi>
    )
}

export default project;