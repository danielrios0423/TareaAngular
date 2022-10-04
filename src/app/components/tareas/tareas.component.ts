import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea'
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';
  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea() {
    console.log(this.nombreTarea)
    //Crear Objeto
    const tarea: Tarea ={
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto
    if (tarea.nombre.length != 0){
      this.listTareas.push(tarea);
    }
    //Reset form
    this.nombreTarea = '';
  }
  deletedTarea(index:number): void{
    this.listTareas.splice(index, 1)
    }
  updateTarea(tarea: Tarea, index: number){
    this.listTareas[index].estado = !tarea.estado
  }


}
