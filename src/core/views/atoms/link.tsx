import React, {FC} from 'react';

interface LinkProps {
  href: string;
  text: string;
}

const Link: FC<LinkProps> = ({href, text}: LinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};
export default Link;
