import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./setup/auth/auth.component";
import { ModuleComponent } from "./setup/module/module.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'setup/auth', component: AuthComponent},
    {path: 'setup/module', component: ModuleComponent}
]

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule {}