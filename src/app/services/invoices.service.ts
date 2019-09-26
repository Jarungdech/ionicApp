import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Invoice, InvoiceItems } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseUrl + '/invoices');
  }

  getInvoicesyId(id: number): Observable<InvoiceItems[]> {
    return this.http.get<InvoiceItems[]>(`${this.baseUrl}/invoices/${id}`);
  }
}
