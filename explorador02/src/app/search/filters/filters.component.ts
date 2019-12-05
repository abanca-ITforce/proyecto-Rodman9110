import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() incomeLevel;
  @Input() leadingType;
  @Input() regions ;
  @Output() search = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    
  }

  searchForm = this.formBuilder.group({
    // incomeLevel: [null, []],
    // leadingType: [null, []],
    // regions: [null, []]
    incomeLevel: [],
    leadingType: [],
    regions: []
  });

  onSubmit(){
    console.log(this.searchForm.value)
    this.search.emit(this.searchForm.value);
   
  }
  onReset(){
    this.searchForm.reset();
    // <console.log("www")>
  }
  


}
