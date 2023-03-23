import { Router } from "express";
import { PaymentController } from "../controllers";

const paymentRouter = Router();

paymentRouter
  .route("/create-client")
  .post(PaymentController.createClient)
  .get(PaymentController.getClient);

export default paymentRouter;
