import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const post = [
    {
      id: "1",
      title:
      "The Rise of Travel apps: Simplifying Iteneraries",
      description:
        "Travel apps like Google Maps, Skyscanner, and TripIt have revolutionized how we plan trips.From finding the cheapest flights to booking accomodations and navigating unfamiliar cities, these apps save time and enhance convenience. They allow travellers to customize their itineries and keep all teavel details in one place, making travel stress-free.",
      date: "2024-12-20",
      imageUrl: "../images/post1.png",
    },
    {
      id: "2",
      title:
        "Virtual Reality: Exploring Destinations Before You Travel",
      description:
        "Virtual Reality (VR) has changed how travelers choose their destinations. With platforms offering virtual tours, users can experience iconic landmarks, hotels, and attractions before booking. This immersive experience helps travelers make informed decisions while igniting excitement for their upcoming journeys..",
      date: "2024-12-20",
      imageUrl: "../images/post2.png",
    },
    {
      id: "3",
      title:
        "AI Chatbots: The Ultimate Travel Assitants",
      description:
        "AI-powered chatbots on websites and apps provide instant travel support. From answering FAQs to assisting with bookings, they are available 24/7. Travelers can resolve queries without human intervention, making the planning process seamless and efficient..",
      date: "2024-12-20",
      imageUrl: "../images/post3.png",
    },
    {
      id: "4",
      title:
        "Smart Luggage: Revolutionizing Packing and Travel",
      description:
        "Smart luggage equipped with GPS trackers, charging ports, and weight sensors is transforming travel. These innovations reduce the stress of lost baggage and provide convenience during transit. With features like remote locking, travelers can enjoy peace of mind while exploring..",
      date: "2024-12-20",
      imageUrl: "../images/post4.png",
    },
    {
      id: "5",
      title:
        "Social Media's Influence on Travel Decisions",
      description:
        "Platforms like Instagram and Pinterest inspire millions to explore new destinations. Travelers rely on user-generated content, reviews, and recommendations to discover hidden gems and trendy spots. Social media has also created a community of travel enthusiasts who share authentic experiences..",
      date: "2024-12-20",
      imageUrl: "../images/post5.png",
    },
    {
      id: "6",
      title:
        "Contactless Technology in Post-Pandemic Travel ",
      description:
        "Contactless check-ins, mobile boarding passes, and digital payment systems have become essential in ensuring safe travel. Airports, hotels, and public transport have adopted these technologies to minimize physical contact, offering travelers a safer and more hygienic experience..",
      date: "2024-12-20",
      imageUrl: "../images/post6.png",
    },
    {
      id: "7",
      title:
        "GPS Technology: Enhancing Navigation and Sefety",
      description:
        "GPS has made navigating unfamiliar territories effortless. Whether hiking through remote trails or driving in a foreign country, GPS ensures accurate directions and enhances safety. It’s a lifesaver for solo travelers venturing into new places..",
      date: "2024-12-20",
      imageUrl: "../images/post7.png",
    },
    {
      id: "8",
      title:
        "The Role of Blockchain in Travel Security",
      description:
        "Blockchain technology is improving travel security by safeguarding personal and payment data. It also enables secure transactions for bookings and ensures authenticity in digital passports and visas. As travel becomes more tech-driven, blockchain offers robust solutions to protect travelers' information..",
      date: "2024-12-20",
      imageUrl: "../images/post8.png",
    },
    {
      id: "9",
      title:
        "The Future of Travel with AI and Big Data",
      description:
        "AI and Big Data are shaping the future of travel by analyzing user preferences to provide personalized recommendations. Airlines, hotels, and tour operators use data-driven insights to offer tailored experiences. This ensures travelers get value for money while enjoying unique adventures..",

      date: "2024-12-20",
      imageUrl: "../images/post9.png",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Descovering New Destinations, One Journey at a Time
      </h1>

      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fadeIn" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
