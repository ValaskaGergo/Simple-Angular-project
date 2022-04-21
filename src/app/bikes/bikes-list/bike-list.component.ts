import {Component,  OnDestroy,  OnInit} from '@angular/core';
import { Subscription }  from 'rxjs';

import {Bike} from '..//bike.model'
import {BikesService} from '../bikes.service'

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls:['./bike-list.component.css']
})

export class BikeListComponent implements OnInit, OnDestroy{
bikes: Bike[] = [];
  private bikesSub: Subscription = new Subscription;

constructor(public bikesService:BikesService) {
}
ngOnInit(){
  this.bikesService.getBikes();
  this.bikesSub=this.bikesService.getBikeUpdateListener().subscribe((bikes: Bike[]) => {
    this.bikes = bikes;
  }) ;

}
onDelete(bikeId: string){
 this.bikesService.deleteBike(bikeId);
}

ngOnDestroy() {
  this.bikesSub.unsubscribe();
}
}
