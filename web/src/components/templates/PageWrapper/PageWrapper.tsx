import React, { FC } from "react";
import './PageWrapper.css'
interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}
const PageWrapper: FC<PageWrapperProps> = ({
  className,
  title,
  subtitle,
  children,
}) => {
  return (
    <section className={`page-wrapper pad ${className || ''}`}>
      {(title || subtitle) && 
        <div className="page-wrapper-header">
            <div className="page-wrapper-header-content">
              <div className="page-wrapper-title-group">
                {title && 
                  <h2 className="page-wrapper-title">{title}</h2>
                }
                {subtitle &&
                  <p className="page-wrapper-subtitle">{subtitle}</p>
                }
              </div>
            </div>
        </div>
      }
        {children}
    </section>  
  );
};
export default PageWrapper;