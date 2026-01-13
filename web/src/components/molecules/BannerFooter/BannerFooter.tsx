'use client'
import React, { useEffect, useState, FC } from "react";
import { useTranslations } from "next-intl";

const mottos = ["motto1", "motto2", "motto3", "motto4", "motto5"];

const BannerFooter: FC = () => {
  const t = useTranslations("BannerFooter");
  const [selectedMotto, setSelectedMotto] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * mottos.length);
    setSelectedMotto(mottos[randomIndex]);

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * mottos.length);
      setSelectedMotto(mottos[randomIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-27 max-width-container-sm mx-auto text-center py-4 border-t relative overflow-hidden">
        
    <svg className="custom__big-svg absolute inset-0 h-full w-full rotate-45 -z-10 fill-primary/10" width="300" height="300"><use xlinkHref={`#icon-c-code`} /></svg>
        <div className="my-4 pad-x">
          {selectedMotto && (
            <>
              <p className="text-2xl md:text-4xl font-bold italic">
                <span className='inline-block mr-2'>
                <svg className="fill-primary" width="30" height="30"><use xlinkHref="#icon-c-quote" /></svg>
                </span>
                {t(`${selectedMotto}.text`)}
              </p>
              
              <div className="mt-4">{t(`${selectedMotto}.author`)}</div>
            </>
          )}
        </div>
    </div>
  );
};
export default BannerFooter;