export interface DataPagination<T> {
  data: T[];
  total: number;
  lastPage: number;
}
