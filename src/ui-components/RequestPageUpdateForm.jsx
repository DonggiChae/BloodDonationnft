/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { RequestPage } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function RequestPageUpdateForm(props) {
  const {
    id,
    requestPage,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: undefined,
    description: undefined,
    at: undefined,
    state: undefined,
    walletAddr: undefined,
    user: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [at, setAt] = React.useState(initialValues.at);
  const [state, setState] = React.useState(initialValues.state);
  const [walletAddr, setWalletAddr] = React.useState(initialValues.walletAddr);
  const [user, setUser] = React.useState(initialValues.user);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...requestPageRecord };
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setAt(cleanValues.at);
    setState(cleanValues.state);
    setWalletAddr(cleanValues.walletAddr);
    setUser(cleanValues.user);
    setErrors({});
  };
  const [requestPageRecord, setRequestPageRecord] = React.useState(requestPage);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(RequestPage, id) : requestPage;
      setRequestPageRecord(record);
    };
    queryData();
  }, [id, requestPage]);
  React.useEffect(resetStateValues, [requestPageRecord]);
  const validations = {
    title: [{ type: "Required" }],
    description: [{ type: "Required" }],
    at: [{ type: "Required" }],
    state: [{ type: "Required" }],
    walletAddr: [{ type: "Required" }],
    user: [{ type: "Required" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description,
          at,
          state,
          walletAddr,
          user,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            RequestPage.copyOf(requestPageRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "RequestPageUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        defaultValue={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              at,
              state,
              walletAddr,
              user,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              at,
              state,
              walletAddr,
              user,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="At"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={at && convertToLocal(new Date(at))}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              at: value,
              state,
              walletAddr,
              user,
            };
            const result = onChange(modelFields);
            value = result?.at ?? value;
          }
          if (errors.at?.hasError) {
            runValidationTasks("at", value);
          }
          setAt(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("at", at)}
        errorMessage={errors.at?.errorMessage}
        hasError={errors.at?.hasError}
        {...getOverrideProps(overrides, "at")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        defaultValue={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              at,
              state: value,
              walletAddr,
              user,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Wallet addr"
        isRequired={true}
        isReadOnly={false}
        defaultValue={walletAddr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              at,
              state,
              walletAddr: value,
              user,
            };
            const result = onChange(modelFields);
            value = result?.walletAddr ?? value;
          }
          if (errors.walletAddr?.hasError) {
            runValidationTasks("walletAddr", value);
          }
          setWalletAddr(value);
        }}
        onBlur={() => runValidationTasks("walletAddr", walletAddr)}
        errorMessage={errors.walletAddr?.errorMessage}
        hasError={errors.walletAddr?.hasError}
        {...getOverrideProps(overrides, "walletAddr")}
      ></TextField>
      <TextField
        label="User"
        isRequired={true}
        isReadOnly={false}
        defaultValue={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              at,
              state,
              walletAddr,
              user: value,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
