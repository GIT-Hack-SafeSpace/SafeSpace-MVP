export const dashboard = {
  stateOfUs: {
    id: 'state',
    value: 'meh',
    heading: 'The State of Black Women',
    subheading: 'The current collective mood of Black women using SafeSpace.',
    type: 'info',
    reverse: true,
  },
  users: {
    id: 'users',
    value: '9.8M',
    subheading: 'Total Users',
    type: 'number',
    image: '../footer/companies.svg',
  },
  companies: {
    id: 'companies',
    value: '10%',
    subheading: 'Companies Recommended',
    type: 'number',
    image: '../footer/companies.svg',
  },
  industry: {
    id: 'industry',
    value: '35%',
    heading: 'Worst Industy: Technology',
    subheading:
      'This percentage reflects the most impacted industry based on SafeSpace. user industries and number of reports',
    type: 'info',
  },
  revenue: {
    id: 'revenue',
    value: '$300K',
    heading: 'Lost Revenue',
    subheading:
      'This represents the amount of revenue lost per hour based on user reports in SafeSpace.',
    type: 'number',
  },
  topTag: 'microaggression'
}
