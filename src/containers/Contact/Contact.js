import React, { Component } from "react";
import Media from '../../components/Media/Media';

class Contact extends Component{
    render(){
        return(
            <div>
                <div>Contact</div>
                <form>
                    <input type="Text" placeholder="Name"/>
                    <input type="email" placeholder="e-mail"/>
                    <input type="Text" placeholder="Message"/>
                    <input type="submit" value="SUBMIT"/>
                </form>
                <Media/>
            </div>

        )
    }
}

export default Contact;