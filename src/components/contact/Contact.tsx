"use client";

import { motion } from "framer-motion";

import { ContactLink } from "@/components/contact/ContactLink";
import {
  CONTACT_DESCRIPTION,
  CONTACT_HEADING,
  CONTACT_SECTION_ID
} from "@/components/contact/contact.constants";
import { contactLinks } from "@/components/contact/contact.data";
import type { ContactProps } from "@/components/contact/contact.types";
import { Reveal, revealChildVariants } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

import styles from "./Contact.module.css";

export function Contact({ className }: Readonly<ContactProps>) {
  return (
    <Reveal
      amount={0.2}
      aria-labelledby="contact-heading"
      as="section"
      className={cn(styles.contact, className)}
      duration="M"
      ease="primary"
      id={CONTACT_SECTION_ID}
      translate="medium"
    >
      <div className={styles.inner}>
        <h2 className={styles.heading} id="contact-heading">
          {CONTACT_HEADING}
        </h2>

        <p className={styles.description}>
          {CONTACT_DESCRIPTION}
        </p>

        <Reveal
          amount={0.2}
          as="div"
          className={styles.links}
          duration="S"
          ease="primary"
          staggerChildren="D1"
          translate="small"
        >
          {contactLinks.map((link) => (
            <motion.div
              className={styles.linkMotion}
              key={link.kind}
              variants={revealChildVariants}
            >
              <ContactLink link={link} />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}
