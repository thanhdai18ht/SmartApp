import { Component, OnInit, Input } from '@angular/core';
import { KhachHangService } from 'app/danh-muc-khach-hang/shares/khach-hang.service';



@Component({
  selector: 'khach-hang-list',
  templateUrl: './khach-hang-list.component.html',
 // styleUrls: ['./khach-hang-list.component.scss']
})
export class KhachHangListComponent implements OnInit {

private _data;

  constructor(private khachhangService: KhachHangService) {
  }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.khachhangService.search().then(data => {
      this._data = data;
    
      this._data
  })
    
    
  }

}
