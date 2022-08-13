import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { Tareas2 } from "./routes/tareas2";
import { Tarea } from "./routes/tarea";
import { Tareas } from "./routes/tareas";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route path="tareas" element={<Tareas />}>
          <Route index element={<div>Seleccione una Tarea</div>} />
          <Route path=":tareastitulo" element={<Tarea />} />
        </Route>
        <Route path="Tareas2" element={<Tareas2 />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
