import { AlertService } from '../../services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  message: any;
  constructor(private alert:AlertService) { }

  ngOnInit() {
    this.subscription = this.alert.getMessage().subscribe(message => { 
      this.message = message; 
  });
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
