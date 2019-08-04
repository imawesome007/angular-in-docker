import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead } from './lead/lead.model';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerService {s
  baseUrl = "http://192.168.1.17:8080"
  constructor(private http: HttpClient) {
  }

  getLeadData() {
    return this.http.get<Lead[]>(this.baseUrl + '/api/leads/?location_string=India')
  }
  addLeadData(leadData:Object){
    return this.http.post(this.baseUrl + '/api/leads/',leadData).pipe(catchError(this.handleErrorMessage))
  }
  deleteLeadData(id:number){
    return this.http.delete(this.baseUrl + '/api/leads/'+id+"/")
  }
  updateData(id:number,communication){
    console.log(communication)
    return this.http.put(this.baseUrl + '/api/mark_lead/'+id,communication)
  }
  handleErrorMessage(error){
    let errorMessage = "An unknown error occurred"
    if (error.error.email!=undefined)
      errorMessage = "lead with this email already exists";
        return throwError(errorMessage)
  }
}