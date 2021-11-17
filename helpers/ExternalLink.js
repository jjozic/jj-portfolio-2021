export default function ExternalLink({ link, name, title, children}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" title={title} aria-label={title}>
      {name ? name : children}
    </a>
  )
}