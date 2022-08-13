let tareas = [
  {
    id: 1,
      titulo: 'Sacar a pasear al perro',
      descripcion: 'Dar una vuelta a la manzana con el perro.',
      fecha_creacion: '26/10/2022 22:00',
  },
  {
    id: 2,
      titulo: 'Lavar los platos',
      descripcion: 'Recordar usar esponja y detergente.',
      fecha_creacion: '26/09/2022 10:00',
  },
  {
    id: 3,
      titulo: 'Llamar a la empresa de internet.',
      descripcion: 'Pedir descuentos y amenazar con dar de baja el servicio.',
      fecha_creacion: '28/04/2022 09:00',
  },
  {
    id: 4,
      titulo: 'Comprar alimento de tortuga.',
      descripcion: 'Manuelita se esta quedando sin alimento :(',
      fecha_creacion: '22/07/2022 12:00',
  },
]


export function getAllTareas() {
  return tareas;
}

export function getTareas(id) {
  return tareas.find((tareas) => tareas.id === id);
}

export function deleteTareas(id) {
  tareas = tareas.filter((tareas) => tareas.id !== id);
}
