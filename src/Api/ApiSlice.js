import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../Redux/authSlice.js";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include",
    prepareHeaders: (Headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            Headers.set("authorization", `${token}`);
        }
        return Headers;
    }
});



const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = baseQuery(args, api, extraOptions);
    if (result?.error?.originalstatus === 403) {
        console.log("non auth ");
        // send refresh token  to get new access  token
        const refreshResult = await baseQuery("/refresh", api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            api.dispatch(setCredentials({ ...refreshResult.data, user }));

            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: builder => ({})
});
