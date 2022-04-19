import React from 'react';

import {del} from '../../assets/icon/index';

import './ToDoItem.scss';

export const ToDoItem = ({ checked = false, title, submit, deleteToDo, enterEdit, editS }) => {
    return (
        <div className="item">
            <div className="info">
                <input type="checkbox" defaultChecked={checked} onClick={submit} value={title} />
                <label className="label">{title}</label>
                <from className={`edit ${editS}`}>
                    <input className="editToDo" placeholder='Edit new To Do' />
                    <button className="subButton" type='submit' onClick={enterEdit}>Edit</button>
                </from>
            </div>
            <div className="iconBlock">
                <img className='icon' src={del} alt={title} onClick={deleteToDo} />
            </div>
        </div>
    )
}