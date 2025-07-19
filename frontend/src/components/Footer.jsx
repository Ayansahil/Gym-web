import React from 'react';
import { Dumbbell, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Personal Training', href: '#' },
    { name: 'Group Classes', href: '#' },
    { name: 'Nutrition Coaching', href: '#' },
    { name: 'Corporate Wellness', href: '#' },
    { name: 'Youth Programs', href: '#' },
    { name: 'Senior Fitness', href: '#' }
  ];

  const resources = [
    { name: 'Member Portal', href: '#' },
    { name: 'Mobile App', href: '#' },
    { name: 'Class Schedules', href: '#' },
    { name: 'Nutrition Guide', href: '#' },
    { name: 'Workout Plans', href: '#' },
    { name: 'Progress Tracking', href: '#' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Membership Agreement', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Safety Guidelines', href: '#' },
    { name: 'Accessibility', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">FitPro Gym</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body and mind at FitPro Gym. Join our community of fitness enthusiasts 
              and achieve your health goals with expert guidance and state-of-the-art facilities.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">123 Main Street</p>
                  <p className="text-gray-400">Downtown, City 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-orange-500 transition-colors">
                  (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@fitprogym.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@fitprogym.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Hours</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>Mon-Fri:</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat-Sun:</span>
                  <span>6AM-10PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for fitness tips, class updates, and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-white"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-full font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} FitPro Gym. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Made with ❤️ for fitness enthusiasts</span>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
            <div className="text-orange-500 font-bold">2000+</div>
            <div className="text-xs text-gray-400">Happy Members</div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
            <div className="text-orange-500 font-bold">15+</div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
            <div className="text-orange-500 font-bold">98%</div>
            <div className="text-xs text-gray-400">Success Rate</div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
            <div className="text-orange-500 font-bold">24/7</div>
            <div className="text-xs text-gray-400">Access</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;