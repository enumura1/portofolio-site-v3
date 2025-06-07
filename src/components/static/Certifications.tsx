import { ExternalLink } from 'lucide-react';

type Certification = {
  title: string;
  date: string;
  issuer: string;
  icon: string;
  link: string;
};

const certifications: Certification[] = [
  {
    title: "AWS Solutions Architect Associate",
    date: "2024/10 ~",
    issuer: "Amazon Web Services",
    icon: "✅",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    title: "AWS Solutions Architect Professional",
    date: "2025/3 ~",
    issuer: "Amazon Web Services",
    icon: "✅",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-professional/"
  },
  {
    title: "AWS Certified Machine Learning - Specialty",
    date: "2025/6 ~",
    issuer: "Amazon Web Services",
    icon: "✅",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
  }
];

export function Certifications() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">⌨Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700
                     transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md"
          >
            <div className="flex items-start">
              <div className="text-3xl mr-4">{cert.icon}</div>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <div className="text-gray-600 dark:text-gray-400 mb-4">
                  <div>{cert.issuer}</div>
                  <div>{cert.date}</div>
                </div>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-all group"
                >
                  <span className="mr-1">View certification details</span>
                  <ExternalLink 
                    size={14} 
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
