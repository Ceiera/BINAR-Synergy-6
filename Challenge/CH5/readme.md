
# Binar Challenge 5

Challenge 5 Binar is an Creating Example Backend for Cars Rental using Express JS, Knex JS as ORM, POSTGRESQL as Database, and Cloudinary as Storage

## Entity Relationship Diagram
![image](https://images2.imgbox.com/19/69/sXag3Sx8_o.png)





## API Reference

### GET all cars

```
  GET /api/cars
```
#### Response Success
```
  Status Code: 200
  {
     status: "OK",
     message: "Success retrived data cars",
     data: cars, 
  }
```
#### Response Failed
```
  Status Code: 500
  {
     error
  }
```

### GET Cars by id

#### Request Body
```
  GET /api/cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of cars to fetch |

#### Response Success
```
  Status Code: 200
  {
     status: "OK",
     message: "Success retrived data cars",
     data: cars, 
  }
```
#### Response Failed
```
  Status Code: 404
  {
     status: "ERROR",
     message: "Failed retrived data cars",
     data: [],
  }
```

```
  Status Code: 400
  {
     status: "ERROR",
     message: "Missing Params id",
     data: [],
  }
```

```
  Status Code: 500
  {
     error
  }
```

### GET Cars by size

```
  GET /api/cars/size
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `size`      | `string` | **Required**. size of cars to fetch |

#### Response Success
```
  Status Code: 200
  {
     status: "OK",
     message: "Success retrived data cars",
     data: cars, 
  }
```
#### Response Failed
```
  Status Code: 404
  {
     status: "ERROR",
     message: "Failed retrived data cars",
     data: [],
  }
```

```
  Status Code: 400
  {
     status: "ERROR",
     message: "Missing Query size",
     data: [],
  }
```

```
  Status Code: 500
  {
     error
  }
```

### POST Cars

```
  POST /api/cars
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of cars to fetch |
| `cost_per_day`      | `integer` | **Required**. cost_per_day of cars to fetch |
| `size`      | `string` | **Required**. size of cars to fetch |
| `car_picture`      | `file img` | **Required**. car_picture of cars to fetch |

#### Response Success
```
  Status Code: 201
  {
     status: "OK",
     message: "Success create data cars",
     data: cars, 
  }
```
#### Response Failed

```
  Status Code: 400
  {
     status: "ERROR",
     message: "Failed create data cars",
     data: [],
  }
```

```
  Status Code: 500
  {
     error
  }
```

### PATCH Cars

```
  PATCH /api/cars/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of cars to fetch |



| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of cars to fetch |
| `cost_per_day`      | `integer` | **Required**. cost_per_day of cars to fetch |
| `size`      | `string` | **Required**. size of cars to fetch |
| `car_picture`      | `file img` | **Required**. car_picture of cars to fetch |

#### Response Success
```
  Status Code: 200
  {
     status: "OK",
     message: "Success create data cars",
     data: cars, 
  }
```
#### Response Failed

```
  Status Code: 400
  {
     status: "ERROR",
     message: "Failed update data cars",
     data: [],
  }
```

```
  Status Code: 500
  {
     error
  }
```


### DELETE Cars by id

```
  DELETE /api/cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of cars to fetch |

#### Response Success
```
  Status Code: 200
  {
     status: "OK",
     message: "Success delete data cars",
     data: cars, 
  }
```
#### Response Failed

```
  Status Code: 400
  {
     status: "ERROR",
     message: "Failed delete data cars",
     data: [],
  }
```

```
  Status Code: 500
  {
     error
  }
```







## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLOUDINARY_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET`
`POSTGRESQL_HOST`
`POSTGRESQL_DATABASE` 
`POSTGRESQL_USER` 
`POSTGRESQL_PASSWORD`


## Installation

Install this repo with npm

```bash
  npm install
```

Install this repo with yarn

```bash
  yarn install
```

Start the server

```bash
  npm dev
  yarn dev
```


    
## Demo

Insert gif or link to demo

