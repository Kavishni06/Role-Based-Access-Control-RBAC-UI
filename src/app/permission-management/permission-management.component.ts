import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For ngModel binding

@Component({
  selector: 'app-permission-management',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include FormsModule for ngModel
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.css'],
})
export class PermissionManagementComponent {
  // Load permissions from localStorage, or use a default array if not found
  permissions = JSON.parse(localStorage.getItem('permissions') || '[]');

  // Properties for adding new permission
  newPermission = { name: '', description: '' };

  // Add new permission
  addPermission() {
    if (this.newPermission.name && this.newPermission.description) {
      this.permissions.push({ ...this.newPermission });
      localStorage.setItem('permissions', JSON.stringify(this.permissions)); // Save to localStorage
      this.newPermission = { name: '', description: '' }; // Reset the input fields
    }
  }

  // Edit an existing permission
  editPermission(index: number) {
    const permission = this.permissions[index];
    this.newPermission = { ...permission };
    this.permissions.splice(index, 1); // Remove the old permission temporarily for updating
  }

  // Delete a permission
  deletePermission(index: number) {
    this.permissions.splice(index, 1); // Remove the permission from the array
    localStorage.setItem('permissions', JSON.stringify(this.permissions)); // Save to localStorage
  }
}
