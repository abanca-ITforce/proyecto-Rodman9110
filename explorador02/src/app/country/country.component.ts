import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country$: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    const countryId = this.activatedRoute.snapshot.params.countryId;
    this.country$ = this.countryService.getCountry$(countryId);
  }

}
