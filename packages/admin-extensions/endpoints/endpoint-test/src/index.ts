import {defineEndpoint} from "@directus/extensions-sdk";

export default defineEndpoint((router) => {
  console.log("Test endpoint loaded");
  console.log("Test endpoint loadedd");
  router.get("/", (_req, res) => {
    console.log("Ahoj");
    res.send("Hello, World!");
  });
});
