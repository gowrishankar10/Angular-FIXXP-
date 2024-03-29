import { InvoiceService } from '../Services/Invoice/invoice.service'; 
  import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/Login Service/login.service';
import { Component ,OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view-due-amount',
  templateUrl: './view-due-amount.component.html',
  styleUrls: ['./view-due-amount.component.css']
})
export class ViewDueAmountComponent implements OnInit {

  constructor(private LoginService:LoginService, private Router:Router,private ActivatedRoute :ActivatedRoute,private InvoiceService:InvoiceService) {}
  viewDue:any;
  due:any;
  DueSet:any;
    ngOnInit(): void {
 
    this.ActivatedRoute.queryParams.subscribe((param: any) => {
      this.DueSet = param.Due;
      console.log('NAN page ' + this.DueSet);
    });
    this.ActivatedRoute.params.subscribe((param: any) => {
      this.viewId(param.id);
    });

   
}


viewId (id:string)
{
  
  this.LoginService.ViewDueAmounts(id).subscribe((res:any)=>{
    this.viewDue = res.response;
    this.due=res.response[0].dueAmountId
    console.log("IM due AMOUNT"+res)
})
}

PDF(id:string)
{ 
 this.InvoiceService.DownloadPdf(this.DueSet).subscribe(pdfData => {
   saveAs(new Blob([pdfData]), '< DUES->.pdf');
  
 }); 
}
}
