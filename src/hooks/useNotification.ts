import {
  SnackbarAction,
  SnackbarMessage,
  useSnackbar,
  VariantType,
} from 'notistack';

export const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showNotification = (
    message: SnackbarMessage,
    variant?: VariantType,
    action?: SnackbarAction
  ) => {
    enqueueSnackbar(message, {
      variant,
      preventDuplicate: true,
      hideIconVariant: true,
      autoHideDuration: 2000,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      action,
    });
  };

  return {
    showNotification,
    closeNotification: closeSnackbar,
  };
};
