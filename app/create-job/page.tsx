"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import JobForm from "@/components/JobForm";
import { useAuth, useUser } from "@clerk/nextjs"
import { Button } from "@/registry/new-york/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"
import { Input } from "@/registry/new-york/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Textarea } from "@/registry/new-york/ui/textarea"


const CreateCustomer = () => {
  
  const router = useRouter();
  const { isLoaded, userId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ name: "", email: "", address:"", phone: "", status:"", dateofbirth:"" });

  const createCustomer = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/job/new", {
        method: "POST",
        body: JSON.stringify({
          name: post.name,
          email: post.email,
          address: post.address,
          phone: post.phone,
          status: post.status,
          dateofbirth:post.dateofbirth,
        }),
      });

      if (response.ok) {
        router.push("/jobs");
        toast.success("Job has been created! 🔥");
      }
      
    } catch (error) {
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <JobForm
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createCustomer}
    />
  );
};

export default CreateCustomer;
