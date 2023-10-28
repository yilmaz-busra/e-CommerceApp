import { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // parametre olarak eklemek istenilen veriyi iceren data parametresini istenir,findBasketItem ile beraber eklenmek istenen itemin sepette olup olmadığını kontrol ederek işlemler gerçekleştirebiliyoruz.
  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      setItems((prev) => [...prev, data]);
    } else {
      const filtered = items.filter((item) => item._id !== findBasketItem._id);
      setItems(filtered);
    }
  };
  const values = {
    items,
    setItems,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
