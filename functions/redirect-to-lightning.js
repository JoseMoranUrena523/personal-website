exports.handler = function(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    headers: {
      'Location': 'https://lightning.josemoranurena.tech/.well-known/lnurlp/jose'
    },
    body: ''
  });
};
