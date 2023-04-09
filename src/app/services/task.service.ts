import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private completedTask: string[] = [];
  private tasks: string[] = [];
  constructor() { 
    this.tasks.push("Tarea 1");
  }
  public getTasks(): string[]{
    return this.tasks;
  }
  public getCompletedTask(): string[]{
    return this.completedTask;
  }
  public completeTask(pos:number){
    this.completedTask.push(this.tasks[pos]);
    this.tasks.splice(pos,1);
    return this.tasks;
  }
  public newTask (task:string){
    this.tasks.push(task);
    return this.tasks;
  }
  public uncompleteTask(pos: number) {
    this.tasks.push(this.completedTask.splice(pos, 1)[0]);
    return this.completedTask;
  }
  public updateTask(pos:number, task:string){
    this.tasks[pos] = task;
    return this.tasks;
  }
}
