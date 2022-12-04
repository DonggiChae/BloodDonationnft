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
export declare type RequestDonationCreateFormInputValues = {
    text?: string;
    walletAddress?: string;
};
export declare type RequestDonationCreateFormValidationValues = {
    text?: ValidationFunction<string>;
    walletAddress?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestDonationCreateFormOverridesProps = {
    RequestDonationCreateFormGrid?: FormProps<GridProps>;
    text?: FormProps<TextFieldProps>;
    walletAddress?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestDonationCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestDonationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestDonationCreateFormInputValues) => RequestDonationCreateFormInputValues;
    onSuccess?: (fields: RequestDonationCreateFormInputValues) => void;
    onError?: (fields: RequestDonationCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RequestDonationCreateFormInputValues) => RequestDonationCreateFormInputValues;
    onValidate?: RequestDonationCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestDonationCreateForm(props: RequestDonationCreateFormProps): React.ReactElement;
