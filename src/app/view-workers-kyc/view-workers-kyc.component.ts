import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DailyhelpersviewKycService } from '../Services/Daily Helpers/dailyhelpersview-kyc.service';
@Component({
  selector: 'app-view-workers-kyc',
  templateUrl: './view-workers-kyc.component.html',
  styleUrls: ['./view-workers-kyc.component.css'],
})
export class ViewWorkersKycComponent implements OnInit {
  constructor(
    private imageService: DailyhelpersviewKycService,
    private sanitizer: DomSanitizer,
    private activeRouter: ActivatedRoute
  ) {}
  dailyhelperDocId: any;
  imageUrl: any;
  dailyhelperFlag: any;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((param: any) => {
      
      this.dailyhelperDocId = param.id;
      this.dailyhelperFlag = param.name;

      console.log("im console "+this.dailyhelperDocId);
      console.log(this.dailyhelperFlag);
    });

    this.imageService.image(this.dailyhelperDocId,this.dailyhelperFlag).subscribe((data) => {
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
