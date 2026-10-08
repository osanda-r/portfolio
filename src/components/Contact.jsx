// src/components/Contact.jsx
import { Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const EMAIL = "osandarashmitha8@gmail.com";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/osandarashmitha/",
    Icon: FaLinkedinIn,
  },
  { label: "GitHub", href: "https://github.com/osanda-r", Icon: FaGithub },
  {
    label: "Facebook",
    href: "https://www.facebook.com/osanda.abeysinghe.5/",
    Icon: FaFacebookF,
  },
  { label: "X (Twitter)", href: "https://x.com/OsandaRashmitha", Icon: FaXTwitter },
];

function SocialLink({ label, href, Icon }) {
  return (
    <Magnetic strength={0.35}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="glass group grid h-14 w-14 place-items-center rounded-2xl text-fg-2 transition-colors duration-300 hover:text-violet-200"
      >
        <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
      </a>
    </Magnetic>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-28">
      <Reveal className="cta-panel relative mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-white/[0.09] px-6 py-16 text-center md:px-16 md:py-24">
        <div aria-hidden="true" className="cta-orb cta-orb-a" />
        <div aria-hidden="true" className="cta-orb cta-orb-b" />

        <div className="relative">
          <SectionHeader
            align="center"
            index="04"
            eyebrow="Contact"
            title={
              <>
                Get in <span className="serif-accent">Touch</span>
              </>
            }
            lead="Feel free to reach out via email or connect with me on social media — I usually reply within a couple of days."
          />

          <div className="mt-10 flex flex-col items-center gap-5">
            <Magnetic strength={0.22}>
              <a href={`mailto:${EMAIL}`} className="btn-primary">
                Send me an email
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </Magnetic>
            <p className="font-mono text-sm text-fg-3">{EMAIL}</p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-4">
            {socials.map((social) => (
              <li key={social.label}>
                <SocialLink {...social} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
