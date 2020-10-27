import React from 'react';
import Paragraph from '../atoms/p';

const Header = (props) => {    
    return (
        <>
        <h5 style={{ textDecoration: "Underline" }}>            
            <Paragraph value={props.title} Text={props.text}/>     
        </h5>
        </>
    )        
}

export default Header;