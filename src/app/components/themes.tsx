'use client';

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(true);
  const [isSystem, setIsSystem] = useState(true);

  function setDark() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
    setIsDark(true)
    setIsSystem(false)
 
  }

  function setLight() {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDark(false)
    setIsSystem(false)

  }

  function setSystem() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "systemDark");
        setIsSystem(true)
        setIsDark(true)

    }
    else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "systemLight");
        setIsSystem(true)
        setIsDark(false)

    }
  }

  useEffect(() => {

    if (localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        setIsDark(true)
        setIsSystem(false)
    } 
    if (localStorage.getItem("theme") == "light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        setIsDark(false)
        setIsSystem(false)
    } 
    if (localStorage.getItem("theme") == "systemLight") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        setIsDark(false)
        setIsSystem(true)
    } 
    if (localStorage.getItem("theme") == "systemDark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        setIsDark(true)
        setIsSystem(true)
    } 
  },
  []);

  return (

    <div className="ml-32 bg-gray-100/50 dark:bg-white/10 backdrop-blur px-1 py-1 rounded-full flex flex-row space-x-0 md:mt-0">
    <button 
        onClick={setLight}
        className={clsx(
            'relative px-6 py-2',
            {

              'text-white': isDark || !isSystem,
            }
          )}
        >Light
        { isDark === false && isSystem === false ? (
        <motion.div
                          className="absolute inset-0 bg-black dark:bg-white rounded-full z-[-1]"
                          layoutId="theme"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />) : null}    
    </button>
    <button 
        className={clsx(
            'relative px-6 py-2',
            {
              'dark:text-white': isDark && isSystem,
            }
          )} 
        onClick={setDark}>Dark
        { isDark === true && isSystem === false ? (
        <motion.div
                          className="absolute inset-0 bg-white dark:bg-white rounded-full z-[-1]"
                          layoutId="theme"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />) : null} 
    </button>
    <button 
        className={clsx(
            'relative px-6 py-2',
            {
                'dark:text-white': isDark && !isSystem,
            }
          )}  
        onClick={setSystem}>System
        { isSystem === true ? (
        <motion.div
                          className="absolute inset-0 bg-white dark:bg-white rounded-full z-[-1]"
                          layoutId="theme"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />) : null}
    </button>
  </div>
  )
};