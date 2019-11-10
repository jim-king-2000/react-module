import fetch from 'isomorphic-unfetch'

export default function getStar() {
  return fetch('https://api.github.com/repos/zeit/next.js');
}