import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Guest pass (1 per month)"
      ],
      color: "gray",
      icon: Zap,
      popular: false
    },
    {
      name: "Premium",
      price: 59,
      period: "month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal training consultation",
        "Nutrition guidance",
        "Towel service",
        "Guest passes (4 per month)",
        "Access to premium equipment"
      ],
      color: "orange",
      icon: Crown,
      popular: true
    },
    {
      name: "Elite",
      price: 99,
      period: "month",
      description: "Ultimate package for complete transformation",
      features: [
        "Everything in Premium",
        "Weekly personal training sessions",
        "Custom meal planning",
        "Recovery spa access",
        "Priority class booking",
        "Unlimited guest passes",
        "Exclusive member events",
        "24/7 trainer support"
      ],
      color: "blue",
      icon: Star,
      popular: false
    }
  ];

  const getColorClasses = (color, isPopular) => {
    if (isPopular) {
      return {
        border: "border-orange-500 border-2",
        header: "bg-gradient-to-r from-orange-500 to-orange-600",
        button: "bg-orange-500 hover:bg-orange-600",
        icon: "text-orange-500"
      };
    }
    
    const colorMap = {
      gray: {
        border: "border-gray-200",
        header: "bg-gray-50",
        button: "bg-gray-900 hover:bg-gray-800",
        icon: "text-gray-600"
      },
      blue: {
        border: "border-blue-200",
        header: "bg-blue-50",
        button: "bg-blue-900 hover:bg-blue-800",
        icon: "text-blue-600"
      }
    };
    return colorMap[color];
  };

  return (
    <section id="membership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-lg mb-4">Membership Plans</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="text-blue-900 block">Membership Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals. 
            All plans include access to our world-class facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl ${colors.border} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`${colors.header} p-8 rounded-t-2xl text-center`}>
                  <div className={`w-16 h-16 mx-auto mb-4 ${plan.popular ? 'bg-white' : 'bg-white'} rounded-full flex items-center justify-center`}>
                    <plan.icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-orange-100' : 'text-gray-600'} mb-4`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-lg ml-1 ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full ${colors.button} text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Every Membership Includes
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "No Commitment", description: "Cancel anytime with 30-day notice" },
              { title: "Free Parking", description: "Complimentary parking for all members" },
              { title: "WiFi Access", description: "High-speed internet throughout facility" },
              { title: "Member App", description: "Track progress and book classes" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;