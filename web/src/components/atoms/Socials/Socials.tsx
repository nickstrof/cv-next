'use client';
import { SocialsProps } from "./Social.types";
import Link from "next/link"
const Socials = ({ socialsData }: SocialsProps) => {
  return (
    <div className="socials-list flex gap-4">
        {socialsData.map((social, index) => (
            social.isActive && (
                <Link
                    key={index}
                    href={social.url}
                    target={social.openInNewTab ? '_blank' : '_self'}
                    rel={social.openInNewTab ? 'noopener noreferrer' : ''}
                    className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
                    aria-label={`Visit our ${social.platform} page`}
                >
                    <svg className="fill-current" width="30" height="30">
                        <use xlinkHref={`#icon-c-${social.icon}`} />
                    </svg>
                    <span className="sr-only">{social.platform}</span>
                </Link>
            )
        ))}
    </div>
  )
}
export default Socials