document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNav');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });

  const projects = [
    {
        name: 'Survey Form',
        description: 'This is survey form is built based on HTML and CSS, which evaluates the ITC classes and students’ ITC skills.',
        image: 'project.imgs/Screenshot 2024-06-18 074822.png',
        technologies: 'HTML, CSS',
        liveLink: 'https://fikrat2002.github.io/Survey_form/',
        sourceLink: 'https://github.com/Fikrat2002/Survey_form'
    },
    {
        name: 'Technical Documentation',
        description: 'This technical documentation page serves as a comprehensive resource for CSS (Cascading Style Sheets), constructed using HTML and CSS.',
        image: 'project.imgs/Screenshot 2024-07-15 181930.png',
        technologies: 'HTML, CSS',
        liveLink: 'https://fikrat2002.github.io/technical-document/',
        sourceLink: 'https://github.com/Fikrat2002/technical-document'
    },
    {
      name: 'Tribute Page',
      description: 'The Aqsa Mosque tribute page seeks to encapsulate the profound beauty and profound historical importance of this sacred site.',
      image: 'project.imgs/Screenshot 2024-06-04 004401.png',
      technologies: 'HTML, CSS, JS',
      liveLink: 'https://fikrat2002.github.io/Tribute-page/',
      sourceLink: 'https://github.com/Fikrat2002/Tribute-page'
    },
    {
    name: 'Product Landing Page',
    description: 'This product landing page is your ultimate destination for discovering and exploring our innovative solution.',
    image: 'project.imgs/Screenshot 2024-07-15 183001.png',
    technologies: 'HTML, CSS',
    liveLink: 'https://fikrat2002.github.io/product-landing/',
    sourceLink: 'https://github.com/Fikrat2002/product-landing'
   },
   {
  name: 'Personal Portfolio',
  description: 'This personal portfolio page is a digital showcase of my journey in web development, crafted with HTML and CSS. It serves as a gateway to explore my projects, skills, and aspirations in the realm of coding and design.',
  image: 'project.imgs/Screenshot 2024-06-07 054456.png',
  technologies: 'HTML, CSS',
  liveLink: 'https://fikrat2002.github.io/personal-portfolio/',
  sourceLink: 'https://github.com/Fikrat2002/personal-portfolio'
  },
  {
  name: 'Palindrome Checker',
  description: 'A palindrome is a word or phrase that reads the same forwards and backwards, ignoring punctuation, capitalization, and spacing. Users can input text into a designated box to instantly verify if it qualifies as a palindrome.',
  image: 'project.imgs/Screenshot 2024-07-02 204815.png',
  technologies: 'HTML, CSS, JS',
  liveLink: 'https://fikrat2002.github.io/palindrome-checker/s://live-link.com',
  sourceLink: 'https://github.com/Fikrat2002/palindrome-checker'
  },
  {
  name: 'Roman Numeral Converter',
  description: 'The Roman Numeral Converter simplifies the process of converting standard numbers into Roman numerals accurately, providing an accessible way to understand and utilize ancient numeral systems.',
  image: 'project.imgs/Screenshot 2024-07-03 143231.png',
  technologies: 'HTML, CSS, JS',
  liveLink: 'https://fikrat2002.github.io/numeral-converter/',
  sourceLink: 'https://github.com/Fikrat2002/numeral-converter'
  },
  {
  name: 'Telephone Number Validato',
  description: 'This telephone number validator is a robust tool designed using HTML, CSS, and JavaScript and its purpose is to verify the validity of dialed phone numbers in the United States.',
  image: 'project.imgs/Screenshot 2024-07-06 094125.png',
  technologies: 'HTML, CSS, JS',
  liveLink: 'https://live-link.comhttps://fikrat2002.github.io/telephone-number-validator/',
  sourceLink: 'https://github.com/Fikrat2002/telephone-number-validator'
  },
  {
  name: 'Cash-Register',
  description: 'Cash-Register app is designed to efficiently calculate and return change to customers based on the price of an item, the amount of cash provided, and the total cash in the register.',
  image: 'project.imgs/Screenshot 2024-07-10 085438.png',
  technologies: 'HTML, CSS, JS',
  liveLink: 'https://fikrat2002.github.io/cash-register/',
  sourceLink: 'https://github.com/Fikrat2002/cash-register',
  },
  {
  name: 'Pokémon Search App',
  description: 'The Pokémon Search App allows users to discover information about Pokémon by name or ID.',
  image: 'project.imgs/Screenshot 2024-07-11 230739.png',
  technologies: 'HTML, CSS, JS',
  liveLink: 'https://fikrat2002.github.io/pokemon-search-app/://live-link.com',
  sourceLink: 'https://github.com/Fikrat2002/pokemon-search-app',
  }
];
  
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'col-md-4';
    projectDiv.innerHTML = `
        <div class="card mb-4">
            <img src="${project.image}" class="card-img-top" alt="${project.name}">
            <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">${project.description}</p>
                <button class="btn btn-primary" onclick="showProjectDetails('${project.name}')">Details</button>
            </div>
        </div>
    `;
    projectsContainer.appendChild(projectDiv);
  });
  
 
  function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProjectDisplay();
  }

  function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProjectDisplay();
  }

  function updateProjectDisplay() {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards[0].querySelector("img").src = projects[currentIndex].image;
    projectCards[0].querySelector("h3").textContent = projects[currentIndex].title;
    projectCards[0].querySelector("p").textContent = projects[currentIndex].description;

    projectCards[1].querySelector("img").src = projects[(currentIndex + 1) % projects.length].image;
    projectCards[1].querySelector("h3").textContent = projects[(currentIndex + 1) % projects.length].title;
    projectCards[1].querySelector("p").textContent = projects[(currentIndex + 1) % projects.length].description;
  }

  updateProjectDisplay();
 
  const certificates = [
    {
      name: 'Responsive Web Design',
      image: 'project.imgs/Screenshot 2024-06-18 085553.png',
      link: 'https://www.freecodecamp.org/certification/your-certification-link'
    },
    {
      name: 'Front-End Projects',
      image: 'project.imgs/Screenshot 2024-07-22 093357.png',
      link: 'https://www.freecodecamp.org/certification/your-certification-link'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      image: 'project.imgs/Screenshot 2024-07-11 211142.png',
      link: 'https://www.freecodecamp.org/certification/your-certification-link'
    }
    
  ];
  
  const certificatesContainer = document.getElementById('certificates-container');
  
  certificates.forEach(certificate => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4', 'mb-4');
  
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  
    const img = document.createElement('img');
    img.src = certificate.image;
    img.alt = `${certificate.name} Certification`;
    img.classList.add('card-img-top');
  
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
  
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = certificate.name;
  
    const viewLink = document.createElement('a');
    viewLink.href = certificate.link;
    viewLink.target = '_blank';
    viewLink.classList.add('btn', 'btn-primary');
    viewLink.textContent = 'View Certification';
  
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(viewLink);
  
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
  
    colDiv.appendChild(cardDiv);
    certificatesContainer.appendChild(colDiv);
  });
  
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {

        const formData = { name, email, message };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        this.reset();
        alert('Form submitted successfully!');
    } else {
        alert('All fields are required.');
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
        const { name, email, message } = JSON.parse(savedData);
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('message').value = message;
    }
  });

  document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
  });
  

