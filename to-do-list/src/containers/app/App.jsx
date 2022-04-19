import React, {useState} from 'react';

import data from '../../assets/mock/toDoList.json';

import {ToDoBlock} from '../../components/toDoBlock/ToDoBlock';
import {ToDoItem} from '../../components/toDoItem/ToDoItem'

import './App.scss';

export const App = () => {
    const [list, setList] = useState(data);
    const [input, setInput] = useState('');
    const [update, setUpdate] = useState(false);
    const [edit, setEdit] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const completedToDo = (event) => {
        const index = list.findIndex(el => el.title === event.target.value);
        list[index].completed = !list[index].completed;
        setUpdate(!update);
    }

    const deleteToDo = (event) => {
        const index = list.findIndex(el => el.title === event.target.alt);
        const newToDo = list.filter((el, i) => i!== index);
        setList(newToDo);
    }

    const enterEdit = () => {
        setEdit('');
    }

    const addToDo = (event) => {
        event.preventDefault();
        let copy = [...list];
        copy = [...copy, { id: list.length + 1, title: input, completed: false }];
        if (input !== '') setList(copy);
        setInput('');
    }

    return (
        <div className='wrapper'>
            <ToDoBlock>
                <span className='title'>Not complete todo</span>
                {list.map((item) => !item.completed ? (
                    <ToDoItem key={item.id} title={item.title} submit={completedToDo} deleteToDo={deleteToDo} enterEdit={enterEdit} editS={edit} />
                ) : null)}
            </ToDoBlock>
            <ToDoBlock>
                <span className='title'>New todo</span>
                <from className='from' onChange={handleChange}>
                    <input className='newToDo' value={input} placeholder='Enter new To Do' />
                    <button className='subButton' type='submit' onClick={addToDo}>Add</button>
                </from>
            </ToDoBlock>
            <ToDoBlock>
                <span className='title'>Complete todo</span>
                {list.map((item) => item.completed ? (
                    <ToDoItem key={item.id} checked={true} title={item.title} submit={completedToDo} deleteToDo={deleteToDo} />
                ) : null)}
            </ToDoBlock>
        </div>
    );
}