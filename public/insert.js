async function windowActions(){
    const form =  document.querySelector('#song-form');
    const albName = document.querySelector('#album_name');
    const title = document.querySelector('#title');
    const genre = document.querySelector('#genre');
    const relDate = document.querySelector('#release_date');
    const artName = document.querySelector('#artist_name');
    const songLen = document.querySelector('#song_length');
    const lyrics = document.querySelector('#lyrics');
    form.addEventListener('submit', async (e)=>{
        e.preventDefault();
        console.log('submit form', e.target);

        const post = await fetch('api/songs', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                album_name: albName.value,
                title: title.value,
                genre: genre.value,
                release_date: relDate.value,
                artist_name: artName.value,
                song_length: songLen.value,
                lyrics: lyrics.value
            })
    });
    });
}
window.onload = windowActions;