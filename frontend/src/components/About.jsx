import React from 'react';
import { Code2, Sparkles, Database, Cloud } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { aboutText, metricsData } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "AI/ML Development",
      description: "Building intelligent systems with cutting-edge technologies"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Agentic AI",
      description: "Developing autonomous goal-driven AI agents"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Creating robust data pipelines and ETL workflows"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Deployment",
      description: "Deploying scalable ML solutions to production"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {aboutText}
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              {metricsData.map((metric, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
