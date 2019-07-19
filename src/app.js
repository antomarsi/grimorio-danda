import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

app.use(bodyParser.json());

app.use(
  '/api',
  graphqlHttp({
    schema: buildSchema(`
      type RootQuery {
        events: [String]
      }
      type RootMutation {

      }
    
      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {},
  }),
);

app.listen(3000);
