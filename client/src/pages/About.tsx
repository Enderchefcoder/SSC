import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div>
      <Hero showSearch={false} />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Social Studies Corner</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Making complex topics accessible while maintaining academic rigor and educational standards
          </p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-500">
            <p>
              Social Studies Corner was created by educators who believe that understanding history, geography, civics, and economics is essential for all students to become informed citizens and critical thinkers.
            </p>
            <p>
              Our mission is to provide high-quality, engaging educational resources that make social studies accessible to learners of all ages while maintaining academic rigor and educational standards.
            </p>
            <p>
              We strive to present complex topics in a conversational tone that engages students while still providing depth and accuracy. Each article and resource is carefully crafted to align with educational standards and provide multiple perspectives on historical events and social issues.
            </p>
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">Meet the educators and subject matter experts behind Social Studies Corner</p>
          
          <div className="mt-10 grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 bg-primary-100">
                    <AvatarFallback className="text-primary-600 text-xl font-medium">ES</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-bold">Dr. Emily Sands</h3>
                  <p className="text-sm text-gray-500">Archaeologist & Ancient History Specialist</p>
                  <p className="mt-4 text-gray-600 text-center">
                    Emily specializes in ancient Egyptian architecture and construction techniques, with field experience at excavation sites throughout Egypt and the Middle East.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 bg-primary-100">
                    <AvatarFallback className="text-primary-600 text-xl font-medium">MA</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-bold">Prof. Marcus Aurelius</h3>
                  <p className="text-sm text-gray-500">Classical History & Political Institutions</p>
                  <p className="mt-4 text-gray-600 text-center">
                    Marcus is a professor of Classical History specializing in Roman political institutions and their influence on modern democratic systems around the world.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 bg-primary-100">
                    <AvatarFallback className="text-primary-600 text-xl font-medium">SR</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-bold">Dr. Sofia Rodriguez</h3>
                  <p className="text-sm text-gray-500">Anthropologist & Pre-Columbian Specialist</p>
                  <p className="mt-4 text-gray-600 text-center">
                    Sofia is an anthropologist whose research focuses on pre-Columbian mathematics, astronomy, and cultural practices of Mesoamerican civilizations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Separator className="my-16" id="contact" />
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">We'd love to hear from you! Send us your questions, feedback, or suggestions.</p>
          
          <div className="mt-10 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      Send Message
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Separator className="my-16" id="privacy" />
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-500">
            <p>
              At Social Studies Corner, we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
            <h3>Information We Collect</h3>
            <p>
              We collect information you voluntarily provide when subscribing to our newsletter or contacting us. This may include your name, email address, and any other information you choose to provide.
            </p>
            <h3>How We Use Your Information</h3>
            <p>
              We use the information we collect to provide and improve our services, send newsletters, respond to your inquiries, and update you about new content and features.
            </p>
            <h3>Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
        </div>
        
        <Separator className="my-16" id="terms" />
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-500">
            <p>
              By accessing and using Social Studies Corner, you agree to these Terms of Service and our Privacy Policy.
            </p>
            <h3>Copyright and Content Use</h3>
            <p>
              All content on this website, including text, images, and downloadable resources, is the intellectual property of Social Studies Corner and protected by copyright laws. Educators and students may use our content for educational purposes, but commercial use or redistribution is prohibited without prior written permission.
            </p>
            <h3>User Contributions</h3>
            <p>
              If you contribute content to our platform, you retain ownership of your intellectual property, but grant us a non-exclusive license to display, distribute, and use the content in connection with our services.
            </p>
            <h3>Disclaimer</h3>
            <p>
              While we strive for accuracy in all our content, we make no warranties about the completeness, reliability, or accuracy of information on this website. Any reliance on such information is strictly at your own risk.
            </p>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </div>
  );
};

export default About;
