"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import axios from "axios";
import { useState } from "react";


const Home = () => {
  // const [downloadStatus, setDownloadStatus] = useState("");

  // const downloadFavicon = async () => {
  //     try {
  //         const response = await axios.get("/api/hello", {
  //             responseType: "blob", // Important for binary data
  //         });

  //         // Extract filename from content-disposition header
  //         const contentDisposition = response.headers["content-disposition"];
  //         const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
  //         const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

  //         // Create a temporary anchor element to trigger the download
  //         const url = window.URL.createObjectURL(new Blob([response.data]));
  //         const link = document.createElement("a");
  //         link.href = url;
  //         // Setting filename received in response
  //         link.setAttribute("download", fileName);
  //         document.body.appendChild(link);
  //         link.click();
  //         document.body.removeChild(link);

  //         setDownloadStatus("Downloaded");
  //     } catch (error) {
  //         console.error("Error downloading file:", error);
  //         setDownloadStatus("Error downloading");
  //     }
  // };


  return (
    <section className = "h-full">
      <div className = "container mx-auto max-h-full">
        <div className = "flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className = "text-center xl:text-left order-2 xl:order-none ">
            <span className = "text-xl">
              Software Developer
            </span>
            <h1 className = "h1">Hello I'm <br /> <span className = "text-accent">Pranav Komarla</span></h1>
            <p className = "max-w-[500px] mb-9 text-white/80"> I truly enjoy the art of programming and development and am currently studying both computer science and data science. I will surely be pursuing excellence in these fields and am looking for opportunities. </p>
            <div className = "flex flex-col xl:flex-row items-center gap-8">
            
            <a download href = "/assets/Resume.pdf">
            <Button variant = "outline" size = "lg" className = "uppercase flex items-center gap-2">
              
              <span>Download CV</span>
              <FiDownload className = "text-xl"/>
            
              
            </Button>
            </a>
              
              
              <div className = "mb-8 xl:mb-0">
                <Socials containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}/>
              </div>
            </div>
            
          </div>
          <div className = "order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>

        </div>
      </div>
    </section>
  );
}

export default Home;
