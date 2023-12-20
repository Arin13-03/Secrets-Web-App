# Secrets_WebApp
This Secrets_WebApp project is a Website where users can store their secrets and see them by logging in,
if they are already registered otherwise they have to register first.
Each User is given a unique User-Id which they have to remember to add their secrets in their dashboard.
Here **bcrypt** package is used for hashing as well as salting our password to keep it very safe by storing it in Hash ID form in our database.

Have a look at the Images:
## Images

 ![Home Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/fdbd8c66-c126-4f02-b8e1-169c7f346db2)

 ![Register Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/af1c625a-ed3c-46af-8f30-edfeac21f265)

 ![Login Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/1d639aa9-8be8-415a-a2aa-ea2df8bd9b5b)

 ![Your Secrets Dashboard Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/d265e46d-cf2e-480f-80ed-5c07172404cc)

 ![New Secrect Add Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/36faf5ae-2c41-4d14-ad80-264022399955)

 ![Updated Your Secrets Dashboard Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/f3eeb85c-9111-4bc2-a3de-084866ab311a)


Let's look at the requirements and simple steps to use it.

## Requirements:
1. VS Code in your local machine.
2. PostgreSQL installed (preferably pgAdmin).
3. node should be installed.

## Steps To use:
1. Clone it to your local machine.
2. Open CLI and change the directory where you have stored the project.
3. In CLI type: **npm i** (as I have already put all the required dependencies).
4. Open pgAdmin and create a new database of any name you like.
5. Copy the code from **query.sql** and paste it into your query tool in pgAdmin. 
  > (Do check you are in your database root directory).
6. Create a **.env** in your root directory with details like database name, password, and host.
7. Type **npm i nodemon** (for faster server restart on save).
