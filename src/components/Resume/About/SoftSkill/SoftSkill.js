import React from 'react';

const softSkill = (props) => {
  return (
    <>
      <div>
        <img src={props.imgSrc} alt={props.imgAlt}/>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      </>
  );
};

export default softSkill;
