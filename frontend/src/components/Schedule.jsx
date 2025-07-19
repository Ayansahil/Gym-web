import React, { useState } from 'react';
import { Clock, Users, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const classes = {
    Monday: [
      { time: '6:00 AM', name: 'Morning Yoga', instructor: 'Emma Chen', duration: '60 min', spots: 12, capacity: 15, level: 'All Levels' },
      { time: '7:30 AM', name: 'HIIT Bootcamp', instructor: 'Mike Rodriguez', duration: '45 min', spots: 8, capacity: 20, level: 'Intermediate' },
      { time: '12:00 PM', name: 'Strength Training', instructor: 'Sarah Johnson', duration: '60 min', spots: 6, capacity: 10, level: 'Beginner' },
      { time: '6:00 PM', name: 'Cardio Blast', instructor: 'David Thompson', duration: '45 min', spots: 15, capacity: 25, level: 'All Levels' },
      { time: '7:30 PM', name: 'Evening Yoga', instructor: 'Emma Chen', duration: '60 min', spots: 10, capacity: 15, level: 'All Levels' }
    ],
    Tuesday: [
      { time: '6:00 AM', name: 'CrossFit', instructor: 'David Thompson', duration: '60 min', spots: 5, capacity: 12, level: 'Advanced' },
      { time: '9:00 AM', name: 'Pilates', instructor: 'Emma Chen', duration: '50 min', spots: 8, capacity: 12, level: 'Beginner' },
      { time: '12:00 PM', name: 'HIIT Express', instructor: 'Mike Rodriguez', duration: '30 min', spots: 12, capacity: 20, level: 'Intermediate' },
      { time: '6:00 PM', name: 'Weightlifting', instructor: 'Sarah Johnson', duration: '75 min', spots: 4, capacity: 8, level: 'Intermediate' },
      { time: '7:30 PM', name: 'Zumba', instructor: 'Mike Rodriguez', duration: '45 min', spots: 18, capacity: 30, level: 'All Levels' }
    ],
    Wednesday: [
      { time: '6:00 AM', name: 'Morning Yoga', instructor: 'Emma Chen', duration: '60 min', spots: 12, capacity: 15, level: 'All Levels' },
      { time: '7:30 AM', name: 'Strength Circuit', instructor: 'Sarah Johnson', duration: '45 min', spots: 9, capacity: 15, level: 'Intermediate' },
      { time: '12:00 PM', name: 'Cardio Mix', instructor: 'David Thompson', duration: '45 min', spots: 14, capacity: 20, level: 'All Levels' },
      { time: '6:00 PM', name: 'HIIT Training', instructor: 'Mike Rodriguez', duration: '45 min', spots: 7, capacity: 18, level: 'Intermediate' },
      { time: '7:30 PM', name: 'Restorative Yoga', instructor: 'Emma Chen', duration: '60 min', spots: 11, capacity: 15, level: 'All Levels' }
    ],
    Thursday: [
      { time: '6:00 AM', name: 'Boot Camp', instructor: 'David Thompson', duration: '60 min', spots: 6, capacity: 15, level: 'Advanced' },
      { time: '9:00 AM', name: 'Barre Class', instructor: 'Emma Chen', duration: '50 min', spots: 10, capacity: 12, level: 'Beginner' },
      { time: '12:00 PM', name: 'Boxing Fitness', instructor: 'Mike Rodriguez', duration: '45 min', spots: 8, capacity: 16, level: 'Intermediate' },
      { time: '6:00 PM', name: 'Power Lifting', instructor: 'Sarah Johnson', duration: '75 min', spots: 3, capacity: 6, level: 'Advanced' },
      { time: '7:30 PM', name: 'Yoga Flow', instructor: 'Emma Chen', duration: '60 min', spots: 13, capacity: 15, level: 'All Levels' }
    ],
    Friday: [
      { time: '6:00 AM', name: 'HIIT Friday', instructor: 'Mike Rodriguez', duration: '45 min', spots: 9, capacity: 20, level: 'Intermediate' },
      { time: '9:00 AM', name: 'Gentle Yoga', instructor: 'Emma Chen', duration: '60 min', spots: 12, capacity: 15, level: 'Beginner' },
      { time: '12:00 PM', name: 'Functional Training', instructor: 'David Thompson', duration: '45 min', spots: 11, capacity: 18, level: 'All Levels' },
      { time: '6:00 PM', name: 'Weekend Warrior', instructor: 'Sarah Johnson', duration: '60 min', spots: 7, capacity: 12, level: 'Intermediate' },
      { time: '7:30 PM', name: 'Dance Fitness', instructor: 'Mike Rodriguez', duration: '45 min', spots: 20, capacity: 30, level: 'All Levels' }
    ],
    Saturday: [
      { time: '8:00 AM', name: 'Weekend Yoga', instructor: 'Emma Chen', duration: '75 min', spots: 14, capacity: 20, level: 'All Levels' },
      { time: '10:00 AM', name: 'CrossTraining', instructor: 'David Thompson', duration: '60 min', spots: 8, capacity: 15, level: 'Intermediate' },
      { time: '12:00 PM', name: 'Family Fitness', instructor: 'Sarah Johnson', duration: '45 min', spots: 16, capacity: 25, level: 'All Levels' },
      { time: '2:00 PM', name: 'Open Gym Time', instructor: 'Staff Supervised', duration: '120 min', spots: 30, capacity: 50, level: 'All Levels' }
    ],
    Sunday: [
      { time: '9:00 AM', name: 'Sunday Stretch', instructor: 'Emma Chen', duration: '60 min', spots: 15, capacity: 18, level: 'All Levels' },
      { time: '11:00 AM', name: 'Meditation & Mindfulness', instructor: 'Emma Chen', duration: '45 min', spots: 12, capacity: 15, level: 'All Levels' },
      { time: '4:00 PM', name: 'Active Recovery', instructor: 'David Thompson', duration: '45 min', spots: 18, capacity: 25, level: 'All Levels' }
    ]
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getAvailabilityColor = (spots, capacity) => {
    const percentage = spots / capacity;
    if (percentage > 0.7) return 'text-green-600';
    if (percentage > 0.3) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-semibold text-lg mb-4">Class Schedule</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Weekly Class
            <span className="text-blue-900 block">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our diverse range of fitness classes designed for all skill levels. 
            Book your spot and get ready to sweat!
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid gap-6">
          {classes[selectedDay].map((classItem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{classItem.name}</h3>
                      <p className="text-gray-600">with {classItem.instructor}</p>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 sm:mt-0 ${getLevelColor(classItem.level)}`}>
                      {classItem.level}
                    </span>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <div>
                        <div className="font-semibold text-gray-900">{classItem.time}</div>
                        <div className="text-sm text-gray-600">{classItem.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className={`font-semibold ${getAvailabilityColor(classItem.spots, classItem.capacity)}`}>
                          {classItem.spots} spots left
                        </div>
                        <div className="text-sm text-gray-600">of {classItem.capacity} total</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-semibold text-gray-900">Studio A</div>
                        <div className="text-sm text-gray-600">2nd Floor</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 lg:ml-6">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    Details
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Class Capacity</span>
                  <span>{classItem.capacity - classItem.spots}/{classItem.capacity} enrolled</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((classItem.capacity - classItem.spots) / classItem.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Never Miss Your Favorite Class
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download our mobile app to book classes, set reminders, and get notified 
              about schedule changes or new class additions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Download App
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              View Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;