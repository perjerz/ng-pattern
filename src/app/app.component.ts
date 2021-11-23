import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding: 20px 50px;">
      <header focusOnNavigation class="docs-header-background"
          aria-label="Get started" id="homepage-header">
      <div class="docs-header-section">
        <div class="docs-header-headline">
          <h1 class="mat-h1">Angular Pattern</h1>
          <h2> Common Pattern in Angular</h2>
        </div>
        <div class="docs-header-start">
          <a mat-raised-button class="docs-button" routerLink="/guide/getting-started">Get started</a>
        </div>
      </div>
    </header>
      <h2>Table</h2>
      <app-table></app-table>
    </div>
    
  `,
  styles: [
    `
    .docs-header-background {
      overflow: hidden;
      position: relative;
      height: 420px;
    }

    .docs-header-background::before {
      content: '';
      position: absolute;

      background-size: 600px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-repeat: no-repeat;
      background-position: 80% 20px;
      opacity: 0.2;
    }

    .docs-header-section {
      width: 90%;
      position: absolute;
      z-index: 0;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .docs-header-headline {
      h1 {
        font-size: 56px;
        font-weight: bold;
        line-height: 56px;
        margin: 15px 5px;
      }

      h2 {
        font-size: 20px;
        font-weight: 300;
        line-height: 28px;
        margin: 15px 0 25px 0;
      }
    }`
  ]
})
export class AppComponent {
  title = 'ng-pattern';
}
