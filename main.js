//   LISTING ELEMENT    //
// document.getElementById('resumeForm')?.addEventListener('submit', function(event){
//     event.preventDefault();
//     //   Type Assertion
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     if ( nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement)
//         {
//          const name = nameElement.value;
//          const email = emailElement.value;
//          const phone = phoneElement.value;
//          const education = educationElement.value;
//          const experience = experienceElement.value;
//          const skills = skillsElement.value;
//          console.log(name, email, phone, education, experience, skills );
//     } else {
//         console.error('One or more input elements are missing');
//     }
// //     //  Create resume output
//     const resumeOutput = `
//     <h2>Resume</h2>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Phone:</strong> ${phone} </p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>Skills</h3>
//     <p>${skills}</p>
//     `;
//     const resumeOutputElement = document.getElementById('resumeOutput')
//     if (resumeOutputElement) {
//         resumeOutputElement.innerHTML = resumeOutput;
//     } else {
//         console.error('The resume output elements are missing')
//     // } else {
//     //     console.error('One or more output elements are missing')
//     // }
// };
// })
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        //   Generate HTML for the resume   //
        var resumeHTML = "\n<h1> Resume </h1>\n<p><strong>Name:</strong> ".concat(name, "</p>\n<p><strong>Email:</strong> ").concat(email, "</p>\n<p><strong>Phone:</strong> ").concat(phone, "</p>\n<p><strong>Education:</strong> ").concat(education, "</p>\n<p><strong>Experience:</strong> ").concat(experience, "</p>\n<p><strong>Skills:</strong> ").concat(skills, "</p>\n");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or output div not found in the DOM');
}
