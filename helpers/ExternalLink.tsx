interface Props {
  link: string;
  name?: string;
  title?: string;
  children?: React.ReactNode;
}

export default function ExternalLink({ link, name, title, children }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={title}
      aria-label={title}
    >
      {name ? name : children}
    </a>
  );
}
