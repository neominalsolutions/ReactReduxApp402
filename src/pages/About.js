import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addTodo } from '../store/actions/todos.action';

function About() {

    const dispatch = useDispatch(); // reducer tetiklemek için useDispatch kullandık
    // useDispacth ile state değişikliğinde bulun dedik.


    const inputChange = (event) => {
        // burada reducera todos dizisini güncellemek için işlemde bulunduk
        //dispatch({ type: 'ADD_TODO', payload: event.target.value }); // direkt olarak reducer'a istek atar

        dispatch(addTodo(event.target.value)); // action üzerinden reducer'a istek atar.
        // bu alttaki şekilde kullanmayı alışkanlık edinelim.
    }


    return (
        <div>
            <Link to="/home">Home Page</Link>
            <input onChange={inputChange} placeholder="todo name" />

        </div>
    )
}

export default About