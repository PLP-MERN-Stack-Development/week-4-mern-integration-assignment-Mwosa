# MERN Blog Application

## 🚀 Project Overview
A full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application that demonstrates seamless integration between front-end and back-end components. The app supports CRUD operations for blog posts and categories, with a modern UI using Tailwind CSS.

---

## 📦 Features Implemented
- **Full CRUD for Blog Posts**: Create, read, update, and delete posts
- **Category Management**: Create and list categories
- **RESTful API**: Well-structured endpoints for posts and categories
- **Input Validation**: Robust validation using express-validator
- **Error Handling**: Consistent error responses from the API
- **Modern UI**: Styled with Tailwind CSS
- **React Router**: Navigation between views
- **State Management**: React hooks for state and effects
- **Custom API Service**: Axios-based API abstraction

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-Mwosa.git
cd week-4-mern-integration-assignment-Mwosa
```

### 2. Install Dependencies
#### Server
```sh
cd server
npm install
```
#### Client
```sh
cd ../client
npm install
```

### 3. Environment Variables
Create `.env` files in both `server/` and `client/`:

#### `server/.env`
```
MONGODB_URI=mongodb://localhost:27017/mern_blog
PORT=5000
NODE_ENV=development
```

#### `client/.env`
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Start MongoDB
- Make sure MongoDB is running locally or update the URI for MongoDB Atlas.

### 5. Run the Application
#### Start the Server
```sh
cd server
npm start # or npx nodemon server.js
```
#### Start the Client
```sh
cd ../client
npm run dev
```
- The client will be available at `http://localhost:5173`

---

## 📚 API Documentation

### **Posts**
- `GET /api/posts` — Get all blog posts
- `GET /api/posts/:id` — Get a specific blog post
- `POST /api/posts` — Create a new blog post
  - **Body:** `{ "title": String, "content": String, "category": ObjectId }`
- `PUT /api/posts/:id` — Update an existing blog post
  - **Body:** `{ "title": String, "content": String, "category": ObjectId }`
- `DELETE /api/posts/:id` — Delete a blog post

### **Categories**
- `GET /api/categories` — Get all categories
- `POST /api/categories` — Create a new category
  - **Body:** `{ "name": String }`

### **Validation & Error Handling**
- All POST/PUT endpoints validate input and return errors in the format:
  ```json
  { "errors": [ { "msg": "Error message" } ] }
  ```

---

## 📝 Additional Notes
- **.env files** and `node_modules` are excluded from version control.
- For advanced features (auth, image upload, pagination, etc.), see project issues or roadmap.

---

## 👤 Author
- [Nelson Mwosa](https://github.com/Mwosa) 
