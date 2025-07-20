import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule,
    // ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatIconModule,
    // MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
