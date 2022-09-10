const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { response } = require("express");
const { async } = require("@firebase/util");
const stripe = require("stripe")(
  "sk_test_51LbyNdBuMLXjkRTL9PREep7Ak0VAlE11IM6J48uyNJJmMfamLRJU9Gapya2wgbGBWy8dX5wumAwfdsufUbbUwsxL00IzOFFze7"
);

//- App config
const app = express();

//- middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world "));
app.get("/abye", (request, response) =>
  response.status(200).send("hello abye ")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recived for this amaount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });

  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//- Listen comand
exports.api = functions.https.onRequest(app);

// api-key http://localhost:5001/e-clone-26bb4/us-central1/api
