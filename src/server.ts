import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";
import config from "./utils/config.js";
import { Express } from "express-serve-static-core";
// import elasticClient from "./utils/elasticClient.js";

const startServer = () => {
  const port = config.http.port;
  const app = express();
  configureMiddlewares(app);
  app.use(router);
  app.use(cors());

  // await startElastic();

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

const configureMiddlewares = (app: Express) => {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      exposedHeaders: ["Authorization"],
    })
  );
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

// const startElastic = async () => {
//   try {
//     // Check Elasticsearch connection
//     await elasticClient.ping();
//     console.log('Connected to Elasticsearch');
//   } catch (error) {
//     console.error('Elasticsearch connection failed:', error);
//   }

// }

export default startServer;
