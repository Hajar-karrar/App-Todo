import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddTask, onSearchTask, onFilterTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [newTask, setNewTask] = useState({ title: "" });
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [noTasksMessage, setNoTasksMessage] = useState(""); // New state for "no tasks found"

  const [activeSection, setActiveSection] = useState("home");

  // Modal Handlers
  const handleAddTaskClick = () => {
    setShowModal(true);
    setActiveSection("add");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewTask({ title: "" });
  };

  const handleSubmitTask = () => {
    if (newTask.title.trim()) {
      onAddTask(newTask);
      handleCloseModal();
    }
  };

  // Filtrer les tâches
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
    setShowSearch(false);
    setActiveSection("filter");
    setNoTasksMessage(""); // Clear the message
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    setNoTasksMessage(""); // Clear the message before applying a new filter
    const hasTasks = onFilterTask(e.target.value); // Call parent function
    
  };

  // Rechercher les tâches
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setShowFilter(false);
    setActiveSection("search");
    setNoTasksMessage(""); // Clear the message
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setNoTasksMessage(""); // Clear the message before new search
    const hasTasks = onSearchTask(e.target.value); // Call parent function
    
  };

  return (
    <div className="sidebar-container">
      {/* Header */}
      <div className="sidebar-header">
        <h3>
          Welcome To <span style={{ color: "#0590fe" }}>Pro</span>
          <span style={{ color: "#f6861b" }}>Tasker</span>
        </h3>
      </div>

      {/* Ajouter une Tâche */}
      <h3
        className={`ajouter ${activeSection === "add" ? "active" : ""}`}
        onClick={handleAddTaskClick}
      >
        <span style={{ color: "rgb(199, 38, 38)" }}>+</span> Add a Task
      </h3>

      <h3 className="home" onClick={() => (window.location.href = "/")}><span>🏠</span>Home</h3>

      {/* Rechercher Tâche */}
      <h3
        className={`home ${activeSection === "search" ? "active" : ""}`}
        onClick={handleSearchClick}
      >
        <span>🔍</span> Search Task
      </h3>

      {/* Filtrer Tâche */}
      <h3
        className={`home ${activeSection === "filter" ? "active" : ""}`}
        onClick={handleFilterClick}
      >
        <span>🗂️</span> Filter Task
      </h3>

      {/* Menu déroulant pour filtrer */}
      {showFilter && (
        <div style={{ margin: "10px" }}>
          <label htmlFor="filter">Filter by status :</label>
          <select
            id="filter"
            value={filterStatus}
            onChange={handleFilterChange}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Tous</option>
            <option value="Planifié">Planifié</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
      )}

      {/* Rechercher Input */}
      {showSearch && (
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by task name..."
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "80%",
            }}
          />
        </div>
      )}

      {/* Message if no tasks found */}
      {noTasksMessage && (
        <div style={{ marginTop: "10px", color: "red", fontWeight: "bold" }}>
          {noTasksMessage}
        </div>
      )}

      <footer>
        <div className="copy">
          <h5>© 2024 All Rights Reserved, ProTasker®</h5>
        </div>
      </footer>

      {/* Modal pour Ajouter une tâche */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add a Task</h2>
            <input
              type="text"
              placeholder="Enter Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <div className="modal-actions">
              <button onClick={handleCloseModal}>Cancel</button>
              <button
                style={{ backgroundColor: "#f6861b", color: "#fff" }}
                onClick={handleSubmitTask}
              >
                Add a Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
