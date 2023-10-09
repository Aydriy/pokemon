import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useCallback, useEffect } from 'react';
import { getErrorMessage } from 'utils';
import { useNotification } from './useNotification';

interface UseServerErrorProps {
  error?: FetchBaseQueryError | SerializedError | any | undefined;
  isError?: boolean;
  callback?: (err?: any) => void;
}

export const useServerError = ({
  error,
  isError,
  callback,
}: UseServerErrorProps) => {
  const { showNotification } = useNotification();

  const showNotify = useCallback(
    (message: string) => {
      message && showNotification(message, 'error');

      callback?.(message);
    },
    [callback, showNotification]
  );

  useEffect(() => {
    if (isError && error) {
      const message = getErrorMessage(error);
      showNotify(message);
    }
  }, [error, isError]);
};
