import GridMotion from '../store/GridMotion';
import React from 'react';

import { Icon,Award  } from 'lucide-react';
import { starNorth } from '@lucide/lab';

const ProjectCard = ({ p }) => {

    const items = [
        'Item 1',
        <div key='jsx-item-1'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 2',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 4',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 5',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 7',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 8',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 10',
        <div key='jsx-item-3'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 11',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 13',
        <div key='jsx-item-4'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 14',
        // Add more items as needed
      ];
      
  return (
    <div className="flex flex-col md:flex-row  rounded-lg shadow-lg overflow-hidden mb-8 max-w-5xl mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* Left side - Image */}
      <div className={`md:w-3/5 bg-${p.color} border flex items-center justify-center p-6`}>
        {/* <img 
          src={p.img} 
          alt={p.name} 
          className="w-full h-80 object-contain"
        /> */}
         <GridMotion items={items} />
     
      </div>

      {/* Right side - Content */}
      <div className="md:w-2/5 p-6 space-y-4">
        {/* Project Name */}
        <h3 className="text-2xl font-bold text-white flex">
        <Award size={25} className={`text-${p.color}`}/>
          {p.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed">
          {p.desc}
          
        </p>
        
        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold  mb-2">Key Features</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {p.features.map((feature, index) => (
              <p key={index} className={`flex text-${p.color}`}>
                <Icon iconNode={starNorth} />
                {feature}
                
                </p>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((tech, index) => (
              <span 
                key={index}
                className={`px-3 py-1 border text-${p.color} rounded-full text-sm font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View on GitHub 
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;