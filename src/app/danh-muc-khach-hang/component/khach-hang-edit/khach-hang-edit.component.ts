import {Component, OnInit, Input} from '@angular/core';
import { KhachHangService } from 'app/danh-muc-khach-hang/shares/khach-hang.service';



@Component({

  selector: 'khach-hang-edit',
  templateUrl: './khach-hang-edit.component.html',
  //styleUrls: ['./khach-hang-edit.component.scss']
})
export class KhachHangEditComponent implements OnInit {

  
  constructor(private eventsService: KhachHangService) {
  }

  ngOnInit() {
  }

}
