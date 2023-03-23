import { userResponse } from "../responses";

const userPath = {
  "/create-client": {
    post: {
      tags: ["Payment"],
      summary: "Creates a client on Pagarme API",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/user",
            },
            example: {
              name: "Ednaldo Pereira",
              phone: "99999999",
              email: "ednaldopereira@gmail.com",
              password: "senha",
            },
          },
        },
      },

      responses: userResponse.create,
    },
  },
};

export default userPath;
