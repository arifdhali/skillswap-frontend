import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ✅ should be `styleUrls`, not `styleUrl`
})
export class App {
  protected title = 'swap-frontend';
}
