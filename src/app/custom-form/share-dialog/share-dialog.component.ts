import { Forms } from '../../models/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../master-modules/project-module/project.service';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {
  shareForm:FormGroup;
  options: string[] = ['Meseret', 'Ezedin', 'Lule'];
  projects: string[] = ['EU konso', 'Agriculture', 'Health in SNNP'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: string
  ,private dialogref:MatDialogRef<ShareDialogComponent>,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.shareForm=this.formbuilder.group({
      users:['',Validators.required],
      projects:['',Validators.required],
    });
  }

  close(){
    this.dialogref.close();
  }
  save(){

  }

}
