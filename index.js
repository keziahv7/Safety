// Example function to handle testimonials rotation or animations
function rotateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let index = 0;

    setInterval(() => {
        testimonials[index].style.display = 'none';
        index = (index + 1) % testimonials.length;
        testimonials[index].style.display = 'block';
    }, 3000);
}

// Start rotating testimonials when the page loads
document.addEventListener('DOMContentLoaded', rotateTestimonials);
