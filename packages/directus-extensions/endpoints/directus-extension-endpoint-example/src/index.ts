import {defineEndpoint} from "@directus/extensions-sdk";

export default defineEndpoint((router) => {
  console.log("Test endpoint loaded");
  router.get("/", (_req, res) => {
    console.log("Ahoj");
    res.send("Hello, World!");
  });
});
