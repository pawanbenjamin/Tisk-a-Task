import api from "../../store/api";

const puppiesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "/puppies",
      providesTags: ["Puppies"]
    })
  })
});

export const { useGetPuppiesQuery } = puppiesApi;
