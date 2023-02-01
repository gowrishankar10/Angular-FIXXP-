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
validDate:any;
status:any;
items = ['Main Master'];
itemss = ['User Management '];
expandedIndex = 0;
LocalName:any=localStorage.getItem('name');
LocalId:any=localStorage.getItem('id');
  
  constructor(private ImagePromotionService: ImagePromotionService, private route: Router) { }

  
ngOnInit(): void {
    
  let date  = moment(new Date(this.today)).format("yyyy-MM-DDTHH:MM").toString();
  this.dateCheck = date; 

}

addpromotion(){
  let effdate = (<HTMLInputElement>document.getElementById('effdate')).value;
  let validdate = (<HTMLInputElement>document.getElementById('validdate')).value;
  let status = (<HTMLInputElement>document.getElementById('status')).value;
 
  let d = effdate.concat(":00");
  let effDate=new Date(d);

  let d1 = validdate.concat(":00");
  let vaiDate=new Date(d1);
  let input = new FormData();

  input.append('effectiveDate',JSON.stringify(effDate.getTime()));
  input.append('validUptoDate',JSON.stringify(vaiDate.getTime()));
  input.append('createdBy',this.LocalName);
  input.append('userId',this.LocalId);
  input.append('status','1')
  input.append('bannerImage',this.selectedFile);

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

 

