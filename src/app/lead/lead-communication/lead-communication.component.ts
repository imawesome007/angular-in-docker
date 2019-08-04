import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { LeadService } from '../lead.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lead-communication',
  templateUrl: './lead-communication.component.html',
  styleUrls: ['./lead-communication.component.css']
})
export class LeadCommunicationComponent implements OnInit {
  @ViewChild('f') communication: NgForm;
  @ViewChild('closeModal') closeModal: ElementRef;
  @Input() id:number;
  constructor(private leadService:LeadService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.communication.value)
    this.leadService.updateLeadCommunication(this.id,this.communication.value)
    this.closeModal.nativeElement.click();
  }

}
