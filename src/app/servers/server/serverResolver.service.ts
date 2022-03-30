import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";

interface ResolverInterface {
  id: number;
  name: string;
  status: string;
}

interface ServerInterface {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolverService implements Resolve<ResolverInterface> {
  constructor(private serverService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ServerInterface | Promise<ServerInterface> | Observable<ServerInterface> {
    return this.serverService.getServer(+route.params["id"]);
  }
}
