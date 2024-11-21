import { Hero } from "@/components/services/hero";
import { ServiceGallery } from "@/components/services/service-gallery";
import { client } from "@/sanity/lib/client";
import { POSTS_BY_SERVICE_QUERY, SERVICE_BY_ID_QUERY } from "@/sanity/lib/queries";
import React from "react";

interface Props {
  params: { id: string };
}

const ServiceIdPage = async ({ params }: Props) => {
  const [service, posts] = await Promise.all([
    client.fetch(SERVICE_BY_ID_QUERY, { id: params.id }),
    client.fetch(POSTS_BY_SERVICE_QUERY, {serviceId: params.id})
  ])

  if (!service) return null;

  return (
    <>
      <Hero service={service[0]} />

      <ServiceGallery posts={posts} />
    </>
  );
};

export default ServiceIdPage;
