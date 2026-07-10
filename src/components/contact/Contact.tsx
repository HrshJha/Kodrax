"use client";

import { motion } from "framer-motion";

import { ContactLink } from "@/components/contact/ContactLink";
import {
  CONTACT_CTA_HREF,
  CONTACT_CTA_LABEL,
  CONTACT_DESCRIPTION,
  CONTACT_HEADING,
  CONTACT_LABEL,
  CONTACT_SECTION_ID
} from "@/components/contact/contact.constants";
import { contactLinks } from "@/components/contact/contact.data";
import type { ContactProps } from "@/components/contact/contact.types";
import { usePrefersReducedMotion } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

import styles from "./Contact.module.css";

const CONTACT_EASE = [0.33, 1, 0.68, 1] as const;

const contactMotion = {
  hidden: ({ offset }: { delay: number; offset: number }) => ({
    opacity: 0,
    y: offset
  }),
  visible: ({ delay }: { delay: number; offset: number }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.42,
      ease: CONTACT_EASE
    },
    y: 0
  })
} as const;

export function Contact({ className }: Readonly<ContactProps>) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const offset = shouldReduceMotion ? 0 : 20;

  return (
    <motion.section
      aria-labelledby="contact-heading"
      className={cn(styles.contact, className)}
      id={CONTACT_SECTION_ID}
      initial="hidden"
      viewport={{ amount: 0.35, once: true }}
      whileInView="visible"
    >
      <div className={styles.inner}>
        <motion.p
          className={styles.label}
          custom={{ delay: 0, offset: shouldReduceMotion ? 0 : 10 }}
          variants={contactMotion}
        >
          {CONTACT_LABEL}
        </motion.p>

        <motion.h2
          className={styles.heading}
          custom={{ delay: 0, offset }}
          id="contact-heading"
          variants={contactMotion}
        >
          {CONTACT_HEADING}
        </motion.h2>

        <motion.p
          className={styles.description}
          custom={{ delay: 0.12, offset }}
          variants={contactMotion}
        >
          {CONTACT_DESCRIPTION}
        </motion.p>

        <motion.a
          className={styles.primaryCta}
          custom={{ delay: 0.2, offset }}
          href={CONTACT_CTA_HREF}
          variants={contactMotion}
        >
          {CONTACT_CTA_LABEL}
        </motion.a>

        <motion.div
          className={styles.links}
          custom={{ delay: 0.28, offset }}
          variants={contactMotion}
        >
          {contactLinks.map((link) => (
            <div className={styles.linkMotion} key={link.kind}>
              <ContactLink link={link} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
