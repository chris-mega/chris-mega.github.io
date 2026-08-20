export default function PostLink({ href, children }) {
  return (
    <a
      className="inline-block text-accent underline decoration-accent/40 hover:decoration-accent"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
