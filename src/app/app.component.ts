import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'matinhu-crypto';
  public dark: boolean = false;
  public wallet: any;
  public profileMenu: boolean = false;

  ngOnInit() {
    this.applyTheme();
  }

  toggle() {
    this.dark = !this.dark;
    localStorage.theme = this.dark ? 'dark' : 'light';
    this.applyTheme();
  }

  applyTheme() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  @HostListener('click', ['$event'])
  onClick(id: any) {
    if (!id.target.id) this.profileMenu = false;
    console.log(id.target.id);
    if (id.target.id !== 'menuImg') {
      this.profileMenu = false;
    } else {
      this.profileMenu = true;
    }
  }
}
