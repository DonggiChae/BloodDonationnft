import React, { useState } from "react";
import styled from "styled-components";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listRequestPages, getRequestPage } from "../../graphql/queries";

import RequestTemplate from "../templates/RequestTemplate";
import { useEffect } from "react";

export default function RequestPage() {
  // const updatedRequestPage = await API.graphql({
  //   query: updateRequestPage,
  //   variables: {
  //       input: {
  //   "title": "Lorem ipsum dolor sit amet",
  //   "description": "Lorem ipsum dolor sit amet",
  //   "at": "1970-01-01T12:30:23.999Z",
  //   "state": "Lorem ipsum dolor sit amet",
  //   "walletAddr": "Lorem ipsum dolor sit amet"
  // }
  //   }
  // });

  // const deletedRequestPage = await API.graphql({
  //   query: deleteRequestPage,
  //   variables: {
  //       input: {
  //           id: "YOUR_RECORD_ID"
  //       }
  //   }
  // });
  const [requestList, setRequestList] = useState();
  //  // List all items

  useEffect(() => {
    API.graphql({
      query: listRequestPages,
    }).then((res) => console.log(res.data.listRequestPages.items));
  });

  // // Get a specific item
  // const oneRequestPage = await API.graphql({
  //   query: getRequestPage,
  //   variables: { id: 'YOUR_RECORD_ID' }
  // });

  // queryRequest();
  return (
    <>
      <RequestTemplate />
    </>
  );
}
