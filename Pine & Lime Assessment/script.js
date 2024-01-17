document.addEventListener("DOMContentLoaded", function () {
    // Sample data for testing
    const data = {
        date: "2024-01-17",
        latitude: "40.7128",
        longitude: "-74.0060",
        title: "Sample Title",
        description: "This is a sample description."
    };

    // Use Mustache.js to render the template with dynamic data
    const template = document.getElementById("dynamic-template").innerHTML;
    const rendered = Mustache.render(template, data);

    // Insert the rendered template into the HTML
    document.querySelector(".dynamic-content").innerHTML = rendered;
});
