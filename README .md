
# StayWise

A dynamic RESTful API for managing a booking platform where users can register, create listings, make bookings, and manage their wish lists. This platform allows hosts to list properties, and guests to browse, view, and book available listings.


## Deployment
**Go to upper right corner first signup and login and then proceed to dashboard:**  

https://staywise-client.onrender.com


## Features

- **User Authentication**: Secure user authentication and authorization with JWT-based login.
- **Property Listings**: Hosts can create, manage, and showcase property listings with details such as location, amenities, price, and photos.
- **Booking Management**: Guests can book properties, view booking details, and manage their bookings.
- **Wishlist**: Users can save their favorite listings for future reference.
- **Reservation List**: Hosts and users can view all reservations for their listed properties.
- **Assets Management**: Users can upload and manage photos for property listings.
- **Property Categories**: Properties can be listed under different categories such as "apartment," "villa," or "office space" for easier browsing.
- **Search and Filter**: Users can search for properties based on filters like location, price range, amenities, and availability.

## Tech Stack

- **Node.js**: A JavaScript runtime environment used to build scalable and efficient server-side applications.
- **Express.js**: A web framework for Node.js used to handle routing, middleware, and request management.
- **MongoDB**: A NoSQL database used for storing property listings, user profiles, bookings, and other related data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB used to define data models and interact with the database.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and authorization, enabling stateless sessions.
- **Bcrypt.js**: A library used to hash passwords, providing secure password storage.
- **Multer**: Middleware used for handling image uploads for property photos.
- **SCSS (Sass)**: A preprocessor for CSS that enhances stylesheets with features like variables, nested rules, and mixins, improving maintainability and scalability.
## API Reference

#### Get all items

```http
  GET /api/properties
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none`    | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/properties/:id
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :--------------------------------    |
| `id`      | `string` | **Required**. The ID of the property |


#### Search for properties

```http
  GET /api/properties/search/:search
```

| Parameter     | Type     | Description                          |
| :--------     | :------- | :--------------------------------    |
| `search`      | `string` | **Required**. The ID of the property |


#### Get property by category

```http
  GET /api/properties/category/:category
```

| Parameter       | Type     | Description                          |
| :--------       | :------- | :--------------------------------    |
| `category`      | `string` | **Required**. The ID of the property |


#### Get property details

```http
  GET /api/properties/:id
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :--------------------------------    |
| `id`      | `string` | **Required**. The ID of the property |


#### Create a new property listing

```http
  POST /api/properties/create
```

| Parameter            | Type     | Description                          |
| :--------            | :------- | :--------------------------------    |
| `listingData	`      | `object` | **Required**. The ID of the property |

#### Get user trip list

```http
    GET /api/:userId/trips
```

| Parameter      | Type     | Description                                        |
| :--------      | :------- | :--------------------------------                  |
| `iuserId`      | `string` | **Required**. The user ID to fetch their trip list |

#### Get user wishlist

```http
      GET /api/:userId/wishList
```

| Parameter      | Type     | Description                                        |
| :--------      | :------- | :--------------------------------                  |
| `userId`       | `string` | **Required**. The user ID to fetch their wishlist. |

#### Get user reservations list

```http
    GET /api/:userId/reservations
```

| Parameter     | Type     | Description                            |
| :--------     | :------- | :--------------------------------      |
| `userId`      | `string` | **Required**. fetch reservations list. |
## Installation

Clone the project

```bash
  https://github.com/Shashank280804/StayWise.git
```

Go to the project directory

```bash
  cd StayWise
```

Install dependencies

```bash
  npm install
```

Create a .env file and set the required environment variables

```bash
  MONGO_URI=your-mongodb-uri
  JWT_SECRET=your-jwt-secret
```

Start the server

```bash
  npm run start
```

