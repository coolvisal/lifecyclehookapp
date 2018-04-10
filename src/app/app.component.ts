import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <div>
              Text:   <input type="text" width="100px" />
             </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
