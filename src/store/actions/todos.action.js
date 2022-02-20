
// payload : todo

import axios from "axios";

/* sample payload

{
    id:1,
    title:'deneme1',
    completed:false

}

*/


// asenkron olarak redux üzerinde çalışma şekli
// thunk middleware sayesinde araya girip apiden veri çektik.
export const fetchTodo = () => async dispatch => {

    let response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log('response', response);

    dispatch({ type: 'FETCH_TODO', payload: { data: response.data } })

}




// payload action üzerinden gönderilen değer.
// senkron olarak redux üzerinde çalışma
export function addTodo(todo = {}) {

    console.log('addTodoAction', todo);

    return {
        type: 'ADD_TODO', // action_type
        payload: { data: todo } // bu actiondan taşınacak değer. payload
    }
}


export function deleteTodo(id) {

    return {
        type: 'DELETE_TODO',
        payload: { id }
    }
}


export function selectTodo(id) {

    return {
        type: 'SELECT_TODO',
        payload: { id }
    }
}


