import {File as ContentfulFile} from '../contentful/file';

/**
 * urlをhttp付きのフォーマットに整形します
 * @param url
 */
export const formattedUrl = (url: string): string => `http:${url}`;
export type File = {
  contentType: string;
  fileName: string;
  url: string;
};
type ParseFileFromContentfulFile = (file: ContentfulFile) => File;
export const parseFileFromContentfulFile: ParseFileFromContentfulFile = (
  file
) => {
  return {
    contentType: file.contentType,
    fileName: file.fileName,
    url: formattedUrl(file.url),
  };
};
