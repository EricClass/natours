/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51HA5iKGnYAf0T9BkKd9hhEFl11AUe3lsF03X21bTRJ7Tpv5fSErhNw9eAqcRljnRoxRbqmxMnQs0E1HfQDvdMBIl00FxVdNKmY'
);

export const bookTour = async (tourId) => {
  try {
    // 1. Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tour.id}`
    );
    console.log(session);

    // 2/ Create checkout form + change credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
