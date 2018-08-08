import { AppService } from '../../services/app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class GeneratedFormService {

  constructor(private app:AppService) { }

  store(form_ids:any,htmlDocument:any){
    var datas=JSON.stringify({
      form_id:form_ids,
      html_document:htmlDocument
    });
   return this.app.post(apiRoutes.generatedForm.store,datas);
  }
}