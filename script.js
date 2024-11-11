// Get the button and add a click event
var startProcess = document.getElementById("getResumeButton");
startProcess === null || startProcess === void 0 ? void 0 : startProcess.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    buildResume(); // Update the resume dynamically
});
function buildResume() {
    var _a;
    // Get form input elements
    var nameInput = document.getElementById("name");
    var jobTitleInput = document.getElementById("jobTitle");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var linkedinInput = document.getElementById("linkdin");
    var addressInput = document.getElementById("address");
    var personalDetailInput = document.getElementById("personalDetail");
    var certificateInput = document.getElementById("certificate");
    var educationInput = document.getElementById("education");
    var experienceInput = document.getElementById("experience");
    var skillsInput = document.getElementById("skills");
    var profileImageInput = document.getElementById("profileImage");
    var currentImage = document.getElementById("profilePic");
    // Extract form values with fallback defaults
    var name = (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || "John Doe";
    var jobTitle = (jobTitleInput === null || jobTitleInput === void 0 ? void 0 : jobTitleInput.value) || "Job Title";
    var email = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || "***@gmail.com";
    var phone = (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) || "03*********";
    var linkedin = (linkedinInput === null || linkedinInput === void 0 ? void 0 : linkedinInput.value) || "John Doe";
    var address = (addressInput === null || addressInput === void 0 ? void 0 : addressInput.value) || "1234 Oakwood Drive";
    var personalDetail = (personalDetailInput === null || personalDetailInput === void 0 ? void 0 : personalDetailInput.value) || "Motivated professional...";
    var certificates = (certificateInput === null || certificateInput === void 0 ? void 0 : certificateInput.value.split(",").map(function (item) { return item.trim(); })) || [];
    var education = (educationInput === null || educationInput === void 0 ? void 0 : educationInput.value.split(",").map(function (item) { return item.trim(); })) || [];
    var experience = (experienceInput === null || experienceInput === void 0 ? void 0 : experienceInput.value.split(",").map(function (item) { return item.trim(); })) || [];
    var skills = (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value.split(",").map(function (item) { return item.trim(); })) || [];
    // Assign values to resume fields
    document.getElementById("nameCv").textContent = name;
    document.getElementById("jobTitleCv").textContent = jobTitle;
    document.getElementById("emailCv").textContent = email;
    document.getElementById("phoneCv").textContent = phone;
    document.getElementById("linkdinCv").textContent = linkedin;
    document.getElementById("addressCv").textContent = address;
    document.getElementById("personalDetailCv").innerHTML = personalDetail;
    // Populate Skills
    var skillsCv = document.getElementById("skillsCv");
    skillsCv.innerHTML = ""; // Clear previous content
    skills.forEach(function (skill) {
        var skillElement = document.createElement("li");
        skillElement.textContent = skill || "English Communication";
        skillsCv.appendChild(skillElement);
    });
    // Populate Education
    var educationCv = document.getElementById("educationCv");
    educationCv.innerHTML = ""; // Clear previous content
    for (var i = 0; i < education.length; i += 3) {
        var degree = education[i] || "Degree";
        var place = education[i + 1] || "Institute";
        var year = education[i + 2] || "Year";
        var yearElement = document.createElement("p");
        yearElement.style.float = "right";
        yearElement.textContent = year;
        var degreeElement = document.createElement("p");
        degreeElement.innerHTML = "<b><span>".concat(degree, "</span></b>");
        var placeElement = document.createElement("p");
        placeElement.textContent = place;
        educationCv.appendChild(yearElement);
        educationCv.appendChild(degreeElement);
        educationCv.appendChild(placeElement);
        educationCv.appendChild(document.createElement("br"));
    }
    // Populate Experience
    var experienceCv = document.getElementById("experienceCv");
    experienceCv.innerHTML = ""; // Clear previous content
    for (var i = 0; i < experience.length; i += 3) {
        var post = experience[i] || "Job Position";
        var company = experience[i + 1] || "Company Name";
        var year = experience[i + 2] || "Year";
        var yearElement = document.createElement("p");
        yearElement.style.float = "right";
        yearElement.textContent = year;
        var postElement = document.createElement("p");
        postElement.innerHTML = "<b><span>".concat(post, "</span></b>");
        var companyElement = document.createElement("p");
        companyElement.textContent = company;
        experienceCv.appendChild(yearElement);
        experienceCv.appendChild(postElement);
        experienceCv.appendChild(companyElement);
        experienceCv.appendChild(document.createElement("br"));
    }
    // Populate Certifications
    var certificationContainer = document.getElementById("certificationContainer");
    certificationContainer.innerHTML = ""; // Clear previous content
    for (var i = 0; i < certificates.length; i += 3) {
        var course = certificates[i] || "Certification";
        var institution = certificates[i + 1] || "Institution";
        var year = certificates[i + 2] || "Year";
        var yearElement = document.createElement("p");
        yearElement.style.float = "right";
        yearElement.textContent = year;
        var courseElement = document.createElement("p");
        courseElement.innerHTML = "<b><span>".concat(course, "</span></b>");
        var institutionElement = document.createElement("p");
        institutionElement.textContent = institution;
        certificationContainer.appendChild(yearElement);
        certificationContainer.appendChild(courseElement);
        certificationContainer.appendChild(institutionElement);
        certificationContainer.appendChild(document.createElement("br"));
    }
    // Set Profile Image if uploaded
    var file = (_a = profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        currentImage.src = URL.createObjectURL(file);
    }
}
