import { KeyUtil } from "@/utils/key-util";
import { ElementType } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "./custom-button";

interface FilterContainerProps {
  filters: ElementType[];
}

export function FilterContainer({ filters }: FilterContainerProps) {
  const [, setSearchParams] = useSearchParams();

  function clearFilters() {
    setSearchParams((params) => {
      const paramsList = Object.fromEntries([...params]);

      for (const key in paramsList) {
        if (key !== "page") {
          params.delete(key);
        }
      }

      return params;
    });

    localStorage.removeItem("fromDate");
    localStorage.removeItem("toDate");
  }

  return (
    <div className="flex flex-row gap-4 flex-wrap items-end">
      {filters.map((Filter) => {
        return <Filter key={KeyUtil.generateRandomKey()} />;
      })}
      <Button type="button" onClick={clearFilters} variant={"danger"}>
        Limpar
      </Button>
    </div>
  );
}
