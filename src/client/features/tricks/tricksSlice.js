import api from "../../store/api";

const tricksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTricks: builder.query({
      query: () => "/tricks",
      providesTags: ["Tricks"]
    }),
    createTrick: builder.mutation({
      query: (trick) => ({
        url: "/tricks",
        method: "POST",
        body: trick
      })
    })
  })
});

export const { useGetTricksQuery, useCreateTrickMutation } = tricksApi;
