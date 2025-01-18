import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://edustrip.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "NwEt18Z7DKyD",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "pUnmyxGscLU0",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "JzPt5QsPeIz3",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "iyGRTr0NFtC_",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "ge0O9MQxophV",
    },
    firstName: { type: "string", storageKey: "no_ERqAmerS8" },
    googleImageUrl: { type: "url", storageKey: "oE7OBnNod1O-" },
    googleProfileId: { type: "string", storageKey: "EfAvxs5JORih" },
    lastName: { type: "string", storageKey: "wvicp5YbpZlT" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "fiu187uqfZc9",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "L8M9L0MYAvBR",
    },
    profilePicture: {
      type: "file",
      allowPublicAccess: true,
      storageKey: "RvwSA5wXPEsW",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "IOt_8rQJIAkg",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "neDR0e2KXUbk",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "jpLvdrIuHKgc",
    },
  },
};
