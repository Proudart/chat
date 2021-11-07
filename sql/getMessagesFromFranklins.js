// Task C08
// Create a suitable single SQL instruction that returns in descending order
// of their creation date all non-archived messages from all users with (and/or containing)
// the name “Franklin”; your results should include the name of the message’s owner,
// the message and the message’s date in the format of “YYYY-MM-DD HH:MM:SS.


const getMessagesFromFranklins = `
SELECT Users.friendlyname, Messages.message, (datetime((SELECT created FROM Messages),'unixepoch')) AS Created FROM Messages INNER JOIN Users ON Users.userid = Messages.userid WHERE Users.friendlyname LIKE "%Franklin%" AND Messages.archive = 0 ORDER BY created DESC;
`;

module.exports = { getMessagesFromFranklins };