/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { RequestDonation } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestDonationUpdateFormInputValues = {
    title?: string;
    contents?: string;
    status?: string;
    createdAt?: string;
    walletAddress?: string;
};
export declare type RequestDonationUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    contents?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    walletAddress?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestDonationUpdateFormOverridesProps = {
    RequestDonationUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    contents?: FormProps<TextFieldProps>;
    status?: FormProps<TextFieldProps>;
    createdAt?: FormProps<TextFieldProps>;
    walletAddress?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestDonationUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestDonationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    requestDonation?: RequestDonation;
    onSubmit?: (fields: RequestDonationUpdateFormInputValues) => RequestDonationUpdateFormInputValues;
    onSuccess?: (fields: RequestDonationUpdateFormInputValues) => void;
    onError?: (fields: RequestDonationUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RequestDonationUpdateFormInputValues) => RequestDonationUpdateFormInputValues;
    onValidate?: RequestDonationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestDonationUpdateForm(props: RequestDonationUpdateFormProps): React.ReactElement;
