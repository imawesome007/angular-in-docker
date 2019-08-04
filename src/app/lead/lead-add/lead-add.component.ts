import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeadService } from '../lead.service';

@Component({
  selector: 'app-lead-add',
  templateUrl: './lead-add.component.html',
  styleUrls: ['./lead-add.component.css']
})
export class LeadAddComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('closeModal') closeModal: ElementRef;
  error:String;
  constructor(private leadService:LeadService) { }

  ngOnInit() {
    
  }
 onSubmit(){
  
   this.leadService.addLead(this.signupForm.value)
   this.closeModal.nativeElement.click();
 }
}
