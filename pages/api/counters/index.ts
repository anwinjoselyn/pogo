/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import { typeEffectiveness } from '../../../db/typeEffectiveness';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const keys: string[] = Object.keys(typeEffectiveness);
  const types: string[] = req.body.types;
  const effectiveTypes: string[] = [];
  keys.forEach((key) => {
    types.forEach((type) => {
      if (typeEffectiveness[key][type] > 1) {
        effectiveTypes.push(type);
      }
    });
  });
  try {
    res.status(200).json({ effectiveTypes });
  } catch (error) {
    res.status(500).json({ error });
  }
};
