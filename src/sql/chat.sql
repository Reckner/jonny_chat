CREATE TABLE chat_?.`chat`(
    id varchar(16) PRIMARY KEY,
    create_time TIMESTAMP NOT NULL,
    expiration_time TIMESTAMP NULL DEFAULT NULL,
    password_salt varchar(16) DEFAULT NULL,
    password_hash varchar(24) DEFAULT NULL
);