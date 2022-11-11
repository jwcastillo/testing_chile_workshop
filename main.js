import { navigateHomepage } from "./navigateHomepage.js";
import { addToCart } from "./addToCart.js";
import { navigateToCart } from "./navigateToCart.js";
import { navigateToCheckout } from "./navigateToCheckout.js";
import { updateAddress } from "./updateAddress.js";
import { submitCheckout } from "./submitCheckout.js";

export const options = {
  stages: [
    // Ramp-up from 1 to 5 VUs in 10s
    { duration: "30s", target: 5 },

    // Stay at rest on 5 VUs for 5s
    { duration: "15s", target: 5 },

    // Ramp-down from 5 to 0 VUs for 5s
    { duration: "5s", target: 0 }
  ],

  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

// used to store global variables
globalThis.vars = [];

// global min/max sleep durations (in seconds):
globalThis.pauseMin = 5;
globalThis.pauseMax = 15;

export default function main() {
  navigateHomepage();
  addToCart();
  navigateToCart();
  navigateToCheckout();
  updateAddress();
  submitCheckout();
}