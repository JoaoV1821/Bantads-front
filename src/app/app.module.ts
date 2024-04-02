import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AutocadastroModule } from './autocadastro/autocadastro.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { AdministradorModule } from './administrador/administrador.module';
import { provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AutocadastroModule,
    FormsModule,
    AutocadastroModule,
    SharedModule,
    AdministradorModule
  ],

  providers: [
    provideHttpClient(),
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
