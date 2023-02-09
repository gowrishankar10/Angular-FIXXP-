import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitorsImagesService } from '../services/VIsitors Image/visitors-images.service';

@Component({
  selector: 'app-checkvisitorsimage',
  templateUrl: './checkvisitorsimage.component.html',
  styleUrls: ['./checkvisitorsimage.component.css']
})
export class CheckvisitorsimageComponent {

  constructor(
    private imageService: VisitorsImagesService ,
   
    private activeRouter: ActivatedRoute
  ) {}
  visitorId: any;
  imageUrl: any;
  dailyhelperFlag: any;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((param: any) => {
      
      this.visitorId = param.id;
      this.dailyhelperFlag = param.name;

      console.log(this.visitorId);
      console.log(this.dailyhelperFlag);
    });

    

    this.imageService.image(this.visitorId).subscribe((data) => {
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





