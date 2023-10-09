// created by Artem
import { FC } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNotification } from 'hooks';
import { SnackbarKey } from 'notistack';

type NotificationsCloseBtnComponentProps = {
  snackbarKey?: SnackbarKey;
};
export const NotificationsCloseBtnComponent: FC<
  NotificationsCloseBtnComponentProps
> = ({ snackbarKey }) => {
  const { closeNotification } = useNotification();

  const handleClose = () => closeNotification(snackbarKey);

  return (
    <IconButton onClick={handleClose} color="warning">
      <CloseIcon />
    </IconButton>
  );
};
