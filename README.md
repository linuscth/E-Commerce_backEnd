# E-Commerce Back End

This is the back-end for an e-commerce site built using Express.js and Sequelize. It provides an API to interact with a MySQL database and perform CRUD operations on categories, products, and tags.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Video Walkthrough](#video-walkthrough)
- [Urls](#urls)

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone <repository-url>
   ```


## Usage

To start the application, run the following command:

```bash
npm install
```
Create a .env file in the root directory and add your MySQL database credentials as environment variables. For example:

```.env
DB_NAME='ecommerce_db'
DB_USER=''
DB_PASSWORD=''
```

Set up the database by running the provided schema.sql file in the db folder using MySQL shell commands.

```bash
mysql -u root -p
```

```bash
source db/schema.sql
```

Seed the database with test data.

```bash
npm run seed
```

Once the server is running, you can test the API routes using a tool like insomnia. The available routes are:

- GET /api/categories: Get all categories

- GET /api/categories/:id: Get a category by ID

- POST /api/categories: Create a new category

- PUT /api/categories/:id: Update a category by ID

- DELETE /api/categories/:id: Delete a category by ID

- GET /api/products: Get all products

- GET /api/products/:id: Get a product by ID

- POST /api/products: Create a new product

- PUT /api/products/:id: Update a product by ID

- DELETE /api/products/:id: Delete a product by ID

- GET /api/tags: Get all tags

- GET /api/tags/:id: Get a tag by ID

- POST /api/tags: Create a new tag

- PUT /api/tags/:id: Update a tag by ID

- DELETE /api/tags/:id: Delete a tag by ID


## Urls:

- github url: https://github.com/linuscth/E-Commerce_backEnd
- video url: https://drive.google.com/file/d/1hC_i2ain6GpIe60pHXTDBOE9Iyeq1JB8/view?usp=sharing

