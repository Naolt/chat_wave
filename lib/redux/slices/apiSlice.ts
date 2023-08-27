import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chatApi = createApi({
  //  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),

  endpoints: (builder: any) => ({
    getChats: builder.query({
      query: () => '/chats',
    }),
    getChatById: builder.query({
      query: (id) => `/chats/${id}`,
    }),
    getUsers: builder.query({
      query: () => '/users',
    }),
    getUserById: builder.query({
      query: (id: any) => `/users/${id}`,
    }),
    getRequestsById: builder.query({
      query: (id: any) => `/friendRequests?recipientId=${id}`,
    }),
    getRequestsSentById: builder.query({
      query: (id: any) => `/friendRequests?senderId=${id}`,
    }),
    sendMessage: builder.mutation({
      query: (newMessage: Message) => ({
        url: '/messages',
        method: 'POST',
        body: newMessage,
      }),
    }),
  }),
});

export const {
  useGetChatsQuery,
  useGetChatByIdQuery,
  useSendMessageMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetRequestsByIdQuery,
  useGetRequestsSentByIdQuery,
} = chatApi;
