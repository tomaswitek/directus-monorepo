import {defineEndpoint} from "@directus/extensions-sdk";

export default defineEndpoint((router) => {
  console.log("Hello, World adfasdasdasdasd!");
  router.get("/", (_req, res) => {
    console.log("Ahoj");
    res.send("Hello, World!");
  });
});
