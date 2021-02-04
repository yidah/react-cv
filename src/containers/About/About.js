import React,{ Component } from "react";
import SoftSkill from '../../components/Resume/About/SoftSkill/SoftSkill';
// import Skill from '../../components/Resume/About/Skill/Skill';
// import Me from '../../assets/images/me.png';

class About extends Component{
    render(){
        return(
            <>
                <SoftSkill imgSrc="" imgAlt=""
                                 title="Dynamic"
                                 desc="soy muy dinamico"/>
                {/* <img src={Me} alt="me"/>

                <Skill skill="JavaScript" percentage="100%"/> */}
            </>
        )
    }
}

export default About;