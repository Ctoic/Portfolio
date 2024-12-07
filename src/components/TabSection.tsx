import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Briefcase, Award, Code, Users } from 'lucide-react';
import { Loader2 } from 'lucide-react';

// Lazy load tab components
const Education = lazy(() => import('./tabs/Education'));
const Experience = lazy(() => import('./tabs/Experience'));
const Projects = lazy(() => import('./tabs/Projects'));
const Skills = lazy(() => import('./tabs/Skills'));
const Activities = lazy(() => import('./tabs/Activities'));

const tabs = [
  { id: 'education', label: 'Education', icon: BookOpen, Component: Education },
  { id: 'experience', label: 'Experience', icon: Briefcase, Component: Experience },
  { id: 'projects', label: 'Projects', icon: Code, Component: Projects },
  { id: 'skills', label: 'Skills', icon: Award, Component: Skills },
  { id: 'activities', label: 'Activities', icon: Users, Component: Activities }
];

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <Loader2 className="w-8 h-8 text-indigo-600" />
    </motion.div>
  </div>
);

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            {tabs.map((tab) => 
              tab.id === activeTab && <tab.Component key={tab.id} />
            )}
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}