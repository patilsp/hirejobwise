"use client";

import React, { useState, useEffect } from "react";
import JobCard from "./JobCard"; 
import { motion } from "framer-motion";

const JobFeed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/job");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
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

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    if (searchText === tagName) {
      // If the same tag is clicked again, clear the search
      setSearchText("");
      setSearchedResults([]);
    } else {
      setSearchText(tagName);
      const searchResult = filterPrompts(tagName);
      setSearchedResults(searchResult);
    }
  };

  return (
    <section className="feed">
      <form className="flex-center relative w-full">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <JobCard data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <JobCard data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default JobFeed;
