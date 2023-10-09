import { ChangeEvent, MouseEvent, useState } from 'react';
import { IPagination } from 'types/pagination.interface';

const INITIAL_PAGINATION_DATA: IPagination = {
  page: 0,
  rowsPerPage: 10,
};

interface IUsePagination {
  onSearch: (
    searchVal?: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangePage: (e: MouseEvent<HTMLButtonElement> | null, page: number) => void;
  onChangeRowsPerPage: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  pagination: IPagination;
  resetPagination: () => void;
}

export const usePagination = (initialData?: IPagination): IUsePagination => {
  const [pagination, setPagination] = useState<IPagination>(
    initialData || INITIAL_PAGINATION_DATA
  );

  const setPaginationHandle = (key: keyof IPagination, value: any) => {
    setPagination((prevState) => ({ ...prevState, [key]: value }));
  };

  const resetPagination = () => {
    setPagination(INITIAL_PAGINATION_DATA);
  };

  return {
    onSearch: (value) => {
      if (typeof value === 'string') {
        setPaginationHandle('search', value);
        setPaginationHandle('page', 0);
      } else if (value?.target) {
        setPaginationHandle('search', value?.target?.value);
        setPaginationHandle('page', 0);
      }
    },
    onChangePage: (e, page) => setPaginationHandle('page', page),
    onChangeRowsPerPage: ({ target }) => {
      setPaginationHandle('rowsPerPage', parseInt(target?.value, 10));
      setPaginationHandle('page', 0);
    },
    pagination,
    resetPagination,
  };
};
