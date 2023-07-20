export const useAuthToken = () => {
  const setToken = (token: string) => {
    localStorage.setItem('accessToken', token && token)
  }

  const _token = localStorage.getItem('accessToken')

  return {
    _token,
    setToken,
  }
}
