import React,{ Component } from "react";
import Auxi from '../../hoc/Auxi';
import SoftSkill from '../../components/SoftSkill/SoftSkill';
import Skill from '../../components/Skill/Skill';
import Me from '../../assets/images/me.png';

class About extends Component{
    render(){
        return(
            <Auxi>
                <SoftSkill imgSrc="" imgAlt=""
                                 title="Dynamic"
                                 desc="soy muy dinamico"/>
                <img src={Me} alt="me"/>

                <Skill skill="JavaScript" percentage="100%"/>
            </Auxi>
        )
    }
}

export default About;