/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as ctx from '../data-sources/Context'
import * as db from './ghost-db-types'
import { FieldAuthorizeResolver } from '@nexus/schema/dist/plugins/fieldAuthorizePlugin'
import { core } from '@nexus/schema'
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<core.GetGen3<'inputTypes', TypeName, FieldName>>
    ): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void // "Date";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: Date
}

export interface NexusGenObjects {
  Post: db.Posts
  Query: {}
  User: db.Users
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Post: {
    // field return type
    html: string // String!
    slug: string // String!
    title: string // String!
    uuid: string // String!
  }
  Query: {
    // field return type
    me: NexusGenRootTypes['User'] | null // User
    postById: NexusGenRootTypes['Post'] // Post!
    userById: NexusGenRootTypes['User'] // User!
  }
  User: {
    // field return type
    accessibility: string | null // String
    bio: string | null // String
    coverImage: string | null // String
    createdAt: NexusGenScalars['Date'] // Date!
    createdBy: NexusGenRootTypes['User'] // User!
    email: string // String!
    facebook: string | null // String
    ghostAuthAccessToken: string | null // String
    ghostAuthId: string | null // String
    id: string // String!
    lastSeen: NexusGenScalars['Date'] | null // Date
    locale: string | null // String
    location: string | null // String
    metaDescription: string | null // String
    metaTitle: string | null // String
    name: string // String!
    profileImage: string | null // String
    slug: string // String!
    status: string // String!
    tour: string | null // String
    twitter: string | null // String
    updatedAt: NexusGenScalars['Date'] | null // Date
    updatedBy: string | null // String
    visibility: string // String!
    website: string | null // String
  }
}

export interface NexusGenFieldTypeNames {
  Post: {
    // field return type name
    html: 'String'
    slug: 'String'
    title: 'String'
    uuid: 'String'
  }
  Query: {
    // field return type name
    me: 'User'
    postById: 'Post'
    userById: 'User'
  }
  User: {
    // field return type name
    accessibility: 'String'
    bio: 'String'
    coverImage: 'String'
    createdAt: 'Date'
    createdBy: 'User'
    email: 'String'
    facebook: 'String'
    ghostAuthAccessToken: 'String'
    ghostAuthId: 'String'
    id: 'String'
    lastSeen: 'Date'
    locale: 'String'
    location: 'String'
    metaDescription: 'String'
    metaTitle: 'String'
    name: 'String'
    profileImage: 'String'
    slug: 'String'
    status: 'String'
    tour: 'String'
    twitter: 'String'
    updatedAt: 'Date'
    updatedBy: 'String'
    visibility: 'String'
    website: 'String'
  }
}

export interface NexusGenArgTypes {
  Query: {
    postById: {
      // args
      id: string // ID!
    }
    userById: {
      // args
      id: string // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = never

export type NexusGenEnumNames = never

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: true
    resolveType: false
    __typename: false
  }
}

export interface NexusGenTypes {
  context: ctx.Context
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
  }
  interface NexusGenPluginSchemaConfig {}
}
