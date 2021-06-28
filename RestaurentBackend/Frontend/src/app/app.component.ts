import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from './check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router, public cobj:CheckService ) { }

  ngOnInit(): void {
  }
  onLogout() {
    this.cobj.logOut();
    this.route.navigate(['home']);
  }
}
