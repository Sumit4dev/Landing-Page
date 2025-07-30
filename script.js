document.addEventListener('alpine:init', () => {
      Alpine.data('carouselComponent', () => ({
        testimonials: [
          {
            text: `"Excellent service! Highly recommend to anyone looking for quality."`,
            img: "https://i.pravatar.cc/100?img=1",
            name: "John Doe",
            role: "CEO, Company A"
          },
          {
            text: `"A wonderful experience from start to finish. The team was amazing."`,
            img: "https://i.pravatar.cc/100?img=2",
            name: "Jane Smith",
            role: "Marketing Lead, Company B"
          },
          {
            text: `"Truly exceptional results. I will definitely be back for more projects."`,
            img: "https://i.pravatar.cc/100?img=3",
            name: "Alice Brown",
            role: "Founder, Startup C"
          },
          {
            text: `"Their attention to detail is second to none. Fantastic work!"`,
            img: "https://i.pravatar.cc/100?img=4",
            name: "David Wilson",
            role: "Product Manager, Company D"
          },
          {
            text: `"Friendly, professional, and effective. Loved working with them."`,
            img: "https://i.pravatar.cc/100?img=5",
            name: "Emily Davis",
            role: "Designer, Agency E"
          }
        ],
        active: 1,
        itemWidth: 0,
        position: 0,
        timer: null,
        init() {
          this.$nextTick(() => {
            this.itemWidth = this.$refs.track.children[0].offsetWidth;
            this.position = this.itemWidth * this.active;
            this.startAutoPlay();
            window.addEventListener('resize', this.updateWidth);
          });
        },
        updateWidth() {
          this.itemWidth = this.$refs.track.children[0].offsetWidth;
          this.position = this.itemWidth * this.active;
        },
        next() {
          this.active++;
          this.position = this.itemWidth * this.active;
        },
        handleTransitionEnd() {
          if (this.active === this.testimonials.length + 1) {
            this.active = 1;
            this.position = this.itemWidth * this.active;
            this.$refs.track.style.transition = 'none';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                this.$refs.track.style.transition = '';
              });
            });
          }
          if (this.active === 0) {
            this.active = this.testimonials.length;
            this.position = this.itemWidth * this.active;
            this.$refs.track.style.transition = 'none';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                this.$refs.track.style.transition = '';
              });
            });
          }
        },
        startAutoPlay() {
          this.timer = setInterval(() => {
            this.next();
          }, 3000);
        },
        stopAutoPlay() {
          clearInterval(this.timer);
        }
      }));
    });




// carousal     


const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dots = document.querySelectorAll('[data-index]');

    let currentIndex = 0;
    const slideCount = track.children.length;
    let autoplayInterval;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('bg-gray-800', idx === currentIndex);
        dot.classList.toggle('bg-gray-300', idx !== currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateCarousel();
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel();
        startAutoplay();
      });
    });

    // Start autoplay on load
    startAutoplay();
    updateCarousel();


//popup-effect

const applyBtn = document.querySelectorAll('.apply-btn');

const popUpBox = document.querySelector('#popup-box')
const crossBtn = document.querySelector('#cross-btn')

applyBtn.forEach((btn) =>{
  btn.addEventListener('click' ,() =>{
    popUpBox.classList.add('flex');
    popUpBox.classList.remove('hidden')
  } )
})


crossBtn.addEventListener("click", () => {
  popUpBox.classList.add('hidden');
  popUpBox.classList.remove('flex')
});