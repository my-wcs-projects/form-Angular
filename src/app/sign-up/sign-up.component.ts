import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  user: User = new User('', '', '', '');
  formSubmitted = false;

  onSubmit() {
    this.formSubmitted = true;
    console.log('User soumi : ', this.user);
  }
}
