export type Service = {
  id: 'grounds' | 'interiors' | 'winter' | 'specialty-care'
  index: string
  name: string
  shortName: string
  headline: string
  summary: string
  supportHeadline: string
  supportCopy: string
  services: string[]
  primaryImage: string
  detailImage: string
  alt: string
  cta: string
}

export const services: Service[] = [
  {
    id: 'grounds',
    index: '01',
    name: 'Grounds',
    shortName: 'Grounds',
    headline: "Good grounds don’t happen by accident.",
    summary:
      'Grass cutting, landscaping, mulching, seasonal cleanup, and day-to-day outdoor care for commercial and residential properties.',
    supportHeadline: 'Keep the outside working.',
    supportCopy:
      'Grounds care is more than a clean edge on the lawn. It is the ongoing work that keeps entrances welcoming, walkways clear, planting areas maintained, and the property from getting away from you.',
    services: [
      'Commercial and residential landscaping',
      'Grass cutting',
      'Mulching',
      'Seasonal cleanup',
      'Walkway and outdoor-space upkeep',
    ],
    primaryImage: '/media/projects/grounds-primary.webp',
    detailImage: '/media/projects/grounds-detail.webp',
    alt: 'Freshly maintained lawn with alternating mowing stripes.',
    cta: 'Request grounds care',
  },
  {
    id: 'interiors',
    index: '02',
    name: 'Interiors',
    shortName: 'Interiors',
    headline: 'Clean enough to feel different.',
    summary:
      'Commercial and residential cleaning, janitorial work, and care for carpets and upholstery.',
    supportHeadline: 'Care for the spaces people use every day.',
    supportCopy:
      'Homes, offices, common areas, carpets, and furniture each need a different kind of attention. Tell us what needs cleaning, how the space is used, and what schedule you have in mind.',
    services: [
      'Commercial cleaning',
      'Residential cleaning',
      'Janitorial services',
      'Carpet cleaning',
      'Upholstery cleaning',
    ],
    primaryImage: '/media/projects/interiors-primary.webp',
    detailImage: '/media/projects/interiors-detail.webp',
    alt: 'Clean commercial interior prepared for daily use.',
    cta: 'Request cleaning',
  },
  {
    id: 'winter',
    index: '03',
    name: 'Winter',
    shortName: 'Winter',
    headline: 'When Vermont piles it on, we clear the way.',
    summary:
      'Snow removal and roof shoveling that help keep properties accessible through a Vermont winter.',
    supportHeadline: 'Access matters all winter.',
    supportCopy:
      'Tell us about the property, the areas that need clearing, and the kind of winter coverage you are looking for. We’ll follow up about fit and availability.',
    services: [
      'Commercial snow removal',
      'Residential snow removal',
      'Driveways, walkways, and parking areas',
      'Roof shoveling',
    ],
    primaryImage: '',
    detailImage: '',
    alt: '',
    cta: 'Ask about winter service',
  },
  {
    id: 'specialty-care',
    index: '04',
    name: 'Specialty Care',
    shortName: 'Specialty',
    headline: "For everything that doesn’t fit neatly in a box.",
    summary:
      'Pool and pond maintenance, fish stocking, handyman work, and the jobs that do not fit neatly into a standard service list.',
    supportHeadline: 'Start with the problem.',
    supportCopy:
      'Specialty work is rarely one-size-fits-all. Send a few details, photographs if they help, and the property location. We’ll let you know whether the job is a fit.',
    services: [
      'Pool cleaning and maintenance',
      'Pond cleaning and maintenance',
      'Fish stocking',
      'Handyman services',
    ],
    primaryImage: '/media/projects/specialty-primary.webp',
    detailImage: '/media/projects/specialty-primary.webp',
    alt: 'Indoor pool maintained and ready for use.',
    cta: 'Tell us about the job',
  },
]

export const contact = {
  phoneDisplay: '(802) 343-7779',
  phoneHref: 'tel:+18023437779',
  hours: 'Everyday, 8:00 a.m.–5:00 p.m.',
  location: 'Essex, Vermont',
  serviceArea: 'Northern Vermont',
}

export const projectImages = [
  { src: '/media/projects/gallery-03.webp', category: 'grounds', alt: 'Long, clean mower stripes across a residential lawn.' },
  { src: '/media/projects/interiors-primary.webp', category: 'interiors', alt: 'Clean modern commercial office with open workstations.' },
  { src: '/media/projects/gallery-02-clean.png', category: 'grounds', alt: 'Commercial entrance framed by colorful flower beds.' },
  { src: '/media/projects/specialty-primary.webp', category: 'specialty-care', alt: 'Maintained indoor lap pool and surrounding deck.' },
  { src: '/media/projects/gallery-09.webp', category: 'grounds', alt: 'Crew completing a large fresh-mulch installation.' },
  { src: '/media/projects/interiors-detail.webp', category: 'interiors', alt: 'Maintained commercial office and reception workspace.' },
  { src: '/media/projects/gallery-01.webp', category: 'grounds', alt: 'Mulched perennial bed alongside a commercial walkway.' },
  { src: '/media/projects/gallery-04.webp', category: 'grounds', alt: 'Wide striped lawn after mowing.' },
  { src: '/media/projects/gallery-06.webp', category: 'grounds', alt: 'Maintained residential entry with hanging baskets and foundation planting.' },
  { src: '/media/projects/gallery-07.webp', category: 'grounds', alt: 'Fresh mower lines across a large tree-lined property.' },
  { src: '/media/projects/gallery-08.webp', category: 'grounds', alt: 'Stone-edged flower bed beside a walkway.' },
  { src: '/media/projects/gallery-10.webp', category: 'grounds', alt: 'Newly planted commercial bed with fresh mulch.' },
  { src: '/media/projects/gallery-11.webp', category: 'grounds', alt: 'Long commercial walkway with newly mulched border.' },
  { src: '/media/projects/gallery-12-clean.png', category: 'grounds', alt: 'Curved commercial flower bed surrounding a young tree.' },
]
