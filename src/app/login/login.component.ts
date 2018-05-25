import { AuthService } from './../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
 };

 
  constructor(private auth: AuthService ,  private router: Router,
    private route: ActivatedRoute) { }
  
  signInWithEmail() {
    this.auth.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    this.router.navigateByUrl('admin');
          
       })
       .catch((err) => console.log('error: ' + err));
 }
 

  ngOnInit() {
  }

}
