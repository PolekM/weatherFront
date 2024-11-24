import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(catchError((error: HttpErrorResponse)=>{
  
    if(error.status== 404){
      router.navigate(['/error'])
      console.log("Not Found " + error.error.code +" " + error.error.message);
    }
    if(error.status== 400){
      console.log("Not Found " + error.error.code +" " + error.error.message);
    }
    if(error.status== 500){
      router.navigate(['/error'])
      console.log("Serwer Error " + error.error.code +" " + error.error.messagee);
    }
    return throwError(() => new Error(error.message));
  }))
};
