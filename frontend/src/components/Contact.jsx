import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { profileData } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sendMessage = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          duration: 5000,
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Something went wrong",
          description: "Unable to send your message right now. Please try again later.",
          duration: 5000,
          variant: "destructive",
        });
      }
    };

    sendMessage();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: profileData.email,
      link: `mailto:${profileData.email}`
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: profileData.phone,
      link: `tel:${profileData.phone}`
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: profileData.location,
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: profileData.linkedin
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: profileData.github
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently {profileData.availability.toLowerCase()}. Let's discuss your next project!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-6 transition-all duration-300 hover:scale-105"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                    <CardContent className="p-4">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-center space-x-4 text-gray-300 group-hover:text-cyan-400 transition-colors"
                        >
                          <div className="text-cyan-400">{info.icon}</div>
                          <div>
                            <div className="text-sm text-gray-500">{info.label}</div>
                            <div className="font-medium">{info.value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4 text-gray-300">
                          <div className="text-cyan-400">{info.icon}</div>
                          <div>
                            <div className="text-sm text-gray-500">{info.label}</div>
                            <div className="font-medium">{info.value}</div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gray-900 border-2 border-gray-800 rounded-lg text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-cyan-400/10 to-transparent border-cyan-400/30">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">Open to Opportunities</h4>
                <p className="text-gray-400">
                  I'm currently seeking new challenges in AI/ML engineering. If you have an exciting opportunity, let's connect!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
