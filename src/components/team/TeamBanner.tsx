'use client';
import React from 'react';
import Image from 'next/image';

const TeamBanner = () => {
  const scrollToSection = (id: string) => {
    // Try multiple approaches for better compatibility
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -0; // Adjust this if needed
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      // Fallback if smooth scroll isn't working
      if (!('scrollBehavior' in document.documentElement.style)) {
        window.scrollTo(0, y);
      }
    } else {
      console.warn(`Element with id ${id} not found`);
      // Optional: Wait for dynamic content and try again
      setTimeout(() => {
        const retryEl = document.getElementById(id);
        if (retryEl) {
          const y = retryEl.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    // md:bg-[#1f1f1f]: dark fallback behind the banner photo (same as the home hero).
    // While the photo loads, or if it fails, the white heading stays readable, and
    // contrast checkers (which can't read background images) measure white on dark.
    <section className="relative lg:h-lvh md:h-[686px] h-auto overflow-hidden md:bg-[#1f1f1f]">
      {/* Desktop background image (rendered on the server too, so it starts loading immediately) */}
      <div
          role="img"
          aria-label="Bitpastel team members with laptops around a long conference table in a bright office"
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          // style={{
          //   backgroundImage: `
          //   linear-gradient(286.17deg, rgba(0, 0, 0, 0) 43.84%, rgba(0, 0, 0, 0.6) 65.15%),
          //   linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
          //   url('/images/team_banner.webp')
          // `,
          // }}
          style={{
                  backgroundImage: `
                    linear-gradient(283.11deg, rgba(0, 0, 0, 0) 43.33%, rgba(0, 0, 0, 0.7392) 63.18%, rgba(0, 0, 0, 0.84) 81.21%),
                    linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.376) 53.64%),
                    url('/images/team_banner.webp')
                  `,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
        ></div>

      {/* Mobile background image on top */}
      <div
        role="img"
        aria-label="Bitpastel team members with laptops around a long conference table in a bright office"
        className="block md:hidden w-full h-[310px]  bg-cover bg-[position:59%_10%]"
        style={{
          backgroundImage: `
           linear-gradient(359.17deg, rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0.6) 120.15%),
                  linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
         url('/images/team-banner-mobile.png')
          `
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:h-full pt-[40px] md:pb-[0px] pb-[40px] md:pt-[60px] text-left ">
        <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[310px]">
          <h1 className="md:text-primary-white text-title title lg:leading-[40px] font-[600] font-source leading-[normal] md:mb-5 mb-4 text-center md:text-left ">
            <span>The </span>
            <span className="font-[700] lg:inline inline">Team </span>
            who
            <br />
            makes it happen
          </h1>

          {/* WCAG 1.3.1: a visual checklist is exposed as a list */}
          <ul role="list" className="md:text-primary-white text-title md:text-left lg:space-y-[15px] text-center">
            {[
              'We are serious about Quality',
              'We are passionate about our Craft',
              'Always Super-charged... Super-fast…',
            ].map((text, idx) => (
              <li key={idx} className="flex md:gap-4 gap-2 mb-[5px] lg:mb-0 items-center">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="w-auto md:block hidden"
                  priority
                />
                <Image
                  src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="w-auto md:hidden block"
                />
                <p className="md:text-[20px] lg:!text-[20px] paragraph font-[400] font-roboto">{text}</p>
              </li>
            ))}
          </ul>

          <div className="button-area-main">
            <button
              className="new-btn-design-full mt-[40px] font-roboto min-w-[169px] min-h-[50px]"
              onClick={() => scrollToSection('OurTeam')}
            >
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
