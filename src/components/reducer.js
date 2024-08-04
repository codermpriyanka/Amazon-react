export const initialState = {
  authInfo: {},
  cartList: [],
  productList: [
    {
      title:
        "Redmi Note 13 Pro (Coral Purple, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge.",
      price: "12999",
      rating: "4",
      imageURL:
        "https://m.media-amazon.com/images/I/71aiqeP-APL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title:
        "Redmi Note 13 Pro+ (Fusion Black, 8GB RAM, 256GB Storage) | World's first Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera | 1.5K Curved AMOLED | 120W HyperCharge",
      price: "11999",
      rating: "4",
      imageURL:
        "https://m.media-amazon.com/images/I/71nrf4zgq5L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title:
        "Apple iPhone 13 (128GB) - StarlightConsequat eiusmod cillum tempor cillum excepteur velit laboris veniam.",
      price: "69999",
      rating: "4",
      imageURL:
        "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title:
        "VW 80 cm (32 inches) Frameless Series HD Ready Android Smart LED TV VW32S (Black).",
      price: "7999",
      rating: "4",
      imageURL:
        "https://m.media-amazon.com/images/I/717oSOB4hCL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title: "Apple iPhone 15 Pro Max (256 GB) - Blue Titanium.",
      price: "150000",
      rating: "4",
      imageURL: "https://m.media-amazon.com/images/I/81fxjeu8fdL._SX679_.jpg",
    },
    {
      title:
        "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black), in Ear",
      price: "1299",
      rating: "4",
      imageURL:
        "https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title:
        "Amazon Echo Dot 4th Gen with clock | Smart speaker with powerful bass, LED display and Alexa (Blue).",
      price: "5999",
      rating: "4",
      imageURL:
        "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title:
        "Amazon Basics B10 10W RMS Bluetooth Speaker with 2000 mAh Battery | Up to 8 hrs of Playback | RGB | Bluetooth 5.3, AUX in, USB & Micro SD Card Connectivity | Type-C Charging (Black).",
      price: "999",
      rating: "4",
      imageURL:
        "https://m.media-amazon.com/images/I/718B62xadcL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      title:
        "FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls.",
      price: "999",
      rating: "4",
      imageURL: "https://m.media-amazon.com/images/I/61egMfcDWlL._SX679_.jpg",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };
    case "SIGN_IN":
      return {
        ...state,
        authInfo: action.payload,
      };
    default:
      return state;
  }
};
