
# FILE-MANAGEMENT 

Backened Server : 
 1. Upload a file
 2. Get list of all the files
 3. Download a file
 4. Update a file
 5. Delete a file
 


## Tech Stack


**Server:** Node, Express

**Database:** MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/monster256/webteam-task-3.git
```

Go to the project directory

```bash
  cd webteam-task-3
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon index.js
```

## API
### Link Heroku

```bash
   https://web-team-task-3.herokuapp.com/
```
## API Reference

#### UPLOAD  FILES

```http
  POST /upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Name` | `string` | **Required**. Name  |
| `fileImage` | `file` | **Required**.File must be selected (Any type of File ex: pdf,jpg,etc..)|

#### GET ALL FILES DETAILS

```http
  GET /getdetail
```

#### DOWNLOAD A FILE

```http
  PUT /download/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of File to Download |

#### UPDATE A FILE 

```http
  GET /update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of File to Update |

#### DELETE A FILE

```http
  GET /delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of File to Delete |



