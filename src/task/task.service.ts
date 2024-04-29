import { Injectable } from '@nestjs/common';
import { Task } from './task.interface';
import { Priority } from './priority.enum';

@Injectable()
export class TaskService {

    tasks:Task[] = [
        {
            id: 1,
            name: 'Comprar pan',
            priority: Priority.LOW_MEDIUM,
            desciption: 'Hay que comprar pan en la panaderia'
        },
        {
            id: 2,
            name: 'Ir al medico',
            priority: Priority.HIGH,
            desciption: 'Pedir la receta de medicamentos'
        },
        {
            id: 3,
            name: 'Salir a correr',
            priority: Priority.HIGH,
            desciption: 'Salir a correr ocn amigos'
        },
        {
            id: 4,
            name: 'Estudiar',
            priority: Priority.LOW,
            desciption: 'Estudiar para el parcial'
        }
    ];

    getAll():Task[]{
        return this.tasks;
    }

    getById(id: number): Task{
        return this.tasks.find(task => task.id == id) ;
    }

    getByPriority(priority: string): Task[] | void {
        return this.tasks.filter(task => {
            task.priority == 1;
        })
    }

    create(taskDto: Task): void{
        this.tasks.push({
            id: this.tasks.length+1,
            ...taskDto
            }
        );
    }

    delete(id: number): void{
        this.tasks = this.tasks.filter( t => t.id != id );
    }

    update(id: number, taskDto: Task): Task {
        this.tasks = this.tasks.map( task => {
            return task.id == id ? 
                task={id:task.id, ...taskDto}
                : task;
        });
        return this.getById(id);
    }
}
