import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { HttpInterceptor } from "./interceptors/http.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

export const CORE_PROVIDERS = [
  provideHttpClient(
    withInterceptors([HttpInterceptor, ErrorInterceptor])
  )
];