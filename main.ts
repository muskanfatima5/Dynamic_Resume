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

const resumeForm = document.getElementById('resumeForm') as HTMLInputElement
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement


if (resumeForm && resumeOutput){
    resumeForm.addEventListener('submit',(event)=>{
        event.preventDefault();


    const name=(document.getElementById('name')as HTMLInputElement).value;
    const email=(document.getElementById('email')as HTMLInputElement).value;
    const phone=(document.getElementById('phone')as HTMLInputElement).value;
    const education=(document.getElementById('education')as HTMLInputElement).value;
    const experience=(document.getElementById('experience')as HTMLInputElement).value;
    const skills=(document.getElementById('skills')as HTMLInputElement).value;
 
//   Generate HTML for the resume   //

const resumeHTML =`
<h1> Resume </h1>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Education:</strong> ${education}</p>
<p><strong>Experience:</strong> ${experience}</p>
<p><strong>Skills:</strong> ${skills}</p>
`;

resumeOutput.innerHTML=resumeHTML
});
}else {
    console.error('Form or output div not found in the DOM');
}