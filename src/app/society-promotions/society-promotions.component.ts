import { LoginService } from './../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
export class SocietyPromotionsComponent {
  // http: any;

  // selectedFile: any= ImageSnippet ;

  
  // constructor(private ImagePromotionService: ImagePromotionService, private route: Router) { }

  
  // private onSuccess() {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'ok';
  // }

  // private onError() {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'fail';
  //   this.selectedFile.src = '';
  // }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.selectedFile.pending = true;
  //     this.ImagePromotionService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {
  //         this.onSuccess();
  //       },
  //       (err) => {
  //         this.onError();
  //       })
  //   });

  //   reader.readAsDataURL(file);
  // }
}

 

