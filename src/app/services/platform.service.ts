import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Injectable({providedIn: 'root'})

export class PlatformService {
  public isBrowser;
  public isServer;

  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }

}
