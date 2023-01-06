/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { RequestPage } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestPageUpdateFormInputValues = {
    type?: string;
    title?: string;
    description?: string;
    at?: string;
    state?: string;
    walletAddr?: string;
    user?: string;
};
export declare type RequestPageUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    at?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    walletAddr?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestPageUpdateFormOverridesProps = {
    RequestPageUpdateFormGrid?: FormProps<GridProps>;
    type?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    at?: FormProps<TextFieldProps>;
    state?: FormProps<TextFieldProps>;
    walletAddr?: FormProps<TextFieldProps>;
    user?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestPageUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestPageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    requestPage?: RequestPage;
    onSubmit?: (fields: RequestPageUpdateFormInputValues) => RequestPageUpdateFormInputValues;
    onSuccess?: (fields: RequestPageUpdateFormInputValues) => void;
    onError?: (fields: RequestPageUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RequestPageUpdateFormInputValues) => RequestPageUpdateFormInputValues;
    onValidate?: RequestPageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestPageUpdateForm(props: RequestPageUpdateFormProps): React.ReactElement;