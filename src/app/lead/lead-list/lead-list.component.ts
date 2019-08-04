import { Component, OnInit } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead } from '../lead.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {
  leads: Lead[];
  subscription: Subscription;
  error:string;
  constructor(private leadService: LeadService) { }

  ngOnInit() {
    this.leadService.error.subscribe(error=>{
      this.error=error;
      setTimeout(()=>{
        this.error=undefined;
      },2000);
    });
    this.leads = this.leadService.fetchLeadServerData()
    this.subscription = this.leadService.leadsChanged
      .subscribe((leads: Lead[]) => {
        this.leads = leads;
      })
  }

  deleteLead(id) {
    this.leadService.deleteLead(id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
