
function toggleDropdown(sectionId) {
      var dropdownContent = document.getElementById(sectionId);
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    }
    
    
    
    
    
    
//table

var currentColumnId = null;

        function showForm(formId, columnId) {
            if (currentColumnId) {
                document.getElementById(currentColumnId).style.backgroundColor = '';
            }
            currentColumnId = columnId;
            document.getElementById(columnId).style.backgroundColor = '';

            var forms = document.getElementsByClassName('form-container');
            for (var i = 0; i < forms.length; i++) {
                forms[i].style.display = 'none';
            }
            document.getElementById(formId).style.display = 'block';
        }
        
        //slides

let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const sliderWrapper = document.getElementById('slider');
    let startX = 0;

    // Add this line to set an interval for automatic sliding
    setInterval(() => {
        nextSlide();
    }, 3000); // Adjust the interval as needed (3000 milliseconds = 3 seconds)

    sliderWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    sliderWrapper.addEventListener('touchmove', (e) => {
        const deltaX = e.touches[0].clientX - startX;
        const slideWidth = slides[0].offsetWidth;
        currentIndex -= deltaX / slideWidth;
        startX = e.touches[0].clientX;
        updateSliderPosition();
    });

    function prevSlide() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSliderPosition();
    }

    function nextSlide() {
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const slideWidth = slides[0].offsetWidth;
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }






function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("h2");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



// Function to set cookie
    const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);


//free trial



    
    
  // Check if localStorage supports and get the visit count
  
