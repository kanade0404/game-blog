import {ContentType} from '../contentType';
import {Environment} from '../environment';
import {Space} from '../space';
import {StringDate} from '../../common/date';

export type Sys = {
  contentType: ContentType;
  createdAt: StringDate;
  environment: Environment;
  id: string;
  locale: string;
  revision: number;
  space: Space;
  type: string;
  updatedAt: StringDate;
};
