export const getErrorMessage = (error: any): string => {
  if (error?.data?.message) {
    if (Array.isArray(error.data.message)) {
      return error.data.message.join('. ');
    } else {
      return error.data.message;
    }
  } else if (error?.message) {
    return error.message;
  } else if (error?.error) {
    return error.error;
  } else {
    return 'Server unavailable';
  }
};
