import { Component ,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DailyhelpersviewKycService } from '../services/dailyhelpersview-kyc.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-view-workers-kyc',
  templateUrl: './view-workers-kyc.component.html',
  styleUrls: ['./view-workers-kyc.component.css']
})
export class ViewWorkersKycComponent implements OnInit {

  constructor(private imageService: DailyhelpersviewKycService, private sanitizer: DomSanitizer,) {
    
  }
  imageUrl:any;                     

  ngOnInit(): void {      
   
    this.imageService.image().subscribe(data => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        console.log(data);
        console.log(reader.result as string)
        this.imageUrl = reader.result as string;
      };
    });
  }
}

