const stringSimilarity = require('string-similarity');

export const toLowerCase = (value) => {
  if (!value || value.length < 1) return value;
  return value.trim().toLowerCase();
};

export const cleanGithubUrl = (domain) => {
  if (!domain) return '';
  if (typeof domain !== 'string') {
    return '';
  }
  if (domain.includes('https://')) {
    return replace(domain, 'https://github.com/', '');
  }
  if (domain.includes('http://')) {
    return replace(domain, 'http://github.com/', '');
  }
  return domain;
};

export const areSimilarStrings = (s1, s2, percentage = 0.8) =>
  stringSimilarity.compareTwoStrings(s1, s2) > percentage;