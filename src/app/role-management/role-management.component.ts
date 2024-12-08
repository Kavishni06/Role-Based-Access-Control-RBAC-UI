import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent {
  // Load roles from localStorage, or use a default array if not found
  roles = JSON.parse(localStorage.getItem('roles') || '[]');

  availablePermissions: string[] = ['Create User', 'Edit User', 'Delete User']; // Define available permissions
  roleForm: any = { name: '', permissions: {} }; // Initialize permissions as an empty object

  isFormVisible = false;
  isEditMode = false;
  currentRole: any = null;

  openAddRoleForm() {
    this.isFormVisible = true;
    this.isEditMode = false;
    // Initialize permissions as false for each available permission
    this.roleForm = {
      name: '',
      permissions: this.availablePermissions.reduce((acc: any, permission) => {
        acc[permission] = false;
        return acc;
      }, {}),
    };
  }

  editRole(role: any) {
    this.isFormVisible = true;
    this.isEditMode = true;
    this.currentRole = role;
    this.roleForm = { ...role };  // Pre-fill the form with current role data
  }

  submitForm() {
    if (this.isEditMode) {
      const index = this.roles.indexOf(this.currentRole);
      if (index !== -1) {
        this.roles[index] = { ...this.roleForm };
      }
    } else {
      this.roles.push({ ...this.roleForm });
    }

    localStorage.setItem('roles', JSON.stringify(this.roles)); // Save to localStorage
    this.closeForm();
  }

  closeForm() {
    this.isFormVisible = false;
    this.roleForm = { name: '', permissions: {} }; // Reset permissions
  }

  deleteRole(role: any) {
    const index = this.roles.indexOf(role);
    if (index !== -1) {
      this.roles.splice(index, 1);
      localStorage.setItem('roles', JSON.stringify(this.roles)); // Save to localStorage
    }
  }

  getPermissions(role: any): string {
    return Object.keys(role.permissions)
      .filter(permission => role.permissions[permission])
      .join(', ');
  }
}
