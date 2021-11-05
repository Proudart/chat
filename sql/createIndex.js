// Task A03
// Design a suitable, single SQL ‘CREATE INDEX instruction that results
// in the creation (IF NOT EXISTS) of an index on the ‘Users’ table
// referencing ‘friendlyname’ called ‘friendlyname_idx’. 

const createIndex = `
CREATE UNIQUE INDEX IF NOT EXISTS friendlyname_idx ON user(friendlyname);
`;

module.exports = { createIndex };