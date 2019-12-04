import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  @Input() region: any[];
  constructor() { }

  ngOnInit() {
  }

}
