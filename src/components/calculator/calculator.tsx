"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { ProductInput } from "./product-input";
import { Button } from "../ui/button";

type Product = {
  _id: string;
  title: { ru: string; en: string; kor: string };
  price: number;
};

interface Props {
  data: Product[];
}

export const Calculator = ({ data }: Props) => {
  const [selectedProducts, setSelectedProducts] = useState<
    { id: string; quantity: number }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const locale = useLocale();
  const t = useTranslations("CalculatorPage");

  const handleCheckboxChange = (id: string) => {
    const productExist = selectedProducts.find((p) => p.id === id);

    if (productExist) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
    } else {
      setSelectedProducts([...selectedProducts, { id, quantity: 1 }]);
    }

    setTotalPrice(0);
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setSelectedProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p))
      );

      setTotalPrice(0);
    }
  };

  const handleCalculateTotal = () => {
    const total = selectedProducts.reduce((total, p) => {
      const dbProduct = data.find((e) => e._id === p.id);
      return total + (dbProduct?.price || 0) * p.quantity;
    }, 0);

    setTotalPrice(total);
  };

  const handleReset = () => {
    setSelectedProducts([]);
    setTotalPrice(0);
  };

  return (
    <section className="max-w-screen-2xl grid lg:grid-cols-2 grid-cols-1 gap-8 p-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{t("select")}</h2>

        {data.map((product) => (
          <ProductInput
            label={product.title[locale as "en" | "ru" | "kor"]}
            id={product._id}
            price={product.price}
            selectedProducts={selectedProducts}
            onCheckboxChange={handleCheckboxChange}
            onQuantityChange={handleQuantityChange}
            key={product._id}
          />
        ))}

        <div className="flex items-center gap-4 mt-6">
          <Button
            disabled={selectedProducts.length === 0 || totalPrice > 0}
            className="uppercase"
            onClick={handleCalculateTotal}
          >
            {t("calculate")}
          </Button>
          {selectedProducts.length > 0 && (
            <Button
              variant="outline"
              className="uppercase"
              onClick={handleReset}
            >
              {t("reset")}
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-2">
        <h2 className="text-3xl font-bold">{t("pricing")}</h2>

        {totalPrice > 0 ? (
          <p className="text-5xl font-bold text-primary">
            ₩{totalPrice.toLocaleString("en-US")}
          </p>
        ) : (
          <p className="text-5xl font-bold text-primary">?</p>
        )}
      </div>
    </section>
  );
};
