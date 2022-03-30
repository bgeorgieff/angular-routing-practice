import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/canDeactivate.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolverService } from "./servers/server/serverResolver.service";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: ":id/:name",
        component: UserComponent,
      },
    ],
  },
  {
    path: "servers",
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      {
        path: ":id/edit",
        canDeactivate: [CanDeactivateGuard],
        component: EditServerComponent,
      },
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolverService },
      },
    ],
  },
  {
    path: "**",
    component: ErrorPageComponent,
    data: { message: "Page not found" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
