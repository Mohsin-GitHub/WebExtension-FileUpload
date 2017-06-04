import { Injectable } from '@angular/core';
import {
    Router, ActivatedRouteSnapshot,
    RouterStateSnapshot, CanActivate
} from "@angular/router";

import { Observable } from "rxjs";

// Guard for the index route of this extension

@Injectable()
export class Guard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        let page = route.queryParams['page'];

        this.router.navigate(['/' + page]);
        return false;
    }
}
