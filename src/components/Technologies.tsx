import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Technology {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  badge: { text: string; theme: string };
  category: string;
  level: string;
  rating: string;
}

const TechCatalog = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stack, setStack] = useState<Technology[]>([]);
  const fetchTechnologies = async () => {
    const res = await fetch('/technologies.json');
    const data = await res.json();
    setTechnologies(data);
    setIsLoading(false);
  }
  fetchTechnologies();
  const addToStack = (tech: Technology) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
      toast.success(`${tech.name} added to your stack!`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const removeFromStack = (id: string) => {
    const removedTech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    
    if (removedTech) {
      toast.info(`${removedTech.name} removed.`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const clearStack = () => {
    setStack([]);
    toast.error("All technologies removed from stack.", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <section className="max-w-[1216px] mx-auto px-4 sm:px-6 py-20 font-sans">
      
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B1120] tracking-tight mb-3">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="text-gray-500 text-[17px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        <div className="flex-1 w-full">
          {isLoading ? (
            <div className="w-full flex items-center justify-center py-32">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <div key={tech.id} className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full p-2.5">
                      <img src={tech.logoUrl} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className={`px-3 py-1 text-[12px] font-semibold rounded-full ${tech.badge.theme}`}>
                      {tech.badge.text}
                    </span>
                  </div>

                  <div className="flex-1 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-3">
                      {tech.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-6 text-[12px] font-medium text-gray-600">
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 bg-gray-50 rounded-md border border-gray-100">{tech.category}</span>
                      <span className="px-2.5 py-1 bg-gray-50 rounded-md border border-gray-100 hidden sm:inline-block">{tech.level}</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBF24" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>
                      {tech.rating}
                    </div>
                  </div>

                  <button onClick={() => addToStack(tech)} className={`w-full cursor-pointer py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${stack.some((item) => item.id === tech.id) ? 'bg-gray-200 text-gray-500' : 'text-white bg-[#0F172A] hover:bg-gray-800'}`}>
                    {stack.some((item) => item.id === tech.id) ? 'Added to Stack' : 'Add to Stack'}
                  </button>

                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-[340px] sticky top-28 bg-white border border-gray-100 shadow-sm rounded-[20px] p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
          <p className="text-[13px] text-gray-500 mb-6">{stack.length} Technology Selected</p>

          <div className="flex flex-col gap-3 mb-6 min-h-[150px]">
            {stack.length === 0 ? (
              <div className="flex-1 flex items-center justify-center text-[13px] text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">
                No technologies selected yet.
              </div>
            ) : (
              stack.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full p-1.5 flex-shrink-0">
                    <img src={item.logoUrl} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[14px] font-bold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-[11px] text-gray-500 truncate">{item.category}</p>
                  </div>
                  <button onClick={() => removeFromStack(item.id)} className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))
            )}
          </div>

          {stack.length > 0 && (
            <button onClick={clearStack} className="w-full cursor-pointer py-2.5 rounded-lg text-[14px] font-semibold text-red-500 bg-white border border-red-200 hover:bg-red-50 transition-colors">
              Remove All
            </button>
          )}
        </div>

      </div>
      <ToastContainer />
    </section>
  );
};

export default TechCatalog;