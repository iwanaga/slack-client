const SlackClient = require('@slack/client').WebClient;

const token = process.env.SLACK_API_TOKEN || '';
let slack   = new SlackClient(token);

let channel = 'api-test';
let option  = {
  as_user: false,
  username: 'セバスチャン',
  icon_emoji: ':champagne:'
};

/**
 * chat.postMessage の仕様
 *  https://github.com/slackapi/node-slack-sdk/blob/master/lib/clients/web/facets/chat.js#L60
 */
let message = 'こんちには。テスト投稿です。 :smiley: ';
slack.chat.postMessage(channel, message, option, (err, res) => {
  if (err) { return console.log('Error:', err); }
  console.log('Message sent: ', res);
});
