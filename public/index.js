const form = document.getElementById('form');
// const data = require ('./mvp.json');
const input = prompt("Enter search term: ");
const results = {};
const app = document.getElementById('app');
const data = [{'./mvp.json': 'mvp.json'}];





function search(event) {
//   event.preventDefault();
  const input = document.getElementById('input').value;
  const results = [];
    data.forEach(obj => {
        let found = false;
        for (let key in obj) {
            if(!found) {
                const value = obj[key];
                if (isNaN(input)) {
                    if (typeof value === 'string' && value.includes(input)) {
                        found = true;
                        }
                          } else {
                    if (typeof value === 'number' && Number(value) === Number(input)) {
                        found = true;
                    }
                };
            }
        if (found) {results.push(obj);
        }
            }
        });
        return results;
        };
        console.log(results);
        search();


//   console.log(input);
    // data.forEach(obj => {
    //   let found = false;
    //   for (let key in obj) {
    //       if(!found) {
    //           const value = obj[key];
    //           if (isNaN(input)) {
    //               if (typeof value === 'string' && value.includes(input)) {
    //                   found = true;
    //                   }
    //                  } else {
    //               if (typeof value === 'number' && Number(value) === Number(input)) {
    //                   found = true;
    //               }
    //           };
    //       }
    //   if (found) {results.push(obj);
    //   }
    //     }
    // });
    // return results;
    // };





  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';
  if (results.length > 0) {
      const listResults = document.createElement('ul');
      results.forEach(result =>{
          const listItem = document.createElement('li');
          listItem.innerHTML = JSON.stringify(result);
          listResults.appendChild(listItem);
      });
      resultsContainer.appendChild(listResults);
  } else {
      resultsContainer.innerHTML = 'No results found';
    //   return resultsContainer;
    //   console.log(resultsContainer);
      
  };

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 4);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data);
  console.log(stringified);
};





// function renderFeedbackContainer() {
//       const div = document.createElement('div');
//       div.className = 'feedback-container';
      
//       app.append(div);
//     }; 

    

//         function renderFeedback(str) {
//               const div = document.createElement('div');
//               div.innerHTML = '';
//               input.value = 'input';
//               div.id = 'results';
//               div.innerText = str;
//               div.className = 'results';
//               app.appendChild(div);
//             }
// renderFeedback();

//             function loadHTMLElements() {
//                 //   renderInputContainer();
//                 //   renderBtn();
//                   renderFeedbackContainer();
//                 }
//                 loadHTMLElements();