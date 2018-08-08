import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { CustomFormsService } from '../custom-forms.service';
import { FormSectionsService } from '../form-sections.service';
import { FormSections } from '../../models/sections';
import { printError } from 'ts-node';
import { event, json } from 'd3';
import { FormColumnsService } from '../services/form-columns.service';
import { GeneratedFormService } from '../services/generated-form.service';
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';

declare var $:any;
@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css']
})
export class FormDesignComponent implements OnInit,OnDestroy,AfterViewInit {
  
  title:string;
  private id:number;
  mesage:string='<p class="fa fa-font"><h3>Text</h3></p>';
  private sub:any;
  private sections:Array<FormSections>=[];
  private columnName:Array<any>=[];
  constructor(private route:ActivatedRoute,private http:CustomFormsService,private sectionsHttp:FormSectionsService,private element:ElementRef,
  private formColumnApi:FormColumnsService,private generatedFormApi:GeneratedFormService) { 
  }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params=>{
      this.id= +params['id'];
    });
    this.http.show(this.id).subscribe(data=>{
      this.title=data['data']['title'];
    },error=>{

    });

    this.sectionsHttp.index().subscribe(data=>{
     this.sections= data['data'];
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  ngAfterViewInit(){
    //jquery starts here
    $(document).ready(function(){

      $('#drag1').bind('dragstart', function(e) {
        e.originalEvent.dataTransfer.effectAllowed = 'copy';
        
        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
    });
   

  $('#input-drager').bind('dragstart', function(e) {
    e.originalEvent.dataTransfer.effectAllowed = 'copy';
    
    e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});
$('#table-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});

  //label development started

  //editing label on click of label in jquery
  $(document).on('click', "div>label.editable", function() { 	
    var $lbl = $(this), o = $lbl.text(),
     $txt = $('<input type="text" class="editable-label-text" value="'+o+'" />');
   $lbl
   .replaceWith($txt);
   $txt.focus();
   
   $txt.blur(function() {
     $txt.replaceWith($lbl);
   })
   .keydown(function(evt){
     if(evt.keyCode == 13) {
       var no = $(this).val();
       $lbl.text(no);
       $txt.replaceWith($lbl);
     }
   }); 
}); //end of label editing

$(document).on('click', "table>thead>tr>th", function() { 	
  var $lbl = $(this), o = $lbl.text(),
  $txt = $('<input type="text" class="editable-label-text" value="'+o+'" />');
$lbl
.replaceWith($txt);
$txt.focus();

$txt.blur(function() {
  $txt.replaceWith($lbl);
})
.keydown(function(evt){
  if(evt.keyCode == 13) {
    var no = $(this).val();
    $lbl.text(no);
    $txt.replaceWith($lbl);
  }
});
}); //end of label editing

//end of label development
$(document).on('keyup','#dragCopy>input',function(){
  var text=$(this).val();
  $(this).attr('placeholder',text);
  $(this).attr('name',text);
  $(this).attr('formControlName',text.replace(/ /g,''));
});

$(document).on('click','.add-column',function(){
 $('#customers>thead>tr').append('<th>Colum name</th>');
 $('#customers>tbody>tr').append("<td><input class='table-input'></td>");
});

//message drager startes here
$('#message-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});


$(document).on('click', "div>p.message-editable", function() { 	
  var $lbl = $(this), o = $lbl.text(),
   $txt = $('<textarea type="text" rows="20" cols="40" class="editable-label-text" value="'+o+'" ></textarea>');
 $lbl
 .replaceWith($txt);
 $txt.focus();
 
 $txt.blur(function() {
   $txt.replaceWith($lbl);
 })
 .keydown(function(evt){
   if(evt.keyCode == 13) {
     var no = $(this).val();
     $lbl.text(no);
     $txt.replaceWith($lbl);
   }
 }); 
});
//message drager ends here

//link started here
$('#link-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});
//end of link address

//drop starts  here
$('#dragCopy').bind('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).append($(e.originalEvent.dataTransfer.getData('Text')));
  return false;
}).bind('dragover', false);
//drop ends here


  });//end of jquery
}

 inputKeyUp(){
 }

save(){
 
  console.log(this.element.nativeElement.querySelector('#dragCopy'));

  //finding each input type name for our column creation of form builder
  $(document).ready(()=>{
    var json=[];
    $(document).find('#dragCopy').find('input[type=text]').each(function(){
      var name= $(this).attr('name');
      json.push(name); 
    });
    for(var i=0;i<json.length;i++){
      this.columnName.push(json[i]);
    }
  });
  //end of finding columns
  this.formColumnApi.store(this.id,this.columnName.toString())
  .subscribe(data=>{
    
  });
this.generatedFormApi.store(this.id,this.element.nativeElement.querySelector('#dragCopy')).subscribe(data=>{
  console.log(data);
});

}
}
