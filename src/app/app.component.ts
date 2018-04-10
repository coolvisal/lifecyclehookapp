import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <div>
              Text:   <input type="text " [(ngModel)]="title" width="100px" />
             </div>
             <child-view [name]="title"></child-view>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
}
