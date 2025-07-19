import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Marketing Executive",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "FitPro Gym completely transformed my life. I've lost 30 pounds and gained so much confidence. The trainers are incredibly supportive and the community is amazing. I never thought I'd actually enjoy working out!",
      achievement: "Lost 30 lbs in 6 months",
      joinDate: "Member since 2023"
    },
    {
      name: "Robert Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "As someone who works long hours at a desk, FitPro has been essential for my health. The 24/7 access means I can work out whenever my schedule allows. The equipment is top-notch and always well-maintained.",
      achievement: "Improved posture & energy",
      joinDate: "Member since 2022"
    },
    {
      name: "Maria Rodriguez",
      role: "Teacher",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "The yoga classes at FitPro have been life-changing. Emma is an incredible instructor who creates such a peaceful and supportive environment. I've never felt more centered and strong.",
      achievement: "Reduced stress & anxiety",
      joinDate: "Member since 2021"
    },
    {
      name: "David Kim",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "The personal training sessions with Sarah have been incredible. She designed a program specifically for my goals and I've seen amazing results. I'm stronger now at 45 than I was at 30!",
      achievement: "Built lean muscle mass",
      joinDate: "Member since 2020"
    },
    {
      name: "Emily Johnson",
      role: "Nurse",
      image: "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "Working in healthcare is demanding, but FitPro helps me stay energized and focused. The HIIT classes are perfect for my busy schedule, and the community here feels like family.",
      achievement: "Increased stamina & energy",
      joinDate: "Member since 2023"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-lg mb-4">Success Stories</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="text-blue-900 block">Real People</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of members who have transformed their lives at FitPro Gym. 
            Here's what they have to say about their journey.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-12 w-12 text-orange-500" />
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-orange-500' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl lg:text-2xl leading-relaxed mb-6">
                    "{testimonials[currentSlide].text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold">{testimonials[currentSlide].name}</h4>
                      <p className="text-blue-200">{testimonials[currentSlide].role}</p>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div className="text-orange-300 font-semibold">
                        {testimonials[currentSlide].achievement}
                      </div>
                      <div className="text-blue-200 text-sm">
                        {testimonials[currentSlide].joinDate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white/20"
                    />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "2000+", label: "Happy Members", icon: "👥" },
            { number: "98%", label: "Success Rate", icon: "📈" },
            { number: "15+", label: "Years of Excellence", icon: "🏆" },
            { number: "500+", label: "Transformations", icon: "💪" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of achievers and start your transformation journey today. 
            Your success story could be featured next!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;