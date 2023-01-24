import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  loginForm!: FormGroup;
  error: any = '';
  submitted = false;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
    }

    this.loginService.loginError.subscribe((error) => {
      this.error = error;
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  forgot()
  {
    this.router.navigateByUrl('fp-verify-email')
  }

}
