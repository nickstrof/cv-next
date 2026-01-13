export type SocialItem = {
  platform: string;
  url: string;
  icon: string;
  isActive: boolean;
  openInNewTab: boolean;
  order: number;
};

export type SocialsProps = {
  socialsData: SocialItem[];
};