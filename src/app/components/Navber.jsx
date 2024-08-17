'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../LanguageContext';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react"; // ตรวจสอบการนำเข้าที่ถูกต้อง
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-prompt">
      <li>
        <Link href="/" passHref>
          <Typography as="span" variant="small" color="blue-gray" className="p-1 font-medium cursor-pointer hover:text-blue-500 transition-colors font-prompt">
            {language === "th" ? "หน้าแรก" : "Home"}
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/about" passHref>
          <Typography as="span" variant="small" color="blue-gray" className="p-1 font-medium cursor-pointer hover:text-blue-500 transition-colors font-prompt">
            {language === "th" ? "เกี่ยวกับ" : "About"}
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/personnel" passHref>
          <Typography as="span" variant="small" color="blue-gray" className="p-1 font-medium cursor-pointer hover:text-blue-500 transition-colors font-prompt">
            {language === "th" ? "บุคลากร" : "Personnel"}
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/news" passHref>
          <Typography as="span" variant="small" color="blue-gray" className="p-1 font-medium cursor-pointer hover:text-blue-500 transition-colors font-prompt">
            {language === "th" ? "ข่าว" : "News"}
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/contact" passHref>
          <Typography as="span" variant="small" color="blue-gray" className="p-1 font-medium cursor-pointer hover:text-blue-500 transition-colors font-prompt">
            {language === "th" ? "ติดต่อ" : "Contact"}
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="http://localhost:1337/admin/auth/login" passHref target="_blank">
          <Typography as="span" variant="small" color="blue-gray" className="p-1 font-medium cursor-pointer hover:text-blue-500 transition-colors font-prompt">
            {language === "th" ? "เข้าสู่ระบบ" : "Login"}
          </Typography>
        </Link>
      </li>
      <button
        onClick={toggleLanguage}
        className="ml-4 px-4 py-2 rounded bg-blue-900 text-white hover:bg-gray-200 hover:text-blue-900 font-prompt"
      >
        {language === "th" ? "EN" : "TH"}
      </button>
    </ul>
  );
}

export function NavbarSimple() {
  const { language, toggleLanguage } = useLanguage();
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto w-full px-6 py-3 font-prompt">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="span" variant="h6" className="mr-4 cursor-pointer py-1.5">
          <Link href="/">SRU</Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
