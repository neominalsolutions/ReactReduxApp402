
// payload : todo

/* sample payload

{
    id:1,
    title:'deneme1',
    completed:false

}

*/


export function addTodo(payload) {

    return {
        type: 'ADD_TODO',
        payload
    }
}


export function deleteTodo(id) {

    return {
        type: 'DELETE_TODO',
        payload: id
    }
}


