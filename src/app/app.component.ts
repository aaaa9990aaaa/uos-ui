import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uos-ui';

  checkboxConfig = {value:1,label:'测试'}
  checked:false;
}
