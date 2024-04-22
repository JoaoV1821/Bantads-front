import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AutocadastroModule } from './autocadastro/autocadastro.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { AdministradorModule } from './administrador/administrador.module';
<<<<<<< HEAD
import { GerenteModule } from './gerente';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { DashboardComponent} from './dashboard/dashboard.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { DepositoComponent } from './deposito/deposito.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { provideNgxMask } from 'ngx-mask';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
>>>>>>> e63d46db702c779dd8e0971c0650187878385272


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
<<<<<<< HEAD
    SaqueComponent,
    TransferenciaComponent,
    DepositoComponent,
  
=======
    HomeComponent,  
>>>>>>> e63d46db702c779dd8e0971c0650187878385272
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginModule,
    AutocadastroModule,
    FormsModule,
    AutocadastroModule,
    SharedModule,
    GerenteModule,
    NgbModule
    NgxMaskDirective,
    AdministradorModule,
  ],

  providers: [
    provideHttpClient(),
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
