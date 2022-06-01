/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import { API_HASHES, baseURL, V1 } from '../../../constants/apiHashes';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await fetch(
      `${baseURL}${V1}${API_HASHES['pokemon_names.json'].api_filename}`
    );
    console.log('data', data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
