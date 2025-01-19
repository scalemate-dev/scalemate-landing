"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import styles from "./NavDropdown.module.scss";

const NavDropdown = ({ label, items = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.navDropdown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.label}>
        {label}
        <Image
          className={cn(styles.arrow, {
            [styles.rotated]: isHovered,
          })}
          src="/icons/chevron.svg"
          alt="Dropdown arrow"
          width={16}
          height={16}
        />
      </div>
      <div
        className={cn(styles.list, {
          [styles.visible]: isHovered,
        })}
      >
        {items.map((item) =>
          item.disabled ? (
            <span
              key={item.path}
              className={styles.item}
              data-disabled={item.disabled}
            >
              {item.label}
              {item.disabled && (
                <span className={styles.upcomingNote}>Coming soon</span>
              )}
            </span>
          ) : (
            <Link key={item.path} href={item.path} className={styles.item}>
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default NavDropdown;
