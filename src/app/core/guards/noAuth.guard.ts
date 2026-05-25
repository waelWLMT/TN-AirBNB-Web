import { inject } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { CanActivateFn, Router } from "@angular/router";

export const noAuthGuard : CanActivateFn = (route, state) => {

    const authService = inject(AuthenticationService);
    const router = inject(Router);

    if(authService.isAuthenticated()) {
        router.navigate(['/home']);
        return false;
    }

    return true;

};