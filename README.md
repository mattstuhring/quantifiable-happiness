# Quantifiable Happiness

What does your happiness look like?

## About The Project

How happy are you? Let us help you answer that question.

### Built With

- ReactJS
- Bootstrap
- NodeJS
- Express
- MySQL

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Install NodeJS, npm, and MySQL.

### Installation

1. Clone the repo

```sh
git clone https://github.com/mattstuhring/quantifiable-happiness
```

2. Install NPM packages

```sh
npm install
```

3. Create MySQL database

4. In root directory, create .env file and add your MySQL values:

```
NODE_ENV="development"
NODE_PORT="5000"
MYSQL_USER="add-your-mysql-user"
MYSQL_PASSWORD="add-your-mysql-password"
MYSQL_DATABASE="add-your-mysql-database"
```

5. Seed database

```sh
npm run migrate
npm run seed
```

6. Start the app!

```sh
npm run dev
```

## Contact

- Project: [https://github.com/mattstuhring/quantifiable-happiness](https://github.com/mattstuhring/quantifiable-happiness)
- LinkedIn: [https://www.linkedin.com/in/mattstuhring/](https://www.linkedin.com/in/mattstuhring/)
