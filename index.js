//element variables
const sliderSlide = document.querySelector('.slider-slide')
const sliderImages = document.querySelectorAll('.img-slides')


//Button
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')


//Counter
let counter = 1
const width = sliderImages[0].clientWidth;

sliderSlide.style.transform = 'translateX('+(-width * counter)+ 'px)'

nextBtn.addEventListener('click', ()=>{
  if(counter >= sliderImages.length -1) return;
  sliderSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  console.log(counter);
  sliderSlide.style.transform = 'translateX(' + (-width * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
  if(counter <= 0) return;
  sliderSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  console.log(counter);
  sliderSlide.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
});


sliderSlide.addEventListener('transitionend', ()=>{
  
  if(sliderImages[counter].id === 'lastClone'){
    sliderSlide.style.transition = 'none';
    counter = sliderImages.length - 2;
    console.log(counter);
    sliderSlide.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
  }
  if(sliderImages[counter].id === 'firstClone'){
    sliderSlide.style.transition = 'none';
    counter = sliderImages.length - counter;
    console.log(counter);
    sliderSlide.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';  
  }
});

