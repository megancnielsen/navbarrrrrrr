import React from 'react';

export interface FormProps {
    name: string;

}

export const FormComp: React.FC<FormProps> = () => {
    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default FormComp;