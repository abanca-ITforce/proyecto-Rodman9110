import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionsService } from 'src/app/services/regions.service';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region$: Observable<any>;
  countries$: Observable<any[]>;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private regionService: RegionsService,
    private countryServices: CountryService
    ) { }


  ngOnInit() {
    const regionId = this.activatedRoute.snapshot.params.regionId;
    console.log(regionId);
    this.region$ = this.regionService.getRegionId$(regionId);
    this.countries$ = this.countryServices.getCountriesByRegionCode(regionId);
  }

}
