import { Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { PermissionManagementComponent } from './permission-management/permission-management.component';

export const routes: Routes = [
  { path: 'user-management', component: UserManagementComponent },
  { path: 'role-management', component: RoleManagementComponent },
  { path: 'permission-management', component: PermissionManagementComponent },
  { path: '', redirectTo: '/user-management', pathMatch: 'full' },
];
