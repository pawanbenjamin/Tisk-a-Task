import api from "../../store/api";

const tricksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTricks: builder.query({
      query: () => "/tricks",
      providesTags: ["Tricks"]
    })
  })
});

export const { useGetTricksQuery } = tricksApi;
