import React from 'react';
import { Target, Heart, Trophy, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Oriented Training",
      description: "Personalized workout plans designed to help you achieve your specific fitness goals efficiently."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive approach to fitness including nutrition guidance and mental wellness support."
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Track record of helping thousands of members achieve remarkable transformations."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Clean, well-maintained facilities with modern equipment and safety protocols."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-orange-500 font-semibold text-lg mb-4">About FitPro Gym</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Fitness 
              <span className="text-blue-900 block">Meets Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, FitPro Gym has been the premier destination for fitness enthusiasts 
              who demand excellence. Our state-of-the-art facilities, world-class trainers, and 
              supportive community create the perfect environment for transformation.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">2000+</span> satisfied members
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Personal training session"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Modern gym equipment"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Group fitness class"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Cardio area"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;