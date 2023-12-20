import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, blocksGroupIcon, cogIcon, dashboardIcon, toolsIcon,  } from '@cds/core/icon';
import { Title } from '@angular/platform-browser';


ClarityIcons.addIcons(cogIcon, dashboardIcon, toolsIcon, blocksGroupIcon)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public constructor(private titleService: Title ){}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }

  title = 'client';
}
