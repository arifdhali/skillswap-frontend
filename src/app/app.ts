import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // ✅ Correct import

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Required for standalone components
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule // ✅ Use the actual imported symbol
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ✅ should be `styleUrls`, not `styleUrl`
})
export class App {
  protected title = 'swap-frontend';
}
