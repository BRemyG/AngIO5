import {Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../../w3.css']
})
export class TableComponent implements OnInit, DoCheck {

  constructor() {
  }

  // assuming this data is obtained from a call to the backend..
  month:any = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  serverData:any = [
    {Year: 2012, Month: 1, Value: .5},
    {Year: 2012, Month: 2, Value: .5},
    {Year: 2012, Month: 3, Value: .75},
    {Year: 2012, Month: 4, Value: .75},
    {Year: 2012, Month: 5, Value: .5},
    {Year: 2012, Month: 6, Value: .5},
    {Year: 2012, Month: 7, Value: .75},
    {Year: 2012, Month: 8, Value: .73},
    {Year: 2012, Month: 9, Value: .5},
    {Year: 2012, Month: 10, Value: .5},
    {Year: 2012, Month: 11, Value: .75},
    {Year: 2012, Month: 12, Value: .75},

    {Year: 2013, Month: 1, Value: .5},
    {Year: 2013, Month: 2, Value: .5},
    {Year: 2013, Month: 3, Value: .75},
    {Year: 2013, Month: 4, Value: .75},
    {Year: 2013, Month: 5, Value: .5},
    {Year: 2013, Month: 6, Value: .5},
    {Year: 2013, Month: 7, Value: .75},
    {Year: 2013, Month: 8, Value: .75},
    {Year: 2013, Month: 9, Value: .5},
    {Year: 2013, Month: 10, Value: .5},
    {Year: 2013, Month: 11, Value: .75},
    {Year: 2013, Month: 12, Value: .75},

    {Year: 2014, Month: 2, Value: .85},
    {Year:2015}
  ];

  ngOnInit() {
    this.reorder(this.serverData)
  }
  ngDoCheck(){
   }

  newData:any = [];
  alert: string ='';

  reorder(arr:any):any {
    this.newData = [];
    let monVal = {}, yearVal = {};
     for(let entry of arr){

      if (!yearVal[entry.Year])
        yearVal[entry.Year] = [];
      yearVal[entry.Year][entry.Month - 1] = entry.Value;

    };
    for(let year of Object.keys(yearVal)){
      monVal={};
      monVal['Year'] = year;
      monVal['Value'] = yearVal[year];
      monVal['total'] = 0;
        yearVal[year].forEach(val=>{
          monVal['total'] +=val;
        });
      this.newData.push(monVal);
    //console.log('year ', year)
  }

  }

  assignVal(key: string, val: any){

  }

  addValue( year: any, month: any, value: any){
    let rowEntry = {};
    if(year){
      this.alert = '';
      rowEntry['Year'] = Number.parseInt(year);
      if (month) rowEntry['Month'] = Number.parseFloat(month) ;
      if(value) rowEntry['Value'] = Number.parseFloat(value)/100 ;
      console.log('add value ', rowEntry);
      this.serverData.push(rowEntry);
      this.reorder(this.serverData);
    } else {
      this.alert = 'Add year'
    }
  }
  trackyear(data: any): any{
     return data.Year;
  }
  deleteRow(year: any): any {
    this.serverData = this.serverData.filter(entry => entry.Year != year);
    this.reorder(this.serverData);
  }
  save(): any {
    console.log('server data : ', this.serverData)
  }
}
