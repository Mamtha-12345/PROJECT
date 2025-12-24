function addTrip() {
    let destination = document.getElementById("destination").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let budget = document.getElementById("budget").value;
    let notes = document.getElementById("notes").value;

    if (destination === "" || startDate === "" || endDate === "") {
        alert("Please fill all required fields");
        return;
    }

    let result = `
        <h3>📍 ${destination}</h3>
        <p><b>From:</b> ${startDate}</p>
        <p><b>To:</b> ${endDate}</p>
        <p><b>Budget:</b> ₹${budget}</p>
        <p><b>Notes:</b> ${notes}</p>
        <hr>
    `;

    document.getElementById("tripResult").innerHTML = result;
}
