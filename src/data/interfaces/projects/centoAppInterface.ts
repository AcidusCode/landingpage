export interface CentoAppInterface {
  hero: {
    altHero: string
    projectName: string
    projectTagline: string
    viewProject: string
  }
  theProblem: {
    title: string
    text: string
  }
  researchAndLearnings: {
    title: string
    text: string
    items: {
      label: string
      text: string
    }[]
  }
  theIdea: {
    title: string
    text: string
  }
  designSolution: {
    title: string
    features: string[]
  }
  expectedImpact: {
    title: string
    items: {
      value: string
      description: string
    }[]
  }
  learnings: {
    title: string
    items: string[]
  }
  cta: {
    text: string
    ariaLabel: string
  }
}