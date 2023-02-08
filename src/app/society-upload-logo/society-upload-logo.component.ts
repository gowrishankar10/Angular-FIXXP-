import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocietyUploadLogoService } from '../services/society Upload Logo/society-upload-logo.service';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-society-upload-logo',
  templateUrl: './society-upload-logo.component.html',
  styleUrls: ['./society-upload-logo.component.css']
})
export class SocietyUploadLogoComponent implements OnInit{
  postPromo: any;

  constructor(
    private ImagePromotionService: SocietyUploadLogoService,
    private route: Router,
    private toastr: ToastrService,
    private activeRouter:ActivatedRoute
  ) {}
  societyValue:any;

  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.societyValue = param.societyId;
     
      console.log('this param EDIT' + this.societyValue);
      
    });
  }
  

  selectedFile: any = ImageSnippet;

  processFile(imageInput: any) {
   

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      const formData = new FormData();

 
      formData.append('id', this.societyValue);
      formData.append('societyLogo', this.selectedFile.file);
      this.ImagePromotionService.uploadImage(formData).subscribe((res: any) => {
        this.postPromo = res.response;
        if (res.flag === 1) {
          this.toastr.info(res.message);
        }
      });
    });

    reader.readAsDataURL(file);
  }

  
  DashboardComponent()
  {
    this.route.navigateByUrl(`/dashboard`);
  }
  SocietyComponent()
  {
    this.route.navigateByUrl(`/society`);
  }
  TransactionhitoryComponent()
  {
    this.route.navigateByUrl(`/transactionhistory`);
  }
  TicketsComponenets()
  {
    this.route.navigateByUrl(`/tickets`);
  }
  ManagerComponents()
  {
    this.route.navigateByUrl(`/manager`);
  }
  UsermanagementComponent()
  {
    this.route.navigateByUrl(`/usermanagement`);
  }
  ListcityComponent()
  {
    this.route.navigateByUrl(`/listcity`);
  }
  ListpincodeComponenet()
  {
    this.route.navigateByUrl(`/listpincode`);
  }

  ListstateComponent()
  {
    this.route.navigateByUrl(`/liststate`);
  }
  RolelistComponent()
  {
    this.route.navigateByUrl(`/rolelist`);
  }
  SocietyBasedVisitorsComponent()
  {
    this.route.navigateByUrl(`/society-based-visitors`);
  }
  SocietyDailyWorkersComponent()
  {
    this.route.navigateByUrl(`/society-daily-workers`);
  }
  SocietyEmergencyContactComponent()
  {
    this.route.navigateByUrl(`/society-emergency-contact`);
  }
  SocietySecurityGuardComponent()
  {
    this.route.navigateByUrl(`/society-security-guard`);
  }
  SocietyTicketWorkersComponent()
  {
    this.route.navigateByUrl(`/society-ticket-workers`);
  }

  VisitorCategoryComponent()
  {
    this.route.navigateByUrl(`/visitors-category`);
  }
  ComplaintCategory()
  {
    this.route.navigateByUrl(`/raised-Complaint`);
  }
  DaikyHelp()
  {
    this.route.navigateByUrl(`/daily-helper-category`);
  }
  SocietyPromotion()
  {
    this.route.navigateByUrl(`/society-promotions`);
  }
}


