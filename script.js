let inhtml = document.getElementById('result')

function clickBtn() {
async function getDegrees(url) {
  // fetch the url
  await fetch(url)
    //get your data here, and check for the response status. If it's not 200, throw an error
    .then((response) => response.json())
    .then((data) =>
      inhtml.innerHTML(
                            `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.school} in ${data.data[0].degrees.bachelors.data.program}
                            and my second degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}.`
      )
    )
}

getDegrees("./degrees.json")}


