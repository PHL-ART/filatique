export type Component = {
  children: React.ReactElement | React.ReactElement[] | string | null;
};
export type Service = {
  id: number;
  name: string;
};

export type ListenLink = {
  id: number;
  link: string;
  service: Service;
};

export type Release = {
  id: number;
  dateReleased: string;
  title: string;
  titleAlt: string | null;
  descriptionRu: string;
  descriptionEn: string;
  imageURL: string;
  type: 'ALBUM' | 'SINGLE' | 'MIX';
  listenLinks: ListenLink[];
};

export type Index = {
  id: number,
  year: number,
  publisher: string,
  type: string,
  link: string,
  title: string,
  description: string
}

export type Contact = {
  id: number;
  name: string;
  link: string;
};