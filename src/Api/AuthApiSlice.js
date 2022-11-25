import { apiSlice } from "./ApiSlice.js";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/userLogin",
                method: "POST",
                body: { ...credentials }
            })
        })
    })
});

export const { useLoginMutation } = authApiSlice;