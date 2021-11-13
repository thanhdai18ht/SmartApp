import {Component, OnInit, Input} from '@angular/core';
import { KhachHangService } from 'app/danh-muc-khach-hang/shares/khach-hang.service';



@Component({

  selector: 'khach-hang-add',
  templateUrl: './khach-hang-add.component.html',
  //styleUrls: ['./khach-hang-add.component.scss']
})
export class KhachHangAddComponent implements OnInit {

  constructor(private eventsService: KhachHangService) {
  }

  ngOnInit() {
   
  }

}
