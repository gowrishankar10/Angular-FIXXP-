import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocietyManagerKycService} from '../services/Society Manager KYC/society-manager-kyc.service';
@Component({
  selector: 'app-view-society-manager-kyc',
  templateUrl: './view-society-manager-kyc.component.html',
  styleUrls: ['./view-society-manager-kyc.component.css']
})
export class ViewSocietyManagerKycComponent {
  constructor(
    private SocietyManagerKycService : SocietyManagerKycService,
    private route: Router,
    private activeRouter: ActivatedRoute
  ) {}
  dailyhelperDocId: any;
  imageUrl: any;
  dailyhelperFlag: any;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((param: any) => {
      
      this.dailyhelperDocId = param.id;

      console.log(this.dailyhelperDocId);
      console.log(this.dailyhelperFlag);
    });

    this.SocietyManagerKycService.image().subscribe((data) => {
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
