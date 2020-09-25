import { Signup } from './Signup';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  addUser(user:Signup):Observable<Object>{
   
    return this.http.post("http://localhost:3000/users" , user);
   }
 
   getAllUsers():Observable<Signup[]>{
   
     return this.http.get<Signup[]>("http://localhost:3000/users");
   }
}


