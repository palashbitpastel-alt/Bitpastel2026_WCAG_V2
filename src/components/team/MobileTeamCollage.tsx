'use client';

import React, { useState, useEffect, useRef } from 'react';
import InstagramCarousel, { CarouselItem } from './InstaMobile';
import { motion, AnimatePresence } from 'framer-motion';

const MobileTeamCollage: React.FC = () => {
  // const fadeUp = {
  //   hidden: { opacity: 0, y: 24 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.45, ease: 'easeOut' },
  //   },
  // };

  // All image arrays
  // Bitpastel Offsite 2026

  const bitpastelOffsite2026 : CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/picnicmobile/PicnicMob1.png', alt: 'Offsite 2026: about 30 team members posing in a garden in front of a blue "Bitpastel Offsite Social" banner' },
    { id: '2', type: 'image', src: '/images/picnicmobile/PicnicMob2.png', alt: 'Offsite 2026: five women in sunglasses laughing arm in arm before the "Bitpastel Offsite Social" banner' },
    { id: '3', type: 'image', src: '/images/picnicmobile/PicnicMob3.png', alt: 'Offsite 2026: team members smiling from their seats on a bus with orange curtains, heading to the venue' },
    { id: '4', type: 'image', src: '/images/picnicmobile/PicnicMob4.png', alt: 'Offsite 2026: nine men in sunglasses standing in a row with arms crossed in front of the offsite banner' },
    { id: '5', type: 'image', src: '/images/picnicmobile/PicnicMob5.png', alt: 'Offsite 2026: two colleagues smiling as they walk past white plastic chairs in a sunlit garden' },
    { id: '6', type: 'image', src: '/images/picnicmobile/PicnicMob6.png', alt: 'Offsite 2026: two colleagues sharing a laugh outdoors, one bent over laughing, flowers blurred behind' },
    { id: '7', type: 'image', src: '/images/picnicmobile/PicnicMob7.png', alt: 'Offsite 2026: ten team members posing on a lawn in front of the "Bitpastel Offsite Social" banner' },
    { id: '8', type: 'image', src: '/images/picnicmobile/PicnicMob8.png', alt: 'Offsite 2026: smiling team members walking between rows of chairs at the outdoor venue, balloons behind' },
    { id: '9', type: 'image', src: '/images/picnicmobile/PicnicMob9.png', alt: 'Offsite 2026: seven women posing together on a garden path lined with potted flowers and red lanterns' },
    { id: '10', type: 'image', src: '/images/picnicmobile/PicnicMob10.png', alt: 'Offsite 2026: six team members standing on a lawn in front of the banner reading "One Team, One Vibe"' },
    { id: '11', type: 'image', src: '/images/picnicmobile/PicnicMob11.png', alt: 'Offsite 2026: two colleagues seated side by side smiling at the camera, one making a peace sign' },
    { id: '12', type: 'image', src: '/images/picnicmobile/PicnicMob12.png', alt: 'Offsite 2026: two colleagues in sunglasses laughing heartily beside the illustrated offsite banner' },
    { id: '13', type: 'image', src: '/images/picnicmobile/PicnicMob13.png', alt: 'Offsite 2026: six team members, several in sunglasses, posing before the "Bitpastel Offsite Social" banner' }
  ]

  // TOWNHALL 2026

  const townhall2026Images: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/Townhall2026Mob/MBTH1.webp', alt: 'Townhall 2026: about 35 team members posed in rows in front of a "Bitpastel Townhall 2026" and "AI Transformation" backdrop' },
    { id: '2', type: 'image', src: '/images/Townhall2026Mob/MBTH2.webp', alt: 'Townhall 2026: a speaker in a dark blazer addressing the team with a microphone in front of the event backdrop' },
    { id: '3', type: 'image', src: '/images/Townhall2026Mob/MBTH3.webp', alt: 'Townhall 2026: a speaker in a blue suit holding a microphone in front of a "Custom SaaS Solutions" backdrop' },
    { id: '4', type: 'image', src: '/images/Townhall2026Mob/MBTH4.webp', alt: 'Townhall 2026: two hosts reading from scripts with microphones on stage in front of the "Bitpastel Townhall" backdrop' },
    { id: '5', type: 'image', src: '/images/Townhall2026Mob/MBTH5.webp', alt: 'Townhall 2026: five team members in formal wear posing on a red carpet in front of the "Bitpastel Townhall 2026" backdrop' },
    { id: '6', type: 'image', src: '/images/Townhall2026Mob/MBTH6.webp', alt: 'Townhall 2026: about 22 team members posing on stage, the front row seated, in front of the "AI Transformation" backdrop' },
    { id: '7', type: 'image', src: '/images/Townhall2026Mob/MBTH7.webp', alt: 'Townhall 2026: four team members seated at a round table with water bottles, smiling as they watch the session' },
    { id: '8', type: 'image', src: '/images/Townhall2026Mob/MBTH8.webp', alt: 'Townhall 2026: five team members in suits and formal wear standing around a tall café table with a coffee cup' },
    { id: '9', type: 'image', src: '/images/Townhall2026Mob/MBTH9.webp', alt: 'Townhall 2026: five women from the team smiling around a tall table with white teacups in a hotel lounge' },
    { id: '10', type: 'image', src: '/images/Townhall2026Mob/MBTH10.webp', alt: 'Townhall 2026: close-up of colleagues\' hands holding biscuits around cups of tea on a dark table during a break' },
    { id: '11', type: 'image', src: '/images/Townhall2026Mob/MBTH11.webp', alt: 'Townhall 2026: eight team members, several in saris, posing in a row on a red carpet in front of the event backdrop' },
    { id: '12', type: 'image', src: '/images/Townhall2026Mob/MBTH12.webp', alt: 'Townhall 2026: two colleagues laughing and shaking hands beside a podium, one holding a microphone' },
    { id: '13', type: 'image', src: '/images/Townhall2026Mob/MBTH13.webp', alt: 'Townhall 2026: a smiling speaker in a maroon blazer talking into a microphone at a podium' },
    { id: '14', type: 'image', src: '/images/Townhall2026Mob/MBTH14.webp', alt: 'Townhall 2026: ten team members posing on a red stage, one host holding a script and microphone, in front of the backdrop' },
    { id: '15', type: 'image', src: '/images/Townhall2026Mob/MBTH15.webp', alt: 'Townhall 2026: three colleagues in dark suits posing in front of the "Bitpastel Townhall" and "Custom SaaS Solutions" backdrop' },
    { id: '16', type: 'image', src: '/images/Townhall2026Mob/MBTH16.webp', alt: 'Townhall 2026: three colleagues, one in a blue suit between two others, posing in front of the "Bitpastel Townhall" backdrop' },
    { id: '17', type: 'image', src: '/images/Townhall2026Mob/MBTH17.webp', alt: 'Townhall 2026: four colleagues in maroon, black and white blazers posing together in front of the event backdrop' },
    { id: '18', type: 'image', src: '/images/Townhall2026Mob/MBTH18.webp', alt: 'Townhall 2026: three colleagues, two in dark suits and one in a blue embroidered outfit, posing in front of the backdrop' },
    { id: '19', type: 'image', src: '/images/Townhall2026Mob/MBTH19.webp', alt: 'Townhall 2026: collage of 17 photos of team members holding framed awards such as "Ruby Award" and "Sapphire Award" or shaking hands' },
    
  ];

  // Chrismas 2025
  const chrismas2025Images: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/Christmas2025Mob/MobChrismas1.webp', alt: 'Christmas 2025: five team members flanking a festive display of model houses, snow and a Santa cutout' },
    { id: '2', type: 'image', src: '/images/Christmas2025Mob/MobChrismas2.webp', alt: 'Christmas 2025: six team members posing together in the office beneath tinsel garlands and red stars' },
    { id: '3', type: 'image', src: '/images/Christmas2025Mob/MobChrismas3.webp', alt: 'Christmas 2025: close view of the office display with glowing model houses, a snowman, Santa and a "Merry Christmas" sign' },
    { id: '4', type: 'image', src: '/images/Christmas2025Mob/MobChrismas4.webp', alt: 'Christmas 2025: six team members taking a close-up group selfie in the office lounge' },
  ];

  // EMBTHnic Day 2025

  const ethinicDay2025Images: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/EthinicDayMob2025/EthinicDayMob1.webp', alt: 'Ethnic Day 2025: three women in traditional kurtas taking a selfie beneath colorful hanging kites and a decorative mural' },
    { id: '2', type: 'image', src: '/images/EthinicDayMob2025/EthinicDayMob2.webp', alt: 'Ethnic Day 2025: eleven team members in kurtas and traditional wear posing under a canopy of colorful kites' },
  ];

  // Independence Day 2025
  const independenceDay2025Images: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/Independence2025Mob/Independence2025Mob1.webp', alt: 'Independence Day 2025: about 14 team members gathered around an "INDIA" display with flags and tricolor balloons' },
    { id: '2', type: 'image', src: '/images/Independence2025Mob/Independence2025Mob2.webp', alt: 'Independence Day 2025: three colleagues with arms crossed in the office, Indian flags and tricolor balloons behind' },
    { id: '3', type: 'image', src: '/images/Independence2025Mob/Independence2025Mob3.webp', alt: 'Independence Day 2025: five team members holding small Indian flags beside an "INDIA" display with a tricolor wheel' },
  ];


  const sampleImages: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/1.webp', alt: 'Escape Rooms: six team members holding fun signs like "Mystery Solved" and "I Am Sherlocked" under a "Mystery Rooms" sign' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/2.webp', alt: 'Escape Rooms: venue lounge with a red neon "Can You Escape?" sign, Egyptian-style wall art and blue seating' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/3.webp', alt: 'Escape Rooms: six team members standing in front of an Egyptian-themed mural under a glowing "Mystery Rooms" sign' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/4.webp', alt: 'Escape Rooms: six team members in a smiling group selfie beneath the glowing "Mystery Rooms" neon sign' },
  ];

  const interactive: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/1.webp', alt: 'Interactive Team Mission: a colleague carefully pulling a block from a wooden tower game while another watches' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/2.webp', alt: 'Interactive Team Mission: nine team members posing around a wooden block tower on a meeting room table' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/3.webp', alt: 'Interactive Team Mission: a selfie of ten team members around a meeting table with laptops and a wooden block tower' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/4.webp', alt: 'Interactive Team Mission: six colleagues laughing as one carefully removes a block from a wooden tower game' },
  ];

  const bitpastelTurns: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/1.webp', alt: 'Bitpastel turns 8: about 25 team members pose together on the granite steps outside a building entrance' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/2.webp', alt: 'Bitpastel turns 8: five colleagues seated at a restaurant table decorated with blue and white balloons' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/3.webp', alt: 'Bitpastel turns 8: a team member takes a group selfie with about 20 colleagues in front of an "India\'s Favourite Grill" wall' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/4.webp', alt: 'Bitpastel turns 8: about 22 team members pose for a group photo against a plain white wall, some kneeling in front' },
  ];

  const icebreakers: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/1.webp', alt: 'Ice breaker coffee evening: a team member takes a selfie with five colleagues at a busy outdoor fair at night' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/2.webp', alt: 'Ice breaker coffee evening: a team member takes a selfie with five colleagues seated in a café with city lights behind' },
  ];

  const cristmasCelebration: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Christmas celeb 2024/1.webp', alt: 'Christmas at office: five team members stand beside a decorated tree, a red cottage display and a reindeer sleigh' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Christmas celeb 2024/2.webp', alt: 'Christmas at office: six team members pose by the office Christmas tree, a "Merry Christmas" cottage and Santa\'s sleigh' },
  ];

  const ethnicDay: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Ethnic day/1.webp', alt: 'Ethnic Day: eight women team members in colourful kurtas pose in a row in the "RDB Cinemas" lobby' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Ethnic day/2.webp', alt: 'Ethnic Day: eight women team members in red and festive outfits take a smiling selfie in a cinema corridor lined with posters' },
  ];

  const birthdayCelebration: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/1.webp', alt: 'Birthday at office: close-up of a black forest cake topped with cherries, cream and a "Happy Birthday" topper' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/2.webp', alt: 'Birthday at office: three colleagues on a sofa cut a black forest cake together in the office lounge' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/3.webp', alt: 'Birthday at office: a team member takes a selfie with about nine colleagues around a chocolate cake in the cafeteria' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/4.webp', alt: 'Birthday at office: two colleagues hold up a red velvet cake together at their workspace' },
  ];

  const workAniversary: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/1.webp', alt: 'Work anniversary: five colleagues cut a butterscotch cake together at a wooden table in the office lounge' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/2.webp', alt: 'Work anniversary: a team member takes a selfie with six colleagues at a long dining table with plates and food trays' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/3.webp', alt: 'Work anniversary: five colleagues smile while sharing plates of noodles and drinks in the office cafeteria' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/4.webp', alt: 'Work anniversary: a team member takes a selfie with five colleagues in the blue-walled office lounge, some holding drink cans' },
  ];

  const teamMeetUp: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Team meet up/2.webp', alt: 'Team meetup, movie: three colleagues pose together in a cinema lobby with a movie poster in the background' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Team meet up/1.webp', alt: 'Team meetup, coffee: six colleagues share pizza and iced coffees around a table at a café' },
  ];

  const bitpastelTownhall2024: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/1.webp', alt: 'Townhall 2024: collage of five Instagram-style frames captioned "Glimpses from the Bitpastel Town Hall" of colleagues posing' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/2.webp', alt: 'Townhall 2024: a team member cuts a two-tier "bitpastel" cake topped with a gold 7 as colleagues around the table smile and applaud' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/3.webp', alt: 'Townhall 2024: a team member in a grey suit smiles while holding a microphone in front of the "Bitpastel Town Hall 7 Years" backdrop' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/4.webp', alt: 'Townhall 2024: about 35 team members pose on stage in front of the "Bitpastel Town Hall 7 Years" backdrop, many making victory signs' },
    { id: '5', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/5.webp', alt: 'Townhall 2024: a team member in a navy blazer holds a microphone and playfully checks his watch in front of the event backdrop' },
    { id: '6', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/6.webp', alt: 'Townhall 2024: a team member in a dark shirt with a name tag speaks into a microphone in front of the "Bitpastel Town Hall" backdrop' },
    { id: '7', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/7.webp', alt: 'Townhall 2024: about 25 team members pose on stage, several in front holding award trophies including two round "Legacy Award" plaques' },
    { id: '8', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/8.webp', alt: 'Townhall 2024: a team member in a white blazer speaks into a microphone while holding a phone, in front of the "7 Years" backdrop' },
    { id: '9', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/9.webp', alt: 'Townhall 2024: two colleagues in suits pose with their round 2024 "Legacy Award" plaques in front of the "Bitpastel Town Hall" backdrop' },
    { id: '10', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/10.webp', alt: 'Townhall 2024: six colleagues in suits and blazers gather around a tall round table in the hotel lobby, one holding a coffee cup' },
    { id: '11', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/11.webp', alt: 'Townhall 2024: two colleagues in navy blazers stand side by side in a hotel lounge with a brick wall and a Bitpastel banner behind them' },
    { id: '12', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/12.webp', alt: 'Townhall 2024: a team member holding a microphone and a stack of papers smiles while hosting on stage in front of the event backdrop' },
    { id: '13', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/13.webp', alt: 'Townhall 2024: a team member laughs while presenting at a podium with a laptop, microphone in hand, beside a "Bitpastel Town Hall" banner' },
    { id: '14', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/14.webp', alt: 'Townhall 2024: a team member in a blue blazer smiles while reaching into a bowl of chocolates as colleagues sit at round tables behind him' },
    { id: '15', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/15.webp', alt: 'Townhall 2024: eight award winners stand in a row on a red-carpeted stage, each holding a trophy, before the "Bitpastel Town Hall" backdrop' },
  ];

  const bitpastelTownhall2023: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/1.webp', alt: 'Townhall 2023: a team member cuts a two-tier "bitpastel" cake topped with a gold "6" as colleagues smile and applaud' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/2.webp', alt: 'Townhall 2023: a speaker in a navy suit addresses the team with a microphone before a "bitpastel 6 Years" backdrop' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/3.webp', alt: 'Townhall 2023: a speaker in a dark blazer gestures while talking into a microphone in front of the "6 Years" backdrop' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/4.webp', alt: 'Townhall 2023: about 30 team members pose together flashing peace signs in front of the "bitpastel 6 Years" backdrop' },
    { id: '5', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/5.webp', alt: 'Townhall 2023: a smiling team member in a striped shirt speaks into a microphone in front of the "6 Years" backdrop' },
    { id: '6', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/6.webp', alt: 'Townhall 2023: a team member in a maroon suit smiles while speaking into a microphone at the anniversary event' },
    { id: '7', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/7.webp', alt: 'Townhall 2023: four colleagues in blazers chat around a high table, one holding a coffee mug, in a bright hotel lounge' },
    { id: '8', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/8.webp', alt: 'Townhall 2023: three team members hold "Ruby Award" trophies in front of the "bitpastel 6 Years" backdrop' },
    { id: '9', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/9.webp', alt: 'Townhall 2023: a smiling event host holds a microphone and pink cue sheets beside the "6 Years" backdrop' },
    { id: '10', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/10.webp', alt: 'Townhall 2023: a laughing speaker in a light shirt holds a microphone and rolled papers before the "6 Years" backdrop' },
    { id: '11', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/11.webp', alt: 'Townhall 2023: four colleagues pose before the "6 Years" backdrop, three of them holding "Diamond Award" and "Ruby Award" trophies' },
    { id: '12', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/12.webp', alt: 'Townhall 2023: eight award winners stand in a row on a red carpet, each holding a trophy, before the "bitpastel 6 Years" backdrop' },
    { id: '13', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/13.webp', alt: 'Townhall 2023: three colleagues, two in blazers and one in a green blouse, pose together before the "bitpastel 6 Years" backdrop' },
    { id: '14', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/14.webp', alt: 'Townhall 2023: a team member holding a microphone hands a chocolate bar to a smiling seated colleague during a table activity' },
    { id: '15', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/15.webp', alt: 'Townhall 2023: a standing team member with a microphone hands a treat to a seated colleague while another colleague laughs' },
    { id: '16', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/16.webp', alt: 'Townhall 2023: two colleagues, one in a checked shirt and one in a maroon suit, pose before the "6 Years" backdrop' },
  ];

  const bitpastelTownhall2022: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/1.webp', alt: 'Townhall 2022: two team members smile holding "Ruby Award" and "Sapphire Award" trophies before the "bitpastel 5 Years" backdrop' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/2.webp', alt: 'Townhall 2022: a speaker in a dark suit and red tie talks into a microphone in front of beige curtains' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/3.webp', alt: 'Townhall 2022: team members seated at a round table with water bottles applaud during the presentation' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/4.webp', alt: 'Townhall 2022: about 15 award winners hold trophies and a framed certificate on stage beside a "bitpastel Town Hall 2022" logo' },
  ];

  const bitpastelTownhall2021: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/1.webp', alt: 'Townhall 2021: about 30 team members, many wearing matching black Bitpastel caps, pose outside a glass-fronted building in front of a hedge' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/2.webp', alt: 'Townhall 2021: ten team members smile together beside a restaurant buffet counter with warming dishes and a pizza menu card' },
  ];

  const cultureAtBitpastel: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Culture at Bitpastel/1.webp', alt: 'Culture at Bitpastel: about 25 team members in casual winter wear pose together in a marble-floored office lobby beside a glass-walled cafe' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Culture at Bitpastel/2.webp', alt: 'Culture at Bitpastel: six colleagues gather around three laptops on a wooden table, one seated and the others leaning in to look at a screen' },
  ];

  const yearEndCelebration: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/1.webp', alt: 'Year-end 2022: a row of team members wearing 3D glasses sit together in red seats at a cinema, smiling at the camera' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/2.webp', alt: 'Year-end 2022: about 13 team members huddle for a group photo in front of a colourful red painted mural' },
    { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/3.webp', alt: 'Year-end 2022: about 20 team members in casual winter clothes pose for a group photo in a shopping mall atrium' },
    { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/4.webp', alt: 'Year-end 2022: eight team members stand by a decorated Christmas tree and gingerbread house under hanging paper stars at the office' },
    { id: '5', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/5.webp', alt: 'Year-end 2022: a team member takes a smiling group selfie with eight colleagues beside the office Christmas tree' },
  ];

  const sundayBrunchAtWestin: CarouselItem[] = [
    { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Sunday brunch/1.webp', alt: 'Sunday Brunch at Westin: about 25 team members stand in a row outdoors in front of a fountain surrounded by palm trees' },
    { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Sunday brunch/2.webp', alt: 'Sunday Brunch at Westin: about 25 team members pose together inside the hotel restaurant with the buffet counters behind them' },
  ];

  // State to track which carousel is in view
  const [activeCarousel, setActiveCarousel] = useState<string | null>(null);
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-carousel-id');
          if (!id) return;

          setActiveCarousel(entry.isIntersecting ? id : null);
        });
      },
      { threshold: 0.7 }
    );

    Object.values(carouselRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  // Function to set ref for each carousel
  const setCarouselRef = (ref: HTMLDivElement | null, id: string) => {
    if (ref) {
      carouselRefs.current[id] = ref;
    } else {
      delete carouselRefs.current[id];
    }
  };

  // Helper function to render carousel sections
const renderCarouselSection = (
  id: string,
  items: CarouselItem[],
  title: string,
  subtitle: string
) => (
  <motion.div
    className="team-collage"
    ref={ref => setCarouselRef(ref, id)}
    data-carousel-id={id}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
      },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="relative">
      <InstagramCarousel
        items={items}
        autoPlay={activeCarousel === id}
        showDots
        showArrows={false}
        infinite
      />
    </div>

    <div className="px-8">
      <h2 className="text-[16px] font-[700]">{title}</h2>
      {/* #6B7280 = 4.83:1 on white; text-white maps to #b2b2b2 (2.12:1) in this theme */}
      <p className="text-[12px] text-[#6B7280]">{subtitle}</p>
    </div>
  </motion.div>
);


  return (
    <section className="relative team-members-mob team-members-mobile" id="OurTeam">

      {/* Bitpaastel Offsite 2026 */}
      {renderCarouselSection(
        'bitpastelOffsite2026',
        bitpastelOffsite2026,
        'Bitpastel Offsite 2026',
        '#BitpastelOffsite2026 #Vacation'
      )}


      {/* Townhall 2026 */}
      {renderCarouselSection(
        'townhall2026',
        townhall2026Images,
        'Townhall 2026',
        '#BitpastelTownhall2026 #CompanyCulture'
      )}

      {/* Christmas 2025 */}
      {renderCarouselSection(
        'chrismas2025',
        chrismas2025Images,
        'Christmas 2025',
        '#Christmas2025 #HolidaySeason #OfficeClebration'
      )}

      {/* Ethnic Day 2025 */}
      {renderCarouselSection(
        'ethinicDay2025',
        ethinicDay2025Images,
        'Ethnic Day 2025',
        '#TraditionalAttire  #CulturalCelebration'
      )}

      {/* Independence Day 2025 */}
      {renderCarouselSection(
        'independenceDay2025',
        independenceDay2025Images,
        'Independence Day 2025',
        '#IndependenceDay2025 #OfficeCelebration'
      )}


      {/* Escape Rooms */}
      {renderCarouselSection(
        'escapeRooms',
        sampleImages,
        'Escape Rooms',
        '#MysteryRooms #RealLifeEscapeExperience'
      )}

      {/* Interactive Team Mission */}
      {renderCarouselSection(
        'interactive',
        interactive,
        'Interactive Team Mission',
        '#TeamBuilding #BlockByBlock'
      )}

      {/* Bitpastel Turns 8 */}
      {renderCarouselSection(
        'bitpastelTurns',
        bitpastelTurns,
        'Bitpastel Turns 8',
        '#TeamGoals #MilestoneMoment'
      )}

      {/* Ice Breaker - Coffee Evening */}
      {renderCarouselSection(
        'icebreakers',
        icebreakers,
        'Ice Breaker - Coffee Evening',
        '#CoffeeAndConversations #BrewingConnections'
      )}

      {/* Christmas Celebration at Office 2024 */}
      {renderCarouselSection(
        'cristmasCelebration',
        cristmasCelebration,
        'Christmas Celebration at Office 2024',
        '#ChristmasCelebration #FestiveVibes'
      )}

      {/* Ethnic Day Celebration at Office 2024 */}
      {renderCarouselSection(
        'ethnicDay',
        ethnicDay,
        'Ethnic Day Celebration at Office 2024',
        '#BitpastelEthnicDay #TraditionMeetsStyle'
      )}

      {/* Birthday Celebration at Office */}
      {renderCarouselSection(
        'birthdayCelebration',
        birthdayCelebration,
        'Birthday Celebration at Office',
        '#BirthdayCheers #CakeTime'
      )}

      {/* Work Anniversary Celebration at Office 2024 */}
      {renderCarouselSection(
        'workAniversary',
        workAniversary,
        'Work Anniversary Celebration at Office 2024',
        '#CelebratingSuccess #CheersToYears'
      )}

      {/* Team Meetup */}
      {renderCarouselSection(
        'teamMeetUp',
        teamMeetUp,
        'Team Meetup',
        '#LunchWithColleagues #TeamBonding'
      )}

      {/* Bitpastel Townhall 2024 */}
      {renderCarouselSection(
        'bitpastelTownhall2024',
        bitpastelTownhall2024,
        'Bitpastel Townhall 2024',
        '#BuildingTheFuture #TogetherWeGrow'
      )}

      {/* Bitpastel Townhall 2023 */}
      {renderCarouselSection(
        'bitpastelTownhall2023',
        bitpastelTownhall2023,
        'Bitpastel Townhall 2023',
        '#OurJourney2023 #TownhallHighlights'
      )}

      {/* Culture at Bitpastel */}
      {renderCarouselSection(
        'cultureAtBitpastel',
        cultureAtBitpastel,
        'Culture at Bitpastel',
        '#CultureDriven #ThrivingAtWork'
      )}

      {/* Year-end Celebration 2022 */}
      {renderCarouselSection(
        'yearEndCelebration',
        yearEndCelebration,
        'Year-end Celebration 2022',
        '#BitpastelMovieMoments #BuildingStrongerTeams'
      )}

      {/* Sunday Brunch at Westin */}
      {renderCarouselSection(
        'sundayBrunchAtWestin',
        sundayBrunchAtWestin,
        'Sunday Brunch at Westin',
        '#WeekendWithTeam #WestinBrunch'
      )}

      {/* Bitpastel Townhall 2022 */}
      {renderCarouselSection(
        'bitpastelTownhall2022',
        bitpastelTownhall2022,
        'Bitpastel Townhall 2022',
        '#Townhall2022 #VisionAndValues'
      )}

      {/* Bitpastel Townhall 2021 */}
      {renderCarouselSection(
        'bitpastelTownhall2021',
        bitpastelTownhall2021,
        'Bitpastel Townhall 2021',
        '#Milestones2021 #FoundationsOfGrowth'
      )}
    </section>
  );
};

export default MobileTeamCollage;