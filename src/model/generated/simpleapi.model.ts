import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from '../../core/graphql/graphql-context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};


export type F999_GetRequestInput = {
  serviceData: F999_GetRequestServiceDataInput,
};

export type F999_GetRequestOutput = {
   __typename?: 'F999_GetRequestOutput',
  serviceData: F999_GetRequestServiceDataOutput,
};

export type F999_GetRequestServiceDataInput = {
  requestIdentifier: F99901_RequestIdentifierInput,
};

export type F999_GetRequestServiceDataOutput = {
   __typename?: 'F999_GetRequestServiceDataOutput',
  request: F999_RequestType,
};

export type F999_RequestContactReasonType = {
   __typename?: 'F999_RequestContactReasonType',
  domain?: Maybe<Scalars['String']>,
  productType?: Maybe<Scalars['String']>,
  contactReasonCode?: Maybe<Scalars['String']>,
  identifiedBy?: Maybe<Scalars['String']>,
};

export type F999_RequestIdentifierType = {
   __typename?: 'F999_RequestIdentifierType',
  id: Scalars['String'],
  idScope: Scalars['String'],
  idContext: Scalars['String'],
};

export type F999_RequestRoleType = {
   __typename?: 'F999_RequestRoleType',
  name: Scalars['String'],
  creationDate: Scalars['Date'],
  role?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type F999_RequestStatusType = {
   __typename?: 'F999_RequestStatusType',
  code: Scalars['String'],
};

export type F999_RequestType = {
   __typename?: 'F999_RequestType',
  identifier: F999_RequestIdentifierType,
  title: Scalars['String'],
  serviceLevel: Scalars['String'],
  contactReason?: Maybe<Array<Maybe<F999_RequestContactReasonType>>>,
  numberOfTimesReopened: Scalars['Int'],
  role?: Maybe<Array<Maybe<F999_RequestRoleType>>>,
  creationDate: Scalars['Date'],
  status?: Maybe<F999_RequestStatusType>,
};

export type F99901_RequestIdentifierInput = {
  id: Scalars['String'],
  idScope: Scalars['String'],
  idContext: Scalars['String'],
};

export type PongType = {
   __typename?: 'PongType',
  dateTime: Scalars['Date'],
  message: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  /** Ping the running µService and get pong data back */
  ping?: Maybe<PongType>,
  GetRequest: F999_GetRequestOutput,
};


export type QueryGetRequestArgs = {
  inputData: F999_GetRequestInput
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  PongType: ResolverTypeWrapper<any>,
  Date: ResolverTypeWrapper<any>,
  String: ResolverTypeWrapper<any>,
  F999_GetRequestInput: ResolverTypeWrapper<any>,
  F999_GetRequestServiceDataInput: ResolverTypeWrapper<any>,
  F99901_RequestIdentifierInput: ResolverTypeWrapper<any>,
  F999_GetRequestOutput: ResolverTypeWrapper<any>,
  F999_GetRequestServiceDataOutput: ResolverTypeWrapper<any>,
  F999_RequestType: ResolverTypeWrapper<any>,
  F999_RequestIdentifierType: ResolverTypeWrapper<any>,
  F999_RequestContactReasonType: ResolverTypeWrapper<any>,
  Int: ResolverTypeWrapper<any>,
  F999_RequestRoleType: ResolverTypeWrapper<any>,
  F999_RequestStatusType: ResolverTypeWrapper<any>,
  Boolean: ResolverTypeWrapper<any>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  PongType: any,
  Date: any,
  String: any,
  F999_GetRequestInput: any,
  F999_GetRequestServiceDataInput: any,
  F99901_RequestIdentifierInput: any,
  F999_GetRequestOutput: any,
  F999_GetRequestServiceDataOutput: any,
  F999_RequestType: any,
  F999_RequestIdentifierType: any,
  F999_RequestContactReasonType: any,
  Int: any,
  F999_RequestRoleType: any,
  F999_RequestStatusType: any,
  Boolean: any,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type F999_GetRequestOutputResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['F999_GetRequestOutput'] = ResolversParentTypes['F999_GetRequestOutput']> = {
  serviceData?: Resolver<ResolversTypes['F999_GetRequestServiceDataOutput'], ParentType, ContextType>,
};

export type F999_GetRequestServiceDataOutputResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['F999_GetRequestServiceDataOutput'] = ResolversParentTypes['F999_GetRequestServiceDataOutput']> = {
  request?: Resolver<ResolversTypes['F999_RequestType'], ParentType, ContextType>,
};

export type F999_RequestContactReasonTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['F999_RequestContactReasonType'] = ResolversParentTypes['F999_RequestContactReasonType']> = {
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  contactReasonCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  identifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type F999_RequestIdentifierTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['F999_RequestIdentifierType'] = ResolversParentTypes['F999_RequestIdentifierType']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  idScope?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  idContext?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type F999_RequestRoleTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['F999_RequestRoleType'] = ResolversParentTypes['F999_RequestRoleType']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  role?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
};

export type F999_RequestStatusTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['F999_RequestStatusType'] = ResolversParentTypes['F999_RequestStatusType']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type F999_RequestTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['F999_RequestType'] = ResolversParentTypes['F999_RequestType']> = {
  identifier?: Resolver<ResolversTypes['F999_RequestIdentifierType'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  serviceLevel?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contactReason?: Resolver<Maybe<Array<Maybe<ResolversTypes['F999_RequestContactReasonType']>>>, ParentType, ContextType>,
  numberOfTimesReopened?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  role?: Resolver<Maybe<Array<Maybe<ResolversTypes['F999_RequestRoleType']>>>, ParentType, ContextType>,
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['F999_RequestStatusType']>, ParentType, ContextType>,
};

export type PongTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PongType'] = ResolversParentTypes['PongType']> = {
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ping?: Resolver<Maybe<ResolversTypes['PongType']>, ParentType, ContextType>,
  GetRequest?: Resolver<ResolversTypes['F999_GetRequestOutput'], ParentType, ContextType, RequireFields<QueryGetRequestArgs, 'inputData'>>,
};

export type Resolvers<ContextType = GraphQLContext> = {
  Date?: GraphQLScalarType,
  F999_GetRequestOutput?: F999_GetRequestOutputResolvers<ContextType>,
  F999_GetRequestServiceDataOutput?: F999_GetRequestServiceDataOutputResolvers<ContextType>,
  F999_RequestContactReasonType?: F999_RequestContactReasonTypeResolvers<ContextType>,
  F999_RequestIdentifierType?: F999_RequestIdentifierTypeResolvers<ContextType>,
  F999_RequestRoleType?: F999_RequestRoleTypeResolvers<ContextType>,
  F999_RequestStatusType?: F999_RequestStatusTypeResolvers<ContextType>,
  F999_RequestType?: F999_RequestTypeResolvers<ContextType>,
  PongType?: PongTypeResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = GraphQLContext> = Resolvers<ContextType>;
