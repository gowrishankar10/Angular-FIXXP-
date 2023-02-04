import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketWorkersDocService } from '../services/TIcket Worker Document/ticket-workers-doc.service';

@Component({
  selector: 'app-view-ticket-workers-kyc-doc',
  templateUrl: './view-ticket-workers-kyc-doc.component.html',
  styleUrls: ['./view-ticket-workers-kyc-doc.component.css']
})
export class ViewTicketWorkersKycDocComponent {
  constructor(
    private imageService: TicketWorkersDocService,
   
    private activeRouter: ActivatedRoute
  ) {}
  dailyhelperDocId: any;
  imageUrl: any;
  dailyhelperFlag: any;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((param: any) => {
      
      this.dailyhelperDocId = param.id;
      this.dailyhelperFlag = param.name;

      console.log(this.dailyhelperDocId);
      console.log(this.dailyhelperFlag);
    });

    this.imageService.image().subscribe((data) => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string);
        this.imageUrl = reader.result as string;
      };
    });
  }
}

