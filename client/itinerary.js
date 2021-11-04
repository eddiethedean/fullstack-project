
const rideDeleting = async (id) => {
    const addRide = await fetch(`http://localhost:3001/delete_id/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    });

}


const readItinerary= async () => {
    const itineraryData = await fetch ("http://localhost:3001/read_itinerary", {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await itineraryData.json();
    console.log(json)
    for (const i in json.rows){
        const itinerary_data = json.rows[i]
        const itineraryContainer = document.querySelector('.itinerary-container')
        const ride_name = itinerary_data.ride_name
        const id = itinerary_data.id
        const ride_url = itinerary_data.ride_url
        const rideName = document.createElement('p');
        rideName.className ="ride-name";
        const ridePicture = document.createElement('img');
        ridePicture.className = "itinerary-pictures";
        const button = document.createElement('button');
        button.id = id
        button.className = "delete-button"
        button.textContent = "Delete from Itinerary"
        ridePicture.src = ride_url 
        const rideDetails = document.createElement('div');
        rideDetails.className = "ride-details"
        rideDetails.id = `div-${id}`
        rideName.innerHTML = ride_name;
        rideDetails.append(rideName, ridePicture, button);
        itineraryContainer.append(rideDetails);

        button.addEventListener('click', e => {
            e.preventDefault
           
            rideDeleting(e.currentTarget.id)
            const deleteDiv = document.querySelector(`#div-${id}`)
            deleteDiv.parentNode.removeChild(deleteDiv)


        })
        

        
    }
}

readItinerary();