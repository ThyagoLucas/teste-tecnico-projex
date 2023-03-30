import { Injectable } from '@angular/core';
import {  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor  implements HttpInterceptor{

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
		): Observable<HttpEvent<any>> {

		let token: string = <string>localStorage.getItem('token');
		let authReq = req;

		authReq = req.clone({
			headers: req.headers.set('Authorization', `Bearer ${token}`),
		});

		return next.handle(authReq);
	}
}

