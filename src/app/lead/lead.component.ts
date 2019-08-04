import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Lead } from './lead.model';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  leads: Lead[];
  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    
  }

}
