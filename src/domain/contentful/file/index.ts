export type File = {
  contentType: string;
  details: {
    image: {
      width: number;
      height: number;
    };
    size: number;
  };
  fileName: string;
  url: string;
};
