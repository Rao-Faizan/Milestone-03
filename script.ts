// Get the button and add a click event
const startProcess = document.getElementById("getResumeButton") as HTMLButtonElement;
startProcess?.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  buildResume(); // Update the resume dynamically
});

function buildResume() {
  // Get form input elements
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const linkedinInput = document.getElementById("linkdin") as HTMLInputElement;
  const addressInput = document.getElementById("address") as HTMLInputElement;
  const personalDetailInput = document.getElementById("personalDetail") as HTMLTextAreaElement;
  const certificateInput = document.getElementById("certificate") as HTMLInputElement;
  const educationInput = document.getElementById("education") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const profileImageInput = document.getElementById("profileImage") as HTMLInputElement;
  const currentImage = document.getElementById("profilePic") as HTMLImageElement;

  // Extract form values with fallback defaults
  const name = nameInput?.value || "John Doe";
  const jobTitle = jobTitleInput?.value || "Job Title";
  const email = emailInput?.value || "***@gmail.com";
  const phone = phoneInput?.value || "03*********";
  const linkedin = linkedinInput?.value || "John Doe";
  const address = addressInput?.value || "1234 Oakwood Drive";
  const personalDetail = personalDetailInput?.value || "Motivated professional...";
  const certificates = certificateInput?.value.split(",").map((item) => item.trim()) || [];
  const education = educationInput?.value.split(",").map((item) => item.trim()) || [];
  const experience = experienceInput?.value.split(",").map((item) => item.trim()) || [];
  const skills = skillsInput?.value.split(",").map((item) => item.trim()) || [];

  // Assign values to resume fields
  (document.getElementById("nameCv") as HTMLElement).textContent = name;
  (document.getElementById("jobTitleCv") as HTMLElement).textContent = jobTitle;
  (document.getElementById("emailCv") as HTMLElement).textContent = email;
  (document.getElementById("phoneCv") as HTMLElement).textContent = phone;
  (document.getElementById("linkdinCv") as HTMLElement).textContent = linkedin;
  (document.getElementById("addressCv") as HTMLElement).textContent = address;
  (document.getElementById("personalDetailCv") as HTMLElement).innerHTML = personalDetail;

  // Populate Skills
  const skillsCv = document.getElementById("skillsCv") as HTMLElement;
  skillsCv.innerHTML = ""; // Clear previous content
  skills.forEach((skill) => {
    const skillElement = document.createElement("li");
    skillElement.textContent = skill || "English Communication";
    skillsCv.appendChild(skillElement);
  });

  // Populate Education
  const educationCv = document.getElementById("educationCv") as HTMLElement;
  educationCv.innerHTML = ""; // Clear previous content
  for (let i = 0; i < education.length; i += 3) {
    const degree = education[i] || "Degree";
    const place = education[i + 1] || "Institute";
    const year = education[i + 2] || "Year";

    const yearElement = document.createElement("p");
    yearElement.style.float = "right";
    yearElement.textContent = year;

    const degreeElement = document.createElement("p");
    degreeElement.innerHTML = `<b><span>${degree}</span></b>`;

    const placeElement = document.createElement("p");
    placeElement.textContent = place;

    educationCv.appendChild(yearElement);
    educationCv.appendChild(degreeElement);
    educationCv.appendChild(placeElement);
    educationCv.appendChild(document.createElement("br"));
  }

  // Populate Experience
  const experienceCv = document.getElementById("experienceCv") as HTMLElement;
  experienceCv.innerHTML = ""; // Clear previous content
  for (let i = 0; i < experience.length; i += 3) {
    const post = experience[i] || "Job Position";
    const company = experience[i + 1] || "Company Name";
    const year = experience[i + 2] || "Year";

    const yearElement = document.createElement("p");
    yearElement.style.float = "right";
    yearElement.textContent = year;

    const postElement = document.createElement("p");
    postElement.innerHTML = `<b><span>${post}</span></b>`;

    const companyElement = document.createElement("p");
    companyElement.textContent = company;

    experienceCv.appendChild(yearElement);
    experienceCv.appendChild(postElement);
    experienceCv.appendChild(companyElement);
    experienceCv.appendChild(document.createElement("br"));
  }

  // Populate Certifications
  const certificationContainer = document.getElementById("certificationContainer") as HTMLElement;
  certificationContainer.innerHTML = ""; // Clear previous content
  for (let i = 0; i < certificates.length; i += 3) {
    const course = certificates[i] || "Certification";
    const institution = certificates[i + 1] || "Institution";
    const year = certificates[i + 2] || "Year";

    const yearElement = document.createElement("p");
    yearElement.style.float = "right";
    yearElement.textContent = year;

    const courseElement = document.createElement("p");
    courseElement.innerHTML = `<b><span>${course}</span></b>`;

    const institutionElement = document.createElement("p");
    institutionElement.textContent = institution;

    certificationContainer.appendChild(yearElement);
    certificationContainer.appendChild(courseElement);
    certificationContainer.appendChild(institutionElement);
    certificationContainer.appendChild(document.createElement("br"));
  }

  // Set Profile Image if uploaded
  const file = profileImageInput?.files?.[0];
  if (file) {
    currentImage.src = URL.createObjectURL(file);
  }
}
