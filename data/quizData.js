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

export const results = {
  compromising: {
    animal: 'Compromising Fox',
    more: 'Compromising is moderate in both assertiveness and cooperativeness. The objective is to find some expedient, mutually acceptable solution that partially satisfies both parties. It falls intermediate between competing and accommodating. Compromising gives up more than competing but less than accommodating. Likewise, it addresses an issue more directly than avoiding, but does not explore it in as much depth as collaborating. In some situations, compromising might mean splitting the difference between the two positions, exchanging concessions, or seeking a quick middle-ground solution.',
    notes:
      'Foxes use a compromising conflict management style; concern is for goals and relationships. \nFoxes are willing to sacrifice some of their goals while persuading others to give up part of theirs. \nCompromise is assertive and cooperative-result is either win-lose or lose-lose.',
    advantage: ' relationships are maintained and conflicts are removed',
    disadvantage:
      'compromise may create less than ideal outcome and game playing can result',
    appropriate:
      'When important/complex issues leave no clear or simple solutions. \nWhen all conflicting people are equal in power and have strong interests in different solutions. \nWhen there are no time restraints',
  },
  competing: {
    animal: 'Competing Shark',
    more: "Competing is assertive and uncooperative—an individual pursues his own concerns at the other person's expense. This is a power-oriented mode in which you use whatever power seems appropriate to win your own position—your ability to argue, your rank, or economic sanctions. Competing means 'standing up for your rights,' defending a position which you believe is correct, or simply trying to win",
    notes:
      'Sharks use a forcing or competing conflict management style. \nSharks are highly goal-oriented. \nRelationships take on a lower priority. \nSharks do not hesitate to use aggressive behavior to resolve conflicts. \nSharks can be autocratic, authoritative, and uncooperative; threatening and intimidating. \nSharks have a need to win; therefore others must lose, creating win-lose situations.',
    advantage:
      "If the shark's decision is correct, a better decision without compromise can result",
    disadvantage:
      'May breed hostility and resentment toward the person using it',
    appropriate:
      'When conflict involves personal differences that are difficult to change. \nWhen fostering intimate or supportive relationships is not critical. \nWhen others are likely to take advantage of noncompetitive behavior. \nWhen conflict resolution is urgent; when decision is vital in crisis. \nWhen unpopular decisions need to be implemented',
  },
  avoiding: {
    animal: 'Avoiding Turtle',
    more: 'Avoiding is unassertive and uncooperative—the person neither pursues his own concerns nor those of the other individual. Thus he does not deal with the conflict. Avoiding might take the form of diplomatically sidestepping an issue, postponing an issue until a better time, or simply withdrawing from a threatening situation.',
    notes:
      'Turtles adopt an avoiding or withdrawing conflict management style. \nTurtles would rather hide and ignore conflict than resolve it; this leads them uncooperative and unassertive. \nTurtles tend to give up personal goals and display passive behaviour creating lose-lose situations',
    advantage:
      'may help to maintain relationships that would be hurt by conflict resolution',
    disadvantage:
      'Conflicts remain unresolved, overuse of the style leads to others walking over them',
    appropriate:
      'When the stakes are not high or issue is trivial. \nWhen confrontation will hurt a working relationship. \nWhen there is little chance of satisfying your wants. \nWhen disruption outweighs benefit of conflict resolution. \nWhen gathering information is more important than an immediate decision. \nWhen others can more effectively resolve the conflict. \nWhen time constraints demand a delay',
  },
  accomodating: {
    animal: 'Accommodating Teddy Bear',
    more: "Accommodating is unassertive and cooperative—the complete opposite of competing. When accommodating, the individual neglects his own concerns to satisfy the concerns of the other person; there is an element of self-sacrifice in this mode. Accommodation might take the form of selfless generosity or charity, obeying another person's order when you would prefer not to, or yielding to another's point of view.",
    notes:
      'Teddy bears use a smoothing or accommodating conflict management style with emphasis on human relationships. \nTeddy bears ignore their own goals and resolve conflict by giving into others; unassertive and cooperative creating a win-lose (bear is loser) situation',
    advantage: 'Accommodating maintains relationships',
    disadvantage:
      'Giving in may not be productive, bear may be taken advantage of',
    appropriate:
      'When maintaining the relationship outweighs other considerations. \nWhen suggestions/changes are not important to the accommodator. \nWhen minimizing losses in situations where outmatched or losing. \nWhen time is limited or when harmony and stability are valued',
  },
  collaborating: {
    animal: 'Collaborating Owl',
    more: "Collaborating is both assertive and cooperative—the complete opposite of avoiding. Collaborating involves an attempt to work with others to find some solution that fully satisfies their concerns. It means digging into an issue to pinpoint the underlying needs and wants of the two individuals. Collaborating between two persons might take the form of exploring a disagreement to learn from each other's insights or trying to find a creative solution to an interpersonal problem.",
    notes:
      'Owls use a collaborating or problem confronting conflict management style valuing their goals and relationships. \nOwls view conflicts as problems to be solved finding solutions agreeable to all sides (win-win)',
    advantage: 'both sides get what they want and negative feelings eliminated',
    disadvantage: 'takes a great deal of time and effort',
    appropriate:
      'When maintaining relationships is important. \nWhen time is not a concern. \nWhen peer conflict is involved. \nWhen trying to gain commitment through consensus building. \nWhen learning and trying to merge differing perspectives',
  },
};
