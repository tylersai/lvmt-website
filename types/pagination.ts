export interface PaginationRequestOptions {
  page?: number;
  size?: number;
  showArchivedData?: boolean;
}

export type CommonType = {
  id: string;
  value: string;
  active?: boolean;
};

export type PageSort = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

export type Pageable = {
  sort: PageSort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
};

export interface PageResponse<T> {
  content: T[];
  pageable: Pageable;
  sort: PageSort;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
