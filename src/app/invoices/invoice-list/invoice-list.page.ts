import { InvoicesService } from './../../services/invoices.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.page.html',
  styleUrls: ['./invoice-list.page.scss'],
})
export class InvoiceListPage implements OnInit {

  invoiceList: Invoice[];
  constructor(private invoiceService: InvoicesService,
              private router: Router) { }

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(data => {
      this.invoiceList = data;
    });
  }

  DetailByID(ID)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(ID)
      }
    };

    this.router.navigate(['/app/invoices/detial'], navigationExtras);
  }

}
