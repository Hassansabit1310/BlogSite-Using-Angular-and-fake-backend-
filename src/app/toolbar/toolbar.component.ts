import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { User } from '../sign-up/shared/user.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
 
  
  currentUser: User;
    


  constructor(private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router) { 
      this.authenticationService.currentUserValue.subscribe((data)=>{
        this.currentUser=data
      })
    }
    logout(){
      window.localStorage.removeItem('currentUser');
      
      this.router.navigateByUrl('/login')
      
     }
    

  ngOnInit(): void {
    
  
    
   
    
   
  }

  

}
