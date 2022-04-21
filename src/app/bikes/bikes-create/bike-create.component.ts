import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';
//import { Bike } from '../bike.model';
import { BikesService } from '../bikes.service';


@Component({
  selector: 'app-bike-create',
  templateUrl: './bike-create.component.html',
  styleUrls:['./bike-create.component.css']
})
export class BikeCreateComponent {
  enteredName="";
  enteredContent="";
  //bike:Bike;
  //private mode = 'create';
  //private bikeId: string;


  constructor (public bikesService: BikesService) {}

  /*ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('bikeId')){
        this.mode ='edit';
        this.bikeId = paramMap.get('bikeId');
        this.bike = this.bikesService.getBike(this.bikeId);
      }else{
        this.mode ='create';
        this.bikeId=null;
      }
    });
  }*/

  onAddBike(form: NgForm) {
    if (form.invalid ){
      return;
    }
  this.bikesService.addBike(form.value.name,form.value.content);
  form.resetForm();
}
}
