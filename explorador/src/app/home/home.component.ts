import { Component, OnInit } from '@angular/core';
import { CountresService } from '../services/countres.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

 
  countres: any[] = [];
  country: any;
  constructor(private countresService: CountresService, private router: Router) { }

  ngOnInit() {
    this.getAllCountres();
    
  }
  getAllCountres(){
    this.countresService.getAllCountres().subscribe(data =>{
      this.countres = data;
      console.log(data);
    });
  }
  getCountry(country: any) {
    console.log(country);
    let countryId;

    countryId = country.id;
    console.log(countryId)
    
    // return this.countresService.getCountryId(countryId)
    // .subscribe( data=>{
    //   this.country = data;
    //   console.log(data);  
    // }); 

    return this.router.navigate(['/country']);
    
    
   }


   
}
