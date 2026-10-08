import { profile, sections } from './content.js';

function ContentList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.href ? <a href={item.href}>{item.text}</a> : item.text}
          {item.children?.length > 0 && <ContentList items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
        <header>
          <h1>{profile.name}</h1>
          {profile.introduction && <p>{profile.introduction}</p>}
          <nav aria-label="Sections">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label || section.title}
              </a>
            ))}
          </nav>
        </header>
        {sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
            <h2 id={`${section.id}-heading`}>{section.title}:</h2>
            <ContentList items={section.items} />
          </section>
        ))}
      </main>
    </>
  );
}
