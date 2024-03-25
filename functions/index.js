import * as logger from "firebase-functions/logger";
import { defineSecret } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";

const secret = defineSecret("SECRET");

export const testSecret = onRequest(
  // Do not bind the secrets!
  // {
  //   secrets: [secret],
  // },
  (req, res) => {
    logger.info(`The secret is ${secret.value()}`);
    return res.send(
      `Hello world, don't tell anyone but the secret is "${secret.value()}"`
    );
  }
);
