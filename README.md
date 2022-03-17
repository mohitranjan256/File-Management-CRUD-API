
# USER-MANAGEMENT 

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
### Link

```bash
  link heroku 
```

 1. Upload a file : 
    METHOD : POST
    END POINT : /upload/
    FEILDS :
     a.Name
     b.fileImage(File that has to uploaded)
 2. Get list of all the files :
    METHOD : GET
    END POINT : /getdetail/
 3. Download a file :
    METHOD : GET
    END POINT : /getdetail/id
 4. Update a file :
    METHOD : PUT
    END POINT : /update/id
 5. Delete a file :
    METHOD : GET
    END POINT : /delete/id

