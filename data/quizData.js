export const questions = [
  'I argue my ideas with teammates to prove the importance of the position I take.',
  'I try to reach compromises through negotiation.',
  'I attempt to meet the expectation of others.',
  'I seek to investigate issues with others in order to find solutions that are mutually acceptable.',
  'I am firm in resolve when it comes to defending my side of the issue.',
  'I try to avoid being singled out, keeping conflict with others to myself.',
  'I uphold my solutions to problems.',
  'I compromise in order to reach solutions.',
  'I trade important information with others so that problems can be solved together.',
  'I avoid discussing my differences with others.',
  'I try to accommodate the wishes of my peers and colleagues.',
  "I seek to bring everyone's concerns out into the open in order to resolve disputes in the best possible way.",
  'I put forward middle positions in efforts to break deadlocks.',
  'I accept the recommendations of colleagues, peers, and coworkers.',
  'I avoid hard feelings by keeping my disagreements with others to myself.',
];

export const options = [
  'Always',
  'Very often',
  'Sometimes',
  'Not very often',
  'Rarely, if ever',
];

const competingDescription = () => {
  let description = 'Competing Sharks';
  description += '<ul>';
  description += '<li>Sharks use a forcing or competing conflict management style</li>';
  description += '<li>Sharks are highly goal-oriented</li>';
  description += '<li>Relationships take on a lower priority</li>';
  description += '<li>Sharks do not hesitate to use aggressive behavior to resolve conflicts</li>';
  description += '<li>Sharks can be autocratic, authoritative, and uncooperative; threatening and intimidating</li>';
  description += '<li>Sharks have a need to win; therefore others must lose, creating win-lose situations</li>';
  description += '</ul>';
  description += '<p>Advantage: If the shark\'s decision is correct, a better decision without compromise can result</p>';
  description += '<p>Disadvantage: May breed hostility and resentment toward the person using it</p>';

  return description;
}

export const styles = {
  competing: competingDescription,
  collaborating: competingDescription,
  avoiding: competingDescription,
  accomodating: competingDescription,
  compromising: competingDescription,
};
