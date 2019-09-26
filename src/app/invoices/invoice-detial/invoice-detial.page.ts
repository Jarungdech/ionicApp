import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';
import { InvoicesService } from './../../services/invoices.service';

@Component({
  selector: 'app-invoice-detial',
  templateUrl: './invoice-detial.page.html',
  styleUrls: ['./invoice-detial.page.scss'],
})
export class InvoiceDetialPage implements OnInit {

  data: number;
  invoiceDetail: Invoice[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private invoiceService: InvoicesService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.data = JSON.parse(params.id);
      }
    });

    this.invoiceService.getInvoices().subscribe(x => {
      this.invoiceDetail = x;
      console.log(this.invoiceDetail);
    });
  }
    

}
