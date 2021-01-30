// import {Sys} from '../sys';

import {Sys} from 'contentful';

export type Tag = {
  fields: {
    name: string;
    slug: string;
  };
  sys: Sys;
};
