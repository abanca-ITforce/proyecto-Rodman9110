import { Component, OnInit, Input } from '@angular/core';
import { RegionsService } from 'src/app/services/regions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.css']
})
export class RegionCardComponent implements OnInit {
 
  @Input() region: any;
  
  constructor() { }

  ngOnInit() {
    
  }

}
