import React from 'react'
import { useState } from 'react'
import { Checkbox } from './Checkbox';

function ToDoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('')
    const addItems = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue])
            setInputValue('');
        }
    }

    const removeItem = (index) => {
        const newArray = [...items];
        newArray.splice(index, 1);
        setItems(newArray);
    }
    return (
        <>
            <h1>
                Lista de Tarefas
            </h1>
            <div>
                <input type="text"
                    placeholder='Adicione uma tarefa'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
            </div>
            <button onClick={addItems}>Adicionar Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <Checkbox
                            onClick={() => onChangeBox(item)}
                            defaultChecked={item.done}
                        />
                        <button onClick={() => editaItem(index)}>Editar</button>
                        <button onClick={() => removeItem(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDoList;