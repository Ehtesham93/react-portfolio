import React from 'react';
import $ from 'jquery';
import '../libs/easing.js';

class BackToTop extends React.Component {
  componentDidMount() {
    // Faster scroll to top
    $('.back-to-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 500, 'swing'); // faster & smoother
      return false;
    });

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
      const btn = document.querySelector('.back-to-top');
      if (window.pageYOffset > 100) {
        btn.style.display = 'block';
        btn.classList.remove('fadeOut');
        btn.classList.add('fadeIn');
      } else {
        btn.classList.remove('fadeIn');
        btn.classList.add('fadeOut');
      }
    });
  }

  render() {
    return (
      <a href="#home" className="back-to-top animated">
        <i className="fa fa-chevron-up"></i>
      </a>
    );
  }
}

export default BackToTop;
