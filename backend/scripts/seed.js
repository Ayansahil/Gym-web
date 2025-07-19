import { query } from '../config/database.js';

const seedData = async () => {
  try {
    console.log('Seeding database with sample data...');

    // Seed memberships
    await query(`
      INSERT INTO memberships (name, price, duration, features, popular) VALUES
      ('Basic', 29.99, '1 Month', ARRAY['Access to gym equipment', 'Locker room access', 'Basic support'], false),
      ('Premium', 49.99, '1 Month', ARRAY['Access to gym equipment', 'Locker room access', 'Group classes', 'Personal trainer consultation', 'Nutrition guidance'], true),
      ('Elite', 79.99, '1 Month', ARRAY['Access to gym equipment', 'Locker room access', 'Group classes', 'Personal trainer sessions', 'Nutrition guidance', 'Massage therapy', 'Priority booking'], false),
      ('Annual Basic', 299.99, '12 Months', ARRAY['Access to gym equipment', 'Locker room access', 'Basic support', '2 months free'], false),
      ('Annual Premium', 499.99, '12 Months', ARRAY['Access to gym equipment', 'Locker room access', 'Group classes', 'Personal trainer consultation', 'Nutrition guidance', '2 months free'], false)
      ON CONFLICT DO NOTHING
    `);

    // Seed trainers
    await query(`
      INSERT INTO trainers (name, specialization, experience, bio, image_url) VALUES
      ('Sarah Johnson', 'Weight Training & Strength', '5 years', 'Certified personal trainer specializing in strength training and muscle building. Passionate about helping clients achieve their fitness goals through proper form and progressive overload.', 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400'),
      ('Mike Rodriguez', 'Cardio & HIIT', '7 years', 'High-energy trainer focused on cardiovascular fitness and high-intensity interval training. Known for motivating workouts that burn calories and build endurance.', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'),
      ('Emily Chen', 'Yoga & Flexibility', '6 years', 'Certified yoga instructor with expertise in flexibility, balance, and mindfulness. Creates a peaceful environment for both beginners and advanced practitioners.', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400'),
      ('David Thompson', 'CrossFit & Functional', '8 years', 'CrossFit Level 2 trainer specializing in functional movements and athletic performance. Focuses on building real-world strength and conditioning.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'),
      ('Lisa Martinez', 'Pilates & Core', '4 years', 'Pilates instructor dedicated to core strength, postural alignment, and injury prevention. Provides personalized attention to ensure proper technique.', 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400')
      ON CONFLICT DO NOTHING
    `);

    // Seed schedule
    await query(`
      INSERT INTO schedule (class_name, trainer_name, day_of_week, start_time, end_time, max_participants) VALUES
      ('Morning Strength', 'Sarah Johnson', 'Monday', '06:00', '07:00', 15),
      ('HIIT Blast', 'Mike Rodriguez', 'Monday', '18:00', '19:00', 20),
      ('Sunrise Yoga', 'Emily Chen', 'Tuesday', '06:30', '07:30', 12),
      ('CrossFit WOD', 'David Thompson', 'Tuesday', '17:30', '18:30', 16),
      ('Core Power', 'Lisa Martinez', 'Wednesday', '12:00', '13:00', 14),
      ('Strength Training', 'Sarah Johnson', 'Wednesday', '19:00', '20:00', 15),
      ('Cardio Circuit', 'Mike Rodriguez', 'Thursday', '06:00', '07:00', 18),
      ('Yoga Flow', 'Emily Chen', 'Thursday', '18:30', '19:30', 12),
      ('Functional Fitness', 'David Thompson', 'Friday', '17:00', '18:00', 16),
      ('Pilates Plus', 'Lisa Martinez', 'Friday', '12:30', '13:30', 14),
      ('Weekend Warriors', 'Mike Rodriguez', 'Saturday', '09:00', '10:00', 20),
      ('Restorative Yoga', 'Emily Chen', 'Sunday', '10:00', '11:00', 15)
      ON CONFLICT DO NOTHING
    `);

    // Seed testimonials
    await query(`
      INSERT INTO testimonials (name, content, rating, image_url, approved) VALUES
      ('John Smith', 'Amazing gym with top-notch equipment and fantastic trainers. I have seen incredible results in just 3 months!', 5, 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', true),
      ('Amanda Wilson', 'The personal training sessions with Sarah have transformed my fitness journey. Highly recommend this gym!', 5, 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', true),
      ('Robert Chen', 'Great variety of classes and flexible scheduling. The CrossFit sessions are particularly challenging and fun.', 4, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', true),
      ('Maria Garcia', 'Clean facilities, friendly staff, and excellent yoga classes. Emily is an amazing instructor!', 5, 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', true),
      ('Tom Anderson', 'Been a member for over a year now. The community here is supportive and the trainers really care about your progress.', 5, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', true)
      ON CONFLICT DO NOTHING
    `);

    // Seed about sections
    await query(`
      INSERT INTO about (section, title, content, image_url) VALUES
      ('mission', 'Our Mission', 'At FitLife Gym, we are dedicated to helping individuals achieve their fitness goals through personalized training, state-of-the-art equipment, and a supportive community environment. We believe fitness is not just about physical transformation, but about building confidence, discipline, and a healthy lifestyle.', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800'),
      ('history', 'Our Story', 'Founded in 2018, FitLife Gym started as a small community fitness center with a big vision. Over the years, we have grown into a premier fitness destination, serving thousands of members while maintaining our commitment to personal attention and results-driven training programs.', 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800'),
      ('values', 'Our Values', 'We believe in integrity, inclusivity, and innovation. Our gym welcomes people of all fitness levels, ages, and backgrounds. We are committed to providing a safe, clean, and motivating environment where everyone can pursue their fitness journey with confidence.', 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800'),
      ('facilities', 'World-Class Facilities', 'Our 15,000 square foot facility features cutting-edge equipment, spacious workout areas, modern locker rooms, and specialized zones for different training styles. From cardio machines to free weights, from yoga studios to CrossFit boxes, we have everything you need for a complete workout.', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800')
      ON CONFLICT DO NOTHING
    `);

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
};

// Run seeding
seedData()
  .then(() => {
    console.log('🎉 Database seeding completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  });