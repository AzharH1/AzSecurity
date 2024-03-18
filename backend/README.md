
Endpoints:
- UnRestricted
  - api/v1/auth/register
  How to register a user:
    Go to http://localhost:8080/api/v1/auth/register
    sending this json schema:
    {
    "firstname": "alex",
    "lastname": "cool",
    "email": "alex.cool@mail.com",
    "password": "1234" //Must have something in here
    }

  - api/v1/auth/authenticate
  use username and password to:
  Return: jwt authentication token

- Restricted
  - api/v1/demo-controller
  Use the authentication token to access the restricted endpoint [demo-controller]

Do see all the dbs in psql
\l

Connect to db
\c db_name

See db tables
\dt

Look into a table
SELECT * FROM [table];

docker build -t [user]/postgres-security:[version] .
- create a new container
docker run --name postgres-security -p 5432:5432 -d [user]/postgres-security:[version]
- run a stopped container
  docker run postgres-security
docker exec -it postgres-security sh
docker stop postgres-security


