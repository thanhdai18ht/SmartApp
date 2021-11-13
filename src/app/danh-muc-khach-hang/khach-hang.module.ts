
import {NgModule} from "@angular/core";


import {SmartadminModule} from "../shared/smartadmin.module";
import {routing} from "./khach-hang.routing";
import { KhachHangAddComponent } from "./component/khach-hang-add/khach-hang-add.component";
import { KhachHangEditComponent } from "./component/khach-hang-edit/khach-hang-edit.component";
import { KhachHangListComponent } from "./component/khach-hang-list/khach-hang-list.component";
import { KhachHangService } from "./shares/khach-hang.service";

@NgModule({
  imports: [
    SmartadminModule,
    routing,
  ],

  declarations: [
    KhachHangAddComponent,
    KhachHangEditComponent,
    KhachHangListComponent
  ],
  exports: [
    KhachHangAddComponent,
    KhachHangEditComponent,
    KhachHangListComponent
  ],
  providers: [KhachHangService]
})
export class KhachHangModule{}
