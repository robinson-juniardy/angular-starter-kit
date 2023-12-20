import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { ModuleModule } from "./module/module.module";

@NgModule({
      imports: [AuthModule, ModuleModule],
      exports: [AuthModule, ModuleModule]
})
export class SetupModule {}