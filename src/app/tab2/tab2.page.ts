import { Component, ViewChild } from '@angular/core';
import { AlertController, IonInput, IonList, ToastController, } from '@ionic/angular';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('intask', { static: false }) myInput!: IonInput;
  @ViewChild('lisliding', { static: false }) mySliding!: IonList;
  public isContentLoaded: boolean = false;
  listTasks: string[] = new Array();
  private tasks: string[] = new Array();
  public task: string = "";
  constructor(private toastr: ToastController, private alertController: AlertController,private taskService:TaskService) {
    this.listTasks = this.taskService.getCompletedTask();
    this.tasks = this.taskService.getTasks();
  }
  async presentToast(message: string, color: string) {
    const toast = await this.toastr.create({
      message: message,
      duration: 3000,
      cssClass: color
    });
    await toast.present();
  }

  async presentAlert(pos: number) {
    const alert = await this.alertController.create({
      header: 'Seguro que desea descompletar la tarea '+this.listTasks[pos],
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            this.presentToast("Se canceló la acción", "red");
            this.myInput.setFocus();
            this.mySliding.closeSlidingItems();
          },
        },
        {
          text: 'SI',
          role: 'confirm',
          handler: () => {
            this.presentToast("Se descompleto una tarea, terminala!", "green");
            this.taskService.uncompleteTask(pos);
            this.myInput.setFocus();
            this.mySliding.closeSlidingItems();
          },
        },
      ],
    });

    await alert.present();
  }
  public validateTask() {
    return this.tasks ? "false" : "true";
  }

  ionViewDidEnter() {
    this.isContentLoaded = true;
  }
}
