/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import { names } from '../../../db/names';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ names });
  } catch (error) {
    res.status(500).json({ error });
  }
};
