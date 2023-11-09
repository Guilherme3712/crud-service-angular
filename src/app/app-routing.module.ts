import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CadastroComponent } from "./component/cadastro/cadastro.component"
import { HistoricoComponent } from "./component/historico/historico.component"


const routes: Routes = [
    {path: '', component: CadastroComponent},
    {path: 'historico', component: HistoricoComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }