import { useSearchParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../custom-button";

interface PaginationNavigatorProps {
  page: number;
  totalItems: number;
  totalPages: number;
  perPage: number;
}

export function CustomPagination({
  page,
  totalItems,
  totalPages,
  perPage,
}: PaginationNavigatorProps) {
  const [, setSearchParams] = useSearchParams();

  function firstPage() {
    setSearchParams((params) => {
      params.set("page", "1");

      return params;
    });
  }

  function previousPage() {
    if (page - 1 <= 0) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page - 1));

      return params;
    });
  }

  function nextPage() {
    if (page + 1 > totalPages) {
      return;
    }

    setSearchParams((params) => {
      params.set("page", String(page + 1));

      return params;
    });
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set("page", String(totalPages));

      return params;
    });
  }

  return (
    <div className="flex gap-5 flex-col sm:flex-row text-sm items-center sm:justify-between text-zinc-500 mt-3">
      <span>
        Exibindo {perPage} de {totalItems} item(s)
      </span>
      <span>
        Página {page} de {totalPages}
      </span>

      <div className="space-x-1">
        <Button
          onClick={firstPage}
          variant="secondary"
          size="md"
          disabled={page - 1 <= 0}
        >
          <ChevronsLeft className="size-4" />
          <span className="sr-only">Primeira página</span>
        </Button>

        <Button
          onClick={previousPage}
          variant="secondary"
          disabled={page - 1 <= 0}
          size="md"
        >
          <ChevronLeft className="size-4" />
          <span className="sr-only">Página anterior</span>
        </Button>

        <Button
          onClick={nextPage}
          variant="secondary"
          disabled={page + 1 > totalPages}
          size="md"
        >
          <ChevronRight className="size-4" />
          <span className="sr-only">Próxima página</span>
        </Button>

        <Button
          onClick={lastPage}
          variant="secondary"
          disabled={page + 1 > totalPages}
          size="md"
        >
          <ChevronsRight className="size-4" />
          <span className="sr-only">Última página</span>
        </Button>
      </div>
    </div>
  );
}
