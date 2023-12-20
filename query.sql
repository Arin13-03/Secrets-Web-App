CREATE TABLE users 
(
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT,
    name TEXT
);

CREATE TABLE secrets
(
    secret TEXT,
    secret_id INTEGER REFERENCES users(id),
    PRIMARY KEY(secret, secret_id)

);