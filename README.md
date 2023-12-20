# Secrets_WebApp
This Secrets_WebApp project is a Website where users can store their secrets and see it by logging in,
if they are already registered other wise they have to register first.
Each User is given a unique User-Id which they have to remember to add their secrets in their dashboard.

Have a look a Images:
## Images

1. ![Home Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/fdbd8c66-c126-4f02-b8e1-169c7f346db2)

2. ![Register Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/af1c625a-ed3c-46af-8f30-edfeac21f265)

3. ![Login Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/1d639aa9-8be8-415a-a2aa-ea2df8bd9b5b)

4. ![Your Secrets Dashboard Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/d265e46d-cf2e-480f-80ed-5c07172404cc)

5. ![New Secrect Add Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/36faf5ae-2c41-4d14-ad80-264022399955)

6. ![Updated Your Secrets Dashboard Window](https://github.com/Arin13-03/Secrets_WebApp/assets/118659151/a9409edf-360e-4dc4-ad2b-7932cf1bb1e5)

Let's look at the requirements and simple steps to use it.

## Requirements:
1. VS Code in your local machine.
2. PostgreSQL installed (preferably pgAdmin).
3. node should be installed.

## Steps To use:
1. Clone it to your local machine.
2. Open CLI and change the directory where you have stored the project.
3. In CLI type: **npm i** (as I have already put all the required dependencies).
4. open pgAdmin and create a new database of any name you like.
5. copy the code from **query.sql** and paste it in your query tool in pgAdmin. 
  > (Do check you are in your database root directory).
6. create a **.env** in your root directory with the details like database name, password and host.
7. type **npm i nodemon** (for faster server restart on save).
