
# Task Management System – Frontend (Next.js)


This is the **frontend web application** for the Task Management System.


It is built using:


- **Next.js (App Router)**
- **TypeScript**
- **Axios**
- **Tailwind CSS**
- **JWT Authentication (Access + Refresh Token)**


---


## 🚀 Features Implemented


### ✅ Authentication


- User Registration
- User Login
- Secure token storage (Access Token + Refresh Token)
- Auto-refresh access token when expired
- Logout functionality


### ✅ Task Dashboard


- View all personal tasks
- Add new tasks
- Edit tasks
- Delete tasks
- Toggle task status (Completed/Pending)


### ✅ Advanced Task List Features


- Pagination (Load More)
- Search tasks by title
- Filter tasks by status


### ✅ UI Enhancements


- Responsive design (Mobile + Desktop)
- Toast notifications for actions


---


## 📂 Folder Structure


<pre>
task-manager-frontend/
│
├── app/
│ ├── login/ # Login Page
│ ├── register/ # Register Page
│ ├── dashboard/ # Task Dashboard
│ ├── layout.tsx # Root Layout + Toast Setup
│ └── page.tsx # Redirect to Login
│
├── src/
│ ├── services/
│ │ ├── api.ts # Axios instance + Refresh logic
│ │ ├── auth.ts # Auth API calls
│ │ └── tasks.ts # Task CRUD API calls
│ │
│ ├── components/
│ │ ├── TaskForm.tsx # Add/Edit Task Form
│ │ └── TaskItem.tsx # Task Card UI
│ │
│ └── utils/
│ └── token.ts # Token helper functions
│
└── package.json
</pre>


---


## ⚙️ Setup Instructions


### 1️⃣ Clone the Repository


```bash
git clone <your-repo-url>
cd task-manager-frontend
2️⃣ Install Dependencies
npm install
3️⃣ Configure Backend API URL

Ensure your backend is running at:

http://localhost:5000

Frontend Axios Base URL is set in:

📌 src/services/api.ts

baseURL: "http://localhost:5000";
4️⃣ Run the Frontend Application
npm run dev

Application will start at:

http://localhost:3000
🔑 Authentication Flow

User logs in using /login

Backend returns:

Access Token (short-lived)

Refresh Token (long-lived)

Tokens are stored in localStorage

Axios automatically refreshes the access token when expired

📌 API Endpoints Used
Auth APIs
Endpoint	Method	Description
/auth/register	POST	Register user
/auth/login	POST	Login user
/auth/refresh	POST	Refresh access token
/auth/logout	POST	Logout user
Task APIs (Protected)
Endpoint	Method	Description
/tasks	GET	Fetch tasks (pagination + search + filter)
/tasks	POST	Create task
/tasks/:id	PATCH	Update task
/tasks/:id	DELETE	Delete task
/tasks/:id/toggle	PATCH	Toggle status


👨‍💻 Author

Ayush Pandey
Full Stack Developer
