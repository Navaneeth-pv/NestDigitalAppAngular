import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private api :ApiService){}

empname=""
empcode=""
empdesignation=""
empusername=""
emppassword=""

readValues=()=>
{
  let data:any={"empname":this.empname,"empcode":this.empcode,"empdesignation":this.empdesignation,"empusername":this.empusername,"emppassword":this.emppassword}

  this.api.addEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("Employee Added Successfully")
      }else{
        alert("Something went wrong")
      }
    }
  )
}

}
