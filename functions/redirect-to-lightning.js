exports.handler = function(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    headers: {
      'Location': 'https://josemoranurena.eu.org/.well-known/lnurlp/jose'
    },
    body: ''
  });
};
