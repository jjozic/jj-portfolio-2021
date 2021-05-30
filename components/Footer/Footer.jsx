import React from "react";
import ExternalLink from "../../helpers/ExternalLink";

import * as styles from "./Styles";

const Footer = () => {
  return (
    <styles.Wrapper>
      <styles.Links>
        <ExternalLink
          link="mailto:jjozic98@gmail.com"
          name="jjozic98@gmail.com"
        />
        <ExternalLink
          link="https://instagram.com/julianjozic"
          name="Instagram"
        />
        <ExternalLink link="https://github.com/jjozic" name="Github" />
      </styles.Links>
    </styles.Wrapper>
  );
};

export default Footer;