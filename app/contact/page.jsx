"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {ChakraProvider, FormControl, FormLabel, extendTheme, FormErrorMessage} from '@chakra-ui/react'
import { sendContactForm } from "@/lib/api";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 321 654 876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Code Corner, Tech Town 13579",
  },
];

const initValues = {
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  message: "",
 
 
 }
 const initBools = {
  firstname: false,
  lastname: false,
  email: false,
  subject: false,
  message: false,
 }

 const initState = {values: initValues}
 

import { motion } from "framer-motion";

const Contact = () => {

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState(initBools);
  const {values} = state;

  const onSubmit = (event) => {
    console.log("WORKING");
    setState((prev) => ({
      ...prev,
    }));
    // event.preventDefault();
    
    sendContactForm(values)
  }

  const onBlur = ({target}) => setTouched((prev) => ({...prev, [target.name]:true}))

  const handleChange =  ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
  }))
 
 
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                nihil sapiente pariatur id totam.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" /> */}

                <FormControl isRequired isInvalid = {touched.firstname && values.firstname == ""}>
                   {/* <FormLabel>Name</FormLabel> */}
                   <Input type="firstname" name = "firstname" placeholder="Firstname" values = {values.firstname} onChange = {handleChange} onBlur = {onBlur} />
                   <FormErrorMessage className = "text-[12px] pl-3 text-red-400">Required</FormErrorMessage>
               </FormControl>
               <FormControl isRequired isInvalid = {values.lastname === "" && touched.lastname }>
                   {/* <FormLabel>Name</FormLabel> */}
                   <Input type="lastame" name = "lastname" placeholder="Lastname" values = {values.lastname } onChange = {handleChange} onBlur = {onBlur} />
                   <FormErrorMessage className = "text-[12px] pl-3 text-red-400">Required</FormErrorMessage>
               </FormControl>
               <FormControl isRequired isInvalid = {values.email === "" && touched.email}>
                   {/* <FormLabel>Name</FormLabel> */}
                   <Input type="email" name = "email" placeholder="Email address" values = {values.email} onChange = {handleChange} onBlur = {onBlur} />
                   <FormErrorMessage className = "text-[12px] pl-3 text-red-400">Required</FormErrorMessage>
               </FormControl>
               <FormControl isRequired isInvalid = {values.subject === "" && touched.subject}>
                   {/* <FormLabel>Name</FormLabel> */}
                   <Input type="subject" name = "subject" placeholder="Subject" values = {values.subject} onChange = {handleChange} onBlur = {onBlur} />
                   <FormErrorMessage className = "text-[12px] pl-3 text-red-400">Required</FormErrorMessage>
               </FormControl>



              </div>
              
              
              {/* textarea */}
              <Textarea type="message" name = "message" placeholder="Type your Message" values = {values.name} onChange = {handleChange} className = "h-[200px] text-black"/>

              {/* btn */}
              <Button size="md" className="max-w-40" disabled = {(values.firstname === "")|| (values.lastname === "") || (values.email === "") || (values.message === "")|| (values.email === "")} onClick = {onSubmit} >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
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
  );
};

export default Contact;
