import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Bike } from './bike.model';
import{map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BikesService {
  private bikes: Bike[] = [];
  private bikesUpdated = new Subject<Bike[]>();

  constructor (private http: HttpClient) {}

  getBikes() {
    this.http.get<{message: string, bikes: any}>('http://localhost:3000/api/bikes')
    .pipe(map(postData => {
      return postData.bikes.map((bike: { name: any; content: any; _id: any; }) => {
        return {
        name: bike.name,
        content: bike.content,
        id: bike._id
      };
      });
    }))
    .subscribe(transformedBikes=> {
     this.bikes = transformedBikes;
     this.bikesUpdated.next([...this.bikes]);
    });
    }

  getBikeUpdateListener() {
    return this.bikesUpdated.asObservable();
  }

  getBike(id: string){
    return{...this.bikes.find(b => b.id === id)};
  }

  addBike(name:string, content: string){
    const bike: Bike = { id: "", name: name, content: content};
    this.http
    .post <{message: string, bikeId: string}>("http://localhost:3000/api/bikes", bike)
    .subscribe(responseData => {
    const id = responseData.bikeId;
    bike.id = id;
    this.bikes.push(bike);
    this.bikesUpdated.next([...this.bikes]);
  });
}

deleteBike(bikeId: string) {
  this.http.delete("http://localhost:3000/api/bikes/" + bikeId)
  .subscribe(() => {
    const updatedBikes = this.bikes.filter(bike => bike.id !== bikeId);
    this.bikes = updatedBikes;
    this.bikesUpdated.next([...this.bikes]);
  });
}

}
