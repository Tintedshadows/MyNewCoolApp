import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async doRefresh(event){
    setTimeout(() => {
      console.log('timed out');
      event.target.complete();
    }, 2000);
  }

}
