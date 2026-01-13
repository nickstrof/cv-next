import React, { FC } from "react";
import './SectionWrapper.css'
import { DynamicLink } from "@/components";
interface SectionWrapperProps {
  className?: string;
  title?: string;
  subtitle?: string;
  link?: string;
  textLink?: string;
  children: React.ReactNode;
}
const SectionWrapper: FC<SectionWrapperProps> = ({
  className,
  title,
  subtitle,
  link,
  textLink,
  children,
}) => {
  return (
    <section className={`section-wrapper ${className || ''}`}>
        <div className="section-wrapper-header">
          {(title || subtitle) && 
            <div className="section-wrapper-header-content">
              <div className="section-wrapper-title-group">
                {title && 
                  <h2 className="section-wrapper-title">{title}</h2>
                }
                {subtitle &&
                  <p className="section-wrapper-subtitle">{subtitle}</p>
                }
              </div>

              {link && (
                <DynamicLink className="read-more" href={link}>
                  <span className="read-more-text">{textLink}</span>
                  <div className="read-more-icon">
                    <span className="wrapper-svg">
                      <svg className="fill-custom-foreground" width="32" height="32"><use xlinkHref="#icon-c-arrow-r" /></svg>                    
                    </span>
                  </div>
                </DynamicLink>
              )}
            </div>
          }
        </div>
        {children}
    </section>
  );
};
export default SectionWrapper;