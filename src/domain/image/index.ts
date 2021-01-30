import {File} from '../file';
import {Image as ContentfulImage} from '../contentful/image';

export type Image = {
  title: string;
  file: File;
};
type ParseImageFromContentfulImage = ({fields}: ContentfulImage) => Image;
export const parseImageFromContentfulImage: ParseImageFromContentfulImage = ({
  fields,
}) => {
  return {
    file: fields.file,
    title: fields.title,
  };
};
