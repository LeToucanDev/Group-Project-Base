function start(){
    async function ClickGenre(event){ //This is what happens when you click on a genre.
        let genre = event.target.id;
        if(genre == 'dance-music') genre = 'dance pop';
        else if(genre == 'indie') genre = 'indie pop';
        let request = await fetch(`/api/songs/${genre}`);
        sourceAlbums = await request.json();
    
        window.localStorage.setItem("filteredAlbums", JSON.stringify(sourceAlbums)); // Saving
        window.location.href = `/genre`; 
        
    }
    
    let element = document.querySelectorAll('.button');
    element.forEach(elem => {
        elem.addEventListener('click',ClickGenre)
    })    

    Search();
}

async function clickSuggestion(event){
    let eventName = event.target.id;
    let request = await fetch(`/api/songs/album/${eventName}`);
    sourceAlbums = await request.json();

    window.localStorage.setItem("filteredAlbums", JSON.stringify(sourceAlbums)); // Saving
    window.location.href = `/genre`; 
}

async function Search(){
    const searchInput = document.querySelector('.search'); //This chooses an element with the class search
    const suggestions = document.querySelector('.suggestions'); //Chooses element with class suggestions

    const request = await fetch(`/api/albums`);
    const mArr = await request.json()


    function findMatches(searchQuery, mArr){
        return mArr.data.filter(song => {
            const regex = new RegExp(searchQuery, 'gi'); //regExp is an object that goes into .match method
            return song.album_name.match(regex) //|| song.category.match(regex)|| song.name.match(regex)
        });
    };

    function displayMatches(event){ //*TODO This <li> class probably needs to be edited!
         query = event.target.value;
         const matchArr = findMatches(query, mArr); //this.value is the data being input in the form
         const html = matchArr.map(Song => { //.map creates an array with equal size but replaces the values with this instead
            return ` <li id='${Song.album_id}' class = "sug-box box">        
                    <span>${Song.album_name}</span> <br>
                    </li>       
            `;
    
        }).join(''); //This changes html from an array to a big string
    
        if(query){
            suggestions.innerHTML = html; //takes the html strong from html and creates html in this element
            let elements = document.querySelectorAll('.sug-box');
            elements.forEach(elem =>{
                elem.addEventListener('click', (evt) => clickSuggestion(evt));
            })
        }else {
            suggestions.innerHTML = "";
        }
        
    };
    searchInput.addEventListener('change',(evt)=> displayMatches(evt));
    searchInput.addEventListener('keyup',(evt)=> displayMatches(evt));
}



window.onload = start;
