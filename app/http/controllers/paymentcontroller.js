const Stripe_Key = process.env.Stripe_Secret_Key;
const Stripe = require("stripe")(Stripe_Key);
// Add your secret key to named Stripe_Secret_Key your .env file

function paymentController() {
  return {
    async makePayment(req, res) {
      const {
        cardExpMonth,
        cardExpYear,
        cardNumber,
        cardCVC,
        charge,
      } = req.body;
      const user = await User.findOne(); // Find User Data
      // Get User Email and address according to stripe Indian payment regulations

      if (!cardNumber || !cardExpMonth || !cardExpYear || !cardCVC || !charge) {
        return res.status(400).send({
          Error: "Necessary Card Details are required for Payment",
        });
      }

      try {
        const cardToken = await Stripe.tokens.create({
          card: {
            number: cardNumber,
            exp_month: cardExpMonth,
            exp_year: cardExpYear,
            cvc: cardCVC,
            // User Details Required
            name: user.name,
            address_city: user.address_city,
            address_country: user.address_country,
            address_line1: user.address_line1,
            address_line2: user.address_line2,
            address_state: user.address_state,
            address_zip: user.address_zip,
          },
        });
        const charge = await Stripe.charges.create({
          amount: amount * 100, // Converting to Rupees
          currency: "inr",
          source: cardToken.id,
          receipt_email: user.email, // User Email Address
          description: `Total Amount ${amount} Paid`,
        });
        if (charge.status === "succeeded") {
          // Update Charge_id with below charge_id
          await DATABASE.update({
            charge_id: charge.id,
          });

          return res.status(200).send({
            Success: true,
            Details: charge,
          });
        } else {
          return res.status(400).send({ Error: "Please try again later" });
        }
      } catch (error) {
        return res.status(400).send({
          Error: error.raw.message,
        });
      }
    },
  };
}

module.exports = paymentController;
