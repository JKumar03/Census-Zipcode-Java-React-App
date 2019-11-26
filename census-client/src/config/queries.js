export default [
  {
    queryId: 1,
    title: 'Upload File',
    endpoint: "http://localhost:9090/census",
    method: 'POST',
    params: {
      file: ''
    }
  },
  {
    queryId: 2,
    title: 'Zip code for population range',
    endpoint: "http://localhost:9090/census/zipcodes/range",
    method: 'GET',
    params: {
      start: 1,
      end: 10
    }
  },
  {
    queryId: 3,
    title: 'Zip code for median age range',
    endpoint: "http://localhost:9090/census/zipcodes/medianage",
    method: 'GET',
    params: {
      start: 1,
      end: 10
    }
  },
  {
    queryId: 4,
    title: 'Zip Code for top populated census',
    endpoint: "http://localhost:9090/census/zipcodes/toppolulated",
    method: 'GET',
    params: {
      top: 1,
    }
  },
  {
    queryId: 5,
    title: 'Zip code where females are more than males',
    endpoint: "http://localhost:9090/census/zipcodes/genderdiff",
    method: 'GET',
  }
];
