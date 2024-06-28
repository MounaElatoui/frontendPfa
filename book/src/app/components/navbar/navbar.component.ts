import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  isCollapsed: boolean = window.innerWidth < 992;
  dialog: any;
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isCollapsed = window.innerWidth < 992;
  }


}
function openSignInDialog() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function checkScreenWidth() {
  throw new Error('Function not implemented.');
}

function login() {
  throw new Error('Function not implemented.');
}

function logout() {
  throw new Error('Function not implemented.');
}

