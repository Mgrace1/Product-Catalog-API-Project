# Product Catalog API Project

A RESTful API for managing products and categories, built using **Node.js**, **Express**, and **MongoDB**. It supports creating, reading, updating, and deleting products, as well as filtering, searching, and checking low stock.

##  Video Walkthrough  
https://youtu.be/OG0yk_MDBSI

---

##  Features

- Add, edit, delete, and view products
- Search by name
- Filter by category and price range
- Track stock levels 
- Organized folder structure
- Tested using Insomnia/Postman
- Swagger documentation

---

## Tech Stack

| Layer        | Tech                 |
|--------------|----------------------|
| Backend      | Node.js, Express.js  |
| Database     | MongoDB, Mongoose    |
| Docs & Tests | Swagger UI, Insomnia |
| Validation   | express-validator    |

---

##  Folder Structure

```

Product-Catalog-API-Project/
│
├── src/
│   ├── controllers/       
│   ├── models/         
│   ├── routes/           
│   ├── swagger.js         
│   └── server.js          
│
├── .env                
├── .gitignore
├── package.json
├── README.md              # 

````

---

## ⚙️ Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/Mgrace1/Product-Catalog-API-Project.git
cd Product-Catalog-API-Project
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root folder with:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/product_catalog
```

### 4. Start MongoDB Locally

```bash
mongod
```

### 5. Start the Project

```bash
npm run dev
```
---

## API Documentation

Visit Swagger UI:

```bash
http://localhost:5000/api-docs
```

---

##  Main API Endpoints

| Method | Endpoint                              | Description             |
| ------ | ------------------------------------- | ----------------------- |
| GET    | `/products`                           | Get all products        |
| GET    | `/products/:id`                       | Get product by ID       |
| POST   | `/products`                           | Create new product      |
| PUT    | `/products/:id`                       | Update product by ID    |
| DELETE | `/products/:id`                       | Delete product by ID    |
| GET    | `/products/low-stock`                 | Products with stock < 5 |
| GET    | `/products?name=phone`                | Search products by name |
| GET    | `/products?category=ID`               | Filter by category      |
| GET    | `/products?price[gte]=X&price[lte]=Y` | Filter by price range   |

---


##  Validation Rules

* Required: `name`, `price`, `stock`, `category`
* Fields like `price`, `discount`, and `stock` must be numbers
* Uses `express-validator` to validate and sanitize input
* Returns proper error messages on invalid input

---

##  Low Stock Reporting

```http
GET /products/low-stock
```

* Returns products with stock less than 5
* You can adjust threshold with query param:
  `/products/low-stock?threshold=3`

---

##  Example Categories

```json
[
  {
    "_id": "64eea01e8bc4c22a8b199ef5",
    "name": "Electronics",
    "description": "Phones, gadgets, etc."
  },
]
```
---

##

* Clean folder structure with MVC pattern
* Environment variables with `.env`
* Input validation and error handling
* API documentation with Swagger
* Easy to test in tools like Postman or Insomnia
* JWT-ready setup (optional for future use)

---

##  Owner

**Mgrace1**
🔗 [GitHub Profile](https://github.com/Mgrace1)

---



