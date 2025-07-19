import React from 'react';
import { Award, Star, Calendar, MessageCircle } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      title: "Head Personal Trainer",
      specialty: "Strength Training & Weight Loss",
      experience: "8 years",
      certifications: ["NASM-CPT", "CSCS", "Nutrition Specialist"],
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 4.9,
      bio: "Specializes in transforming lives through personalized strength training programs and sustainable nutrition habits."
    },
    {
      name: "Mike Rodriguez",
      title: "HIIT & Cardio Specialist",
      specialty: "High-Intensity Training",
      experience: "6 years",
      certifications: ["ACSM-CPT", "TRX Certified", "Kettlebell Instructor"],
      image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 4.8,
      bio: "Expert in high-intensity workouts that maximize fat burn and improve cardiovascular health in minimal time."
    },
    {
      name: "Emma Chen",
      title: "Yoga & Wellness Coach",
      specialty: "Mind-Body Connection",
      experience: "10 years",
      certifications: ["RYT-500", "Meditation Teacher", "Wellness Coach"],
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 5.0,
      bio: "Combines ancient yoga wisdom with modern wellness practices to help clients achieve balance and inner peace."
    },
    {
      name: "David Thompson",
      title: "Sports Performance Coach",
      specialty: "Athletic Performance",
      experience: "12 years",
      certifications: ["CSCS", "FMS", "Olympic Lifting Coach"],
      image: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 4.9,
      bio: "Former college athlete turned coach, specializing in sports-specific training and injury prevention."
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-lg mb-4">Meet Our Team</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Trainers
            <span className="text-blue-900 block">Here to Guide You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified personal trainers bring years of experience and passion 
            to help you achieve your fitness goals safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{trainer.rating}</span>
                </div>

                {/* Social Icons - Show on Hover */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                    <Calendar className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-orange-500 font-semibold text-sm mb-2">{trainer.title}</p>
                <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Specialty:</span>
                    <span className="text-sm font-medium text-gray-900">{trainer.specialty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Experience:</span>
                    <span className="text-sm font-medium text-gray-900">{trainer.experience}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-1">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gray-900 hover:bg-orange-500 text-white py-3 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Train with the Best?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a complimentary consultation with one of our expert trainers 
              and start your personalized fitness journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Book Free Consultation
              </button>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                View All Trainers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;