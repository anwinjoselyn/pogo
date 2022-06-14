/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import { generations, generationMap } from '../../../db/generations';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ generations, generationMap });
  } catch (error) {
    res.status(500).json({ error });
  }
};
