# Role-Based-Access-Control-RBAC-UI USING ANGULAR
Built an admin dashboard using Angular framework for managing users,roles and permission.The main goal of this project is to design a secure and user-friendly interface where administrators can assign roles,define permissions,and manage users effectively.

Admin Dashboard Management System:
This project is an Angular-based Admin Dashboard Management System that provides functionality to manage users, roles, and permissions. It allows you to create, edit, delete, and view users, roles, and permissions. The data is persisted across page refreshes using localStorage.

Features
User Management
Add: Add new users with name, email, and role.
Edit: Modify user details such as name, email, and role.
Delete: Remove users from the system.
Persistence: User data is stored in the browser's localStorage to retain it across page refreshes.

Role Management
Add: Create new roles with customizable permissions.
Edit: Modify existing roles and their permissions.
Delete: Remove roles from the system.
Permissions: Each role can have different permissions such as "Create User", "Edit User", "Delete User".
Persistence: Role data is saved in the browser’s localStorage.

Permission Management:
Add: Add new permissions.
Edit: Modify existing permissions.
Delete: Remove permissions.
Persistence: Permissions are stored in localStorage to persist data across page refreshes.

Navigation:
The application features a navigation menu to switch between different components (User Management, Role Management, Permission Management).
Each section has a user-friendly UI to manage users, roles, and permissions.

Project Structure:
src/app:
user-management: Handles user-related actions such as adding, editing, and deleting users.
role-management: Handles role-related actions such as creating, editing, deleting roles, and assigning permissions to roles.
permission-management: Manages permission creation, deletion, and editing.
app.component.ts: The main component that includes the global layout and navigation.
app.module.ts: The root module that sets up all the imports and components.
app.routes.ts: Defines the application routing to navigate between different components.

Prerequisites:
To set up and run this project, you need the following:

Node.js:
Ensure you have Node.js installed on your system.
npm is included with Node.js.
Run the following command to verify the installation:
npm --version

Angular CLI:
Install the Angular CLI globally to create, build, and serve Angular projects.
Run the following command to install Angular CLI:
npm install -g @angular/cli

Verify the installation:
ng version

Browser:
A modern web browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge to view the application.

Basic Knowledge:
Familiarity with HTML, CSS, and JavaScript.
Understanding of Angular Framework (components, modules, directives, etc.).
Basic knowledge of Bootstrap for styling and responsive design.
Experience with localStorage is helpful but not required.

Code Editor:
Use an editor like Visual Studio Code for development.

Technologies Used:
Angular: The front-end framework for building the user interface.
localStorage: Used for data persistence to store users, roles, and permissions in the browser.
Bootstrap: A CSS framework used for responsive layout and styling.

Setup Instructions:
Clone the repository:
git clone https://github.com/Kavishni06/Role-Based-Access-Control-RBAC-UI.git
Navigate to the project folder:
cd your-repository-name
Install dependencies:
npm install
Run the application:
ng serve
Open the browser and visit:
http://localhost:4200

Usage:
Once the app is running, you can:
Manage Users: Add, edit, and delete users.
Manage Roles: Add, edit, and delete roles, with customizable permissions.
Manage Permissions: Add, edit, and delete permissions.
All data will be saved locally in the browser's localStorage, so it persists even after refreshing the page.

Code Explanation:

User Management:
The UserManagementComponent handles the logic for adding, editing, and deleting users.
The user data is stored in an array, which is saved to localStorage for persistence.

Role Management:
The RoleManagementComponent allows users to create roles with specific permissions.
It has the functionality to edit existing roles and delete them.
Roles are stored in localStorage to persist data.

Permission Management:
The PermissionManagementComponent enables the addition, modification, and deletion of permissions.
Permissions are stored in localStorage.

localStorage Usage:
In each component, the data is stored in the localStorage to retain user, role, and permission data across refreshes.
When a new entry is added, edited, or deleted, the data is updated in localStorage.

Files & Components:
app.component.html: Contains the layout and navigation for the app.
user-management.component.ts: Logic for user-related actions.
role-management.component.ts: Logic for role-related actions.
permission-management.component.ts: Logic for permission-related actions.
app.routes.ts: Defines routing paths for navigation between components.

Local Storage Data Example:
Users:
json:
[
  { "name": "John Doe", "email": "john@example.com", "role": "Admin" },
  { "name": "Jane Smith", "email": "jane@example.com", "role": "User" }
]
Roles:
json
[
  { "name": "Admin", "permissions": { "Create User": true, "Edit User": true, "Delete User": true } },
  { "name": "User", "permissions": { "Create User": false, "Edit User": false, "Delete User": false } }
]
Permissions:
json
[
  { "name": "Create User", "description": "Allows creating users" },
  { "name": "Edit User", "description": "Allows editing user details" },
  { "name": "Delete User", "description": "Allows deleting users" }
]

This is the full explanation of the project.
Thank you.
