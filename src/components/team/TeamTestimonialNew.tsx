'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SnowfallAnimation from '@/components/SnowfallAnimation';

import ShovanImg from '../../../public/images/Testimonial Section/Images/Shovan.webp';
import SumanImg from '../../../public/images/Testimonial Section/Images/Suman.webp';
import IbrahimImg from '../../../public/images/Testimonial Section/Images/Ibrahim.webp';
import SnehaImg from '../../../public/images/Testimonial Section/Images/sneha.webp';
import AditiImg from '../../../public/images/Testimonial Section/Images/Aditi.webp';
import MousumiImg from '../../../public/images/Testimonial Section/Images/Mousumi.webp';
import BonyImg from '../../../public/images/Testimonial Section/Images/Bony.webp';

interface Testimonial {
  id: number;
  name: string;
  // Name as signed in the chat bubble; used in the photo's alt text so it matches the caption
  fullName: string;
  // Text shown inside the chat-bubble image, used as its alt text (WCAG 1.1.1)
  quote: string;
  image: StaticImageData;
  testimonialDesk: string;
  testimonialMob: string;
  rightSideTestimonial?: string;
  rightSideTestimonialMob?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Shovan',
    fullName: 'Shovan',
    quote: '“Over 4 years at Bitpastel, I’ve grown through exciting challenges, learned a lot, led amazing projects, and worked with a talented team - all in a culture that truly supports and inspires excellence.” Shovan',
    image: ShovanImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Shovan Kar/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Shovan Kar/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Shovan Kar/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Shovan Kar/right.webp',
  },
  // {
  //   id: 2,
  //   name: 'Suman',
  //   image: SumanImg,
  //   testimonialDesk: '/images/Testimonial Section/Chat boxes/Suman Naskar/left.webp',
  //   testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Suman Naskar/left.webp',
  //   rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Suman Naskar/right.webp',
  //   rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Suman Naskar/right.webp',
  // },
  {
    id: 3,
    name: 'Ibrahim',
    fullName: 'Md Ibrahim',
    quote: '“The work culture is excellent, with huge opportunities for youngsters to grow. The people are highly supportive. I have worked here for the last 7 years - and this place has truly redefined my career.” Md Ibrahim',
    image: IbrahimImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Md Ibrahim/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Md Ibrahim/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Md Ibrahim/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Md Ibrahim/right.webp',
  },
  {
    id: 4,
    name: 'Sneha',
    fullName: 'Sneha Mondal',
    quote: '“Working at Bitpastel for the past 3 years has been truly rewarding. From day one, I was welcomed into a supportive, inclusive environment with approachable and transparent leadership that encourages growth.” Sneha Mondal',
    image: SnehaImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/sneha mondal/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/sneha mondal/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/sneha mondal/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/sneha mondal/right.webp',
  },
  // {
  //   id: 5,
  //   name: 'Aditi',
  //   image: AditiImg,
  //   testimonialDesk: '/images/Testimonial Section/Chat boxes/Aditi sau/left.webp',
  //   testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Aditi sau/left.webp',
  //   rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Aditi sau/right.webp',
  //   rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Aditi sau/right.webp',
  // },
  {
    id: 6,
    name: 'Mousumi',
    fullName: 'Mousumi Sengupta',
    quote: "“Bitpastel offers a supportive, trust-driven culture where I’ve grown through meaningful projects and strong teamwork. The leadership is approachable, and there's a shared commitment to quality and innovation.” Mousumi Sengupta",
    image: MousumiImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/Mousumi sengupta/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/Mousumi sengupta/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/Mousumi sengupta/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/Mousumi sengupta/right.webp',
  },
  {
    id: 7,
    name: 'Bony',
    fullName: 'Bony Malakar',
    quote: '“The leadership team encourages innovation and values every employee’s contribution, which makes a big difference. Bitpastel has truly shaped my professional career, and I’m proud to be part of a company that values excellence and teamwork.” Bony Malakar',
    image: BonyImg,
    testimonialDesk: '/images/Testimonial Section/Chat boxes/bony malakar/left.webp',
    testimonialMob: '/images/Testimonial Section/Chat boxes mobile/bony malakar/left.webp',
    rightSideTestimonial: '/images/Testimonial Section/Chat boxes/bony malakar/right.webp',
    rightSideTestimonialMob: '/images/Testimonial Section/Chat boxes mobile/bony malakar/right.webp',
  },
];

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const fadeUp = {
  hidden: { opacity: 0, y: isMobile ? 20 : 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: isMobile ? 0.4 : 0.6 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: isMobile ? -20 : -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: isMobile ? 0.4 : 0.6, delay: 0.12 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: isMobile ? 20 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: isMobile ? 0.4 : 0.6, delay: 0.12 },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const TeamTestimonialNew = () => {
  // Rotate through the list in order instead of picking at random: every 9s all
  // three slots move on by 3, so nobody repeats straight away (in any slot) and
  // everyone gets equal time. Starts at 0 for the server render, then jumps to a
  // random start in the browser so each visit still opens on different people.
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(Math.floor(Math.random() * testimonials.length));
    const interval = setInterval(() => {
      setOffset((o) => (o + 3) % testimonials.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const [t1, t2, t3] = [0, 1, 2].map((k) => testimonials[(offset + k) % testimonials.length]);

  return (
    <section className="md:pt-0 pt-[40px]">
      {/* <SnowfallAnimation /> */}

      {/* FIRST */}
      {/* mode="wait": the old testimonial leaves before the new one mounts, so the
          section never holds both at once and the page below doesn't jump */}
      <AnimatePresence mode="wait">
      <motion.div
        key={t1.id}
        className="testimonial testimonial-first"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <Image
            src={t1.image}
            alt={`Photo of ${t1.fullName}`}
            className="testimonial-person-image"
          />
        </motion.div>

        <motion.img
          src={t1.testimonialDesk}
          alt={t1.quote}
          className="testimonial-data md:block hidden"
          variants={fadeRight}
        />

        <motion.img
          src={t1.testimonialMob}
          alt={t1.quote}
          className="testimonial-data md:hidden block"
          variants={fadeRight}
        />
      </motion.div>
      </AnimatePresence>

      {/* SECOND */}
      {/* mode="wait": the old testimonial leaves before the new one mounts, so the
          section never holds both at once and the page below doesn't jump */}
      <AnimatePresence mode="wait">
      <motion.div
        key={t2.id}
        className="testimonial testimonial-second"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src={t2.image.src}
          alt={`Photo of ${t2.fullName}`}
          className="testimonial-person-image"
          variants={fadeUp}
        />

        <motion.img
          src={t2.rightSideTestimonial}
          alt={t2.quote}
          className="testimonial-data md:block hidden"
          variants={fadeLeft}
        />

        <motion.img
          src={t2.rightSideTestimonialMob}
          alt={t2.quote}
          className="testimonial-data md:hidden block"
          variants={fadeLeft}
        />
      </motion.div>
      </AnimatePresence>
      
      {/* THIRD */}
      {/* mode="wait": the old testimonial leaves before the new one mounts, so the
          section never holds both at once and the page below doesn't jump */}
      <AnimatePresence mode="wait">
      {/* THIRD */}
      <motion.div
        key={t3.id}
        className="testimonial testimonial-third"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src={t3.image.src}
          alt={`Photo of ${t3.fullName}`}
          className="testimonial-person-image"
          variants={fadeUp}
        />

        <motion.img
          src={t3.testimonialDesk}
          alt={t3.quote}
          className="testimonial-data md:block hidden"
          variants={fadeRight}
        />

        <motion.img
          src={t3.testimonialMob}
          alt={t3.quote}
          className="testimonial-data md:hidden block"
          variants={fadeRight}
        />
      </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TeamTestimonialNew;
