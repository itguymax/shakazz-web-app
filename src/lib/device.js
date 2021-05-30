export const size = {
  smMobile: '540px',
  iphoneX: '375px',
  sPhone: '320px',
  mPhone: '360px',
  bPhone: '414px',
  surfaceDuo: '540',
  tablet: '768px',
  laptop: '1024px',
};

export const desktopContainerWidth = '900px';

export const device = {
  smMobile: `(min-width: ${size.smMobile})`,
  smMobileMax: `(max-width: ${size.smMobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  iphoneX: `(max-width: ${size.iphoneX})`,
  sPhone: `(max-width: ${size.mPhone})`,
  mPhone: `(max-width: ${size.sPhone})`,
  bPhone: `(max-width: ${size.bPhone})`,
  surfaceDuo: `(max-width: ${size.surfaceDuo})`,
  sTablet: `(max-width: ${size.tablet})`,
  bTablet: `(max-width: ${size.laptop})`,
};
