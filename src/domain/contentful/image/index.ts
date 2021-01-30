// import {Sys} from '../sys';
import {Sys} from 'contentful';
import {File} from '../file';

export type Image = {
  fields: {
    file: File;
    title: string;
  };
  sys: Sys;
};
