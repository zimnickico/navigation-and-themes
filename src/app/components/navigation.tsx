'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ToggleTheme from './themes'


const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/about': {
    name: 'About Me',
  },
  '/publications': {
    name: 'Publications',
  },
  '/contact': {
    name: 'Contact',
  },
};

export default function Navigation(){
    var pathname = usePathname();
    if (pathname.includes('/projects/')) {
        pathname = '/projects';
    }

    return(
        
        <aside className="flex font-serif">
        <div className="m-auto sticky mt-6">
        <nav
            className="font-sans flex flex-row items-start relative px-4 md:px-0 pb-0 fade"
            id="nav"
        >
        <div className="bg-gray-100/50 dark:bg-white/10 backdrop-blur py-1 px-1 text-gray-900 rounded-full flex flex-row space-x-0 mb-2 mt-2 md:mt-0">
            {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all flex flex-row align-middle',
                      {
                        'dark:text-white text-gray-900': !isActive,
                        'dark:text-gray-900 text-white': isActive,
                      }
                    )}
                  >
                    <span className="relative px-6 py-2">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-black dark:bg-white rounded-full z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
            )})}
            
        </div>
        <ToggleTheme></ToggleTheme>
        </nav>
        </div>
        </aside>
    )
}

