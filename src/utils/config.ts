// require("dotenv").config("./env");

const config = {
  http: {
    port: process.env.PORT || 5000,
  },
  db: {},
  elasticsearch: {
    url: process.env.ELASTICSEARCH_URL,
    username: process.env.ELASTICSEARCH_USERNAME,
    password: process.env.ELASTICSEARCH_PASSWORD
  }
};

export default config;
