const fetcher = async ({
  url,
  method,
  body,
}: {
  url: string;
  method?: string;
  body?: any;
}) => {
  if (!method || method === 'GET') {
    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return res.json();
  }
  if (method === 'POST') {
    const res = await fetch(url, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(body),
    });
    return res.json();
  }
};

export default fetcher;
