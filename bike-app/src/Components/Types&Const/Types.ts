export type cardType = {
    name: string;
    price: number;
    gender: string;
    brand: string;
    image: number | string;
  }
  
  export interface Props {
    cardFilter: (e: string) => void;
    allItems: () => void;
    productLength: any;
    allItemLength: any;
  }
  
  export interface PropsCard {
    filteredCards: any
  }
  
  export interface propsListRender {
    list: any;
    subTitle: string;
  }