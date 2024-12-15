import React, { useState } from "react";
import "./ToDoo.css";
import Sidebar from "./Sidebar";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Ajouter une nouvelle tâche
  const addTask = (task) => {
    const newTasks = [
      ...tasks,
      { id: Date.now(), title: task.title, status: "Planifié" },
    ];
    setTasks(newTasks);
    setFilteredTasks(newTasks); // Mettre à jour les tâches filtrées
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  // Changer le statut d'une tâche
  const changeTaskStatus = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  // Filtrer les tâches par statut
  const filterTask = (status) => {
    if (status) {
      setFilteredTasks(tasks.filter((task) => task.status === status));
    } else {
      setFilteredTasks(tasks); // Afficher toutes les tâches
    }
  };

  // Rechercher les tâches par titre
  const searchTask = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setFilteredTasks(
        tasks.filter((task) =>
          task.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredTasks(tasks); // Afficher toutes les tâches si la recherche est vide
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar onAddTask={addTask} onSearchTask={searchTask} onFilterTask={filterTask} />

      {/* Main Content */}
      <main className="main-content">
        <h1>Create To-Do Liste</h1>

        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <img src="rel.png" alt="" className="empty-state-image" />
            <p className="empty-state-message">Welcome, Have a great day!</p>
            <p className="empty-state-subtext">
              Create Your To-Do List And Daily Plans <br />{" "}
              <span>Easily With ProTasker</span>
            </p>
          </div>
        ) : (
          <ul className="task-list">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`task-item ${task.status.toLowerCase()}`}
              >
                <strong>{task.title}</strong> - <em>{task.status}</em>
                <div>
                  <select
                    value={task.status}
                    onChange={(e) => changeTaskStatus(task.id, e.target.value)}
                  >
                    <option value="Planifié">Planifié</option>
                    <option value="En cours">En cours</option>
                    <option value="Terminé">Terminé</option>
                  </select>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default TodoApp;
