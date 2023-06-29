# Factura offline Backend

Schedule appointments Backend App

# Getting Started

> This only is for Mac only

Do you need to install postgress, running:

`brew install postgresql`

run the service:

`brew services start postgresql`

install sequelize-cli and run the next commands

`createdb bpme_dev_db -U <user>`
`createdb bpme_test_db -U <user>`
`yarn run migrate`
`yarn run seed`

note: https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp

whoiam (for user in local database)

Migrations:
in order to generate a particular migration do:

`sequelize migration:generate --name`

> Running with docker

- download docker for desktop

- in your terminal run yarn docker-compose-build

Enjoy saving appointments!
