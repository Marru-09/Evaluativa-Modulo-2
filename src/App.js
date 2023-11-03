import './App.css';
import { useState } from 'react';
let nextId = 0;

export default function List() {
  const [tarea, settarea] = useState('');
  const [tareas, settareas] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);




  return (
    <>
    <div className='container'>
      <div className='contain-h1'>
        <h1>Mis Tareas</h1>
      </div>
      <div className="input-container">
        <input
          value={tarea}
          onChange={e => settarea(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (tarea.trim() !== '') {
              settareas([
                ...tareas,
                { id: nextId++, tarea: tarea }
              ]);
              settarea('');
            }
            }
          }}
        />
        <button className='add-button' onClick={() => {
          if (tarea.trim() !== '') {
          settareas([
            ...tareas,
            { id: nextId++, tarea: tarea }
          ]);
          settarea('');
        }
        }} 
        >Add</button>
      </div>
      <div class='info-container'>
      {tareas.map(tarea => (
        <div className={`task-container ${selectedItems.includes(tarea.id) ? 'double-clicked' : ''}`}
        onDoubleClick={() => {
          if (selectedItems.includes(tarea.id)) {
            setSelectedItems(selectedItems.filter(id => id !== tarea.id));
          } else {
            setSelectedItems([...selectedItems, tarea.id]);
          }
        }}
      >
            <p key={tarea.id}>{tarea.tarea}</p>
              <button className='delete' onClick={() => {
                  settareas(
                    tareas.filter(a =>
                      a.id !== tarea.id
                    )
                  );
                }}
                >
                  Eliminar
                </button>
        </div>
            ))}
      </div>
    </div>
    </>
  );
}
