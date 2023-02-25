import { useGetPrices } from "../../api";
//import { ArrowTrendingUp } from "@heroicons/react/24/solid";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { formatNumber } from "../../utils";
import clsx from "clsx";

export function PricesList() {
  const { data: assets } = useGetPrices({
    vs_currency: "USD",
    ids: "bitcoin,ethereum",
  });

  return (
    <ul role="list" className="space-y-4 my-4">
      {assets?.map((asset) => (
        <li key={asset.id}>
          <div className="flex items-center px-4 py-4 sm:px-6 bg-gray-800 rounded-lg">
            <div className="flex min-w-0 flex-1 items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src={asset.image}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1 px-4 grid grid-cols-2 md:gap-4">
                <div>
                  <p className="truncate text-sm font-bold text-gray-100">
                    {asset.name}{" "}
                    <span className="text-gray-400 text-xs font-semibold">
                      ({asset.symbol.toUpperCase()})
                    </span>
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-400">
                    <span className="truncate">
                      {formatNumber(asset.market_cap)}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-base text-gray-100 font-bold">
                    {asset.current_price} $
                  </p>
                  <div className="mt-2 flex items-center">
                    {asset.price_change_percentage_24h < 0 ? (
                      <ArrowTrendingDownIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowTrendingUpIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                        aria-hidden="true"
                      />
                    )}
                    <p
                      className={clsx(
                        "text-sm font-medium",
                        asset.price_change_percentage_24h < 0
                          ? "text-red-400"
                          : "text-green-400"
                      )}
                    >
                      {asset.price_change_24h.toFixed(2)}$ (
                      {asset.price_change_percentage_24h.toFixed(2)}%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
