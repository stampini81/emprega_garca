export interface DataPagination<T> {
  data: T[];
  perPage: number;
  page: number;
  lastPage: number;
  total: number;
}
