// Task B05
// Extract, reformat and prepare the user’s test message data (illustrated below)
// into a suitable, ‘optimised’ (i.e., minimal fields used) single SQL ‘INSERT’ instruction
// that results in the insertion and correct relationship of each of the specified messages to
// their owner ensuring you also appropriately set the message’s initial archive state (where outlined in the test data).  

const insertMessages = `
INSERT INTO Messages(message,userid,archive) VALUES
    ("Always bear in mind that your own resolution to success is more important than any other one thing.",(SELECT userid FROM Users WHERE friendlyname ="Abraham Lincoln"), 0),
    ("An unexamined life is not worth living.", (SELECT userid FROM Users WHERE friendlyname ="Anne Frank"), 0),
    ("Anyone who claims to be a leader must speak like a leader. That means speaking with integrity and truth.",(SELECT userid FROM Users WHERE friendlyname ="Kamala Harris"),0),
    ("Don't go around saying the world owes you a living. The world owes you nothing. It was here first.",(SELECT userid FROM Users WHERE friendlyname = "Mark Twain"),0),
    ("Don't throw stones at your neighbours, if your own windows are glass.",(SELECT userid FROM Users WHERE friendlyname ="Benjamin Franklin"),0),
    ("First, have a definite, clear practical ideal, a goal, an objective. Second, have the necessary means to achieve your ends, wisdom, money, materials, and methods. Third, adjust all your means to that end.",(SELECT userid FROM Users WHERE friendlyname ="Aristotle"),0),
    ("Getting fired from Apple was the best thing that could have ever happened to me. The heaviness of being successful was replaced by the lightness of being a beginner again. It freed me to enter one of the most creative periods of my life.",(SELECT userid FROM Users WHERE friendlyname ="Steve Jobs"),0),
    ("How wonderful it is that nobody needs to wait a single moment before starting to improve the world.",(SELECT userid FROM Users WHERE friendlyname ="Anne Frank"),0),
    ("I am not afraid.",(SELECT userid FROM Users WHERE friendlyname ="Alexei Navalny"),0),
    ("I find that the harder I work, the more luck I seem to have.",(SELECT userid FROM Users WHERE friendlyname ="Thomas Jefferson"),0),
    ("If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",(SELECT userid FROM Users WHERE friendlyname ="Oprah Winfrey"),0),
    ("If you really look closely, most overnight successes took a long time.",(SELECT userid FROM Users WHERE friendlyname ="Steve Jobs"),0),
    ("It does not matter how slowly you go as long as you do not stop.",(SELECT userid FROM Users WHERE friendlyname ="Confucius"),0),
    ("Many of life's failures are people who did not realise how close they were to success when they gave up.",(SELECT userid FROM Users WHERE friendlyname ="Thomas A. Edison"),0),
    ("No one can make you feel inferior without your consent",(SELECT userid FROM Users WHERE friendlyname ="Eleanor Roosevelt"),0),
    ("The only limit to our realisation of tomorrow will be our doubts of today.",(SELECT userid FROM Users WHERE friendlyname ="Franklin D. Roosevelt"),0),
    ("Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbours, catch the trade winds in your sails. Explore, Dream, Discover.",(SELECT userid FROM Users WHERE friendlyname ="Mark Twain"),0),
    ("You know you are on the road to success if you would do your job and not be paid for it.",(SELECT userid FROM Users WHERE friendlyname ="Oprah Winfrey"),0);

`
module.exports = { insertMessages };