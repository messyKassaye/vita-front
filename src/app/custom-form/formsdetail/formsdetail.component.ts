import { AppService } from '../../services/app.service';
import { CustomFormsService } from '../custom-forms.service';
import { Forms } from '../../models/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsdetail',
  templateUrl: './formsdetail.component.html',
  styleUrls: ['./formsdetail.component.scss']
})
export class FormsdetailComponent implements OnInit {
  private id:number;
  private sub:any;
  private myForm:Array<Forms>=[];
  constructor(private route:ActivatedRoute,private customForm:CustomFormsService) {
   }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params=>{
      this.id= +params['id'];
    });
    this.customForm.show(this.id).subscribe((data:Array<Forms>)=>{
      this.myForm=data['data'];
    },error=>{
      console.log(error);
    });
  }

}
