import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';

import { Response } from 'express'; 

import { TaskService } from './task.service';
import { Task } from './task.interface';
import { Priority } from './priority.enum';


@Controller('/api/tasks')
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Get()
    getAllTask(@Res() response: Response){
        return response.status(200).send(this.taskService.getAll());
    }

    @Get('/:id')
    getTask(@Param('id', ParseIntPipe) id: number, @Res() res: Response){
        return res.status(200).send(this.taskService.getById(id));
    }

    @Get('/query')
    getTaskByPriority(@Query() priority: string, @Res() res: Response){
        console.log(priority)
        return res.status(HttpStatus.OK)
            .send(this.taskService.getByPriority(priority));
    }

    @Post()
    createTask(@Body() taskDto: Task, @Res() res: Response ){
        return res.status(HttpStatus.CREATED)
            .send(this.taskService.create(taskDto));
    }
    @Delete('/:id')
    deleteTask(@Param('id') id: number, @Res() res: Response){
        return res.send(HttpStatus.OK)
            .send(this.taskService.delete(id));
    }

    @Put('/:id')
    updateTask(@Param('id', ParseIntPipe) id: number, @Body() taskDto: Task, @Res() res: Response){
        return res.status(HttpStatus.CREATED)
            .send(this.taskService.update(id, taskDto));
    }
}
