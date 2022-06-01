/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

import { stats } from '../../../db/stats';
import { released } from '../../../db/released';
import { nesting } from '../../../db/nesting';
import { shiny } from '../../../db/shiny';
import { raidExclusive } from '../../../db/raidExclusive';
import { alolan } from '../../../db/alolan';
import { possibleDittos } from '../../../db/possibleDittos';
import { maxCP } from '../../../db/maxCP';
import { encounterData } from '../../../db/encounterData';
import { types } from '../../../db/types';
import { moves } from '../../../db/moves';
import { evolutions } from '../../../db/evolutions';
import { heightWeightScale } from '../../../db/heightWeightScale';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const stat = stats.find(
      (pok: any) => pok.pokemon_id === Number(req.query.id)
    );
    const isReleased = !!Object.keys(released).find(
      (key: any) => key === req.query.id
    );
    const canNest = !!Object.keys(nesting).find(
      (key: any) => key === req.query.id
    );
    const shinyData: any =
      (typeof req.query.id === 'string' && shiny[req.query.id]) ?? {};
    const raidExc =
      (typeof req.query.id === 'string' && raidExclusive[req.query.id]) ?? {};
    const alolanData: any =
      (typeof req.query.id === 'string' && alolan[req.query.id]) ?? {};
    const dittoData: any =
      (typeof req.query.id === 'string' && possibleDittos[req.query.id]) ?? {};
    const maxCPData: any =
      (typeof req.query.id === 'string' && maxCP[req.query.id]) ?? {};
    const encounter = encounterData.find(
      (pok: any) => pok.pokemon_id === Number(req.query.id)
    );
    const type = types.find(
      (pok: any) => pok.pokemon_id === Number(req.query.id)
    );
    const movesData = moves.find(
      (pok: any) => pok.pokemon_id === Number(req.query.id)
    );
    const evolutionData = evolutions.find(
      (pok: any) => pok.pokemon_id === Number(req.query.id)
    );
    const scale = heightWeightScale.find(
      (pok: any) => pok.pokemon_id === Number(req.query.id)
    );

    res.status(200).json({
      data: {
        stats: stat,
        isReleased,
        canNest,
        shinyData,
        raidExc,
        alolanData,
        dittoData,
        maxCPData,
        encounter,
        type,
        movesData,
        evolutionData,
        scale,
      },
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
