import React from 'react';

import './ToDoBlock.scss';

export const ToDoBlock = ({children}) => {
    return (
        <div className='block'>
            {children}
        </div>
    )
}