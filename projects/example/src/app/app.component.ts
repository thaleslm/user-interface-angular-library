import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example'

  onSubmit(valueForm:any){
    ///aqui vc consegue o valor do formulario
    console.log(valueForm)

  }
}
