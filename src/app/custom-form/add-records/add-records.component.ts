import { GeneratedFormService } from '../services/generated-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GeneratedForm } from '../../models/generateForms';
import { CustomFormsService } from '../custom-forms.service';
import { Forms } from '../../models/forms';
import $ from "jquery";
import { FormsDataService } from '../services/forms-data.service';
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
  private tableData:Array<any>=[];
  private message:string;
  constructor(private route:ActivatedRoute,private generateHttp:GeneratedFormService,private customForm:CustomFormsService,
    private formDataHttp:FormsDataService,private router:Router) { }

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
       var columnLength=$(document).find('table>thead>tr>th').length;
       var addeRow=$('<tr><tr>')
       for(var i=0;i<columnLength;i++){
         addeRow.append("<td><input class='table-input'></td>");
       }
       $(document).find('table tbody').append(addeRow);
      });
     
    });

  }

  saveData(){
   $(document).ready(()=>{

  var array = [];
  var headers = [];
  
  $('table thead tr th').each(function(index, item) {
      headers[index] = $(item).html();
  });
  $('table tr').has('td').each(function() {
      var arrayItem = {};
      $('td>input', $(this)).each(function(index, item) {
          arrayItem[headers[index]] = $(item).val();
      });
      array.push(arrayItem);
  });
  for(var i=0;i<array.length;i++){
    this.tableData.push(array[i]);
  }
  var tableJSON= JSON.stringify(this.tableData);

  this.formDataHttp.store(this.id,tableJSON.toString()).subscribe(data=>{
    this.message=data['message'];
    setTimeout(() => {
        location.reload();
    }, 2000);
  });

   });
  }

}
