console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.

let collection= [];

// - Add a function named `addToCollection`. Return the newly created object

  function addToCollection(title, artist, yearPublished){
     let albumns = {
      title: title, 
      artist: artist,
      yearPublished: yearPublished
  }
  collection.push(albumns); 
  return (albumns); 
 

  }

  console.log(addToCollection('street sermons' ,  'morray' , '2021'))



//   ### Stretch goals

// - Create a function called `search`. This function should:
//   let result = [];  //call outside of the function 

// function search(toSearch){
//   for (let i=0; i < collection.length; i++){
//     if (collection[i] === toSearch || collection[i].year ===toSearch)//each time you loop thrugh you are looking through the collection. want to be very specific when you are especially when content/word include words and numbers.  
//       result.push(collection[i]);
//   }else if (collection[i].artist != toSearch && collection[i] != toSearch){
//      result=[];
//   }else { 
//   return collection
// }
// }
// }



//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!

