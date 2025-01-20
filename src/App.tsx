import React, { useEffect, useRef, useState } from 'react';
import { MapPin, PartyPopper, Gift, Calendar, Clock, Navigation } from 'lucide-react';
import birthday_1 from './images/birthday_1.jpeg'
import birthday_2 from './images/birthday_2.jpeg'
import birthday_3 from './images/birthday_3.jpeg'
function App() {
  const imagesRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-01-25T12:30:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    const letters = document.querySelectorAll('.animate-letter');
    letters.forEach((letter, index) => {
      (letter as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const handleDirectionsClick = () => {
    window.open('https://maps.app.goo.gl/Mnirqy7eqoiinWKWA', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-zinc-900 to-neutral-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center mb-12 relative">
          <h1 className="text-6xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-rose-100 via-pink-300 to-rose-100 animate-gradient">
          Amaya's birthday
          
            <PartyPopper className="inline-block ml-2 text-amber-300 animate-[spin_2s_ease-in-out_infinite]" />
          </h1>
          <p className="text-2xl text-rose-200/80 animate-[fadeIn_1s_ease-in-out]">
            Join us for a magical celebration!
          </p>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-rose-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-20 w-40 h-40 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <img 
            src={birthday_1}
            width="400"
            height="400"
            alt="Birthday Memory 1"
            className="w-full h-64 rounded-lg shadow-2xl object-cover transition-all duration-500 hover:scale-105 hover:rotate-2 ring-2 ring-rose-300/20"
          />
          <img 
            src={birthday_3}
            width="400"
            height="400"
            alt="Birthday Memory 2"
            className="w-full h-64 rounded-lg shadow-2xl object-cover transition-all duration-500 hover:scale-105 hover:-rotate-2 ring-2 ring-rose-300/20"
          />
          <img 
            src={birthday_2}
            width="400"
            height="400"
            alt="Birthday Memory 3"
            className="w-full h-64 rounded-lg shadow-2xl object-cover transition-all duration-500 hover:scale-105 hover:rotate-2 ring-2 ring-rose-300/20"
          />
        </div>

        {/* Invitation Card */}
        <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-rose-300/10">
          <div className="text-center">
            <Gift className="w-16 h-16 mx-auto text-rose-300 mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-rose-100 mb-4">You're Invited!</h2>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-black/30 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-rose-300">{timeLeft.days}</div>
                <div className="text-rose-200/70 text-sm">Days</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-rose-300">{timeLeft.hours}</div>
                <div className="text-rose-200/70 text-sm">Hours</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-rose-300">{timeLeft.minutes}</div>
                <div className="text-rose-200/70 text-sm">Minutes</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-rose-300">{timeLeft.seconds}</div>
                <div className="text-rose-200/70 text-sm">Seconds</div>
              </div>
            </div>
            
            <div className="space-y-4 text-rose-100/90">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-rose-300" />
                Saturday, January 25th, 2025
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-rose-300" />
                12:30 PM
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-rose-300" />
                Rainbow Party House, 123 Celebration Street
              </p>
            </div>
            <div className="text-lg text-amber-400 leading-relaxed italic font-light tracking-wide">
              <br></br>
            <p className="text-left">Assalamualaikum,</p>
            <p className="mt-6 text-rose-100/80">
              This is an invitation to our daughter Amaya’s first birthday party. We expect your presence in making the day memorable for us and Amaya. Join us for an afternoon filled with fun, food, and wonderful memories!
            </p>
            <p className="mt-4">
              For any questions, feel free to reach me at 
              <a href="tel:+4915788724461" className="text-amber-500 underline hover:text-amber-300"> +49 157 887 24461</a>.
            </p>
            <p className="mt-4">
              Warm greetings, <br />
              Sara & Abrar
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-black/30 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-rose-100 mb-12">Party Location</h2>
          <div className="max-w-4xl mx-auto bg-black/40 rounded-xl overflow-hidden shadow-lg border border-rose-300/10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2488.4205381340853!2d13.544339702110602!3d52.523353896664716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8495738b03b3f%3A0xddb26a7e0ee406a8!2sB%C3%BCrgerhaus%20S%C3%BCdspitze!5e0!3m2!1sen!2sde!4v1737377401934!5m2!1sen!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-6 bg-black/30">
              <button
                onClick={handleDirectionsClick}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;