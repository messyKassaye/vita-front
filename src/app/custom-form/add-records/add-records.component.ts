import { GeneratedFormService } from '../services/generated-form.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GeneratedForm } from '../../models/generateForms';
import { CustomFormsService } from '../custom-forms.service';
import { Forms } from '../../models/forms';
declare var $:any;
@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.scss']
})
export class AddRecordsComponent implements OnInit {
  private id:number;
  private sub:any;
  generatedForm:Array<GeneratedForm>=[];
  private myForm:Array<Forms>=[];
  constructor(private route:ActivatedRoute,private generateHttp:GeneratedFormService,private customForm:CustomFormsService) { }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params=>{
      this.id= +params['id'];
    });

    this.generateHttp.show(this.id).subscribe(data=>{
      this.generatedForm=data['data'];
      console.log(this.generatedForm);
    })
    this.customForm.show(this.id).subscribe((data:Array<Forms>)=>{
      this.myForm=data['data'];
    },error=>{
      
    });
    $(document).ready(()=>{
      $(document).on('click','.add-row',function(){
        console.log('hello');
      })
    });

  }

}
