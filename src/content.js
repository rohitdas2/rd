// Edit your site's content here. Bracketed text is a placeholder, not a claim.
// Each item supports: text, optional href, and optional children (nested items).
// Copy any item to add another. Remove any item or section you don't need.
export const profile = {
  name: 'Rohit Das',
  github: 'https://github.com/rohitdas2',
  introduction: '', // Optional short introduction beneath your name.
};

export const sections = [
  {
    id: 'about',
    label: 'About',
    title: 'A few things about me',
    items: [
      { text: '[A little about who I am and where I’m from.]' },
      { text: '[What I’m doing or thinking about these days.]' },
      { text: '[Something I enjoy outside of work.]' },
    ],
  },
  {
    id: 'values',
    label: 'Values',
    title: 'Things I believe',
    items: [
      {
        text: '[A value I try to live by.]',
        children: [
          { text: '[Why this matters to me.]' },
          { text: '[What this looks like in everyday life.]' },
        ],
      },
      {
        text: '[An idea I keep coming back to.]',
        children: [{ text: '[An experience that shaped how I see it.]' }],
      },
      { text: '[Something I’m still figuring out.]' },
    ],
  },
  {
    id: 'cooking',
    label: 'Cooking',
    title: 'Things I cook',
    items: [
      {
        text: '[A dish I like making.]',
        children: [{ text: '[The story behind it, or a note on how I make it.]' }],
      },
      {
        text: '[A recipe I’m working on.]',
        children: [{ text: '[What I’m trying differently next time.]' }],
      },
      { text: '[An ingredient, technique, or recipe worth sharing.]' },
    ],
  },
];
