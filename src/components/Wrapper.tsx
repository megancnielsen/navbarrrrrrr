import React, { useState } from 'react';
import NavbarComp from './Navbar';
import FormWrapperComp from './FormWrapper';
import MyContext from '../Context';

const Wrapper: React.FC = (props) => {
    const [fuckState, setFuckingState] = useState(null)
    return (
        <MyContext.Provider value="test">
        <div style={{width: "100%", marginLeft: "45%"}}>
            {props.children}
        </div>
        </MyContext.Provider>
    )
}

export default Wrapper;