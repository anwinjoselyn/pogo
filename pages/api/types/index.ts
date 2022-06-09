/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import { types } from '../../../db/types';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ types });
  } catch (error) {
    res.status(500).json({ error });
  }
};
