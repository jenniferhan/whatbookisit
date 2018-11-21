$(document).ready(function() {

	var isbn = null;
	$( '#button' ).click(function() {

		isbn = $('#textbox').val();

		var request = new XMLHttpRequest();
		request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn, true);
		request.onreadystatechange = function() {
       		 if (request.status === 200 && request.readyState === 4) {  

       		 	var bookInfo = JSON.parse(request.responseText);

       		 	if (isbn == "" || !bookInfo.items) {
					alert("Please enter a valid ISBN.");
					return;
				}

       		 	var img = bookInfo.items[0].volumeInfo.imageLinks.thumbnail;
       		 	var description = bookInfo.items[0].volumeInfo.description;

       		 	// Displays book title
       		 	$('#exampleModalLabel').html(bookInfo.items[0].volumeInfo.title);

       		 	// Displays book cover
       		 	$('#book_image').attr('src', img);

       		 	// Display book description
       		 	$('#description').html(description);


    			$("#exampleModal").modal('show');

       		 }
    	};

    	request.send();
    	
	});
});

