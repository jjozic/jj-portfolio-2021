export default function ExternalLink({ link, name, children}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {name ? name : children}
    </a>
  )
}