// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Add a click event listener to the search button
searchBtn.addEventListener('click', function() {
  // Get the input value and convert to lowercase
  const input = searchInput.value.toLowerCase();
  
  // Fetch the JSON data from your file
   function getData() { async () => {
    const response = await fetch('/mvp.json');
    const data = await response.json();
    getData();

    const results = [];
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        if (obj.someField.toLowerCase().indexOf(input) !== -1 || obj.year === parseInt(input)) { // Check if any field contains the input string or year matches
          results.push(obj); // Add matching object to results array
        }
      }
      // Display the search results
      showResults(results);
    }
    };




    
    



    // .then(response => response.json())
    // .then(data => {
    //   const results = [];
      // Loop through the JSON data to find matching objects
      

function showResults(results) {
  let output = '';
  // Loop through the results array and generate HTML output for each object
  for (let i = 0; i < results.length; i++) {
    const obj = results[i];
    output += '<div class="result">';
    output += '<h2>' + obj.title + '</h2>';
    output += '<p>' + obj.description + '</p>';
    output += '<p>Year: ' + obj.year + '</p>';
    output += '</div>';
  }
  // Update the search results div with the generated HTML output
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = output;
}});
