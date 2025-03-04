import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadComponent } from './lead/lead.component';
import { HttpClientModule} from '@angular/common/http';
import { LeadAddComponent } from './lead/lead-add/lead-add.component';

import { LeadListComponent } from './lead/lead-list/lead-list.component';
import { FormsModule } from '@angular/forms';
import { LeadCommunicationComponent } from './lead/lead-communication/lead-communication.component';
@NgModule({
  declarations: [
    AppComponent,
    LeadComponent,
    LeadAddComponent,
    LeadListComponent,
    LeadCommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
