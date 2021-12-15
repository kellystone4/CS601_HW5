// function getDegrees(){
//     console.log("getDegrees");
//     fetch(`./degrees.json`, {
//         headers : { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//          }
  
//       })
//       .then((response) => response.json())
//       .then((messages) => {console.log("messages");});
//   }



// fetch('https://kellystone4.github.io/CS601_HW5_Stone/')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     // Work with JSON data here
//     console.log(data)
//   })
//   .catch((err) => {
//     // Do something for an error here
//   })



// async function getDegrees() {
//     const response = await fetch('/degrees.json');
//     const degrees = await response.json();
//     console.log(degrees); 
//     // logs [{ name: 'Joker'}, { name: 'Batman' }]
//   }
//   getDegrees();

//   const response = await fetch('/api/names', {
//     method: 'GET'
//   });
  
//   const response = await fetch('/api/names', {
//     headers: {
//       'Accept': 'application/json'
//     }
//   });


  


// 

//     document.getElementById("button").onclick = function () {
//         makeRequest("https://kellystone.netlify.app/");
//     };
//     function makeRequest(url) {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) =>  document.write(
//                                 `Hello, welcome to my site! Learn about my degree's here: `
//                             //   `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.school} in ${data.data[0].degrees.bachelors.data.program}`
//                               `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.school} in ${data.data[0].degrees.bachelors.data.program}
//                               and my second degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}.`
                
//                             ))
//     }
// }) ();





// const runProgram = document.querySelector("#clickHere").addEventListener('click', function (event) {
// async function getDegrees(url) {
//         // fetch the url
//         await fetch(url)
//           //get your data here, and check for the response status. If it's not 200, throw an error
//           .then((response) => response.json())
//           .then((data) =>
//             document.write(
//                 // `Hello, welcome to my site! Learn about my degree's here: `
//               `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.school} in ${data.data[0].degrees.bachelors.data.program}`
//             //   `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.school} in ${data.data[0].degrees.bachelors.data.program}
//             //   and my second degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}.`

//             )
//           )
//       }

// }
// )


// const result = document.querySelector('#result')

// gets data from API and sets the content of #result div

// const getData = async function() {
//     await fetch("https://kellystone.netlify.app/")
//           //get your data here, and check for the response status. If it's not 200, throw an error
//           .then((response) => response.json())
//           .then(data => {
//             result.innerText = JSON.stringify(data.data[0].degrees.masters.data.type)
//           })

        //   .then((data) =>
        //     document.write(
        //       `My first degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}`
        //     )
        //   )
    // .catch(error => console.log(error))
// }

// var url = "https://kellystone4.github.io/CS601_HW5_Stone/"

// // if (onclick.clickBtn) {
async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) =>
        document.write(
          // `My first degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}`
                              `Hello, welcome to my site! Learn about my degree's here: `
                              `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.school} in ${data.data[0].degrees.bachelors.data.program}
                              and my second degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}.`
                
        )
      )
  }

  getDegrees("./degrees.json")


