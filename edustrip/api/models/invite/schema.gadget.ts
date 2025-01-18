import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "invite" model, go to https://edustrip.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-internal-tool-invite",
  fields: {
    email: {
      type: "string",
      validations: { required: true, unique: true },
      storageKey: "z9sHOOpIDqdt",
    },
    inviteToken: { type: "string", storageKey: "CL9QbQR3BqrX" },
  },
};
