"use client";

import { useState, useEffect } from "react";

import JobCardList from "./JobCard";
import { motion } from "framer-motion"

const JobCardList = ({ data, handleTagClick }) => {
  return (
    <div className='prompt_layout mt-12'>
      {data.map((post) => (
        // eslint-disable-next-line react/jsx-no-undef
        <JobCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const JobFeed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    
      <section className='feed'>
        <form className='flex-center relative w-full'>
          <input
            type='text'
            placeholder='Search for a tag or a username'
            value={searchText}
            onChange={handleSearchChange}
            required
            className='search_input peer '
          />
        </form>

        {/* All Prompts */}
        {searchText ? (
          <JobCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <JobCardList data={allPosts} handleTagClick={handleTagClick} />
        )}
      </section>
   
  );
};

export default JobFeed;