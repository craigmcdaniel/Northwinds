import { AuthService } from './../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFireAuth } from 'angularfire2/auth';
>>>>>>> 3fe45ec5a5be58a7cc3afe5161ea2d030caffba5



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
<<<<<<< HEAD
  providers:[AuthService]
=======
  providers: [AuthService]
>>>>>>> 3fe45ec5a5be58a7cc3afe5161ea2d030caffba5
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
<<<<<<< HEAD
    password: ''
 };

 
  constructor(private auth: AuthService ,  private router: Router,
    private route: ActivatedRoute) { }
  
    signInWithEmail() {
      this.auth.signInRegular(this.user.email, this.user.password)
         .then((res) => {
            console.log(res);
      
            this.router.navigate(['/admin']);
         })
         .catch((err) => console.log('error: ' + err));
   }
=======
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
>>>>>>> 3fe45ec5a5be58a7cc3afe5161ea2d030caffba5
  ngOnInit() {
  }

}
