import { Component, inject } from "@angular/core";
import { RouterLink, Router } from "@angular/router";
import { AuthenticationService } from "../../../core/services/authentication.service";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  
}
