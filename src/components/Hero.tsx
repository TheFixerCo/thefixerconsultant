
import React from 'react';
import { Button } from "./ui/button";
import { Mail, ArrowDown, Smartphone } from "lucide-react";
import StrategyElements from './StrategyElements';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-fixer-dark">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-neopixel text-4xl md:text-6xl lg:text-7xl mb-6 text-balance text-purple-custom mt-16">
            UNLOCK REAL <span>online growth</span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
            Our data-driven approach to social selling and content strategy helps startups and founders like you achieve significant online growth, drive more sales, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-purple-custom hover:bg-purple-accent font-neopixel text-[20px]">
              <a href="tel:+27847402418" className="flex items-center">
                <Smartphone className="mr-2 h-4 w-4" />
                GET IN TOUCH
                <ArrowDown 
                  className="ml-2 animate-bounce"
                  size={20}
                />
              </a>
            </Button>
          </div>
        </div>
        
        <StrategyElements />
        
        <div className="text-center mt-16">
          <p className="font-open-sans text-white text-xl font-bold mb-4">
            READY TO LEVEL-UP YOUR SOCIAL SELLING?
          </p>
          <Button asChild variant="outline" className="border-purple-custom text-purple-custom hover:bg-purple-accent hover:text-white font-neopixel text-[20px]">
            <a href="mailto:bianca@thefixerco.com" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              GET IN TOUCH
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
