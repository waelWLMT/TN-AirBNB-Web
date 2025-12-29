import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

export const HttpInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token = inject(AuthenticationService).getToken();

  return next(
    token
      ? req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        })
      : req
  );
};