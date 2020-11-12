<<<<<<< HEAD
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

=======
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

>>>>>>> 34f7e42a4f7cdcb437a0b57a81e72a1fdc6b8e67
export default Header;