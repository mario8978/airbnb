import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import axios from "axios";

const createPaymentPayload = (method, body, url) => {
  return {
    url: `https://api.pagar.me/core/v5/${url}`,
    method: method,
    headers: {
      Authorization:
        "Basic " +
        new Buffer(process.env.PAGARME_PRIVATE_KEY).toString("base64"),
      "Content-Type": "application/json",
    },
    data: body,
  };
};

class PaymentController {
  async createClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { clientData } = req.body;

      const payload = createPaymentPayload("post", clientData, "customers");

      const response = await axios(payload);

      res.locals = {
        status: 201,
        message: "pagarme client created",
        data: response,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { clienteID } = req.query;

      const payload = createPaymentPayload(
        "get",
        null,
        `customers/${clienteID}`
      );

      const response = await axios(payload);

      res.locals = {
        status: 201,
        message: "pagarme client created",
        data: response,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async listClients(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = createPaymentPayload("get", null, "customers");

      const response = await axios(payload);

      res.locals = {
        status: 201,
        message: "get successful",
        data: response,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async generateCardToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { cardData } = req.body;

      const payload = createPaymentPayload(
        "get",
        null,
        `tokens?appId=${process.env.PAGARME_PUBLIC_KEY}`
      );

      const response = await axios(payload);

      res.locals = {
        status: 201,
        message: "get successful",
        data: response,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new PaymentController();
