interface EventCard {
  image: {
    src: string;
    alt: string;
    title: string;
  };
  title: string;
  text: {
    content_it: string;
    content_en: string;
  };
  buttons: {
    label: string;
    href: string;
  }[];
  footerChips: {
    label: string;
    icon: string;
  }[];
}

export interface Events {
  events: {
    card: EventCard;
    photo: any;
  }[];
}
