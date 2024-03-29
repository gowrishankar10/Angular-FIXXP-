import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewSocietyLogoService } from '../services/Society Logo/view-society-logo.service';

@Component({
  selector: 'app-check-society-logo',
  templateUrl: './check-society-logo.component.html',
  styleUrls: ['./check-society-logo.component.css']
})
export class CheckSocietyLogoComponent {


  constructor(
    private imageService: ViewSocietyLogoService ,
   
    private activeRouter: ActivatedRoute
  ) {}
  societyId: any;
  imageUrl: any;
  dailyhelperFlag: any;
society :string ="Rainbow Appartment";
  ngOnInit(): void {
    this.activeRouter.params.subscribe((param: any) => {
      
      this.societyId = param.id;
      this.dailyhelperFlag = param.name;

      console.log(this.societyId);
      console.log(this.dailyhelperFlag);
    });

    

    this.imageService.image(this.societyId).subscribe((data) => {
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



