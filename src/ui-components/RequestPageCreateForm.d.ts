/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestPageCreateFormInputValues = {
    title?: string;
    description?: string;
    at?: string;
    state?: string;
    walletAddr?: string;
    user?: string;
};
export declare type RequestPageCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    at?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    walletAddr?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestPageCreateFormOverridesProps = {
    RequestPageCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    at?: FormProps<TextFieldProps>;
    state?: FormProps<TextFieldProps>;
    walletAddr?: FormProps<TextFieldProps>;
    user?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestPageCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestPageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestPageCreateFormInputValues) => RequestPageCreateFormInputValues;
    onSuccess?: (fields: RequestPageCreateFormInputValues) => void;
    onError?: (fields: RequestPageCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RequestPageCreateFormInputValues) => RequestPageCreateFormInputValues;
    onValidate?: RequestPageCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestPageCreateForm(props: RequestPageCreateFormProps): React.ReactElement;
