/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import { typeEffectiveness } from '../../../db/typeEffectiveness';

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

const allData: any = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const keys: string[] = Object.keys(typeEffectiveness);
    const types: string[] = req.body.types;

    const effectiveTypes: any = {};
    types.forEach((type: string) => {
      effectiveTypes[type] = {
        strong: [],
        weak: [],
        same: [],
      };
    });
    keys.forEach((key) => {
      types.forEach((type) => {
        if (typeEffectiveness[key][type] > 1) {
          effectiveTypes[type].strong.push(key);
        }
        if (typeEffectiveness[key][type] < 1) {
          effectiveTypes[type].weak.push(key);
        }
        if (typeEffectiveness[key][type] === 1) {
          effectiveTypes[type].same.push(key);
        }
      });
    });

    let finalEffectiveness: any = {
      strongest: {},
      strong: [],
      weak: [],
      same: [],
      all: {},
    };
    let counters: any = [];
    if (types.length > 1) {
      const type1 = effectiveTypes[types[0]].weak;
      const type2 = effectiveTypes[types[1]].weak;
      const strong1 = effectiveTypes[types[0]].strong.filter(
        (type: string) => !type2.includes(type)
      );
      const strong2 = effectiveTypes[types[1]].strong.filter(
        (type: string) => !type1.includes(type)
      );
      const tempStrong: any = strong1.filter((type: string) =>
        strong2.includes(type)
      );
      finalEffectiveness.strongest =
        tempStrong?.length > 0 ? tempStrong : [...strong1, ...strong2];
      //   finalEffectiveness.strongest = effectiveTypes[types[0]].strong.filter(
      //     (value: string) => effectiveTypes[types[1]].strong.includes(value)
      //   );
      finalEffectiveness.weak = [...type1, ...type2];
      finalEffectiveness.weak = [...new Set(finalEffectiveness.weak)];
      finalEffectiveness.same = [
        ...effectiveTypes[types[0]].same,
        ...effectiveTypes[types[1]].same,
      ];
      finalEffectiveness.same = [...new Set(finalEffectiveness.same)];
      finalEffectiveness.strong = [
        ...effectiveTypes[types[0]].strong,
        ...effectiveTypes[types[1]].strong,
      ];
      finalEffectiveness.strongest = [...new Set(finalEffectiveness.strongest)];
    } else {
      const type = types[0];
      finalEffectiveness.strong = effectiveTypes[type].strong;
      finalEffectiveness.weak = effectiveTypes[type].weak;
    }

    finalEffectiveness.all = effectiveTypes;

    finalEffectiveness.strongest.forEach((type: string) => {
      counters.push(...allData[type.toLowerCase()]['main']);
    });

    counters = [...new Set(counters)].sort((a: any, b: any) => b.DPS - a.DPS);

    res.status(200).json({ effectiveTypes: finalEffectiveness, counters });
  } catch (error) {
    res.status(500).json({ error });
  }
};
