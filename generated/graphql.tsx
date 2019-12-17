import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type Auth = {
   __typename?: 'Auth',
  id: Scalars['String'],
  email: Scalars['String'],
  token: Scalars['String'],
  secret: Scalars['String'],
  created: Scalars['DateTime'],
};

export type Color = {
   __typename?: 'Color',
  id: Scalars['String'],
  hex?: Maybe<Scalars['String']>,
  ral?: Maybe<Scalars['String']>,
};

export type ColorInput = {
  hex?: Maybe<Scalars['String']>,
  ral?: Maybe<Scalars['String']>,
};


export type Edition = {
   __typename?: 'Edition',
  id: Scalars['String'],
  shortId: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  suggestedPrice?: Maybe<Scalars['Int']>,
  cases?: Maybe<Array<Scalars['String']>>,
  colors?: Maybe<Array<Scalars['String']>>,
  plates?: Maybe<Array<Scalars['String']>>,
};

export type EditionInput = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  suggestedPrice?: Maybe<Scalars['Int']>,
  cases?: Maybe<Array<Scalars['String']>>,
  colors?: Maybe<Array<Scalars['String']>>,
  plates?: Maybe<Array<Scalars['String']>>,
};

export type Follow = {
   __typename?: 'Follow',
  id: Scalars['String'],
  keyboardId?: Maybe<Scalars['String']>,
  keysetId?: Maybe<Scalars['String']>,
  keyboard: Keyboard,
};

export type FollowInput = {
  keyboardId?: Maybe<Scalars['String']>,
  keysetId?: Maybe<Scalars['String']>,
};

export type JoinKeyboard = {
   __typename?: 'JoinKeyboard',
  id: Scalars['String'],
  keyboardId: Scalars['String'],
  caseChoice: Scalars['String'],
  plateChoice: Scalars['String'],
  layoutChoice: Scalars['String'],
  created: Scalars['DateTime'],
  keyboard?: Maybe<Keyboard>,
  user?: Maybe<User>,
};

export type JoinKeyboardInput = {
  caseChoice: Scalars['String'],
  plateChoice: Scalars['String'],
  layoutChoice: Scalars['String'],
};

export type Keyboard = {
   __typename?: 'Keyboard',
  angle?: Maybe<Scalars['String']>,
  announcement?: Maybe<Scalars['String']>,
  brand?: Maybe<Scalars['String']>,
  connector?: Maybe<Scalars['String']>,
  details?: Maybe<Array<Scalars['String']>>,
  editions?: Maybe<Array<Edition>>,
  firmware?: Maybe<Scalars['String']>,
  mount?: Maybe<Scalars['String']>,
  layouts?: Maybe<Array<Scalars['String']>>,
  pcb?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  support?: Maybe<Array<Scalars['String']>>,
  id: Scalars['String'],
  shortId: Scalars['String'],
  images600?: Maybe<Array<Scalars['String']>>,
  images800?: Maybe<Array<Scalars['String']>>,
  images1500?: Maybe<Array<Scalars['String']>>,
  imagesRaw?: Maybe<Array<Scalars['String']>>,
  created: Scalars['DateTime'],
  updated: Scalars['DateTime'],
  maker?: Maybe<User>,
  interestCheck?: Maybe<Scalars['Boolean']>,
  market?: Maybe<Scalars['Boolean']>,
  groupBuy?: Maybe<Scalars['Boolean']>,
  groupBuySoon?: Maybe<Scalars['Boolean']>,
  closed?: Maybe<Scalars['Boolean']>,
  joins?: Maybe<Array<JoinKeyboard>>,
  posts?: Maybe<Array<Post>>,
};

export type KeyboardInput = {
  angle?: Maybe<Scalars['String']>,
  brand?: Maybe<Scalars['String']>,
  connector?: Maybe<Scalars['String']>,
  details?: Maybe<Array<Scalars['String']>>,
  editions?: Maybe<Array<EditionInput>>,
  firmware?: Maybe<Scalars['String']>,
  mount?: Maybe<Scalars['String']>,
  layouts?: Maybe<Array<Scalars['String']>>,
  pcb?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  support?: Maybe<Array<Scalars['String']>>,
  interestCheck?: Maybe<Scalars['Boolean']>,
  groupBuy?: Maybe<Scalars['Boolean']>,
  groupBuySoon?: Maybe<Scalars['Boolean']>,
  market?: Maybe<Scalars['Boolean']>,
  closed?: Maybe<Scalars['Boolean']>,
};

export type Keyset = {
   __typename?: 'Keyset',
  id: Scalars['String'],
  shortId: Scalars['String'],
  name: Scalars['String'],
  profile: Scalars['String'],
  stem: Scalars['String'],
  kits?: Maybe<Array<Kit>>,
  colors?: Maybe<Array<Color>>,
  images600?: Maybe<Array<Scalars['String']>>,
  images800?: Maybe<Array<Scalars['String']>>,
  images1500?: Maybe<Array<Scalars['String']>>,
  imagesRaw?: Maybe<Array<Scalars['String']>>,
  details?: Maybe<Array<Scalars['String']>>,
  created: Scalars['DateTime'],
  updated: Scalars['DateTime'],
  maker?: Maybe<User>,
};

export type KeysetInput = {
  name: Scalars['String'],
  profile: Scalars['String'],
  stem: Scalars['String'],
  kits: Array<KitInput>,
  colors: Array<ColorInput>,
  details: Array<Scalars['String']>,
};

export type Kit = {
   __typename?: 'Kit',
  id: Scalars['String'],
  shortId: Scalars['String'],
  kit?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  suggestedPrice?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type KitInput = {
  kit?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  price: Scalars['Int'],
  suggestedPrice: Scalars['Int'],
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  logout: Scalars['Boolean'],
  revokeRefreshTokensForUser: Scalars['Boolean'],
  login: LoginResponse,
  signup: Scalars['Boolean'],
  banUser: Scalars['Boolean'],
  generateAuth: Scalars['Boolean'],
  deleteAuth: Scalars['Boolean'],
  makeKeyboard: Scalars['Boolean'],
  updateKeyboardStage: Scalars['Boolean'],
  updateKeyboard: Scalars['Boolean'],
  keyboardAnnouncement: Scalars['Boolean'],
  deleteKeyboard: Scalars['Boolean'],
  makeKeyset: Scalars['Boolean'],
  deleteKeyset: Scalars['Boolean'],
  deleteEdition: Scalars['Boolean'],
  voteKeyboardUp: Scalars['Boolean'],
  voteKeyboardDown: Scalars['Boolean'],
  deleteVote: Scalars['Boolean'],
  joinKeyboard: Scalars['Boolean'],
  deleteJoin: Scalars['Boolean'],
  createPost: Scalars['Boolean'],
  deletePost: Scalars['Boolean'],
  followKeyboard: Scalars['Boolean'],
  followKeyboardDelete: Scalars['Boolean'],
  deleteFollow: Scalars['Boolean'],
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String']
};


export type MutationLoginArgs = {
  secret: Scalars['String'],
  email: Scalars['String']
};


export type MutationSignupArgs = {
  username: Scalars['String'],
  email: Scalars['String'],
  secret: Scalars['String']
};


export type MutationBanUserArgs = {
  id: Scalars['String']
};


export type MutationGenerateAuthArgs = {
  email: Scalars['String']
};


export type MutationDeleteAuthArgs = {
  id: Scalars['String']
};


export type MutationMakeKeyboardArgs = {
  images: Array<Scalars['Upload']>,
  data: KeyboardInput
};


export type MutationUpdateKeyboardStageArgs = {
  id: Scalars['String']
};


export type MutationUpdateKeyboardArgs = {
  data: KeyboardInput,
  id: Scalars['String']
};


export type MutationKeyboardAnnouncementArgs = {
  announcement: Scalars['String'],
  id: Scalars['String']
};


export type MutationDeleteKeyboardArgs = {
  id: Scalars['String']
};


export type MutationMakeKeysetArgs = {
  images: Array<Scalars['Upload']>,
  data: KeysetInput
};


export type MutationDeleteKeysetArgs = {
  id: Scalars['String']
};


export type MutationDeleteEditionArgs = {
  id: Scalars['String']
};


export type MutationVoteKeyboardUpArgs = {
  id: Scalars['String']
};


export type MutationVoteKeyboardDownArgs = {
  id: Scalars['String']
};


export type MutationDeleteVoteArgs = {
  id: Scalars['String']
};


export type MutationJoinKeyboardArgs = {
  data: JoinKeyboardInput,
  id: Scalars['String']
};


export type MutationDeleteJoinArgs = {
  id: Scalars['String']
};


export type MutationCreatePostArgs = {
  body: Scalars['String'],
  id: Scalars['String']
};


export type MutationDeletePostArgs = {
  id: Scalars['String']
};


export type MutationFollowKeyboardArgs = {
  id: Scalars['String']
};


export type MutationFollowKeyboardDeleteArgs = {
  id: Scalars['String']
};


export type MutationDeleteFollowArgs = {
  id: Scalars['String']
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['String'],
  body: Scalars['String'],
  created: Scalars['DateTime'],
  user: User,
};

export type Query = {
   __typename?: 'Query',
  bye: Scalars['String'],
  users: Array<User>,
  me?: Maybe<User>,
  auths: Array<Auth>,
  keyboards: Array<Keyboard>,
  keyboard: Keyboard,
  sortKeyboards: Array<Keyboard>,
  keysets: Array<Keyset>,
  keyset: Keyset,
  sortKeysets: Array<Keyset>,
  editions: Array<Edition>,
  votes: Array<Vote>,
  joinss: Array<JoinKeyboard>,
  postss: Array<Post>,
  follows: Array<Follow>,
};


export type QueryKeyboardArgs = {
  shortId: Scalars['String']
};


export type QuerySortKeyboardsArgs = {
  where: SearchInput
};


export type QueryKeysetArgs = {
  shortId: Scalars['String']
};


export type QuerySortKeysetsArgs = {
  where: SearchInput
};

export type SearchInput = {
  interestCheck?: Maybe<Scalars['Boolean']>,
  market?: Maybe<Scalars['Boolean']>,
  groupBuy?: Maybe<Scalars['Boolean']>,
};


export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  email: Scalars['String'],
  username: Scalars['String'],
  keyboards: Array<Keyboard>,
  votes: Array<Vote>,
  follows: Array<Follow>,
  keyboardjoins: Array<JoinKeyboard>,
};

export type Vote = {
   __typename?: 'Vote',
  id: Scalars['String'],
  editionId: Scalars['String'],
  created: Scalars['DateTime'],
  expiration?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};

export type AuthUserQueryVariables = {};


export type AuthUserQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
  )> }
);

export type KeyboardsQueryVariables = {};


export type KeyboardsQuery = (
  { __typename?: 'Query' }
  & { keyboards: Array<(
    { __typename?: 'Keyboard' }
    & Pick<Keyboard, 'id' | 'name' | 'size' | 'mount' | 'images1500'>
  )> }
);


export const AuthUserDocument = gql`
    query authUser {
  me {
    id
    username
    email
  }
}
    `;

export function useAuthUserQuery(options: Omit<Urql.UseQueryArgs<AuthUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AuthUserQuery>({ query: AuthUserDocument, ...options });
};
export const KeyboardsDocument = gql`
    query keyboards {
  keyboards {
    id
    name
    size
    mount
    images1500
  }
}
    `;

export function useKeyboardsQuery(options: Omit<Urql.UseQueryArgs<KeyboardsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<KeyboardsQuery>({ query: KeyboardsDocument, ...options });
};