var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_KEY);


export default function handler(req, res) {
    var data = req.body;
    var payment_data = data;
      mercadopago.payment.save(payment_data)
        .then(function(response) {
          const { status, status_detail, id } = response.body;
          res.status(response.status).json({ status, status_detail, id });
          console.log(response)
        })
        .catch(function(error) {
          console.error(error);
        });
}
