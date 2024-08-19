"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface ContentProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function CarouselHome() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-[300px] md:w-full sm:w-full h-[300px] md:h-[200px] px-4">
      <h2 className="text-4xl md:text-3xl font-bold text-white-800 dark:text-neutral-200 text-center mb-8 md:mb-[-20px] mt-20 md:mt-0">
        Explore CollabTodo
      </h2>
      <div className="h-[calc(100vh-100px)]">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const Content: React.FC<ContentProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 md:p-6 rounded-lg flex flex-col items-center">
      <Image
        src={imageSrc}
        alt="Feature Image"
        height={100}
        width={100}
        className="w-full md:w-3/4 h-auto object-contain mb-4"
      />
      <div className="text-center">
        <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Organisations",
    title: "Discover Your Organisations",
    src: "/Organisation_1.jpg",
    content: (
      <Content
        title="Organisations Overview"
        description="Explore various organisations you can collaborate with. Find detailed information and opportunities to connect."
        imageSrc="/Organisation_2.jpg"
      />
    ),
  },
  {
    category: "MYTodo",
    title: "Enhance Your Productivity with MYTodo",
    src: "/Task_1.png",
    content: (
      <Content
        title="MYTodo Features"
        description="Manage your tasks effectively with MYTodo. Organize your to-do list, set reminders, and boost your productivity."
        imageSrc="/Task_2.jpg"
      />
    ),
  },
  {
    category: "Friends",
    title: "Connect with Friends",
    src: "/Friends.jpg",
    content: (
      <Content
        title="Friends Network"
        description="Stay connected with your friends. Share updates, chat, and collaborate on projects seamlessly."
        imageSrc="/Friends_2.png"
      />
    ),
  },
];
