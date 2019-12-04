import { Component, OnInit } from '@angular/core';
import { RegionsService } from '../services/regions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions$: Observable<any[]> ;
  constructor(private regionsService: RegionsService) { }

  ngOnInit() {
    this.regions$ =this.regionsService.getAllRegions$();
    console.log(this.regions$);
  }

  getAllRegions(){
    this.regionsService.getAllRegions$()

  }

}
