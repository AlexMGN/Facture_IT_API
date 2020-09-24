# Facture IT

## Prerequisites
  * Node `brew install node`

# Install local environment

### Database

The service use 1 database and 1 collection :

- Facture_IT DB : a mongo database
- Log : a collection for log processus
- Users : a collection for collect all users

  
### Install & run Pricer service

`cd API`\
\
`npm install`\
\
`nodemon app.js`

add .env file and adapt it to your local machine:

```
#Global
PORT=3000

#MongoDB
FACTURE_IT_CONNECT_URL=

```
