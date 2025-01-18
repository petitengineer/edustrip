import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://edustrip.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "RDhUZZz5QYgS",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "pL7roejFCd4q",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "o8IidM2JrQ0O",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "_eMNG4RndlvL",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "P5-_0rVyWoip",
    },
    firstName: { type: "string", storageKey: "fn6MIZh1y5kU" },
    googleImageUrl: { type: "url", storageKey: "gM4Po_PrMmyW" },
    googleProfileId: { type: "string", storageKey: "1XwbaziUiiVl" },
    lastName: { type: "string", storageKey: "sUp6kRyXNT-s" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "7gNP2kf72sGQ",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "tYA9urbqcEwr",
    },
    preferences: { type: "json", storageKey: "Qk-MeF2jjytb" },
    resetPasswordToken: {
      type: "string",
      storageKey: "mGYeLNfxr8Q8",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Kt0oPTRYJr-8",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "psdcmA3znFoZ",
    },
    userid: { type: "number", storageKey: "B5MbXAxqoMMK" },
    username: { type: "string", storageKey: "5MQjpvSzy1qT" },
  },
};
