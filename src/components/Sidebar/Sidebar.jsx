import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside>
      <h3>Minhas Redes</h3>
      <ul>
        <li><a href="https://github.com/seu-usuario" target="_blank">GitHub</a></li>
        <li><a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
