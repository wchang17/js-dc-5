(function() {

  var httpRequest;

  document.getElementById("ajaxButton").onclick = function() {
    makeRequest('http://localhost:3000/index.html');
  };

  function makeRequest(url) {

    // Create a new instance of the XMLHttpRequest
    httpRequest = new XMLHttpRequest();

    // If there was an issue while creating the new requets, we'll broadcast an alert:
    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    // Next we tell the HTTP request object which JS function will handle the response from the server
    // Set the onreadystatechange property of the object to a function we'll call -- it will be called when the state of the request changes
    // We declare the function, but don't invoke it because we only want to assign a reference to it at this point in time
    // Alternatively, we could use an anonymous function and declare the functionality directly on the property

    httpRequest.onreadystatechange = alertContents;
    // After you've declared what will happen as soon after receiving the server's response, we set up the request itself
    // First we call open() and then the send() method of the HTTP request class - remember these are part of the constructor

    // The first parameter of the call to open() is the HTTP request method
    // The second parameter is the URL of the page you're requesting
    // Be sure to use the exact domain name on all of your pages or you will get a "permission denied" error when you call open()

    httpRequest.open('GET', url);
    //this is for post requests
    httpRequest.send();
  }

  function alertContents() {

    // Step 2. Handling the server response
    // Remember that when you were sending the request, you provided the name of a JS function that is designed to handle the response
    // First, the function checks for the state of the request
    // If the state has the value of XMLHttpRequest.DONE (evaluating to 4) that means the full server response has been received and it's okay to continue processing it
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      //The next thing to check is the response code of the HTTP server response
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
