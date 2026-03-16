"use client";

import Loader from "@/components/elements/loader/Loader";
import { useFetch } from "@/hooks";
import ServiceCard from "./components/ServiceCard";

export default function Service() {
  const { data, isLoading } = useFetch("/session");

  return (
    <div>
      {data?.data?.length > 0 &&
        data?.data
          ?.sort((a, b) => a?.serial - b?.serial)
          ?.map((item, index) => <ServiceCard item={item} idx={index} />)}

      {isLoading && (
        <div className="flex h-[90dvh] w-screen items-center justify-center bg-[#F9F5EB] px-6">
          <Loader />
        </div>
      )}
    </div>
  );
}
