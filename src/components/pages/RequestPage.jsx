import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { sortByAt } from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";

import RequestTemplate from "../templates/RequestTemplate";

export default function RequestPage() {
  const [requestList, setRequestList] = useState([]);

  const queryParams = {
    type: "require",
    sortDirection: "DESC",
  };
  const createRequest = async () => {
    try {
      const res = await API.graphql(graphqlOperation(sortByAt, queryParams));
      if (res.data.sortByAt.items.length > 0) {
        setRequestList(res.data.sortByAt.items);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    createRequest();

    const createSubscription = API.graphql(
      graphqlOperation(subscriptions.onCreateRequestPage)
    ).subscribe({
      next: ({ value }) => {
        createRequest();
      },
    });
    const updateSubscription = API.graphql(
      graphqlOperation(subscriptions.onUpdateRequestPage)
    ).subscribe({
      next: ({ value }) => {
        createRequest();
      },
    });
    const deleteSubscription = API.graphql(
      graphqlOperation(subscriptions.onDeleteRequestPage)
    ).subscribe({
      next: ({ value }) => {
        createRequest();
      },
    });

    return () => {
      createSubscription.unsubscribe();
      updateSubscription.unsubscribe();
      deleteSubscription.unsubscribe();
    };
  }, []);

  if (requestList.length === 0) {
    return <RequestTemplate contentInfo={requestList} />;
  }

  return (
    <>
      <RequestTemplate contentInfo={requestList} />
    </>
  );
}
