let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'guitardata.json', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                  //  alert(JSON.parse(this.responseText));
                    alert(JSON.parse(this.responseText));
        }
                }
    //call send
    xhr.send();