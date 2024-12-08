import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  // Load users from localStorage, or use a default array if not found
  users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // User form data
  userForm = {
    name: '',
    email: '',
    role: ''
  };

  // Flags for form visibility and mode (Add/Edit)
  isFormVisible = false;
  isEditMode = false;
  currentUser: any = null;  // To hold the user being edited

  // Method to show the form in 'Add User' mode
  openAddUserForm() {
    this.isFormVisible = true;
    this.isEditMode = false;
    this.userForm = { name: '', email: '', role: '' };  // Clear form
  }

  // Method to show the form in 'Edit User' mode
  editUser(user: any) {
    this.isFormVisible = true;
    this.isEditMode = true;
    this.currentUser = user;
    this.userForm = { ...user };  // Pre-fill the form with current user data
  }

  // Method to submit the form (add/edit user)
  submitForm() {
    if (this.isEditMode) {
      // Edit existing user
      const index = this.users.indexOf(this.currentUser);
      if (index !== -1) {
        this.users[index] = { ...this.userForm }; // Update user in array
      }
    } else {
      // Add new user
      this.users.push({ ...this.userForm });
    }

    localStorage.setItem('users', JSON.stringify(this.users)); // Save to localStorage
    this.closeForm();  // Close form after submit
  }

  // Method to cancel and close the form
  closeForm() {
    this.isFormVisible = false;
    this.userForm = { name: '', email: '', role: '' };  // Clear form
  }

  // Method to delete a user
  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users)); // Save to localStorage
    }
  }
}
