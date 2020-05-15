CREATE TABLE chat_?.`messages` (
    id INT PRIMARY KEY,
    sender_id INT NOT NULL,
    message_text TEXT,
    seen tinyint(1) DEFAULT 0,
    sent_time TIMESTAMP
);