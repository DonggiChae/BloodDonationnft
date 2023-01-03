// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RequestPage } = initSchema(schema);

export {
  RequestPage
};