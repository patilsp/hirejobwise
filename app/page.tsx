"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Welcome from "@/components/welcome";

const IndexPage = () => {

  return (
    <section className="items-center">
     <Welcome />
 
    
    </section>
  );
};

export default IndexPage;
