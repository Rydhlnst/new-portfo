import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-8 lg:px-16 py-6 bg-white border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
        {/* Left: Version & Last Updated */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Badge variant="outline" className="px-4 rounded-full py-1.5">
            <p className="font-medium">V.1.0</p>
          </Badge>
          <p className="uppercase font-light text-muted-foreground">
            Last Updated 2025 - 08 - 15
          </p>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex w-full justify-start md:justify-center items-center gap-4 text-gray-500 text-lg">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
            <FaTwitter />
          </a>
        </div>

        {/* Right: Email */}
        <div className="flex w-full flex-col justify-end items-start">
          <p className="text-muted-foreground font-medium">Let&apos;s build something together.</p>
          <a
            href="mailto:your.email@example.com"
            className="text-sm text-muted-foreground font-semibold transition"
          >
            rydhlnst@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
