import React, { useState } from 'react';

interface CollegeLogoProps {
  className?: string;
  variant?: 'crest' | 'header' | 'both';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({
  className = '',
  variant = 'both',
  size = 'md',
}) => {
  const [crestError, setCrestError] = useState(false);
  const [headerError, setHeaderError] = useState(false);

  const crestSizes = {
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };

  const headerHeights = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-18',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Nair Service Society Emblem / Crest (User uploaded crest) */}
      {(variant === 'crest' || variant === 'both') && (
        <div className={`relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden p-1 bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 shadow-md ${crestSizes[size]}`}>
          {!crestError ? (
            <img
              src="nss-crest.jpg"
              alt="Nair Service Society Official Crest"
              className="w-full h-full object-contain filter drop-shadow brightness-110"
              onError={() => setCrestError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <img
              src="favicon.svg"
              alt="NSS Crest"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          )}
        </div>
      )}

      {/* College Header Banner or Typography */}
      {(variant === 'header' || variant === 'both') && (
        <div className="flex flex-col justify-center">
          {!headerError ? (
            <div className="flex flex-col">
              <img
                src="college-logo.png"
                alt="N.S.S. College Ottapalam"
                className={`${headerHeights[size]} w-auto object-contain hidden sm:block`}
                onError={() => setHeaderError(true)}
                referrerPolicy="no-referrer"
              />
              <div className="sm:hidden flex flex-col">
                <span className="font-serif-college font-bold tracking-wide text-amber-400 text-sm leading-tight">
                  N.S.S. COLLEGE
                </span>
                <span className="text-[10px] tracking-widest text-slate-300 font-semibold uppercase">
                  OTTAPALAM
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="font-serif-college font-bold tracking-wide text-amber-400 text-base sm:text-lg leading-tight">
                N.S.S. COLLEGE OTTAPALAM
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Affiliated to University of Calicut | NAAC 'A' Grade
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CollegeLogo;
