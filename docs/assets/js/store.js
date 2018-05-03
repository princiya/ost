const store = {
  totalProjects: 0,
  offset: 0,
  limit: 10,
  projects: new Set,
  programmingLanguages: [
    'Python',
    'Swift',
    'Go',
    'Java',
    'CSS',
    'JavaScript',
    'Scala',
    'Shell',
    'Elm',
    'Kotlin',
    'Clojure'
  ],
  topProgrammingLanguages: [
    'Java',
    'Python',
    'Scala',
    'CSS',
    'Go'
  ],
  organisations: [
   'zalando', // 43
   'zalando-incubator', // 22
   'zalando-stups' // 77
  ],
  path: '',

  setLimit(value) {
    this.limit = value;
  },

  setPath(value) {
    this.path = value;
  }
};

/*
@TODO
- add ESLINT
- get svg icons for all programmingLanguages
- component to load all JS files
- benchmark performance for Map, Set
- measure page load time
  - https://codeburst.io/performance-metrics-whats-this-all-about-1128461ad6b
  - https://www.sitepoint.com/javascript-performance-optimization-tips-an-overview/
- browser support for Map, Set
- setup test environment
  - tape.js for vanilla js
- make store immutable
*/
