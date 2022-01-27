import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() profileMenu: boolean = false;
  public menuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  getMenu() {
    const props: any = {};

    if (this.profileMenu) {
      //entering
      props['transition'] = true;
      props['ease-out'] = true;
      props['duration-100'] = true;
      //leaving
      props['transition'] = false;
      props['ease-in'] = false;
      props['duration-75'] = false;

      //from
      props['transform'] = false;
      props['opacity-0'] = false;
      props['scale-95'] = false;
      //to
      props['transform'] = true;
      props['opacity-100'] = true;
      props['scale-100'] = true;
    } else {
      //entering
      props['transition'] = false;
      props['ease-out'] = false;
      props['duration-100'] = false;
      //leaving
      props['transition'] = true;
      props['ease-in'] = true;
      props['duration-75'] = true;
      //from
      props['transform'] = false;
      props['opacity-100'] = false;
      props['scale-100'] = false;
      //to
      props['transform'] = true;
      props['opacity-0'] = true;
      props['scale-95'] = true;
    }

    return props;
  }
}
