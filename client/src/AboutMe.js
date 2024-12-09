import React, { useState, useEffect } from 'react';
import './aboutMeStyle.css';
import './aboutMeModalStyle.css';
const AboutMe = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);


  const openModal = () => {
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
  };


  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) setSlideIndex(1);
    else if (n < 1) setSlideIndex(slides.length);
    else setSlideIndex(n);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      slides[i].classList.remove('fade');
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('fade');
  };


  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

 
  useEffect(() => {
    if (isModalOpen) showSlides(slideIndex);
  }, [isModalOpen, slideIndex]);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector('.modal-content');
      if (isModalOpen && modal && !modal.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);


  useEffect(() => {
    const mouseHoverEffect = document.querySelector('.mouse-hover-effect');
    if (isModalOpen) {
      mouseHoverEffect.classList.add('hide-hover-effect');
    } else {
      mouseHoverEffect.classList.remove('hide-hover-effect');
    }
  }, [isModalOpen]);

  return (
    <section id="about-me" className="about-me-section">
      <h2>About Me</h2>
      <p>
        My journey in software development began in 2022 at the Southern Alberta Institute of Technology,
        but my fascination with technology and computers has been a lifelong passion.
        I’m excited by the prospect of becoming a full stack developer and am constantly looking for opportunities to learn and grow,
        both personally and professionally.
      </p>
      <p>Aside from coding, I have a range of hobbies that help me stay balanced and motivated.
        I enjoy listening to podcasts, going on camping trips to enjoy nature, video games or board games with friends, and spending time with my dog.
        She's a 6-year-old rescue from the streets of Thailand who became a part of my life two years ago.</p>
      <button onClick={openModal} className="open-modal-button">See My Dog</button>


      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'show' : ''}`}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <div className="slideshow-container">
              <div className="mySlides">
                <img src="FireDog.jpg" alt="Ponzu laying around the fire" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="RiverDog.jpg" alt="Ponzu doing some sightseeing" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="JudgingDog.jpg" alt="Ponzu giving a dirt side eye" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="SleepingDog.jpg" alt="Ponzu taking a nap on the couch" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="SniffingDog.jpg" alt="Ponzu sniffing a treat" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="BedSleepDog.jpg" alt="Ponzu taking a nap on the couch" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="ToyPillows.jpg" alt="Ponzu using her toys to look cute as a button" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="NotScared.jpg" alt="Ponzu showing she's fearless" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="PrettyLady.jpg" alt="Ponzu posing like a good girl" onClick={() => plusSlides(1)} />
              </div>
              <div className="mySlides">
                <img src="PillowDog.jpg" alt="Ponzu using her toys as a pillow" onClick={() => plusSlides(1)} />
              </div>

              <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
              <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;