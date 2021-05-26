const useFetchAlltransactions = (accessToken, page, element) => {
  return useQuery(['fetchAlltransactions'], () => dailyTransaction(accessToken, page, element) );
}
const useFetchWallettransactions = (accessToken, id, page, element) => {
  return useQuery(['fetchWallettransactions'], () => dailyTransaction(accessToken, id, page, element));
}

export {
useFetchAlltransactions,
useFetchWallettransactions,
}