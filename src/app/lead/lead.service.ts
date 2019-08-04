import { Injectable } from '@angular/core';
import { ServerService } from '../server.service';
import { Lead } from './lead.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  error=new Subject<string>();
  leadsChanged = new Subject<Lead[]>();
  leads: Lead[] = [];
  constructor(private serverService: ServerService) { }

  fetchLeadServerData() {
    this.serverService.getLeadData().subscribe(leadArray => {
      for (let lead of leadArray) {
        this.pushLeadData(lead);
      }
    })
    return this.leads.slice();
  }
  addLead(leadData: Object) {
    this.serverService.addLeadData(leadData).subscribe(leadData => {
      this.pushLeadData(leadData);
    },error=>{
      console.log(error)
      this.error.next(error);
    })
  }
  deleteLead(id:number){
    this.serverService.deleteLeadData(id)
    this.leads=this.leads.filter(ele=>{
      return ele.id!=id;
    })
    this.leadsChanged.next(this.leads.slice())
  }

  updateLeadCommunication(id:number,communication){
    this.serverService.updateData(id,communication).subscribe(res=>{
      console.log(res)
    });
  }
  pushLeadData(lead) {
    this.leads.push(new Lead(lead.id,
      lead.updated_at,
      lead.created_at,
      lead.first_name,
      lead.last_name,
      lead.email,
      lead.mobile,
      lead.location_type,
      lead.location_string,
      lead.status,
      lead.communication,
      lead.tags));
     this.leadsChanged.next(this.leads.slice());
    }
}

