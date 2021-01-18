import React from 'react';
import Auxi from '../../../../hoc/Auxi';

const softSkill = (props) => {
  return (
    <Auxi>
      <div>
        <img src={props.imgSrc} alt={props.imgAlt}/>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      </Auxi>
  );
};

export default softSkill;
