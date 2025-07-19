import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">Rated #1 Gym in the City</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent block">
                Body & Mind
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join over 2,000+ members who have achieved their fitness goals with our 
              state-of-the-art equipment, expert trainers, and supportive community.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start Your Journey
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                <Play className="h-5 w-5" />
                <span>Watch Video</span>
              </button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-sm text-gray-300">Happy Members</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-200">Access</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-200">Classes</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-sm text-gray-200">Trainers</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-sm text-gray-200">Locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;