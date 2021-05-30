import React from "react";
import ExternalLink from "../../helpers/ExternalLink";

import * as sc from "./Styles";

const Footer = () => {
  return (
    <sc.Wrapper>
      <sc.Links>
        <ExternalLink
          link="mailto:jjozic98@gmail.com"
          name="jjozic98@gmail.com"
        />
        <ExternalLink
          link="https://instagram.com/julianjozic"
          name="Instagram"
        />
        <ExternalLink link="https://github.com/jjozic" name="Github" />
      </sc.Links>
    </sc.Wrapper>
  );
};

export default Footer;