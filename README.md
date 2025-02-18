

# Noukori Gulp
**Noukori Gulp** is an Employee Management System designed for monitoring employee workload, maintaining records of salaries, and facilitating HR and Admin tasks. The platform supports employees to post updates, HR executives to manage workflow, and admins to oversee the system. 


  
## Links  

 -  [LIVE LINK](https://reliable-eclair-d8edc7.netlify.app/)   

- **Frontend GitHub Repository**: [Frontend Repository Link](https://github.com/kawsar334/Employee_Management_Client) 

- **Backend GitHub Repository**: [Backend Repository Link](https://github.com/kawsar334/Employee_Management_server)  
 

---


## Features

1. **Authentication**:  
   - Email/password-based registration and login.  
   - Role-specific authentication: Employee, HR, and Admin.  
   - Social login (e.g., Google) defaults the user role to Employee.  

2. **Responsive Design**:  
   - Fully optimized for mobile, tablet, and desktop views.  

3. **Home Page**:  
   - Banner showcasing company success.  
   - Services section detailing the company's offerings.  
   - Testimonials slider.  
   - Navbar and footer visible throughout the web app.  

4. **Employee Dashboard**:  
   - Work-sheet form to add daily tasks and working hours.  
   - Editable and deletable task table without page reload.  
   - Payment history table with pagination for salaries.  

5. **HR Dashboard**:  
   - Employee list with verification toggle and salary payment modal.  
   - Details page with a bar chart showing salary vs. month/year.  
   - Progress page with filtering by employee and month.  

6. **Admin Dashboard**:  
   - View all employees and HRs with options to fire or promote.  
   - Adjust employee/HR salaries (only increment allowed).  
   - Approve and execute payments from HR.  

7. **Role-Based Access Control**:  
   - Secure route handling via JWT middleware for role-specific operations.  

8. **Modern Frontend**:  
   - State management using TanStack Query for optimized data fetching.  
   - SweetAlert and toast notifications for all CRUD operations.  

9. **Database Security**:  
   - Environment variables to secure Firebase config keys and MongoDB credentials.  

10. **Contact Us Page**:  
    - Form for visitors to leave opinions, visible to admins.  


---

## Technologies Used

### **Frontend**:  
- React.js  
- Tailwind CSS  
- TanStack Query  
- React DatePicker  
- React Router DOM  
- SweetAlert  

### **Backend**:  

- **Node.js**: JavaScript runtime environment for building the backend API.
- **Express.js**: Web framework for Node.js used to build the API routes.
- **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
- **MongoDB**: NoSQL database for storing user, payment, and employee data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used for interacting with the database.
- **Bcrypt.js**: Password hashing library used for securely storing and verifying user passwords.

### **Authentication**:  
- Firebase Authentication  
- JSON Web Token (JWT)  

### **Additional Libraries**:  

- Axios  

---


### Authentication Routes  

- `POST /api/auth/register` - Register a new user.  
- `POST /api/auth/login` -  Authenticates a user and returns a token. 
- `POST /api/auth/google` -  Authenticates a user and returns a token. 

- `GET /api/jwt` -  Fetches a JWT token.
- `POST /api/auth/logout` -  Logs out a user by invalidating their token. 

### Authentication Routes  

- `POST /api/auth/send` -  (Public) Sends a message to the admin. Used for reporting purposes.  
- `GET /api/GET /messages` -(Admin Only) Retrieves all messages for the admin dashboard. Requires admin authentication.




### Employee Management Routes (For HR and Admin) 
- `GET /api/getEmployeeDetails/:id` - (HR Only) Retrieves the details of a specific employee. 
- `Get /api/getPaymentHistory` -  (Authenticated User) Retrieves the payment history for the logged-in user.
- `GET /api/details/:slug` - (HR Only) Retrieves user details by slug.. 
- `Get /api/getPaymentHistory` -  (Authenticated User) Retrieves the payment history for the logged-in user.
### Employee   
- `get /api/all-employee-list` -  (Admin Only) Retrieves a list of all employees. Requires admin authentication.  
- `GET /api/fired/:userId` - (Admin Only) Marks an employee as fired. Requires admin authentication. 
- `GET /api/unfired/:userId` - (Admin Only) Reverts the firing status of an employee. Requires admin authentication.
- `put /api/make-hr/:userId` - (Admin Only) Promotes an employee to HR. Requires admin authentication.. 
- `put /api/adjust-salary/:userId` - (Admin Only) Adjusts the salary of an employee. Requires admin authentication.
### Payment Routes (For Admin and Users)
- `POST /createpay/:id` : (Authenticated User) Creates a payment record for a user.
- `GET /payment-history` : (Authenticated User) Retrieves the payment history for the logged-in user.
- `PUT /updatestatusOfPayment/:id` : (Admin Only) Updates the payment status for a user. Requires admin authentication.
---
### Conclusion

This API enables you to handle authentication, messaging, payments, and employee management for your system. Be sure to authenticate the appropriate roles before accessing sensitive endpoints.






