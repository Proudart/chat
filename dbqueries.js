const sqlite3 = require('sqlite3').verbose();
let { orderUsers } = require('./sql/orderUsers');
let { getMessagesFromFranklins } = require('./sql/getMessagesFromFranklins');
let { updateSJobs } = require('./sql/updateSJobs');
let { deleteOldMessages } = require('./sql/deleteOldMessages');
let { archiveSteve } = require('./sql/archiveSteveJobs');
let { postMessage } = require('./sql/postMessage');

// Task D13
function getAllMessages(db, req, res) {
    db.all(`SELECT Users.friendlyname, Messages.message, (datetime((SELECT created FROM Messages),'unixepoch')) AS Created, Messages.archive FROM Users INNER JOIN Messages ON Users.userid = Messages.userid`, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no messages found" })
        }
        res.send(rows);
    })
}

function organiseUsers(db, req, res) {
    db.all(orderUsers, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no users found" })
        }
        res.send(rows);
    })
}
// Task D12
function createUser(db, req, res) {
    const { username, email, password } = req.body;
    db.run(`INSERT INTO Users (friendlyname, emailaddress, password) VALUES (?,?,?)`, [username, email, password],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            console.log(`${username} added to user field at position ${this.lastID}`)
            userID = this.lastID
            console.log("created new user " + userID);
            res.send({ "ok": "ok" });
        })
}

function getFromFranklins(db, req, res) {
    db.all(getMessagesFromFranklins, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no messages found" })
        }
        res.send(rows);
    })
}

function updateSteveJobs(db, req, res) {
    db.run(updateSJobs, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log(`Updated the profile of Steve Jobs`);
        res.send({ "ok": "Login time for Steve Jobs has been updated" }).status(200)
    });
}

function deleteOldMess(db, req, res) {
    db.serialize(() => {
        db.run(deleteOldMessages, function(err) {
            if (err) {
                return console.log(err.message);
            }
            res.send({ "ok": "Old Messages were deleted" }).status(200)
        });
    });
}

function archiveJobs(db, req, res) {
    console.log("here");
    db.run(archiveSteve, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log(`Archived messages from Steve Jobs`);
        res.send({ "ok": "Steve Jobs's has been updated" }).status(200);
    });
}

function postAMessage(db, req, res) {
    const { userid, message } = req.body;
    db.run(postMessage, [message, userid],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            const messg = `${userid} posted this ${message}`;
            res.send({ "ok": messg }).status(200);
        })
}

function updateAUser(db, req, res) {
    const { userid } = req.body;
    db.run(`UPDATE Users SET lastlogin = strftime('%s', "now") WHERE userid = (?)`, [userid],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            const messg = `${userid} last login time updated`;
            res.send({ "ok": messg }).status(200);
        })
}

// remove specific messages from user
function updateAUser(db, req, res) {
    const { userid } = req.body;
    db.run(`UPDATE Users SET lastlogin = strftime('%s', "now") WHERE userid = (?)`, [userid],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            const messg = `${userid} last login time updated`;
            res.send({ "ok": messg }).status(200);
        })
}

//expand database schema
function updateAUser(db, req, res) {
    const { userid } = req.body;
    db.run(`UPDATE Users SET lastlogin = strftime('%s', "now") WHERE userid = (?)`, [userid],
        function(err) {
            if (err) {
                return console.log(err.message)
            }
            const messg = `${userid} last login time updated`;
            res.send({ "ok": messg }).status(200);
        })
}

module.exports = { getAllMessages, organiseUsers, createUser, getFromFranklins, updateSteveJobs, deleteOldMess, archiveJobs, postAMessage, updateAUser }