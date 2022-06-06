import React,{useState} from 'react';

import style from './newtodo.module.css'



const NewTodo = (props) => {

    const [todo, setTodo] = useState({title:" ", desc:" "});
    const {title, desc} = todo;

    const onChangeHandler = (event) => {
        const name = event.target.name;
        setTodo ((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: "", desc: ""});
        
        
    }


  return <form className={style.form} onSubmit = {handleSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor='title'>Title: </label>
                <input type="text" name='title' id='title' value={title} onChange={onChangeHandler}></input>
            </div>
            <div className={style["form-field"]}>
                <label htmlFor='desc'>Description: </label>
                <textarea type="text" name='desc' id='desc' value={desc} onChange={onChangeHandler}></textarea>
            </div>
            <button className={style.button} type="submit">Add Todo</button>
        </form>
}

export default NewTodo