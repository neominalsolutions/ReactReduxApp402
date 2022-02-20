import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, ListGroup, Button } from 'react-bootstrap';
import { addTodo, deleteTodo, selectTodo } from '../store/actions/todos.action';

function Todos() {

    const todos = useSelector(state => state.todos);
    const selectedTodo = useSelector(state => state.selectedTodo);
    // useSelector ile state üzerinde bir değişen state bilgisine bağlanabiliriz.


    const dispatch = useDispatch();
    const inputRef = useRef()

    const newTodo = (event) => {

        event.preventDefault();

        const todo = {
            id: Math.random() * 10000,
            title: inputRef.current.value,
            completed: false
        }

        dispatch(addTodo(todo));

    }

    const deleteItem = (id) => {
        dispatch(deleteTodo(id));
        dispatch(selectTodo(-1)); // 2.bir action ile seçimi kalıdır.
    }

    const selectItem = (id) => {
        dispatch(selectTodo(id));
    }

    return (
        <div>



            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control ref={inputRef} type="text" placeholder="Enter Todo Item" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={newTodo}>
                    Submit
                </Button>
            </Form>

            <br></br>

            <ListGroup >

                {/* seçili bir item varsa ve bu seçili item id ile item id eşleşiyorsa demek ben seç butonuna tıklamışım. seç butonuna tıkladığım item'ın arka plan engini aktife aldım. */}
                {
                    todos.map((item, index) => {



                        return <ListGroup.Item className={selectedTodo && selectedTodo.id == item.id ? 'active' : ''} key={index}>{item.title}

                            <Button variant="warning" onClick={() => selectItem(item.id)}>Select</Button>
                            <Button variant="danger" onClick={() => deleteItem(item.id)}>Sil</Button>

                        </ListGroup.Item>

                    })
                }

            </ListGroup>


        </div>
    )
}

export default Todos