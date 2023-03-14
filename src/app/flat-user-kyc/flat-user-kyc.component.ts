import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatUserKycService } from '../services/UserKyc/flat-user-kyc.service';

@Component({
  selector: 'app-flat-user-kyc',
  templateUrl: './flat-user-kyc.component.html',
  styleUrls: ['./flat-user-kyc.component.css']
})
export class FlatUserKycComponent {


  constructor(
    private imageService: FlatUserKycService,
   
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



