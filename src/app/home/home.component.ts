import {NgModule, Component, OnInit,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
  backgroundImage:string='assets/bg2.jpg';
  dates:Date=new Date('23-10-2025');
  previewobj:any={};
  emirate:any=[{"name":"Dubai"},{"name":"Sharjah "},{"name":"Abu Dhabi"}];
  property:any=[{"name":"Apartment "},{"name":"Townhouse "},{"name":"Villa "}];
  Covers:any=[{"name":"Walls, roof, floors, and ceilings"},{"name":"Built-in fixtures"},
    {"name":"Pipes, electrical wiring, and plumbing"}
  ]

  newRow={"name":"","dob":"","nationality":""};

  helperdetails:any=[
    {"name":"Rohit","dob":"2025-02-27","nationality":"India"}
    // {"name":"Rohit","dob":"2025-02-27","nationality":"Srilanka"},
    // {"name":"Rohit","dob":"2025-02-27","nationality":"Pakistan"}
    ]
    country:any=[
      {"name":"India","value":"India"},{"name":"Srilanka","value":"Srilanka"},{"name":"Pakistan","value":"Pakistan"}
    ]
  ngOnInit(): void {
    
  }
  datecheck(){

    console.log("checks",this.dates)
  }
  edit(obj:any){
    this.previewobj=JSON.stringify(obj);
    this.helperdetails.forEach((element:any) => {
      element.onEdit=false;
      
      
    });
      obj.onEdit=true;
  }
  update(obj:any){
obj.onEdit=false;
  }
  oncancel(obj:any){
   
const set=JSON.parse(this.previewobj)
    

    obj.name=set.name;
    obj.dob=set.dob;
    obj.nationality=set.nationality;
    obj.onEdit=false;
  }
  ondelete(index:number){

    this.helperdetails.splice(index,1)
  }
  rowDdd(){
    this.helperdetails.push(this.newRow)
    this.onReset()
  }
onReset(){
  this.newRow={"name":"","dob":"","nationality":""}
}

isAtTop = true;
  isAtBottom = false;
  
  items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // Sample content

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.isAtTop = target.scrollTop === 0;
    this.isAtBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
  }

}
