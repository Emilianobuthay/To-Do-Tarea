import { useNavigate, useParams } from "react-router";
import { deleteTareas, getTareas } from "../tareass";
import IMG from "./borrar.png";
import "./tareas.css";

export function Tarea() {
  const { tareastitulo } = useParams();
  const tarea = getTareas(+tareastitulo);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteTareas(+tareastitulo);
    navigate("/tareas");
  };

  if (!tarea) {
    return <div>No se encuentra la Tarea</div>;
  }

  return (
    <div className="container2">
      
      
       <h3 className="h3">{tarea.titulo}</h3>
       <p className="fecha">Creado el {tarea.fecha_creacion}</p> 
       <div>
         {tarea.descripcion}
       </div>
       <br />
       <button className="boton2" onClick={handleDelete}><img src={IMG} alt="" height="30px" width="30px" /></button>   
      
      
      
    </div>
  );
}
