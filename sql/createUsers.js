// Task A01
// Design a suitable, single SQL ‘CREATE TABLE’ instruction that results
// in the creation (IF NOT EXISTS) of the ‘Users’ table as illustrated in
// the AdaBoard schema; don’t forget to include the Primary Key and unique constraints.
// Use “strftime('%s','now')” rather than “CURRENT_TIMESTAMP”.
const createUsers =`
PRAGMA foreign_keys = true;
DROP TABLE IF EXISTS user;
.mode column
.header on

CREATE TABLE IF NOT EXISTS user(
    userid INTEGER PRIMARY KEY NOT NULL,
    friendlyname VARCHAR(50),
    emailaddress VARCHAR(320) UNIQUE NOT NULL,
    passwords VARCHAR(256) DEFAULT --blank--,
    admins INTEGER(1) DEFAULT 0 NOT NULL,
    lastlogin INTEGER(1) DEFAULT (0)
    );

`
module.exports = { createUsers };
