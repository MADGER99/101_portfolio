"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select,SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+66) 943 697 891",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Madger@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: ".......",
  },
]

import { motion } from "framer-motion";

const Content = () => {
  return (
    <motion.section
      initial={{ opacity: 0}}
      animate={{
        opacity:1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn"},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] w-full ">

          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-pink-50/10 rounded-xl">
            <h3 className="text-4xl text-accent ">Let's work together</h3>
            <p className="text-white/60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus nam nemo consectetur quaerat ducimus earum. Sed nostrum a nulla quam ab! Eligendi velit corporis laboriosam perferendis neque veritatis doloribus?
            </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel > Select a Service </SelectLabel>
                      <SelectItem value ="est">Web Development</SelectItem>
                      <SelectItem value ="cst">UI/UX Design</SelectItem>
                      <SelectItem value ="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea 
                  className="h-[200px]" 
                  placeholder="Type your massage here."
                />
                {/* button */}
                <Button  className="max-w-60 max-h-40 ">
                  Send message
                </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10 ">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-pink-50/10 text-accent rounded-lg flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Content
