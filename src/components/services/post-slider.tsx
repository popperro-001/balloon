"use client";

import { useEffect, useState } from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
}

export const PostSlider = ({ id }: Props) => {
  const [post, setPost] = useState<{
    images: SanityImageSource[];
    _createdAt: string;
    name: string;
  } | null>(null);
  const [slide, setSlide] = useState(0);

  const fetchData = async () => {
    const data = await client.fetch(POST_BY_ID_QUERY, { id });
    if (data[0]) {
      setPost(data[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!post) return null;

  const onClickNext = () => {
    if (slide !== post.images.length - 1) {
      setSlide((prev) => prev + 1);
    }
  };

  const onClickPrev = () => {
    if (slide !== 0) {
      setSlide((prev) => prev - 1);
    }
  };

  const onIndicatorClick = (index: number) => {
    if (index !== slide) {
      setSlide(index);
    }
  };

  return (
    <div className="w-full h-full relative ">
      <Button
        variant="ghost"
        className="absolute bg-gray-200 opacity-75 z-10 top-[50%] translate-y-[-50%] left-2 rounded-xl"
        disabled={slide === 0}
        onClick={onClickPrev}
      >
        <ArrowLeftIcon className="text-black size-6" />
      </Button>

      <div className="relative w-full h-full">
        {post.images.map((image: SanityImageSource, index: number) => {
          const imageUrl = urlFor(image)?.url();

          return (
            <Image
              key={imageUrl}
              src={imageUrl}
              fill
              className={cn(
                "absolute object-contain w-full h-full transition-opacity duration-700 ease-in-out transform",
                index === slide ? "opacity-100  z-1" : "opacity-0  z-0"
              )}
              alt="image"
            />
          );
        })}
      </div>

      <Button
        variant="ghost"
        className="absolute bg-gray-200 opacity-75 z-10 top-[50%] translate-y-[-50%] right-2 rounded-xl"
        disabled={slide === post.images.length - 1}
        onClick={onClickNext}
      >
        <ArrowRightIcon className="text-black size-6" />
      </Button>

      <span className="flex absolute bottom-2 left-[50%] translate-x-[-50%] space-x-1">
        {post.images.map((_, index) => {
          return (
            <Button
              key={index}
              variant="ghost"
              className="hover:bg-transparent"
              onClick={() => onIndicatorClick(index)}
            >
              <div
                className={cn(
                  "bg-gray-200 w-2 h-2 rounded-full border-none outline-none hover:bg-gray-100",
                  index === slide && "w-3 h-3"
                )}
              ></div>
            </Button>
          );
        })}
      </span>
    </div>
  );
};
