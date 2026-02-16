import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import Pdf from "../../static/social/SAIRAM-BUS-ROUTE.pdf";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    sectionId: 'home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Clubs',
    path: '/clubs',
    sectionId: 'clubs',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Gallery',
    path: '/gallery',
    sectionId: 'gallery',
    icon: <AiIcons.AiFillPicture />
  },
  {
    title: 'Event Pass',
    path: '/event-pass',
    sectionId: 'event-pass',
    icon: <FaIcons.FaTicketAlt />,
  },
  {
    title: "Accommodation",
    path: "/services",
    sectionId: "services",
    icon: <FaIcons.FaConciergeBell />,
  },
  {
    title: 'Reach Us',
    path: '/pdf',
    sectionId: 'reach-us',
    icon: <FaIcons.FaRoute />
  },
  {
    title: 'FAQ',
    path: '/faq',
    sectionId: 'faq',
    icon: <IoIcons.IoMdHelpCircleOutline />
  },
  {
    title: 'Contact Us',
    path: '/contact',
    sectionId: 'contact', // Ensure this matches the ID in your ContactCard component
    icon: <FaIcons.FaPhoneAlt />
  }
];