import React from 'react';
import { Dumbbell, Users, Heart, Zap, Clock, User } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "State-of-the-art weight training equipment and free weights for all fitness levels.",
      features: ["Olympic weightlifting", "Powerlifting", "Functional training"],
      color: "orange"
    },
    {
      icon: Heart,
      title: "Cardio Zone",
      description: "Premium cardio equipment with entertainment systems and heart rate monitoring.",
      features: ["Treadmills", "Ellipticals", "Rowing machines"],
      color: "red"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy group fitness classes led by certified instructors.",
      features: ["Yoga", "Pilates", "HIIT classes"],
      color: "green"
    },
    {
      icon: User,
      title: "Personal Training",
      description: "One-on-one training sessions with certified personal trainers.",
      features: ["Custom programs", "Nutrition guidance", "Progress tracking"],
      color: "blue"
    },
    {
      icon: Zap,
      title: "HIIT Training",
      description: "High-intensity interval training for maximum calorie burn and fitness gains.",
      features: ["Circuit training", "Metabolic conditioning", "Sports performance"],
      color: "purple"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Round-the-clock access to our facilities for ultimate flexibility.",
      features: ["Keycard access", "Security monitoring", "Locker facilities"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      orange: {
        bg: "bg-orange-100",
        icon: "text-orange-500",
        button: "bg-orange-500 hover:bg-orange-600"
      },
      red: {
        bg: "bg-red-100",
        icon: "text-red-500",
        button: "bg-red-500 hover:bg-red-600"
      },
      green: {
        bg: "bg-green-100",
        icon: "text-green-500",
        button: "bg-green-500 hover:bg-green-600"
      },
      blue: {
        bg: "bg-blue-100",
        icon: "text-blue-500",
        button: "bg-blue-500 hover:bg-blue-600"
      },
      purple: {
        bg: "bg-purple-100",
        icon: "text-purple-500",
        button: "bg-purple-500 hover:bg-purple-600"
      },
      indigo: {
        bg: "bg-indigo-100",
        icon: "text-indigo-500",
        button: "bg-indigo-500 hover:bg-indigo-600"
      }
    };
    return colorMap[color];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-lg mb-4">Our Services</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-blue-900 block">Achieve Your Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cutting-edge equipment to expert guidance, we provide comprehensive 
            fitness solutions tailored to your unique journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full ${colors.button} text-white py-3 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives with our comprehensive fitness programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;