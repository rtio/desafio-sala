import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            setTasks([...tasks, taskText]);
            setTaskText('');
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Minha Lista de Tarefas</h1>
        <div>
        <div>
            <input type="text" placeholder="Adicione uma tarefa" value={taskText} onChange={(e) => 
                setTaskText(e.target.value)} />
            <button onClick={handleAddTask}>Adicionar</button>
        </div>
       </div>
        <ul>
            {tasks.map((task, index) => 
            (   <li key={index}>{task}
               
            <button onClick={() => (index)}>Editar</button>                       
            <button onClick={() => handleRemoveTask(index)}>Excluir</button>         
                
                </li>
            )
            )} 
        </ul>
        
    </div>
    );
}

export default TodoList;
