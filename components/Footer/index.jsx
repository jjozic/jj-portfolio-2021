import ExternalLink from "../../helpers/ExternalLink";
import styles from '@/styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.links}>
        <ExternalLink
          link="mailto:jjozic98@gmail.com"
          name="jjozic98@gmail.com"
        />
        <ExternalLink
          link="https://instagram.com/julianjozic"
          name="Instagram"
        />
        <ExternalLink link="https://github.com/jjozic" name="Github" />
      </div>
    </footer>
  );
};

export default Footer;