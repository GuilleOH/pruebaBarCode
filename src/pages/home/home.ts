import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado:any = null;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  onScan(){
        this.barcodeScanner.scan().then(barcodeData => {
     this.resultado = barcodeData.text;
    }).catch(err => {
        console.log('Error', err);
    });
  }

}
