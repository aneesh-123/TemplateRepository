'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function Home() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [initialSpin, setInitialSpin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent hydration error by only rendering confetti after mount
  useEffect(() => {
    setMounted(true);
    // Stop initial spin after 1 second (one revolution)
    setTimeout(() => setInitialSpin(false), 1000);
  }, []);

  // Optional: Hide confetti after a certain time as backup
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3500); // Hide after 3.5 seconds as backup

    return () => clearTimeout(timer);
  }, []);

  // Handle outside click to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  const handleImageClick = () => {
    // Trigger spinning animation (one revolution)
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000); // Stop spinning after 1 second
    
    // Trigger confetti (longer duration)
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
  };

  const handleEnvelopeClick = () => {
    setIsModalOpen(true);
    // Clear notification badge when user opens the modal
    setHasNotification(false);
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spinOnce {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spin-once {
          animation: spinOnce 1s ease-in-out;
        }
        

      `}</style>
      
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/wallpaper.jpg"
          alt="Father's Day Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Simple Bear Family with Bodies */}
      {/* Papa Bear */}
      <div className="absolute top-5 right-5">
        <div className="relative flex flex-col items-center">
          <div className="text-8xl">🐻</div>
          <div className="relative -mt-2">
            <div className="text-6xl">🟤</div>
            <div className="absolute -left-6 top-0 text-4xl">🟤</div>
            <div className="absolute -right-6 top-0 text-4xl">🟤</div>
          </div>
          <div className="flex gap-2 -mt-4">
            <div className="text-3xl">🟤</div>
            <div className="text-3xl">🟤</div>
          </div>
        </div>
      </div>
      
      {/* Mama Bear */}
      <div className="absolute top-5 right-48">
        <div className="relative flex flex-col items-center">
          <div className="text-7xl">🐻</div>
          <div className="relative -mt-2">
            <div className="text-5xl">🟤</div>
            <div className="absolute -left-5 top-0 text-3xl">🟤</div>
            <div className="absolute -right-5 top-0 text-3xl">🟤</div>
          </div>
          <div className="flex gap-1 -mt-3">
            <div className="text-2xl">🟤</div>
            <div className="text-2xl">🟤</div>
          </div>
        </div>
      </div>
      
      {/* First Cub */}
      <div className="absolute top-60 right-12">
        <div className="relative flex flex-col items-center">
          <div className="text-6xl">🐻</div>
          <div className="relative -mt-1">
            <div className="text-4xl">🟤</div>
            <div className="absolute -left-4 top-0 text-2xl">🟤</div>
            <div className="absolute -right-4 top-0 text-2xl">🟤</div>
          </div>
          <div className="flex gap-1 -mt-2">
            <div className="text-xl">🟤</div>
            <div className="text-xl">🟤</div>
          </div>
        </div>
      </div>
      
      {/* Second Cub */}
      <div className="absolute top-60 right-56">
        <div className="relative flex flex-col items-center">
          <div className="text-5xl">🐻</div>
          <div className="relative -mt-1">
            <div className="text-3xl">🟤</div>
            <div className="absolute -left-3 top-0 text-xl">🟤</div>
            <div className="absolute -right-3 top-0 text-xl">🟤</div>
          </div>
          <div className="flex gap-0 -mt-2">
            <div className="text-lg">🟤</div>
            <div className="text-lg">🟤</div>
          </div>
        </div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <div 
            className={`relative w-60 h-60 rounded-full overflow-hidden border-4 border-green-800 shadow-2xl cursor-pointer transition-transform duration-1000 ${
              (isSpinning || initialSpin) ? 'spin-once' : 'hover:scale-105'
            }`}
            onClick={handleImageClick}
          >
            <Image
              src="/assets/dad-photo.jpg"
              alt="Dad's Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Glassmorphic Message Container */}
        <div className="backdrop-blur-lg bg-green-100/30 bg-opacity-30 border border-green-200/20 rounded-3xl px-12 py-6 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 text-center whitespace-nowrap">
            Happy Father's Day, Dad!
          </h1>
        </div>

        {/* Envelope Button */}
        <div className="flex justify-center">
          <button
            onClick={handleEnvelopeClick}
            className="group relative p-4 bg-green-800 hover:bg-green-700 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            {/* Envelope SVG */}
            <svg 
              className="w-12 h-12 text-white group-hover:animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            {/* Notification Badge - only show when there's an unread notification */}
            {hasNotification && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border-4 border-green-800"
          >
            {/* Modal Header */}
            <div className="bg-green-800 text-white p-6 text-center">
              <h2 className="text-2xl font-bold">A Message for Dad 💝</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-green-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 text-center space-y-4">
              <div className="text-6xl mb-4">👨</div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Dear Dad,
              </h3>
              <p className="text-gray-700 leading-relaxed">
                [Write your personal message here]
                <br /><br />
                Thank you for being an amazing father! Your love, wisdom, and support 
                have shaped who I am today. You&apos;ve been my hero, my guide, and my inspiration. 
                Happy Father&apos;s Day to the best dad in the world! 🎉
              </p>
              <div className="mt-6 pt-4 border-t border-green-200">
                <p className="text-green-800 font-medium">
                  With all my love ❤️
                  <br />
                  [Your name here]
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confetti Effect */}
      {mounted && showConfetti && (
        <Confetti
          width={width || window.innerWidth}
          height={height || window.innerHeight}
          numberOfPieces={700}
          recycle={false}
          opacity={0.8}
          gravity={0.3}
          wind={0.08}
          tweenDuration={3000}
          onConfettiComplete={handleConfettiComplete}
          confettiSource={{
            x: (width || window.innerWidth) / 2 - 250,
            y: -10,
            w: 500,
            h: 10
          }}
          initialVelocityX={{ min: -20, max: 20 }}
          initialVelocityY={{ min: 0, max: -25 }}
          colors={[
            '#f44336', '#e91e63', '#9c27b0', '#673ab7', 
            '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', 
            '#009688', '#4CAF50', '#8BC34A', '#CDDC39', 
            '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'
          ]}
        />
      )}
    </div>
    </>
  );
}
