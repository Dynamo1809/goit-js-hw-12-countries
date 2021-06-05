'use strict';
const BASE_URL = 'https://restcountries.eu/rest/v2/';

function fetchCounties(searchQuery){
  const searchQueryTrim = searchQuery.trim();
  return fetch(`${BASE_URL}name/${searchQueryTrim}`).then(response => response.json());      
}

export default { fetchCounties };