import React, { useState } from 'react';
import styles from './todo.module.scss';
import { IoMdAddCircleOutline } from "react-icons/io";

const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className={styles.todoitems}>
            <p>{todo.text}</p>
            <div className={styles.line}></div>
            <button className={styles.delete} onClick={() => onDelete(todo.id)}>
                <span></span>
                <span></span>
            </button>
        </div>
    );
};

const TodoList = ({ todos, onDelete, onDeleteAll }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
            <div className={styles.deleteAll}>
            <button onClick={onDeleteAll}>
                Delete all TODOS
            </button>
            </div>
        </div>
    );
};

const AddTodoModal = ({ isOpen, onClose, onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
            onClose();
        }
    };

    return (
        <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}>
            <div className={styles.modalContent}>
                <input
                    type="text"
                    value={newTodo}
                    placeholder='Type todo'
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>
                    Add TODO
                </button>
            </div>
        </div>
    );
};

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const addTodo = (newTodo) => {
        const newTodoObject = {
            id: Date.now(),
            text: newTodo,
        };
        setTodos([...todos, newTodoObject]);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const deleteAllTodos = () => {
        setTodos([]);
    };

    return (
        <div className={styles.todo}>
            <div className={styles.header}>
                <h1>To do</h1>
            </div>
            <TodoList todos={todos} onDelete={deleteTodo} onDeleteAll={deleteAllTodos} />
            <div className={styles.addNew}>
                <button className={styles.addNewButton} onClick={() => setIsAddModalOpen(true)} >
                    <span><IoMdAddCircleOutline className={styles.icon} /></span>
                    Add New
                </button>
            </div>
            <AddTodoModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAddTodo={addTodo}
            />
        </div>
    );
};

export default Todo;