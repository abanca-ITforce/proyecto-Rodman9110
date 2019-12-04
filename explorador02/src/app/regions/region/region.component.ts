import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionsService } from 'src/app/services/regions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region$: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private regionService: RegionsService) { }


  ngOnInit() {
    const regionId = this.activatedRoute.snapshot.params.regionId;
    console.log(regionId);
    this.region$ = this.regionService.getRegionId$(regionId);
  }

}
