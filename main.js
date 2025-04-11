const faqs = document.querySelectorAll(".faq");
const togglee = document.querySelectorAll(".toggle-answer");
const img1 = document.querySelectorAll('.imgs'); // misol uchun


faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('active');

        const img = faq.querySelector('.imgs'); // har bir faq ichidagi rasmni olamiz

        if (img) {
            if (faq.classList.contains('active')) {
                img.style.transform = "rotate(180deg)";
            } else {
                img.style.transform = "rotate(0deg)";
            }
        }
    });
});
