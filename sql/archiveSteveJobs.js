// Task C11
// Create a suitable single SQL instruction that archives all messages by Steve Jobs;
// your instruction should specify the update based
// on the user’s exact name rather than the user’s id.

const archiveSteve = `
UPDATE Users SET lastlogin = (strftime('%s', "now")) WHERE userid = 1011;
`;

module.exports = { archiveSteve };