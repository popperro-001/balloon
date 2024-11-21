import { Calculator } from "@/components/calculator/calculator";
import { Hero } from "@/components/calculator/hero";
import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";

const CalculatorPage = async () => {
  const products = await client.fetch(PRODUCTS_QUERY);

  if (!products) return null;

  return (
    <div className="min-h-[75vh] flex flex-col">
      <Hero />

      <Calculator data={products} />
    </div>
  );
};

export default CalculatorPage;
