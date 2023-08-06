
// Function to get Painting Info when image figure is clicked
/**
 * @param id
 * @param art_img
 * 
 * Function gets the API data from the Art Institute and  the image index of our gallery.
 * Then finds the correct id inside of the JSON response data which is used to get the 
 * reuested data from the Art Institute of Chicago.
 */

/* fields to get in query from Art Institute:
title
thumbnail['alt_text']
date_display
artist_display
*/
// 

 async function clickedEvent(id, art_img){
     let headers = new Headers([
        ['AIC-User-Content-Type','application/json'],
         ['AIC-User-Agent','Coding-Temple-project-education (tony222@mac.com']
     ]);

     let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}?fields=title,thumbnail,date_display,artist_display`,{
         method: 'GET',
         headers: headers
     });
     
     let result = await fetch(request);

     let response = await result.json();

     let item_data = response.data

     
     modal_template = `<img src='${art_img}'><p> 
     ${item_data.title}</p><p>
     ${item_data.date_display}</p><p>
     ${item_data.artist_display}</p><p>
     ${item_data.thumbnail['alt_text']} </p>`

    
     document.getElementsByTagName('p')[0].innerHTML = modal_template

     return 

 }

 // Open the Modal
function openModal(id, event) {
    document.getElementById("myModal").style.display = "grid";
    var art_img = ""
    // data = clickedEvent()
    switch(id){
        case '79307':{
            event.stopPropagation();
            art_img = `/static/bathers-by-a-river.png`
            clickedEvent(id, art_img)
            break
        }
        case '137125':{
            event.stopPropagation();
            art_img = `/static/many-mansions.png`
            clickedEvent(id, art_img)
            break
        }
        case '111628':{
            event.stopPropagation();
            art_img = `/static/nighthawks.jpeg`
            clickedEvent(id, art_img)
            break
        }
        case '117266':{
            event.stopPropagation();
            art_img = `/static/nightlife.png`
            clickedEvent(id, art_img)
            break
        }
        case '154129':{
            event.stopPropagation();
            art_img = `/static/towards-identity.jpeg`
            clickedEvent(id, art_img)
            break
        }
        case '24645':{
            event.stopPropagation();
            art_img = `static/under-the-wave-off-kanagawa.png`
            clickedEvent(id, art_img)
            break
        }
    }
  }

//  closes the modal 
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementsByTagName('p')[0].innerHTML = ""
  }
  