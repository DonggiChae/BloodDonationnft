import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listRequestPages } from "../../graphql/queries";

import RequestTemplate from "../templates/RequestTemplate";

export default function RequestPage() {
  //   const updatedRequestPage = await API.graphql({
  //     query: updateRequestPage,
  //     variables: {
  //         input: {
  // 		"title": "Lorem ipsum dolor sit amet",
  // 		"description": "Lorem ipsum dolor sit amet",
  // 		"at": "1970-01-01T12:30:23.999Z",
  // 		"state": "Lorem ipsum dolor sit amet",
  // 		"walletAddr": "Lorem ipsum dolor sit amet",
  // 		"user": "Lorem ipsum dolor sit amet",
  // 		"requestId": "Lorem ipsum dolor sit amet"
  // 	}
  //     }
  // });

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
