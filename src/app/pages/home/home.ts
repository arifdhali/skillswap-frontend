import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {faAngleRight,faAngleLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
}
