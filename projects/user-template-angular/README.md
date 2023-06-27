# user-template-angular

Template angular para registro e login responsivo

## Installation

Use o gerenciador de pacote [npm](https://www.npmjs.com/package/user-template-angular) para installar o user-template-angular.

```bash
npm install user-template-angular
```

## Usage
### Passo 1:
app.module.ts
```typescript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserTemplateAngularModule } from 'user-template-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserTemplateAngularModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
### Passo 2:
App.Component.html
```typescript
<lib-login (formSubmit)="onSubmit($event)"></lib-login>
<lib-register (formSubmit)="onSubmit($event)"></lib-register>

```
### Passo 3:
App.component.ts
```typescript
  onSubmit(valueForm:any){
    //aqui vc consegue o valor do formulario
    console.log(valueForm)

  }

```