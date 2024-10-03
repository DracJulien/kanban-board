import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './KanbanBoard.scss'; // Vous pouvez ajouter des styles ici

// État initial des colonnes
const initialData = {
  toDo: {
    name: 'To Do',
    items: ['Task 1', 'Task 2', 'Task 3'],
  },
  doing: {
    name: 'Doing',
    items: ['Task 4'],
  },
  done: {
    name: 'Done',
    items: ['Task 5', 'Task 6'],
  },
  trash: {
    name: 'Trash',
    items: [],
  },
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialData);
  const [newTask, setNewTask] = useState('');

  // Gérer le drag & drop
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Si l'élément est déposé en dehors des zones autorisées
    if (!destination) return;

    // Si l'élément est déposé à l'emplacement d'origine
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    // Retirer l'élément de la colonne source
    const [movedItem] = sourceItems.splice(source.index, 1);

    // Ajouter l'élément à la colonne destination
    destItems.splice(destination.index, 0, movedItem);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  };

  // Ajouter une nouvelle tâche
  const addTask = () => {
    if (newTask.trim()) {
      setColumns({
        ...columns,
        toDo: {
          ...columns.toDo,
          items: [...columns.toDo.items, newTask],
        },
      });
      setNewTask('');
    }
  };

  // Vider la corbeille
  const emptyTrash = () => {
    setColumns({
      ...columns,
      trash: {
        ...columns.trash,
        items: [],
      },
    });
  };

  return (
    <div className="kanban-board">
      <header>
        <h1>Kanban Board</h1>
      </header>

      <div className="add-task-container">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board-columns">
          {Object.keys(columns).map((columnId) => {
            const column = columns[columnId];
            return (
              <div className="column" key={columnId}>
                <h2>{column.name}</h2>
                <Droppable droppableId={columnId}>
                  {(provided) => (
                    <ul
                      className="task-list"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {column.items.map((task, index) => (
                        <Draggable key={task} draggableId={task} index={index}>
                          {(provided) => (
                            <li
                              className="task"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {task}
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>

                {columnId === 'trash' && (
                  <button className="empty-trash" onClick={emptyTrash}>
                    Empty Trash
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </DragDropContext>

      <footer>
        <p>Kanban Board with Drag and Drop</p>
      </footer>
    </div>
  );
};

export default KanbanBoard;
