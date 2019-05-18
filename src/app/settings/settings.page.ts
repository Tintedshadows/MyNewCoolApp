import { Component, OnInit } from '@angular/core';
import { LoadingController, ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private loadingController: LoadingController,private actionSheet: ActionSheetController, private alertController: AlertController){}

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 1000,
    });

    await loading.present();
  }

  async presentAlert(){

    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Sub Alert",
      message: "Alert Message",
      buttons:[
      {
        text:'Cancel',
        role:'cancel',
        handler: () => {
          // console.log('clicked me');
        }
      },

      {
         text: 'Okay',
         handler: () => {
           // console.log('okay button');
         }

      },

      {
        text: 'Open Action Sheet',
        cssClass: 'primary',
        handler: async () => {

         const action = await this.actionSheet.create({
           header: 'testing Action',
           buttons: [
             {
               text:'button',
               role: 'cancel',
               handler: () => {
                 // console.log('hello');
               }
             }

           ]
         });
         await action.present();

        }

     },

      ]
    });

    await alert.present();
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheet.create({
      header: 'Test Action Sheet',
      mode: 'ios',
      buttons:[
        {
          text: 'Add',
          role: 'cancel',
          icon: 'add',
          handler: () =>{
            console.log('Add Button');
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () =>{
            console.log('Cancel Button');
          }
        }
       
      ]
    });

    await actionSheet.present();
  }

  ngOnInit() {
  }
}
