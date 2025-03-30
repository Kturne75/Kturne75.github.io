document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const coursesContainer = document.getElementById("coursesContainer");
    const addCourseBtn = document.getElementById("addCourse");

    // Handle adding courses dynamically
    addCourseBtn.addEventListener("click", () => {
        const div = document.createElement("div");
        div.className = "course-entry";
        
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter course";
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.type = "button";
        
        removeBtn.addEventListener("click", () => div.remove());

        div.appendChild(input);
        div.appendChild(removeBtn);
        coursesContainer.appendChild(div);
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Validate required fields
        const requiredFields = ["name", "mascot", "caption", "personalBg", "professionalBg", "academicBg", "webBg", "platform"];
        for (let field of requiredFields) {
            if (!document.getElementById(field).value.trim()) {
                alert("Please fill out all required fields.");
                return;
            }
        }

        // Validate image type
        const image = document.getElementById("image").files[0];
        if (image && !["image/png", "image/jpeg"].includes(image.type)) {
            alert("Only PNG or JPG images are allowed.");
            return;
        }

        // Gather form data
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
            <h2>${document.getElementById("name").value}'s Introduction</h2>
            <h3>Mascot: ${document.getElementById("mascot").value}</h3>
            ${image ? `<img src="${URL.createObjectURL(image)}" alt="Profile Image" width="200">` : ""}
            <p><strong>Image Caption:</strong> ${document.getElementById("caption").value}</p>
            <p><strong>Personal Background:</strong> ${document.getElementById("personalBg").value}</p>
            <p><strong>Professional Background:</strong> ${document.getElementById("professionalBg").value}</p>
            <p><strong>Academic Background:</strong> ${document.getElementById("academicBg").value}</p>
            <p><strong>Background in Web Development:</strong> ${document.getElementById("webBg").value}</p>
            <p><strong>Primary Computer Platform:</strong> ${document.getElementById("platform").value}</p>
            <p><strong>Courses:</strong> ${[...coursesContainer.querySelectorAll("input[type='text']")]
    .map((input) => input.value).filter((text) => text).join(", ")}</p>
            <p><strong>Funny Thing:</strong> ${document.getElementById("funny").value}</p>
            <p><strong>Anything Else:</strong> ${document.getElementById("extra").value}</p>
            <button id="resetPage">Reset</button>
        `;

        form.style.display = "none"; // Hide form after submission

        // Reset Page Button
        document.getElementById("resetPage").addEventListener("click", () => {
            form.reset();
            form.style.display = "block";
            outputDiv.innerHTML = "";
        });
    });

    // Reset form event
    form.addEventListener("reset", () => {
        document.getElementById("output").innerHTML = "";
    });
});
