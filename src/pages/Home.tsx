import Page from "@/components/Page";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josias-piri-0a4a71aa",
  },
  { label: "GitHub", href: "https://github.com/josiaspiri" },
] as const;

export default function Home() {
  return (
    <Page heading="Josias Piri">
      <nav aria-label="Social links" className="not-prose">
        <ul className="m-0 flex list-none gap-8 p-0">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <li className="not-prose" key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in new tab)`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Page>
  );
}
