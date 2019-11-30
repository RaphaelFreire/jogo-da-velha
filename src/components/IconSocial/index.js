import React from "react";

const IconSocial = ({ action, src, alt }) => (
  <a target="_blank" rel="noopener noreferrer" href={action}>
    <img className="icon-social" src={src} alt={alt} />
  </a>
);

export default IconSocial;
