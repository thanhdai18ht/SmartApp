import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import { KhachHangAddComponent } from "./component/khach-hang-add/khach-hang-add.component";
import { KhachHangEditComponent } from "./component/khach-hang-edit/khach-hang-edit.component";
import { KhachHangListComponent } from "./component/khach-hang-list/khach-hang-list.component";

export const routes: Routes = [

  {
    path: '',
    component: KhachHangListComponent,
    data: {pageTitle: 'Danh sách khách hàng'}
  },
  {
    path: 'edit',
    component: KhachHangEditComponent,
    data: {pageTitle: 'cập nhật khách hàng'}
  },

  {
    path: 'add',
    component: KhachHangAddComponent,
    data: {pageTitle: 'Thêm khách hàng'}
  },


];

export const routing = RouterModule.forChild(routes);
