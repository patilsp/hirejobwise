"use client";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const JobCard = ({ job, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (job.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${job.creator?._id}?name=${job.creator?.username}`);
  };

  const handleCopy = () => {
    setCopied(job.job_title);
    navigator.clipboard.writeText(job.tag);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='prompt_card'>
      <div className='flex items-start justify-between gap-5'>
        <div
          className='flex flex-1 cursor-pointer items-center justify-start gap-3'
          onClick={handleProfileClick}
        >
          <Image
            src={job.creator?.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {job.creator?.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {job.creator?.email}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === job.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === job.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className='font-satoshi my-4 text-sm text-gray-500'>{job.company_name}</p>
      <p className='font-satoshi my-4 text-sm text-gray-500'>{job.job_title}</p>
      <p className='font-satoshi my-4 text-sm text-gray-500'>{job.description}</p>
      <p className='font-satoshi my-4 text-sm text-gray-500'>{job.salary}</p>
      <p
        className='font-inter blue_gradient cursor-pointer text-sm'
        onClick={() => handleTagClick && handleTagClick(job.job_title)}
      >
        #{job.tag}
      </p> 

     {session?.user.id === job.creator._id && pathName === "/profile" && (
        <div className='flex-center mt-5 gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter green_gradient cursor-pointer text-sm'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter orange_gradient cursor-pointer text-sm'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default JobCard;
