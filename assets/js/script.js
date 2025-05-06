let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
}

// Auto advance slideshow
function autoSlideshow() {
    plusSlides(1);
    setTimeout(autoSlideshow, 5000);
}

if (document.getElementsByClassName("mySlides").length > 0) {
    setTimeout(autoSlideshow, 5000);
}

function openModal(img) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

let modal = document.getElementById("myModal");
if (modal) {
    let span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function openCategory(evt, categoryName) {
    let i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    let defaultOpen = document.getElementById("defaultOpen");
    if (defaultOpen) {
        defaultOpen.click();
    }
    
    let canvas = document.getElementById("pieChart");
    if (canvas) {
        drawPieChart();
    }
    
    let themeSwitch = document.getElementById("theme-switch");
    if (themeSwitch) {
        themeSwitch.addEventListener("change", toggleTheme);
    }
});

function countChars() {
    let textarea = document.getElementById("comments");
    let counter = document.getElementById("char-count");
    
    if (textarea && counter) {
        counter.innerHTML = textarea.value.length;
    }
}

function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}

function validateForm() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;

    if (firstName.trim() == "") {
        alert("Please enter your First Name");
        return false;
    }

    if (lastName.trim() == "") {
        alert("Please enter your Last Name");
        return false;
    }

    if (email.trim() == "") {
        alert("Please enter your Email");
        return false;
    }

    if (city == "") {
        alert("Please select your City");
        return false;
    }

    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        return false;
    }
    return true;
}

function custSupp() {
    alert("Thank you for calling Customer Support!");
}

function HelpCent() {
    alert("Thank you for visiting our Help Center!");
}

function drawPieChart() {
    let canvas = document.getElementById("pieChart");
    if (!canvas) return;
    
    let ctx = canvas.getContext("2d");
    
    const data = [
        { genre: "Action", value: 40, color: "#FF6384" },
        { genre: "Horror", value: 30, color: "#36A2EB" },
        { genre: "Comedy", value: 15, color: "#FFCE56" },
        { genre: "Drama", value: 10, color: "#4BC0C0" },
        { genre: "Sci-Fi", value: 5, color: "#9966FF" }
    ];
    
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    let startAngle = 0;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = Math.min(centerX, centerY) - 30;
    
    for (let i = 0; i < data.length; i++) {
        let endAngle = startAngle + (2 * Math.PI * data[i].value / total);
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        
        ctx.fillStyle = data[i].color;
        ctx.fill();
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        
        startAngle = endAngle;
    }
    
    let legendY = 20;
    ctx.font = "14px Arial";
    
    for (let i = 0; i < data.length; i++) {
        ctx.fillStyle = data[i].color;
        ctx.fillRect(centerX + radius + 20, legendY, 15, 15);
        
        ctx.fillStyle = document.body.classList.contains('dark-mode') ? "#f5f5f5" : "#333333";
        ctx.textAlign = "left";
        ctx.fillText(`${data[i].genre}: ${data[i].value}%`, centerX + radius + 40, legendY + 12);
        
        legendY += 25;
    }
    
    ctx.fillStyle = document.body.classList.contains('dark-mode') ? "#f5f5f5" : "#333333";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Movie Genre Popularity", centerX, 20);
}

function upVote() {
    alert("Thank you for upvoting!");
}