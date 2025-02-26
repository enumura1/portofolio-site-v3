type Skill = {
    name: string;
    items: Array<{
      name: string;
      icon?: string;
    }>;
  };
  
  const skills: Skill[] = [
    {
      name: "Frontend",
      items: [
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "🔷" },
        { name: "React", icon: "⚛️" },
        { name: "Vite", icon: "⚡" }
      ]
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", icon: "🟢" }
      ]
    },
    {
      name: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Git", icon: "🔄" }
      ]
    },
    {
      name: "Creative Tools",
      items: [
        { name: "Blender", icon: "🎨" },
        { name: "Three.js", icon: "🌐" }
      ]
    }
  ];
  
  export function Skills() {
    return (
      <section className="py-20 px-4 max-w-4xl mx-auto" id="skills">
        <h2 className="text-4xl font-bold mb-8">💻 Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div 
              key={category.name} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-none transition-colors duration-300 
                       hover:border-blue-200 dark:hover:border-blue-800 border border-transparent"
            >
              <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                {category.name}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {category.items.map((skill) => (
                  <li 
                    key={skill.name} 
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center
                             transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {skill.icon && (
                      <span className="text-xl mr-3">{skill.icon}</span>
                    )}
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  