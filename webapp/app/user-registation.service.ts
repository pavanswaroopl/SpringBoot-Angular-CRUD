import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  ROOTURL:String="http://registration-service-env.eba-u2qwbi2t.us-east-1.elasticbeanstalk.com";

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post(this.ROOTURL+"/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.ROOTURL+"/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get(this.ROOTURL+"/findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete(this.ROOTURL+"/cancel/"+id);
  }
}
