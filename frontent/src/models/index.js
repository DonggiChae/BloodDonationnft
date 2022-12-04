// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RequestDonation } = initSchema(schema);

export {
  RequestDonation
};