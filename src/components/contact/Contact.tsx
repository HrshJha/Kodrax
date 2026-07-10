"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ContactLink } from "@/components/contact/ContactLink";
import {
  CONTACT_DESCRIPTION,
  CONTACT_HEADING,
  CONTACT_MOTION,
  CONTACT_SECTION_ID
} from "@/components/contact/contact.constants";
import { contactLinks } from "@/components/contact/contact.data";
import type { ContactProps } from "@/components/contact/contact.types";
import { cn } from "@/lib/utils";

import styles from "./Contact.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: CONTACT_MOTION.translateY },
  visible: { opacity: 1, y: 0 }
} as const;

const linkList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: CONTACT_MOTION.delayStep
    }
  }
} as const;

export function Contact({ className }: Readonly<ContactProps>) {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? "visible" : "hidden";
  const transition = {
    duration: shouldReduceMotion ? 0 : CONTACT_MOTION.duration,
    ease: CONTACT_MOTION.easeOutCubic
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className={cn(styles.contact, className)}
      id={CONTACT_SECTION_ID}
    >
      <div className={styles.inner}>
        <motion.h2
          className={styles.heading}
          id="contact-heading"
          initial={initialState}
          transition={transition}
          variants={fadeUp}
          viewport={{ amount: 0.35, once: true }}
          whileInView="visible"
        >
          {CONTACT_HEADING}
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={initialState}
          transition={{
            ...transition,
            delay: shouldReduceMotion ? 0 : CONTACT_MOTION.delayStep
          }}
          variants={fadeUp}
          viewport={{ amount: 0.35, once: true }}
          whileInView="visible"
        >
          {CONTACT_DESCRIPTION}
        </motion.p>

        <motion.div
          className={styles.links}
          initial={initialState}
          variants={linkList}
          viewport={{ amount: 0.3, once: true }}
          whileInView="visible"
        >
          {contactLinks.map((link) => (
            <motion.div
              className={styles.linkMotion}
              key={link.kind}
              transition={transition}
              variants={fadeUp}
            >
              <ContactLink link={link} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
