export const getUserId = () => {
  const getCookieUserId: string | undefined = document.cookie
    .split('; ')
    .find((item) => item.includes('id_user='));
  if (getCookieUserId) {
    const userId: string | undefined = getCookieUserId?.split('=')[1];
    return userId;
  }
  return '';
};
