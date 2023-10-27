"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Welcome from "@/components/welcome";
import JobFeeds from "@/components/JobFeed";
import { UserButton, useAuth, useUser } from "@clerk/nextjs"

const IndexPage = () => {

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  // if (!isLoaded || !userId) {
    
  // }


  return (
    <section className="items-center">
     {/* <JobFeeds /> */}
     <Welcome />
    </section>
  );
};

export default IndexPage;
