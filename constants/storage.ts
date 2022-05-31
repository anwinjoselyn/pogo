export const setItem = (key: string, value: string) =>
  window?.localStorage?.setItem(`clickpost_${key}`, JSON.stringify(value));

export const getItem = (key: string) =>
  window?.localStorage?.getItem(`clickpost_${key}`);

export const removeItem = (key: string) =>
  window?.localStorage?.removeItem(`clickpost_${key}`);
