import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee = (data:any) =>{
    return this.http.post("http://localhost:8080/addemployee",data)
  }
  viewEmployee = ()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }
  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",data)
  }
}
