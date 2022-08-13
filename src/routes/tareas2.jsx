import { Link } from "react-router-dom";
import { getAllTareas,deleteTareas} from "../tareass";
import IMG from "./borrar.png";

import "./tareas.css";

export function Tareas2() {
  const tareas = getAllTareas();

  
  const div1= document.getElementsByClassName('container2');
  console.log(div1);

  function showHtmlDiv(h33,p,divv) {
    
    

    if (typeof div1[0] === 'object' && div1[0] !== null && 'appendChild' in div1[0]){

   

    let newh3 = document.createElement("h1");
    newh3.setAttribute("class", "h3");
    newh3.innerHTML = h33;
    div1[0].appendChild(newh3);

    let newp = document.createElement("p");
    newp.setAttribute("class", "fecha");
    newp.innerHTML = p;
    div1[0].appendChild(newp);

    let newdiv = document.createElement("div");
    newh3.innerHTML = divv;
    div1[0].appendChild(newdiv);


  } 
  }
    
  
  return ( 
 <div className="container">
    <div className="header">
      <h1 className="titulo">To do App</h1>
      <button className="boton3">AGREGAR TAREA</button>
    </div>
    
  <div>
    
    
    <div className="tarea1" style={{ display: "grid", gridTemplateColumns: "1fr 2fr",marginLeft:"80px",marginRight:"80px",marginTop:"20px" }}>
    
      <ul className="container-row">
      <h1>Mis tareas</h1>
        {tareas.map((tarea) => (
            <li className="row" key={tarea.titulo}>
              <div className="repo-id">
                  <a className="link"  onClick={showHtmlDiv(tarea.titulo,tarea.fecha_creacion,tarea.descripcion)} >
                       <h3 className="titulo-link">{tarea.titulo}</h3> 
                       <p className="fecha-link">{tarea.fecha_creacion}</p>
                  </a>
                  <img src={IMG} alt="" height="30px" width="30px" />
              </div>
            </li>
          ))}
      </ul>

    
     <article>
        <div className="container2">
      
      
         
      
      
        </div>    
     </article>
      

    
    
    
    
  </div>
</div>
   

   
</div>
  );
}
