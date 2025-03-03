// Close alert
$(document).on("click", ".close-btn", function() {
    $(this).parent().fadeOut();
});

// Add alert dynamically
$("#add-alert-btn").click(function() {
    let message = $("#alert-text").val();
    let type = $("#alert-type").val();

    if (message.trim() !== "") {
        let alertHTML = `
            <div class="alert alert-${type} d-flex justify-content-between">
                <span>${message}</span>
                <span class="close-btn">&times;</span>
            </div>`;
        $("#alerts-container").append(alertHTML);
        $("#alert-text").val("");
        $("#alertModal").modal("hide");
    }
});

// Dynamic Counter Animation
function animateCounter(id, start, end, duration) {
    let obj = $("#" + id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    let timer = setInterval(function() {
        current += (end > start) ? 1 : -1;
        obj.text(current);
        if (current === end) clearInterval(timer);
    }, stepTime);
}

// Simulate Data Update
setInterval(function() {
    let newBeds = Math.floor(Math.random() * 100) + 50;
    let newDoctors = Math.floor(Math.random() * 50) + 20;
    let newEmergency = Math.floor(Math.random() * 20) + 5;

    animateCounter("beds-count", parseInt($("#beds-count").text()), newBeds, 1000);
    animateCounter("doctors-count", parseInt($("#doctors-count").text()), newDoctors, 1000);
    animateCounter("emergency-count", parseInt($("#emergency-count").text()), newEmergency, 1000);
}, 5000); // Updates every 5 seconds
