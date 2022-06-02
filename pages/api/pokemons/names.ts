/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

// import { names } from '../../../db/names';
import { released } from '../../../db/released';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ names: released });
  } catch (error) {
    res.status(500).json({ error });
  }
};
