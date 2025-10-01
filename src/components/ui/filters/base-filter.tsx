import { useDebounceValue } from "@/hooks/use-debounce-value";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "../input";
import { Label } from "../label";

interface BaseFilterProps {
  filterName: string;
  placeholder: string;
}

export function BaseFilter({ filterName, placeholder }: BaseFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get(filterName) ?? "");

  const debouncedFilter = useDebounceValue(filter, 1000);

  useEffect(() => {
    const currentFilter = searchParams.get(filterName) ?? "";

    if (debouncedFilter !== currentFilter) {
      setSearchParams((params) => {
        if (filter.length) {
          params.set(filterName, filter);
        } else {
          params.delete(filterName);
        }

        params.set("page", "1");
        return params;
      });
    }
  }, [debouncedFilter, setSearchParams, filter, searchParams, filterName]);

  return (
    <div className="flex flex-col gap-3 px-1">
      <Label>{placeholder}</Label>
      <Input.Root
        name={placeholder}
        onChange={({ target }) => setFilter(target.value)}
        placeholder={placeholder}
        value={filter}
      />
    </div>
  );
}
