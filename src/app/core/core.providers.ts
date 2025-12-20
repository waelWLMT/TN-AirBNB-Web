import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "./http/auth.interceptor";
import { errorInterceptor } from "./http/error.interceptor";

export const CORE_PROVIDERS = [
  provideHttpClient(
    withInterceptors([authInterceptor, errorInterceptor])
  )
];