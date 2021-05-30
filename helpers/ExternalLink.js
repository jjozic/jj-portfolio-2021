export default function ExternalLink({ link, name }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {name ? name : link}
    </a>
  )
}
