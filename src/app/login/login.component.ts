import { AuthService } from './../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '', 
    error:''
  };
 
public error: string;

  constructor(private auth: AuthService,private afAuth: AngularFireAuth, private router: Router,
    private route: ActivatedRoute) {  }

    emailSignUp() {
      return this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          this.auth.authState = user
          //this.updateUserData()
        })
        .catch(error => console.log(error));
    }

  signInWithEmail() {
    this.auth.signInRegular(this.user.email, this.user.password)
      .then((res) => {
       // console.log(res);

        this.router.navigate(['/admin']);
      })
      .catch((err) => this.error=this.user.error);
  }

  registerWithEmail() {

  }
  ngOnInit() {
  }

}
