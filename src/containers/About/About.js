import React,{ Component } from "react";
import SoftSkills from '../../components/About/SoftSkills/SoftSkills';
// import Skill from '../../components/Resume/About/Skill/Skill';
// import Me from '../../assets/images/me.png';

class About extends Component{
    render(){
        return(
            <>
                <SoftSkills imgSrc="" imgAlt=""
                                 title="Dynamic"
                                 desc="soy muy dinamico"/>
                {/* <img src={Me} alt="me"/>

                <Skill skill="JavaScript" percentage="100%"/> */}
            </>
        )
    }
}

export default About;