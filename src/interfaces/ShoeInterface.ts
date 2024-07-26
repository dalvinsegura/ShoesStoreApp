interface Shoe {
    id: number;
    brand: string;
    name: string;
    original_price: number;
    discounted_price: number;
    description: string;
    image_url: string;
    size: number[];
    sold: number;
    rating: number;
    in_stock: number;
  }

export default Shoe;