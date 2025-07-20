# Product-Catalog-API-Project

* Video Walkthrough:**  
 (https://your-video-link.com)  
---

## Product Catalog API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. This backend powers a product catalog like an e-commerce platform and supports full CRUD operations, inventory tracking, product variants, category filtering, search, and more.

---

##  Features

-  Product CRUD (Create, Read, Update, Delete)
-  Category CRUD (if added)
-  Search by name and filter by category or price range
-  Product variants (e.g., size, color)
-  Inventory tracking (stock levels)
-  Discounted pricing
-  Low-stock reporting
-  Express validation & error handling
-  Swagger UI for live API documentation
-  Works with Postman, Thunder Client, Insomnia

---

##  Tech Stack

| Layer        | Tech                 |
|--------------|----------------------|
| Backend      | Node.js, Express.js  |
| Database     | MongoDB + Mongoose   |
| Validation   | express-validator    |
| Docs & Tests | Swagger UI, Postman  |

---

##  Folder Structure
Product-Catalog-API-Project/
├── src/
│ ├── controllers/ # Controller logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route files
│ ├── swagger.js # Swagger config
│ └── server.js # Main server file
├── .env # Environment variables
├── .gitignore
├── package.json
├── README.md # ← You're here

yaml
Copy
Edit

---

##  Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Mgrace1/Product-Catalog-API-Project.git
cd Product-Catalog-API-Project
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup .env File
Create a .env file in the root with:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/product_catalog
4. Start MongoDB
Make sure MongoDB is running locally:

bash
Copy
Edit
mongod
5. Run the Project
bash
Copy
Edit
npm run dev
 API Documentation
Visit Swagger UI in your browser:

bash
Copy
Edit
http://localhost:5000/api-docs
🔗 Main Endpoints
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get product by ID
POST	/products	Create new product
PUT	/products/:id	Update existing product
DELETE	/products/:id	Delete product
GET	/products/low-stock	Get products with low inventory
GET	/products?search=phone	Search by name
GET	/products?category=ID	Filter by category
GET	/products?minPrice=10&maxPrice=100	Filter by price

Sample Request – Create Product
http
Copy
Edit
POST /products
Content-Type: application/json

{
  "name": "Modern Chair",
  "description": "Comfortable ergonomic chair",
  "price": 120,
  "discount": 10,
  "stock": 12,
  "category": "64abce1234abcd5678efgh90",
  "variants": [
    { "size": "Medium", "color": "Black", "stock": 5 },
    { "size": "Large", "color": "Gray", "stock": 7 }
  ]
}
 Testing with Insomia / Post man
 GET /products

 GET /products?search=phone

 POST /products

 PUT /products/:id

 DELETE /products/:id

 Input Validation
Required fields: name, price, category, stock

Validations:

price, stock, discount must be numbers

Clean and sanitized inputs using express-validator

Proper 400 and 500 error messages

 Low Stock Reporting
http
Copy
Edit
GET /products/low-stock?threshold=5
Optional query param threshold sets the low-stock level (default is 5).

 Example Category IDs
json
Copy
Edit
[
  {
    "_id": "64eea01e8bc4c22a8b199ef5",
    "name": "Electronics",
    "description": "Phones, gadgets, etc."
  },
  {
    "_id": "64eea02a8bc4c22a8b199ef6",
    "name": "Books",
    "description": "Reading materials"
  }
]
 Best Practices Used
 Clean folder structure

 .env file for environment management

 Input validation

 Swagger docs

 Modular route/controller/model structure

 JWT-ready setup for future auth (optional)

 Contributing
Feel free to fork and submit PRs. This project is great for learning backend basics!

 License
MIT – Free for personal and commercial use.

Owner
Mgrace1 – GitHub Profile


---

```bash
git add .
git commit -m "initial commit"
git push
