// Update this file each week. The PromoSection component handles the layout.
export const promotions = {
  period: 'August 2026',
  intro: 'Check back often for special deals, events, and offerings.',
  weekly: [
    {
      day: 'MON',
      title: 'Margarita Monday',
      offer: '$5 house margaritas',
      timing: 'All day',
    },
    {
      day: 'TUE',
      title: 'Taco Tuesday',
      offer: '$2 street tacos',
      timing: '4–6 PM',
    },
    {
      day: 'DAILY',
      title: 'Happy Hour',
      offer: 'Half-price apps + $4 drinks',
      detail: 'Beer, wine, and well drinks',
      timing: '3–6 PM',
    },
  ],
  monthly: [
    {
      label: 'Grand opening',
      title: '20% off all month long.',
      description: 'Celebrate our opening with 20% off when ordering online.',
      code: 'GRANDOPENING',
      featured: true,
    },
    {
      label: 'Marshall High tailgate party',
      title: 'Wear purple. Get free chips & salsa.',
      description: 'Show your Tiger pride and we’ll bring the first snack.',
      featured: false,
    },
  ],
  vip: {
    title: 'Get the good news first.',
    description: 'Join our VIP Text Club for weekly deal alerts.',
    keyword: 'ARUMA',
    phoneDisplay: '507-123-4567',
    phoneHref: '+15071234567',
  },
} as const;
