import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
function NewMeetupPage() {
    async function addMeetupHandler(entredData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(entredData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data)
    }

    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetupPage
