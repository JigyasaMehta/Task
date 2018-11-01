import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router"

@Component({
    selector: 'data-comp',
    templateUrl: './data.component.html',
    styleUrls:['./data.component.css']
  })

  export class DataComponent
  {     
        emailId:string;
        dropdownSelectValue:string;
        password:string;
        constructor (private router:ActivatedRoute)
        {

        }
        ngOnInit()
        {
            this.router.params.subscribe
            (
                x=>{this.emailId=x['email'],this.dropdownSelectValue=x['select'],this.password=x['psw']}
            )
        }

  }