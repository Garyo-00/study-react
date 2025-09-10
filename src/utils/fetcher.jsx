export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok)
    throw new Error(
      `エラーが発生したため、データの取得に失敗しました。(${res.status})`
    );
  return res.json();
};
