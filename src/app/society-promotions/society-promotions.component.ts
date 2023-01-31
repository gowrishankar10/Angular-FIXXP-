import { ImagePromotionService } from './../services/promition service/image-promotion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-society-promotions',
  templateUrl: './society-promotions.component.html',
  styleUrls: ['./society-promotions.component.css']
})
export class SocietyPromotionsComponent implements OnInit {
  http: any;

  selectedFile: any= ImageSnippet ;
dateCheck: any;
today=new Date();
effeDate:any;
validDate:any;;
items = ['Main Master'];
itemss = ['User Management '];
expandedIndex = 0;
  
  constructor(private ImagePromotionService: ImagePromotionService, private route: Router) { }

  
ngOnInit(): void {
    
  let date  = moment(new Date(this.today)).format("yyyy-MM-DDTHH:MM").toString();
  this.dateCheck = date; 

}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.ImagePromotionService.uploadImage(this.selectedFile.file).subscribe(

        (res) => {
        
       
        })
    });

    reader.readAsDataURL(file);
  }

  
}

 

