// // write and export your action creator function here
const url = "https://learn-co-curriculum.github.io/cat-api/cats.json"

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS' })
        // for whatever weird reason if you leave the ; after dispatch it REALLY hates that. 
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            dispatch({ type: 'ADD_CATS', cats: json.images})
        })
    }
}

// export default fetchCats

// export const fetchCats = () => {
//     return (dispatch) => {
//       dispatch({ type: 'LOADING_CATS'})
//       fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
//         return response.json()
//       }).then(responseJSON => {
//         dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//       })
//     }
//   }