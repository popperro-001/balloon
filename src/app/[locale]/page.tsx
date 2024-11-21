import { Hero } from "@/components/home/hero";
import { Map } from "@/components/home/map";
import { Services } from "@/components/home/services";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";

export default async function HomePage() {
  const services = await client.fetch(SERVICES_QUERY);

  return (
    <>
      <Hero />

      <Services services={services} />

      <Map />
    </>
  );
}
