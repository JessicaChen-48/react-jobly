## Welcome to Jobly!

Jobly is a job board where job seekers can create an account for free and browse job listing, posted by companies.

Jobly is a **full-stack** Rithm school project where students (like myself!) build out both the **Express** backend **RESTful API** endpoints and the **React** front end with **Bootstrap** across multiple sprints. 

Jobly uses a **PostgreSQL** database without an ORM for querying. All of the job and company descriptions is mock data and not representative of any real jobs or companies.

### Login

Username: testuser
Password: password

Use the above dummy account to jump right in! 

### Sigup

Otherwise, you can create a new account with any of your own information. Do note that the usernames testuser and testadmin are already taken.

### Companies

Browse all companies alphabetically or search for a specific company. All company cards are clickable and filter to show all job openings for that company.

### Jobs

Apply for a job either through the specific company page or through the Jobs section. The Jobs section also contains a search bar for searching through job titles.

A successful application will change the red "Apply" button to a green "Applied" button, indicating that the application is housed in the database.

### Profile

In the Profile section, you can edit any field except for your username (used as a primary key) and password. A correct password input is required in order for the fields to update.

### Admins

Username: testadmin
Password: password

To access the admin permissions of the site, use the above username and password to login.

In addition to all of the features accessible to user account, the admin account can also:

* POST /companies - add a new company
* PATCH /companies/:id - change details about a company, except their handle (handle is primary key)
* DELETE /companies/:id - delete a company

* POST /jobs - add a new job listing
* PATCH /jobs/:id - change details about a job listing, except id
* DELETE /jobs/:id - delete a job posting

* POST /users - add a new user
* GET /users - get a list of all users
* PATCH /users/:username/jobs/:id - update an application, including the username, jobID, and application status

There is no front-end UI to perform any of these methods. To test these out, use an external API tool, like Insomnia or Postman.


### Shoutouts

Kevin Huang - Express collaborator
Kat Huang - React collaborator