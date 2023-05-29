import { FC } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Link.css'

interface ILinkProps {
    name: string,
    icon: IconDefinition,
    link: string
}

const Link: FC<ILinkProps> = ({ name, icon, link }: ILinkProps) => {
  return (
    <a title={ name } rel="me" href={ link } className="link-icon">
      <FontAwesomeIcon
        icon={ icon }
        size="2xl"
      />
    </a>
  )
}

export default Link