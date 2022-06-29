## Intro 
The purpose of this project was to improve the lives of bootcampers!
Hence, we created a platform that allows bootcampers to collaborate on side-projects by matching them depending on their preferences. 

The backend of the project includes the following:
- RESTful API which is used by our front-end.
- Supported by a Postgresql database.
- Built and managed in an agile way.
- Utilise testing for ensuring robust code.

## Getting Started
1. `cd` into `my-app` folder. Run `npm i` to install required dependencies.
2. Familiarise yourself with the contents and structure of the `route` folder. Here, you can find the different paths and CRUD operations to our server.

### Set up your database config
1. Create a .env file in the root directory.
2. Create a database using any cloud application platform. For this project, we used Heroku to host our database.
3. Add your database configuration to the .env file, with the credentials from your database:

```
PGHOST=
PGUSER=
PGDATABASE=
PGPASSWORD=
PGPORT=
```
### Run Scripts
1. In your terminal run `npm run db:CreateTables` to create a table in your database with our pre made users, which can be found in the libs folder.
2. Run `npm db:InsertTables` to populate the table that you just created. These scripts can be found in `package.json`.
3. Run `npm run dev` to start the server.
4. Check if its running correcting by opening up the browser with `localhost:5000/projects`. You should see a list of objects with the data from the table that you created.

### Overview Diagram

To get the biggier picture of how our backend interacts with our frontend, see the diagram below to understand what HTTP request is sent to our restful API and how it is going to instruct the database what type of CRUD operation needs to get done.

![Diagram - FrontEnd Connect BackEnd](https://user-images.githubusercontent.com/103374224/176409341-fea02690-51ac-4b45-bd1f-7d68ec8ace9b.PNG)

### Our FrontEnd

If you want to see our frontend repo, click this [link](https://github.com/SchoolOfCode/w9_frontend-project-team-collyn/blob/main/README-frontend.md)







