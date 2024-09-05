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
    description: "9087052991",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "pranavkv03@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "6 Sunshine Court NJ",
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
        
        <div className="flex-1 flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[200px] xl:h-[200px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[100px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 xl:text-[70px]">{item.title}</p>
                      <h3 className="text-xl xl:text-[45px]">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
      </div>
    </motion.section>
  );
};

export default Contact;
