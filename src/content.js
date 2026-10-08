// Edit your site's content here. Bracketed text is a placeholder, not a claim.
// Each item supports: text, optional href, and optional children (nested items).
// Copy any item to add another. Remove any item or section you don't need.
export const profile = {
  name: 'Rohit Das',
  github: 'https://github.com/rohitdas2',
  introduction: 'hi, welcome to my website', // Optional short introduction beneath your name.
};

export const sections = [
  {
    id: 'about',
    label: 'About',
    title: 'A few things about me',
    items: [
      { text: 'I’m from Boulder Colorado and I love the outdoors' },
      { text: 'I’m working on building a project called Sapor' },
      { text: 'You can always find me cooking' },
    ],
  },
  {
    id: 'values',
    label: 'Values',
    title: 'Things I believe',
    items: [
      {
        text: 'A value I live by is honor',
        children: [
          { text: 'Having honor means doing the right thing even when it\'s hard. Honor in many ways means being disciplined and respecting your own word' },
          { text: 'This means doing the small things like unracking weight after a lift' },
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
        text: 'Peanut Butter Glazed Sweet Potatoes',
        children: [{ text: 'When I first started trying to eat healthier I stumbled apon these. In my opinion these are the best food ever created' }],
      },
      {
        text: 'I\'ve been trying to perfect my sweet potato gnocchi',
        children: [{ text: 'The key to a good gnocchi is not using much flour, which is easier said than done' }],
      },
      { text: 'From my experience, stainless steel pans are the ultimate tool and get a perfect cook on meat 9 times out of 10' },
    ],
  },
];
