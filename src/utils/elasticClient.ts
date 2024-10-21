import { Client } from '@elastic/elasticsearch';
import config from './config.js'; // Assuming you have a config file to manage env variables

// Initialize ElasticSearch client
const elasticClient = new Client({
    node: config.elasticsearch.url || 'http://elasticsearch:9200', // Fall back to local if not provided
});

export default elasticClient;
