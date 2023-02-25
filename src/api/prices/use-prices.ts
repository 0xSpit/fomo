import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { client, getQueryKey } from "../common";
import { ICoinMarket } from "./types";

type Params = {
  vs_currency: string;
  ids: string;
};
type Response = ICoinMarket[];

async function getPrices(params: Params): Promise<Response> {
  const response = await client({
    url: "/coins/markets",
    method: "GET",
    params,
  });
  return response.data;
}

export function useGetPrices(
  params: Params,
  config?: UseQueryOptions<Response, AxiosError>
) {
  const queryKey = getQueryKey("prices", params);
  return useQuery<Response, AxiosError>(
    queryKey,
    () => getPrices(params),
    config
  );
}
