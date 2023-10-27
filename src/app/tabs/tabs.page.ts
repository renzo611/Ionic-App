import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public isLogin: Boolean;
  constructor(private readonly sharedService: SharedService) {
    this.isLogin = sharedService.isLogin();
  }

}
