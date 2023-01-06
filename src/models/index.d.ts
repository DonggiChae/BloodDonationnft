import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRequestPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RequestPage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly description: string;
  readonly at?: string | null;
  readonly state: string;
  readonly walletAddr: string;
  readonly user: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequestPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RequestPage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly description: string;
  readonly at?: string | null;
  readonly state: string;
  readonly walletAddr: string;
  readonly user: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RequestPage = LazyLoading extends LazyLoadingDisabled ? EagerRequestPage : LazyRequestPage

export declare const RequestPage: (new (init: ModelInit<RequestPage>) => RequestPage) & {
  copyOf(source: RequestPage, mutator: (draft: MutableModel<RequestPage>) => MutableModel<RequestPage> | void): RequestPage;
}