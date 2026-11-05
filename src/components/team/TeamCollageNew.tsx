import Image from 'next/image';

// import Escape1 from "../../../public/images/new-team-images/new/escape_room_img-1.webp";
// import Escape2 from "../../../public/images/new-team-images/new/escape_room_img-2.webp";
// import Escape3 from "../../../public/images/new-team-images/new/escape_room_img-3.webp";
// import Escape4 from "../../../public/images/new-team-images/new/escape_room_img-4.webp";
// import TeamMission1 from "../../../public/images/new-team-images/new/jenga_puzzle-play-1.webp";
// import TeamMission2 from "../../../public/images/new-team-images/new/jenga_puzzle-play-2.webp";
// import TeamMission3 from "../../../public/images/new-team-images/new/jenga_puzzle-play-3.webp";
// import TeamMission4 from "../../../public/images/new-team-images/new/jenga_puzzle-play-4.webp";
// import EightYears1 from "../../../public/images/new-team-images/new/bitpastel-turn-8-1.webp";
// import EightYears2 from "../../../public/images/new-team-images/new/bitpastel-turn-8-2.webp";
// import EightYears3 from "../../../public/images/new-team-images/new/bitpastel-turn-8-3.webp";
// import EightYears4 from "../../../public/images/new-team-images/new/bitpastel-turn-8-4.webp";
// import Christmas1 from "../../../public/images/new-team-images/new/christmas-celebration-at-office-2024-1.webp";
// import Christmas2 from "../../../public/images/new-team-images/new/christmas-celebration-at-office-2024-2.webp";
// import EthnicDay1 from "../../../public/images/new-team-images/new/ethnic-day-celeb-1.webp";
// import EthnicDay2 from "../../../public/images/new-team-images/new/ethnic-day-celeb-2.webp";
// import BirthdayDay1 from "../../../public/images/new-team-images/new/birthday-celeb-office-1.webp";
// import BirthdayDay2 from "../../../public/images/new-team-images/new/birthday-celeb-office-2.webp";
// import BirthdayDay3 from "../../../public/images/new-team-images/new/birthday-celeb-office-3.webp";
// import BirthdayDay4 from "../../../public/images/new-team-images/new/birthday-celeb-office-4.webp";
// import WorkAnniversary1 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-1.webp";
// import WorkAnniversary2 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-2.webp";
// import WorkAnniversary3 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-3.webp";
// import WorkAnniversary4 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-4.webp";
// import TeamMeetup1 from "../../../public/images/new-team-images/new/team-meetup-1.webp";
// import TeamMeetup2 from "../../../public/images/new-team-images/new/team-meetup-2.webp";
// import TownHall1 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-1.webp";
// import TownHall2 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-2.webp";
// import TownHall3 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-3.webp";
// import TownHall4 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-4.webp";
// import TownHall5 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-5.webp";
// import TownHall6 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-6.webp";
// import TownHall7 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-7.webp";
// import TownHall8 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-8.webp";
// import TownHall9 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-9.webp";
// import TownHall10 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-10.webp";
// import TownHall11 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-11.webp";
// import TownHall12 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-12.webp";
// import TownHall13 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-13.webp";
// import TownHall14 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-14.webp";
// import TownHall15 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-15.webp";
// import TownHall20231 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-1.webp";
// import TownHall20232 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-2.webp";
// import TownHall20233 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-3.webp";
// import TownHall20234 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-4.webp";
// import TownHall20235 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-5.webp";
// import TownHall20236 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-6.webp";
// import TownHall20237 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-7.webp";
// import TownHall20238 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-8.webp";
// import TownHall20239 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-9.webp";
// import TownHall202310 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-10.webp";
// import TownHall202311 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-11.webp";
// import TownHall202312 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-12.webp";
// import TownHall202313 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-13.webp";
// import TownHall202314 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-14.webp";
// import TownHall202315 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-15.webp";
// import TownHall202316 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-16.webp";
// import Culture1 from "../../../public/images/new-team-images/new/culture-1.webp";
// import Culture2 from "../../../public/images/new-team-images/new/culture-2.webp";
// import YearEnd1 from "../../../public/images/new-team-images/new/year-end-celeb-2022-1.webp";
// import YearEnd2 from "../../../public/images/new-team-images/new/year-end-celeb-2022-2.webp";
// import YearEnd3 from "../../../public/images/new-team-images/new/year-end-celeb-2022-3.webp";
// import YearEnd4 from "../../../public/images/new-team-images/new/year-end-celeb-2022-4.webp";
// import YearEnd5 from "../../../public/images/new-team-images/new/year-end-celeb-2022-5.webp";
// import Westin1 from "../../../public/images/new-team-images/new/sunday-brunch-westin-1.webp";
// import Westin2 from "../../../public/images/new-team-images/new/sunday-brunch-westin-2.webp";
// import TownHall20221 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-1.webp";
// import TownHall20222 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-2.webp";
// import TownHall20223 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-3.webp";
// import TownHall20224 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-4.webp";
// import TownHall20211 from "../../../public/images/new-team-images/new/bitpastel-townhall-2021-1.webp";
// import TownHall20212 from "../../../public/images/new-team-images/new/bitpastel-townhall-2021-2.webp";

import EthnicDay2025_1 from '../../../public/images/new-team-images/Team page updated new/Ethnic day 2025/Frame 98.webp';
import EthnicDay2025_2 from '../../../public/images/new-team-images/Team page updated new/Ethnic day 2025/Frame 97.webp';
import IndependenceDay2025_1 from '../../../public/images/new-team-images/Team page updated new/Independenceday 2025/Frame 34.webp';
import IndependenceDay2025_2 from '../../../public/images/new-team-images/Team page updated new/Independenceday 2025/Frame 36.webp';
import IndependenceDay2025_3 from '../../../public/images/new-team-images/Team page updated new/Independenceday 2025/Frame 8.webp';
import BirthdayCelebration2025_1 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 25.webp';
import BirthdayCelebration2025_2 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 28.webp';
import BirthdayCelebration2025_3 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 27.webp';
import BirthdayCelebration2025_4 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 26.webp';
import BirthdayCelebration2025_5 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 31.webp';
import BirthdayCelebration2025_6 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 32.webp';
import Escape1 from '../../../public/images/new-team-images/Team page updated new/Escape room/Frame 8.webp';
import Escape2 from '../../../public/images/new-team-images/Team page updated new/Escape room/Frame 14.webp';
import Escape3 from '../../../public/images/new-team-images/new/escape_room_img-3.webp';
import Escape4 from '../../../public/images/new-team-images/new/escape_room_img-4.webp';
import TeamMission1 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 15.webp';
import TeamMission2 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 16.webp';
import TeamMission3 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 17.webp';
import TeamMission4 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 18.webp';
import EightYears1 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 8.webp';
import EightYears2 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 19.webp';
import EightYears3 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 20.webp';
import EightYears4 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 21.webp';
import IceBracker1 from '../../../public/images/new-team-images/Team page updated new/Icebreaker/Frame 23-1.webp';
import IceBracker2 from '../../../public/images/new-team-images/Team page updated new/Icebreaker/Frame 23.webp';
import Christmas1 from '../../../public/images/new-team-images/Team page updated new/Christmas celebration at office/Frame 24.webp';
import Christmas2 from '../../../public/images/new-team-images/Team page updated new/Christmas celebration at office/Frame 25.webp';
import EthnicDay2024_1 from '../../../public/images/new-team-images/new/ethnic-day-celeb-1.webp';
import EthnicDay2024_2 from '../../../public/images/new-team-images/new/ethnic-day-celeb-2.webp';
import BirthdayDay1 from '../../../public/images/new-team-images/new/birthday-celeb-office-1.webp';
import BirthdayDay2 from '../../../public/images/new-team-images/new/birthday-celeb-office-2.webp';
import BirthdayDay3 from '../../../public/images/new-team-images/new/birthday-celeb-office-3.webp';
import BirthdayDay4 from '../../../public/images/new-team-images/new/birthday-celeb-office-4.webp';
import WorkAnniversary1 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-1.webp';
import WorkAnniversary2 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-2.webp';
import WorkAnniversary3 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-3.webp';
import WorkAnniversary4 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-4.webp';
import TeamMeetup1 from '../../../public/images/new-team-images/Team page updated new/Team meet up/Frame 39.webp';
import TeamMeetup2 from '../../../public/images/new-team-images/Team page updated new/Team meet up/Frame 89 (1).webp';
import TownHall2024_1 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Group 211.webp';
import TownHall2024_2 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 40.webp';
import TownHall2024_3 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 41.webp';
import TownHall2024_4 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 43.webp';
import TownHall2024_5 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 44.webp';
import TownHall2024_6 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 45.webp';
import TownHall2024_7 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 46.webp';
import TownHall2024_8 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 47.webp';
import TownHall2024_9 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 48.webp';
import TownHall2024_10 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 49.webp';
import TownHall2024_11 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 75.webp';
import TownHall2024_12 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 76.webp';
import TownHall2024_13 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 77.webp';
import TownHall2024_14 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 78.webp';
import TownHall2024_15 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 89.webp';

import TownHall2023_1 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 52.webp';
import TownHall2023_2 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 50.webp';
import TownHall2023_3 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 51.webp';
import TownHall2023_4 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 55.webp';
import TownHall2023_5 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 53.webp';
import TownHall2023_6 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 54.webp';
import TownHall2023_7 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 58.webp';
import TownHall2023_8 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 56.webp';
import TownHall2023_9 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 57.webp';
import TownHall2023_10 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 80.webp';
import TownHall2023_11 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 81.webp';
import TownHall2023_12 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 82.webp';
import TownHall2023_13 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 83.webp';
import TownHall2023_14 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 85.webp';
import TownHall2023_15 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 84.webp';
import TownHall2023_16 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 86.webp';

import Culture1 from '../../../public/images/new-team-images/Team page updated new/culture at bitpastel/Frame 59.webp';
import Culture2 from '../../../public/images/new-team-images/Team page updated new/culture at bitpastel/Frame 60.webp';

import YearEnd2022_1 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 61.webp';
import YearEnd2022_2 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 62.webp';
import YearEnd2022_3 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 87.webp';
import YearEnd2022_4 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 63.webp';
import YearEnd2022_5 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 64.webp';

import Westin1 from '../../../public/images/new-team-images/Team page updated new/sunday brunch at westin/Frame 67.webp';
import Westin2 from '../../../public/images/new-team-images/Team page updated new/sunday brunch at westin/Frame 68.webp';

import TownHall2022_1 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 69.webp';
import TownHall2022_2 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 70.webp';
import TownHall2022_3 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 71.webp';
import TownHall2022_4 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 72.webp';

import TownHall2021_1 from '../../../public/images/new-team-images/Team page updated new/townhall 2021/Frame 73.webp';
import TownHall2021_2 from '../../../public/images/new-team-images/Team page updated new/townhall 2021/Frame 74.webp';

import X_max_1 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-1.webp';
import X_max_2 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-2.webp';
import X_max_3 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-3.webp';
import X_max_4 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-4.webp';

// TownHall 2026

import TH1 from '../../../public/images/TownHall2026/TH1.webp';
import TH111 from '../../../public/images/TownHall2026/TH1.webp';
import TH2 from '../../../public/images/TownHall2026/TH2.webp';
import TH3 from '../../../public/images/TownHall2026/TH3.webp';
import TH4 from '../../../public/images/TownHall2026/TH4.webp';
import TH5 from '../../../public/images/TownHall2026/TH5.webp';
import TH6 from '../../../public/images/TownHall2026/TH6.webp';
import TH7 from '../../../public/images/TownHall2026/TH7.webp';
import TH8 from '../../../public/images/TownHall2026/TH8.webp';
import TH9 from '../../../public/images/TownHall2026/TH9.webp';
import TH10 from '../../../public/images/TownHall2026/TH10.webp';
import TH11 from '../../../public/images/TownHall2026/TH11.webp';
import TH12 from '../../../public/images/TownHall2026/TH12.webp';
import TH13 from '../../../public/images/TownHall2026/TH13.webp';
import TH14 from '../../../public/images/TownHall2026/TH14.webp';
import TH15 from '../../../public/images/TownHall2026/TH15.webp';
import TH16 from '../../../public/images/TownHall2026/TH16.webp';
import TH17 from '../../../public/images/TownHall2026/TH17.webp';
import TH18 from '../../../public/images/TownHall2026/TH18.webp';
import TH19 from '../../../public/images/TownHall2026/TH19.webp';

import Picnic1 from '../../../public/images/Picnic2026/Picnic1.webp';
import Picnic2 from '../../../public/images/Picnic2026/Picnic2.webp';
import Picnic3 from '../../../public/images/Picnic2026/Picnic3.webp';
import Picnic4 from '../../../public/images/Picnic2026/Picnic4.webp';
import Picnic5 from '../../../public/images/Picnic2026/Picnic5.webp';
import Picnic6 from '../../../public/images/Picnic2026/Picnic6.webp';
import Picnic7 from '../../../public/images/Picnic2026/Picnic7.webp';
import Picnic8 from '../../../public/images/Picnic2026/Picnic8.webp';
import Picnic9 from '../../../public/images/Picnic2026/Picnic9.webp';
import Picnic10 from '../../../public/images/Picnic2026/Picnic10.webp';
import Picnic11 from '../../../public/images/Picnic2026/Picnic11.webp';
import Picnic12 from '../../../public/images/Picnic2026/Picnic12.webp';
import Picnic13 from '../../../public/images/Picnic2026/Picnic13.webp';

const TeamCollageNew = () => {
  ``;

  return (
    <section className='team-members'>
      <div className='container mx-auto px-4'>
        <div className='team-college'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4 pt-4'>Bitpastel Offsite 2026</h2>

          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic1}
              alt="Offsite 2026: about 30 team members posing in a garden in front of a blue &quot;Bitpastel Offsite Social&quot; banner"
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic2}
              alt="Offsite 2026: five women in sunglasses laughing arm in arm before the &quot;Bitpastel Offsite Social&quot; banner"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic3}
              alt="Offsite 2026: team members smiling from their seats on a bus with orange curtains, heading to the venue"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic4}
              alt="Offsite 2026: nine men in sunglasses standing in a row with arms crossed in front of the offsite banner"
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic5}
              alt="Offsite 2026: two colleagues smiling as they walk past white plastic chairs in a sunlit garden"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic6}
              alt="Offsite 2026: two colleagues sharing a laugh outdoors, one bent over laughing, flowers blurred behind"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic7}
              alt="Offsite 2026: ten team members posing on a lawn in front of the &quot;Bitpastel Offsite Social&quot; banner"
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic8}
              alt="Offsite 2026: smiling team members walking between rows of chairs at the outdoor venue, balloons behind"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic9}
              alt="Offsite 2026: seven women posing together on a garden path lined with potted flowers and red lanterns"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic10}
              alt="Offsite 2026: six team members standing on a lawn in front of the banner reading &quot;One Team, One Vibe&quot;"
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic11}
              alt="Offsite 2026: two colleagues seated side by side smiling at the camera, one making a peace sign"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic12}
              alt="Offsite 2026: two colleagues in sunglasses laughing heartily beside the illustrated offsite banner"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic13}
              alt="Offsite 2026: six team members, several in sunglasses, posing before the &quot;Bitpastel Offsite Social&quot; banner"
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px]  font-[700] pb-4'>Bitpastel Townhall 2026</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH111}
              alt="Townhall 2026: about 35 team members posed in rows in front of a &quot;Bitpastel Townhall 2026&quot; and &quot;AI Transformation&quot; backdrop"
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH2}
              alt="Townhall 2026: Manager and VP Ibrahim in a dark blazer addressing the team with a microphone in front of the event backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH3}
              alt="Townhall 2026: CEO Ayan in a blue suit holding a microphone in front of a &quot;Custom SaaS Solutions&quot; backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH4}
              alt="Townhall 2026: two hosts reading from scripts with microphones on stage in front of the &quot;Bitpastel Townhall&quot; backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH5}
              alt="Townhall 2026: five team members in formal wear posing on a red carpet in front of the &quot;Bitpastel Townhall 2026&quot; backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH6}
              alt="Townhall 2026: about 22 team members posing on stage, the front row seated, in front of the &quot;AI Transformation&quot; backdrop"
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH7}
              alt="Townhall 2026: four team members seated at a round table with water bottles, smiling as they watch the session"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH8}
              alt="Townhall 2026: five team members in suits and formal wear standing around a tall café table with a coffee cup"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH9}
              alt="Townhall 2026: five women from the team smiling around a tall table with white teacups in a hotel lounge"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH10}
              alt="Townhall 2026: close-up of colleagues' hands holding biscuits around cups of tea on a dark table during a break"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH11}
              alt="Townhall 2026: eight team members, several in saris, posing in a row on a red carpet in front of the event backdrop"
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH12}
              alt="Townhall 2026: two colleagues laughing and shaking hands beside a podium, one holding a microphone"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH13}
              alt="Townhall 2026: a smiling speaker in a maroon blazer talking into a microphone at a podium"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH14}
              alt="Townhall 2026: ten team members posing on a red stage, one host holding a script and microphone, in front of the backdrop"
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH15}
              alt="Townhall 2026: three colleagues in dark suits posing in front of the &quot;Bitpastel Townhall&quot; and &quot;Custom SaaS Solutions&quot; backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH16}
              alt="Townhall 2026: three colleagues, one in a blue suit between two others, posing in front of the &quot;Bitpastel Townhall&quot; backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH17}
              alt="Townhall 2026: four colleagues in maroon, black and white blazers posing together in front of the event backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH18}
              alt="Townhall 2026: three colleagues, two in dark suits and one in a blue embroidered outfit, posing in front of the backdrop"
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH19}
              alt="Townhall 2026: collage of 17 photos of team members holding framed awards such as &quot;Ruby Award&quot; and &quot;Sapphire Award&quot; or shaking hands"
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px]  font-[700] pb-4'>Christmas Celebration at Office 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={X_max_1}
              alt="Christmas 2025: seven team members standing around a festive display of model houses, snow and a Santa cutout"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={X_max_2}
              alt="Christmas 2025: six team members posing together in the office beneath tinsel garlands and red stars"
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={X_max_3}
              alt="Christmas 2025: office Christmas display with model houses, cotton snow, a snowman, Santa cutout and a decorated tree"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1'>
            <Image
              src={X_max_4}
              alt="Christmas 2025: six team members taking a close-up group selfie in the office lounge"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Ethnic Day Celebration at Office 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={EthnicDay2025_1}
              alt="Ethnic Day 2025: three women in traditional kurtas taking a selfie beneath colorful hanging kites and a decorative mural"
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              quality={100} // Set image quality to 100%
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={EthnicDay2025_2}
              alt="Ethnic Day 2025: eleven team members in kurtas and traditional wear posing under a canopy of colorful kites"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Independence Day 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={IndependenceDay2025_1}
              alt="Independence Day 2025: five team members holding small Indian flags beside an &quot;INDIA&quot; display with a tricolor wheel"
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              quality={100} // Set image quality to 100%
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={IndependenceDay2025_2}
              alt="Independence Day 2025: three colleagues with arms crossed in the office, Indian flags and tricolor balloons behind"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1'>
            <Image
              src={IndependenceDay2025_3}
              alt="Independence Day 2025: about 14 team members gathered around an &quot;INDIA&quot; display with flags and tricolor balloons"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Escape Rooms</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={Escape1}
              alt="Escape Rooms: six team members holding fun signs like &quot;Mystery Solved&quot; and &quot;I Am Sherlocked&quot; under a &quot;Mystery Rooms&quot; sign"
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              quality={100} // Set image quality to 100%
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={Escape2}
              alt="Escape Rooms: venue lounge with a red neon &quot;Can You Escape?&quot; sign, Egyptian-style wall art and blue seating"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
            {/* <Image
              src={Escape3}
              alt="Escape Rooms: six team members standing in front of an Egyptian-themed mural under a glowing &quot;Mystery Rooms&quot; sign"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src={Escape4}
              alt="Escape Rooms: six team members in a smiling group selfie beneath the glowing &quot;Mystery Rooms&quot; neon sign"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className="w-full object-top" // Original object-top preserved
            /> */}
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Interactive Team Mission</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={TeamMission1}
              alt="Interactive Team Mission: a colleague carefully pulling a block from a wooden tower game while another watches"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMission2}
              alt="Interactive Team Mission: nine team members posing around a wooden block tower on a meeting room table"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMission3}
              alt="Interactive Team Mission: a selfie of ten team members around a meeting table with laptops and a wooden block tower"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMission4}
              alt="Interactive Team Mission: six colleagues laughing as one carefully removes a block from a wooden tower game"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Birthday Celebration 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={BirthdayCelebration2025_1}
              alt="Birthday celebration: two colleagues cut a yellow mango cake in a meeting room as three team members clap and cheer"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_2}
              alt="Birthday celebration: about 13 team members pose in the office cafeteria behind a table with a chocolate cake"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_3}
              alt="Birthday celebration: a team member takes a selfie with about 11 colleagues in a meeting room with blue panelled walls"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_4}
              alt="Birthday celebration: about 11 team members pose together in the office pantry, one holding a small chocolate cake"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_5}
              alt="Birthday celebration: a team member takes a selfie with about eight colleagues around a chocolate cake in the cafeteria"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_6}
              alt="Birthday celebration: about 10 team members smile together as one cuts a chocolate cake on the table in front"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Bitpastel turns 8</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={EightYears1}
              alt="Bitpastel turns 8: about 25 team members pose together on the granite steps outside a building entrance"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={EightYears2}
              alt="Bitpastel turns 8: five colleagues seated at a restaurant table decorated with blue and white balloons"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={EightYears3}
              alt="Bitpastel turns 8: a team member takes a group selfie with about 20 colleagues in front of an &quot;India's Favourite Grill&quot; wall"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1'>
            <Image
              src={EightYears4}
              alt="Bitpastel turns 8: about 22 team members pose for a group photo against a plain white wall, some kneeling in front"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>
        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Ice Breaker - Coffee Evening</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={IceBracker1}
              alt="Ice breaker coffee evening: six team members relax around a round café table with tall glasses of cold coffee"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={IceBracker2}
              alt="Ice breaker coffee evening: a team member takes a selfie with five colleagues seated around a café table"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Christmas Celebration at Office 2024</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={Christmas1}
              alt="Christmas at office: five team members stand beside a decorated tree, a red cottage display and a reindeer sleigh"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={Christmas2}
              alt="Christmas at office: six team members pose by the office Christmas tree, a &quot;Merry Christmas&quot; cottage and Santa's sleigh"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Ethnic Day Celebration at Office 2024</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={EthnicDay2024_1}
              alt="Ethnic Day: eight women team members in colourful kurtas pose in a row in the &quot;RDB Cinemas&quot; lobby"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={EthnicDay2024_2}
              alt="Ethnic Day: eight women team members in red and festive outfits take a smiling selfie in a cinema corridor lined with posters"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Birthday Day Celebration at Office</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={BirthdayDay1}
              alt="Birthday at office: close-up of a black forest cake topped with cherries, cream and a &quot;Happy Birthday&quot; topper"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            {/* <Image
              src={BirthdayDay2}
              alt="Birthday at office: three colleagues on a sofa cut a black forest cake together in the office lounge"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src={BirthdayDay3}
              alt="Birthday at office: a team member takes a selfie with about nine colleagues around a chocolate cake in the cafeteria"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            /> */}
            <Image
              src={BirthdayDay4}
              alt="Birthday at office: two colleagues hold up a red velvet cake together at their workspace"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>
            Work Anniversary Celebration at Office 2024
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={WorkAnniversary1}
              alt="Work anniversary: five colleagues cut a butterscotch cake together at a wooden table in the office lounge"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={WorkAnniversary2}
              alt="Work anniversary: a team member takes a selfie with six colleagues at a long dining table with plates and food trays"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={WorkAnniversary3}
              alt="Work anniversary: five colleagues smile while sharing plates of noodles and drinks in the office cafeteria"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={WorkAnniversary4}
              alt="Work anniversary: a team member takes a selfie with five colleagues in the blue-walled office lounge, some holding drink cans"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Team Meetup #Movie #Coffee</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
            <Image
              src={TeamMeetup1}
              alt="Team meetup, movie: three colleagues pose together in a cinema lobby with a movie poster in the background"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMeetup2}
              alt="Team meetup, coffee: six colleagues share pizza and iced coffees around a table at a café"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Bitpastel Townhall 2024</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_1}
              alt="Townhall 2024: collage of five Instagram-style frames captioned &quot;Glimpses from the Bitpastel Town Hall&quot; of colleagues posing"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_2}
              alt="Townhall 2024: a team member cuts a two-tier &quot;bitpastel&quot; cake topped with a gold 7 as colleagues around the table smile and applaud"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_3}
              alt="Townhall 2024: a team member in a grey suit smiles while holding a microphone in front of the &quot;Bitpastel Town Hall 7 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_4}
              alt="Townhall 2024: about 35 team members pose on stage in front of the &quot;Bitpastel Town Hall 7 Years&quot; backdrop, many making victory signs"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_5}
              alt="Townhall 2024: a team member in a navy blazer holds a microphone and playfully checks his watch in front of the event backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_6}
              alt="Townhall 2024: a team member in a dark shirt with a name tag speaks into a microphone in front of the &quot;Bitpastel Town Hall&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_7}
              alt="Townhall 2024: about 25 team members pose on stage, several in front holding award trophies including two round &quot;Legacy Award&quot; plaques"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_8}
              alt="Townhall 2024: a team member in a white blazer speaks into a microphone while holding a phone, in front of the &quot;7 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_9}
              alt="Townhall 2024: two colleagues in suits pose with their round 2024 &quot;Legacy Award&quot; plaques in front of the &quot;Bitpastel Town Hall&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_10}
              alt="Townhall 2024: six colleagues in suits and blazers gather around a tall round table in the hotel lobby, one holding a coffee cup"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_11}
              alt="Townhall 2024: two colleagues in navy blazers stand side by side in a hotel lounge with a brick wall and a Bitpastel banner behind them"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_12}
              alt="Townhall 2024: a team member holding a microphone and a stack of papers smiles while hosting on stage in front of the event backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_13}
              alt="Townhall 2024: Manager Sagnik in a blue blazer smiles while reaching into a bowl of chocolates as colleagues sit at round tables behind him"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_14}
              alt="Townhall 2024: a team member laughs while presenting at a podium with a laptop, microphone in hand, beside a &quot;Bitpastel Town Hall&quot; banner"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_15}
              alt="Townhall 2024: eight award winners stand in a row on a red-carpeted stage, each holding a trophy, before the &quot;Bitpastel Town Hall&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Bitpastel Townhall 2023</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_1}
              alt="Townhall 2023: a team member cuts a two-tier &quot;bitpastel&quot; cake topped with a gold &quot;6&quot; as colleagues smile and applaud"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_2}
              alt="Townhall 2023: CEO Ayan in a navy suit addresses the team with a microphone before a &quot;bitpastel 6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_3}
              alt="Townhall 2023: Manager Ibrahim in a dark blazer gestures while talking into a microphone in front of the &quot;6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_4}
              alt="Townhall 2023: about 30 team members pose together flashing peace signs in front of the &quot;bitpastel 6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_5}
              alt="Townhall 2023: a smiling team member in a striped shirt speaks into a microphone in front of the &quot;6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_6}
              alt="Townhall 2023: a team member in a maroon suit smiles while speaking into a microphone at the anniversary event"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_7}
              alt="Townhall 2023: four colleagues in blazers chat around a high table, one holding a coffee mug, in a bright hotel lounge"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_8}
              alt="Townhall 2023: three team members hold &quot;Ruby Award&quot; trophies in front of the &quot;bitpastel 6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_9}
              alt="Townhall 2023: a smiling event host holds a microphone and pink cue sheets beside the &quot;6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_10}
              alt="Townhall 2023: a laughing speaker in a light shirt holds a microphone and rolled papers before the &quot;6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_11}
              alt="Townhall 2023: four colleagues pose before the &quot;6 Years&quot; backdrop, three of them holding &quot;Diamond Award&quot; and &quot;Ruby Award&quot; trophies"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_12}
              alt="Townhall 2023: eight award winners stand in a row on a red carpet, each holding a trophy, before the &quot;bitpastel 6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_13}
              alt="Townhall 2023: three colleagues, two in blazers and one in a green blouse, pose together before the &quot;bitpastel 6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_14}
              alt="Townhall 2023: a team member holding a microphone hands a chocolate bar to a smiling seated colleague during a table activity"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_15}
              alt="Townhall 2023: a standing team member with a microphone hands a treat to a seated colleague while another colleague laughs"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_16}
              alt="Townhall 2023: two colleagues, one in a checked shirt and one in a maroon suit, pose before the &quot;6 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Culture at Bitpastel</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={Culture1}
              alt="Culture at Bitpastel: about 25 team members in casual winter wear pose together in a marble-floored office lobby beside a glass-walled cafe"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={Culture2}
              alt="Culture at Bitpastel: six colleagues gather around three laptops on a wooden table, one seated and the others leaning in to look at a screen"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Year-end Celebration 2022</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={YearEnd2022_1}
              alt="Year-end 2022: a row of team members wearing 3D glasses sit together in red seats at a cinema, smiling at the camera"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={YearEnd2022_2}
              alt="Year-end 2022: about 13 team members huddle for a group photo in front of a colourful red painted mural"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 gap-2 mb-2'>
            <Image
              src={YearEnd2022_3}
              alt="Year-end 2022: about 20 team members in casual winter clothes pose for a group photo in a shopping mall atrium"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={YearEnd2022_4}
              alt="Year-end 2022: eight team members stand by a decorated Christmas tree and gingerbread house under hanging paper stars at the office"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />

            <Image
              src={YearEnd2022_5}
              alt="Year-end 2022: a team member takes a smiling group selfie with eight colleagues beside the office Christmas tree"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px]  font-[700] pb-4'>Sunday Brunch at Westin</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={Westin1}
              alt="Sunday Brunch at Westin: about 25 team members pose together inside the hotel restaurant with the buffet counters behind them"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={Westin2}
              alt="Sunday Brunch at Westin: about 25 team members stand in a row outdoors in front of a fountain surrounded by palm trees"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>
        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Bitpastel Townhall 2022</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={TownHall2022_1}
              alt="Townhall 2022: two team members smile holding &quot;Ruby Award&quot; and &quot;Sapphire Award&quot; trophies before the &quot;bitpastel 5 Years&quot; backdrop"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2022_2}
              alt="Townhall 2022: a speaker in a dark suit and red tie talks into a microphone in front of beige curtains"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2022_3}
              alt="Townhall 2022: team members seated at a round table with water bottles applaud during the presentation"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2022_4}
              alt="Townhall 2022: about 15 award winners hold trophies and a framed certificate on stage beside a &quot;bitpastel Town Hall 2022&quot; logo"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] text-[#123B42] font-[700] pb-4'>Bitpastel Townhall 2021</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={TownHall2021_1}
              alt="Townhall 2021: ten team members smile together beside a restaurant buffet counter with warming dishes and a pizza menu card"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2021_2}
              alt="Townhall 2021: about 30 team members, many wearing matching black Bitpastel caps, pose outside a glass-fronted building in front of a hedge"
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollageNew;
