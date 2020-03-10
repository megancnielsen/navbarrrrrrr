import React from 'react';
import MyContext from '../Context';

export interface NavbarProps {
}

export const NavbarComp: React.FC<NavbarProps> = () => {
    return (
        <MyContext.Consumer >
            { variableName => (
                <div>
                    <h1>
                        { variableName }
                    </h1>
                </div>
            ) }
        </MyContext.Consumer>
    )
}

export default NavbarComp;