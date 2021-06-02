async function createReviewHandler(event) {
    event.preventDefault();

    const name = document.querySelector("#mosh-name-input").value.trim();
    const email = document.querySelector("#mosh-email-input").value.trim();
    const review = document.querySelector("#mosh-text-area").value.trim();

    console.log(name)
    console.log(email) 
    console.log(review)

    const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
           name,
           email,
           review
        }),
        headers: {
           'Content-Type': 'application/json'
        }
     });
   
     if (response.ok) {
        document.location.replace('/');
     } else {
        alert("failed to add");
     }


}

document.querySelector("#mosh-submit-button").addEventListener("submit", createReviewHandler);
