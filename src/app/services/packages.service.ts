import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  private apiUrl = 'https://ajyalalquran.somee.com/api/Subscribe';

  constructor(private http: HttpClient) {}

  getPackages(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
}
