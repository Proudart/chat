// Task A02
// Design a suitable, single SQL ‘CREATE TABLE’ instruction that results
// in the creation (IF NOT EXISTS) of the ‘Messages’ table as illustrated in the AdaBoard schema;
// don’t forget to include the Primary Key and Foreign Key constraint - ensure your FK cascades any user table deletes.
// Repeat the setup for “CURRENT_TIMESTAMP” as outlined in the previous requirement.

const createMessages = `
PRAGMA foreign_keys = true;
DROP TABLE IF EXISTS Message;
.mode column
.header on


CREATE TABLE IF NOT EXISTS Message (
    id INTEGER PRIMARY KEY NOT NULL,
    userid INTEGER,
    friendlyname VARCHAR(50),
    message TEXT NOT NULL,
    created INTEGER DEFAULT (datetime(strftime('%', '-'), 'unixepoch')),
    archive INTEGER(1) DEFAULT 0,
    FOREIGN KEY (userid) REFERENCES user(userid) ON DELETE CASCADE
    );

`
module.exports = { createMessages };