// Update this one object whenever the featured promotion changes.
export const promotion = {
  eyebrow: 'A special invitation · one night only',
  lead: 'This Wednesday,',
  accent: 'Aruma invites you.',
  date: {
    iso: '2026-09-23',
    weekday: 'Wednesday',
    month: 'September',
    monthShort: 'Sep',
    day: '23',
  },
  headline: 'Fresh seafood. Mexican soul.',
  description: 'Come enjoy fresh, delicious seafood prepared with the authentic Mexican flavors you love.',
  invitation: 'Bring your family and friends, settle into a great atmosphere, and pair your favorite seafood dish with a refreshing margarita.',
  tags: ['Fresh seafood', 'Margarita pairings', 'Family & friends'],
  imageAlt: 'A colorful seafood platter with shrimp-topped oysters beside the Aruma kitchen pass',
  imageCaption: 'Fresh seafood. Bright margaritas. Good company.',
  action: { label: 'Explore the menu', href: 'menu' },
} as const;
