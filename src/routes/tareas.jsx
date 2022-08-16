import { Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getAllTareas,deleteTareas } from "../tareass";
import IMG from "./borrar.png";
import "./tareas.css";


export function Tareas() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const tareas = getAllTareas();
  
  
  
  const filter = searchParams.get("filter") ?? "";
  
  return (
  <>
     <div className="container">
           <div className="header">
              <h1 className="titulo">To do App</h1>
              <button className="boton3">AGREGAR TAREA</button>
           </div>
      
      <div>
      
      
          <div className="tarea1" style={{ display: "grid", gridTemplateColumns: "1fr 2fr",marginLeft:"80px",marginRight:"80px",marginTop:"20px",marginBottom:"120px" }}>
      
            <ul className="container-row">
              <h1>Mis tareas</h1>
              {tareas.map((tarea) => (
                  <li className="row" key={tarea.titulo} >
                    <div className="repo-id">
                      <Link className="link" to={tarea.id.toString() + location.search}>
                       <h3 className="titulo-link">{tarea.titulo}</h3> 
                       <p className="fecha-link">{tarea.fecha_creacion}</p>
                      </Link>
                      <img src={IMG} alt="" height="30px" width="30px" />
                    </div>
                    
                  </li>
              ))}
            </ul>

            <article>
              <Outlet />
            </article>
         </div>
    </div>
     
     
     
  </div>
    
 </>
  );
}
