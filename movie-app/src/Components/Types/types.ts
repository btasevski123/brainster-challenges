export type Product = {
    id: number;
    name: string;
    cover: string;
    bio: string;
    albums: {
      albumId: any;
      title: string;
      year: number;
      cover: string;
      price: number;
    } | any;
  };
  