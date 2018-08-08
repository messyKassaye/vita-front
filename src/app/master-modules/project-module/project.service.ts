import { Injectable } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Observable} from 'rxjs';
import {Project} from '../../models/project';
import { apiRoutes } from '../../app.constants';

@Injectable()
export class ProjectService {

  constructor(private appservice: AppService) { }
  getProjectCategories() {
    return this.appservice.get(apiRoutes.projectCategory.index);
  }
  addProjectCategory(form) {
    const formValues = JSON.stringify({
      name: form.value.name,
      description: form.value.description
    });
    return this.appservice.post(apiRoutes.projectCategory.store, formValues);
  }
  index() {
    return this.appservice.get(apiRoutes.project.index);
  }
  addKebele(form) {
    const data = JSON.stringify({
      woreda_id: form.value.woreda,
      name: form.value.name
    });
    return this.appservice.post(apiRoutes.kebele.store, data);
  }
  addCluster(form) {
    const data = JSON.stringify({
      name: form.value.name
    });
     this.appservice.post(apiRoutes.cluster.store, data).subscribe(response => {
          console.log(response);
         return this.addClusterMember(form, response['data']['id']).subscribe(res => {
           form.resetForm();
         });
     });
  }
  addClusterMember(form, id) {
    const data =  JSON.stringify({
      cluster_id: id,
      kebele_id: form.value.kebele
    });
    return this.appservice.post(apiRoutes.clusterMemeber.store, data);
  }
  getClusters() {
    return this.appservice.get(apiRoutes.cluster.index);
  }
  getZones() {
    return this.appservice.get(apiRoutes.zone.index);
  }
  getWoredas() {
    return this.appservice.get(apiRoutes.woreda.index);
  }
  getImplementers() {
    return this.appservice.get(apiRoutes.implementer.index);
  }
  getBeneficaries() {
    return this.appservice.get(apiRoutes.beneficaries.index);
  }
  getManagers() {
    return this.appservice.get(apiRoutes.user.users);
  }
}
