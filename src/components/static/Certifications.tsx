type Certification = {
    title: string;
    date: string;
    issuer: string;
    icon: string;
  };
  
  const certifications: Certification[] = [
    {
      title: "AWS Solutions Architect Associate",
      date: "2024",
      issuer: "Amazon Web Services",
      icon: "✅"
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
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-none transition-colors"
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4">{cert.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <div className="text-gray-600 dark:text-gray-400">
                    <div>{cert.issuer}</div>
                    <div>{cert.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
