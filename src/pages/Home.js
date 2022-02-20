import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { myStore } from '../store/mystore';

function Home() {

    // const select = useSelector(); // todoState ismindeki state dinle


    const todos = useSelector((state) => state.todos); // store da değişen state bağlan.

    console.log('todos', todos);


    const states = myStore.getState(); // getState function ile store daki statelerimizi yakalayabiliriz.
    console.log('store-states', states);

    // useEffect(() => {
    //     console.log('todoState', select.todos);
    // })


    return (
        <>
            <Link to="/about">About</Link>
            <ul>
                {
                    todos.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>

            <div>Home</div>
        </>
    )
}

export default Home