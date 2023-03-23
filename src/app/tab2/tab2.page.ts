import { Component } from '@angular/core';
import { AlertController, IonInput, IonList, ToastController, } from '@ionic/angular';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listTasks: string[] = [];
  constructor(private toastr: ToastController, private tasks:TaskService) {
    this.listTasks = this.tasks.getCompletedTask();
  }
}
