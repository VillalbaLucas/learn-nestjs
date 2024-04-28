import { Injectable } from '@nestjs/common';
import { Task } from './task.interface';
import { Priority } from './priority.enum';

@Injectable()
export class TaskService {

    private tasks:Task[] = [
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
        }
    ];

    getAll():Task[]{
        return this.tasks;
    }

    getById(id: number):Task{
        return this.tasks.find(task => task.id == id) ;
    }

    create(taskDto: Task): void{
        this.tasks.push({
            id: this.tasks.length+1,
            ...taskDto
            }
        );
    }

    delete(id: number){
        this.tasks = this.tasks.filter( t => t.id != id );
    }

    update(id: number, taskDto: Task): Task {
        this.tasks = this.tasks.map( task => {
            return task.id == id ? 
                task={id:task.id, ...taskDto}
                : task;
        });
        return {id, ...taskDto};
    }
}
