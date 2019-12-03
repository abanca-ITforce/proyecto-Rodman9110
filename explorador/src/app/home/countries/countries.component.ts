import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountresService } from 'src/app/services/countres.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  id;
  country;
  constructor(private activatedRoute: ActivatedRoute, private countryServices: CountresService ) {
     this.id = activatedRoute.snapshot.params.id;
     console.log(this.id);
     this.country = countryServices.getCountryId(this.id);

   }

  ngOnInit() {
  }

}
