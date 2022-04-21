import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

constructor(public AuthService: AuthService) {}

onSignup(form: NgForm){
if (form.invalid) {
  return;
}
this.AuthService.createUser(form.value.email, form.value.password);
}
}
