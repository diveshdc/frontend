import { Observable } from 'rxjs';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

export class MyInterceptor implements HttpInterceptor {
    authHeader: any

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.setUser();
        if (this.authHeader == null) {
            return next.handle(req.clone())
        }
        const clonedReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + this.authHeader)});
        return next.handle(clonedReq);
    }

    setUser() {
        this.authHeader = localStorage.getItem('la_user_token');
    }
}
