import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listRequestPages } from "../../graphql/queries";

import RequestTemplate from "../templates/RequestTemplate";

export default function RequestPage() {
  //   import { DataStore } from '@aws-amplify/datastore';
  // import { RequestPage } from './models';
  // await DataStore.save(
  //   new RequestPage({
  //   "title": "Lorem ipsum dolor sit amet",
  //   "description": "Lorem ipsum dolor sit amet",
  //   "at": "1970-01-01T12:30:23.999Z",
  //   "state": "Lorem ipsum dolor sit amet",
  //   "walletAddr": "Lorem ipsum dolor sit amet",
  //   "user": "Lorem ipsum dolor sit amet"
  // })
  // );

  // const modelToDelete = await DataStore.query(RequestPage, 123456789);
  // DataStore.delete(modelToDelete);

  // const models = await DataStore.query(RequestPage);
  // console.log(models);

  // /* Models in DataStore are immutable. To update a record you must use the copyOf function
  //  to apply updates to the item’s fields rather than mutating the instance directly */
  //  await DataStore.save(RequestPage.copyOf(CURRENT_ITEM, item => {
  //   // Update the values on {item} variable to update DataStore entry
  // }));

  // const deletedRequestPage = await API.graphql({
  //   query: deleteRequestPage,
  //   variables: {
  //       input: {
  //           id: "YOUR_RECORD_ID"
  //       }
  //   }
  // });
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    const queryParams = {
      sortDirection: "DESC",
    };
    const createRequest = async () => {
      const res = await API.graphql(
        {
          query: listRequestPages,
        },
        queryParams
      );
      setRequestList(res.data.listRequestPages.items);
    };
    createRequest();
  }, []);

  if (requestList.length === 0) {
    return <RequestTemplate contentInfo={requestList} />;
  }

  // // Get a specific item
  // const oneRequestPage = await API.graphql({
  //   query: getRequestPage,
  //   variables: { id: 'YOUR_RECORD_ID' }
  // });

  // queryRequest();
  return (
    <>
      <RequestTemplate contentInfo={requestList} />
    </>
  );
}
