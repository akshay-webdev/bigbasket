import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bigbasket';
}
