const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift/Redis/MySQL/MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['ML Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
