import { Link, Outlet } from "react-router-dom";
import "../src/routes/tareas.css";
export function Layout() {
  return (
    <main>
      <nav>
        <Link to="/tareas">Tareas 1</Link> |{" "}
        <Link to="/tareas2">Tareas 2</Link>
      </nav>
      <section>
        <Outlet />
      </section>
      <div className="footer">
    <h1>Todo app@2022</h1>
   </div>
    </main>
  );
}
