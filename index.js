async function getMovieList(year) {
  const titleArray = [];
  const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  console.clear();
  await fetch(url)
    .then((data) => data.json())
    .then((res) => {
      res.data.map((movieObj) => {
        titleArray.push(movieObj.Title);
      });
      return console.log('The Title Array is', titleArray);
    })
    .catch((err) =>
      console.log('The Error has occured the possible cause is', err)
    );
}
getMovieList(2016);
