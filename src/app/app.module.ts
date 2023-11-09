import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';;
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HistoricoComponent } from './component/historico/historico.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HistoricoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
