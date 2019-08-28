

	var output = layer("output");
	clear(output);
	units(MM);
	pageCount(1);
	
	

	// NYT API Key: 566a46727ee44820bcd0e1ec8a389a8e



	var apiKey = "566a46727ee44820bcd0e1ec8a389a8e"; // received by email after signing up 
	var nytJSON = loadString("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key="+apiKey); 
	// println(nytJSON);

	var nyt = JSON.decode(nytJSON); // decode string into JSON object
	// inspect(nyt); // use inspect for objects

	var data = nyt.results;
	// inspect(data[0]);
	// println(data[2].title);

	for (var i = 0; i < 1; i++) { // data.length
		var row = data [i]; // row = each article
		
		// var myR = rect(0, 0, width, height*.25);
		// property(myR, "strokeWeight", 0);
		// property(myR, "fillColor", color(0));
		// opacity(myR, 70);
		
		// Title
		textSize(40);
		fill(255);
		var rowTitle = text(row.title, 0, 0, width, height/6);
		
		
		// Lead
		textSize(20);
		var rowAbstract = text(row.abstract, 10, height*.8, width-20, height/8);

		
		// Date
		textSize(20);
		fill(255)
		var dateRaw = split(row.published_date, "T"); // split text into array by char
		var dateYear = row.published_date.substring(0, 4); // cut piece of text from start to stop
		var rowDate = text(dateYear, 0, height-10, width, 10);
		typo(rowDate, "appliedFont", "Helvetica");
		property(rowDate, "fillColor", color(0));
		typo(rowDate, "leftIndent", 10);



		// Image
		var imgs = row.multimedia; // collection of article images
		if(imgs.length > 0 ){

			//inspect(imgs[0]);
			var imgPath = "downloads/" + i + ".jpg";
			download(imgs[4].url, imgPath); // 0 = thumbnail, 4 = superjumbo
			var img = image(imgPath, 0, 0, width, height);
			arrange(img, BACK);

		}
