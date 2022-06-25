/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import { bug } from '../../../db/best/bug';
import { dark } from '../../../db/best/dark';
import { dragon } from '../../../db/best/dragon';
import { electric } from '../../../db/best/electric';
import { fairy } from '../../../db/best/fairy';
import { fighting } from '../../../db/best/fighting';
import { fire } from '../../../db/best/fire';
import { flying } from '../../../db/best/flying';
import { ghost } from '../../../db/best/ghost';
import { grass } from '../../../db/best/grass';
import { ground } from '../../../db/best/ground';
import { ice } from '../../../db/best/ice';
import { normal } from '../../../db/best/normal';
import { poison } from '../../../db/best/poison';
import { psychic } from '../../../db/best/psychic';
import { rock } from '../../../db/best/rock';
import { steel } from '../../../db/best/steel';
import { water } from '../../../db/best/water';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.query.type) {
      case 'bug':
        res.status(200).json(bug);
        break;
      case 'dark':
        res.status(200).json(dark);
        break;
      case 'dragon':
        res.status(200).json(dragon);
        break;
      case 'electric':
        res.status(200).json(electric);
        break;
      case 'fairy':
        res.status(200).json(fairy);
        break;
      case 'fighting':
        res.status(200).json(fighting);
        break;
      case 'fire':
        res.status(200).json(fire);
        break;
      case 'flying':
        res.status(200).json(flying);
        break;
      case 'ghost':
        res.status(200).json(ghost);
        break;
      case 'grass':
        res.status(200).json(grass);
        break;
      case 'ground':
        res.status(200).json(ground);
        break;
      case 'ice':
        res.status(200).json(ice);
        break;
      case 'normal':
        res.status(200).json(normal);
        break;
      case 'poison':
        res.status(200).json(poison);
        break;
      case 'psychic':
        res.status(200).json(psychic);
        break;
      case 'rock':
        res.status(200).json(rock);
        break;
      case 'steel':
        res.status(200).json(steel);
        break;
      case 'water':
        res.status(200).json(water);
        break;
      default:
        res.status(200).json([]);
        break;
    }
    // res.status(200).json([]);
  } catch (error) {
    res.status(500).json({ error });
  }
};
