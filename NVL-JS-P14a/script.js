window.onload = function movieList() {
var movies = [
    {
        "Name": "Spiderman: Far from Home",
        "Gender": "Fantasy"
      },
      {
        "Name": "Avengers: Endgame",
        "Gender": "Fantasy"
      },
      {
        "Name": "Avengers: Infinity War",
        "Gender": "Fantasy"
      },
      {
        "Name": "Ant-Man and the Wasp",
        "Gender": "Fantasy"
      },
      {
        "Name": "Black Panther",
        "Gender": "Fantasy"
      },
      {
        "Name": "Captain Marvel",
        "Gender": "Fantasy"
      },
      {
        "Name": "Wonder Woman",
        "Gender": "Action"
      },
      {
        "Name": "Captain America: Civil War",
        "Gender": "Thriller"
      },
      {
        "Name": "The Avengers",
        "Gender": "Fantasy"
      },
      {
        "Name": "The Lion King",
        "Gender": "Drama"
      }, 
      {
        "Name": "Once Upon a Time... in Hollywood",
        "Gender": "Drama"
      },
      {
        "Name": "Back to the Future",
        "Gender": "Action"
      },
      {
        "Name": "Toy Story 4",
        "Gender": "Fantasy"
      },
      {
        "Name": "Anabelle Comes Home",
        "Gender": "Thriller"
      },
      {
        "Name": "Yesterday",
        "Gender": "Fantasy"
      },
      {
        "Name": "Scary Stories to Tell in the Dark",
        "Gender": "Thriller"
      },
      {
        "Name": "Aladdin",
        "Gender": "Fantasy"
      },
      {
        "Name": "The Secret Life of Pets 2",
        "Gender": "Comedy"
      },
      {
        "Name": "Dumbo",
        "Gender": "Fantasy"
      },
      {
        "Name": "The Angry Birds Movie 2",
        "Gender": "Animated"
      }
];

    var theList = document.createElement('ul');

    var tableBody = document.querySelector('.table-body');
    tableBody.appendChild(theList);

    for (var i in movies) {
        var list = document.createElement('li');
        // aca se mete el li dentro del ul
        theList.appendChild(list);
        list.textContent = movies[i].Name;
        var span = document.createElement('span');
        theList.appendChild(span);
        list.style = 'display:flex; margin-bottom:20px';
        
        // if (genero = Acción)
        // console.log('accion');
        //if (genero = animación)
        // console.log('animacion');
        if(movies[i].Gender === "Action"){
            var image = document.createElement('img');
            image.style = 'width:150px; height: 0 auto';
            image.src = "https://www.iosicongallery.com/icons/action-movie-fx-2012-01-25/512.png";
            span.appendChild(image);
            
        } else if(movies[i].Gender === "Animated"){
            var image = document.createElement('img');
            image.style = 'width:150px; height: 0 auto';
            image.src = "https://cdn.dribbble.com/users/237895/screenshots/1812891/ballicons_animated.gif";
            span.appendChild(image);

        } else if(movies[i].Gender === "Fantasy"){
            var image = document.createElement('img');
            image.style = 'width:150px; height: 0 auto';
            image.src = "https://freepngimg.com/download/fantasy/6-2-fantasy-png-image.png";
            span.appendChild(image);

        } else if(movies[i].Gender === "Drama"){
            var image = document.createElement('img');
            image.style = 'width:150px; height: 0 auto';
            image.src = "https://www.shareicon.net/download/2016/08/24/820007_education.svg";
            span.appendChild(image);

        } else if(movies[i].Gender === "Thriller"){
            var image = document.createElement('img');
            image.style = 'width:150px; height: 0 auto';
            image.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/thriller-movie-530615.png";
            span.appendChild(image);

        } else if (movies[i].Gender === "Comedy"){
            var image = document.createElement('img');
            image.style = 'width:150px; height: 0 auto';
            image.src = "https://icon-library.net/images/comedy-icon/comedy-icon-13.jpg";
            span.appendChild(image);

        } else {
            span.textContent = "It doesn't exist this Gender";
        }
    }
}