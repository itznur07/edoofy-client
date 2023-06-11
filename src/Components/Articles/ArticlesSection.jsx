import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ArticleCard from "./ArticlesCard";

function ArticleSection() {
  const articles = [
    {
      cover: "https://source.unsplash.com/featured/?courses[2]",
      title: "12 Ways to Use Video for Learning",
      date: "25 Jun",
      snippet: "What is the main thing that catches the…",
      views: "723",
      comments: "0",
    },
    {
      cover: "https://source.unsplash.com/featured/?courses[1]",
      title: "How to Maintain Student Engagement",
      date: "25 Jun",
      snippet: "Brand starts with its logo, that’s what many…",
      views: "701",
      comments: "0",
    },
    {
      cover: "https://source.unsplash.com/featured/?courses[0]",
      title: "8 Distance Learning Tips for Parents",
      date: "25 Jun",
      snippet: "Female artists faced many problems in previous epochs….",
      views: "1K",
      comments: "0",
    },
  ];
  return (
    <div className=' py-12 px-4'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-xl text-center font-bold'>RECENT POSTS</h2>
          <h2>
            <SectionTitle title='Latest Articles'></SectionTitle>
          </h2>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-10'>
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
        <div className='flex justify-center mt-10'>
          <button className='bg-[#49BBBD] hover:bg-[#014445] text-white font-bold py-2 px-4 rounded-lg'>
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleSection;
