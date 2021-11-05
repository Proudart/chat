// Task C08
// Create a suitable single SQL instruction that returns in descending order
// of their creation date all non-archived messages from all users with (and/or containing)
// the name “Franklin”; your results should include the name of the message’s owner,
// the message and the message’s date in the format of “YYYY-MM-DD HH:MM:SS.


const getMessagesFromFranklins = `
SELECT user.friendlyname, Message.message, (datetime((SELECT created FROM Message),'unixepoch')) AS Created FROM Message INNER JOIN user ON user.userid = Message.userid WHERE user.friendlyname LIKE "%Franklin%" AND Message.archive = 0 ORDER BY created DESC;
`;

module.exports = { getMessagesFromFranklins };
