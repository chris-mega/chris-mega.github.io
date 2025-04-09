export default function PostLink({ href, children }) {
  return (
    <a
      className="inline-block text-blue-500 underline hover:text-blue-400"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
