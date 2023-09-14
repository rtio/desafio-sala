import React, { useState } from 'react';

function ToDoList() {
    const [tarefas, useTarefas] = useState([]);
    const [tarefaText, setTarefaText] = useState('');

    const addTarefa = () => {
        if (tarefaText.trim() !== '') {
            useTarefas([...tarefas, tarefaText]);
            setTarefaText('');
        }
    };


    const removeTarefa = (index) => {
        const updateTarefa = tarefas.filter((_, i) => i !== index);
        useTarefas(updateTarefa);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <div>
                <input
                    type="text"
                    value={tarefaText}
                    onChange={(e) => setTarefaText(e.target.value)}
                />
                <button onClick={addTarefa}>Adicionar Tarefa</button>
            </div>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}
                            <div>
                                <button onClick={() => editTarefa(index)}>Editar</button>
                                <button onClick={() => removeTarefa(index)}>Remover</button>
                            </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
