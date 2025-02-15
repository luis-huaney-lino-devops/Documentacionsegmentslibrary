
const TerminalLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="relative bg-[#1a1a1a] text-green-500 font-mono text-2xl p-8 w-[500px] rounded-lg border border-gray-700 shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-lg px-4 flex items-center justify-between">
          <div className="text-gray-300 text-sm">Estado</div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
        
        <div className="mt-6 overflow-hidden">
          <div className="animate-typing-cursor inline-block whitespace-nowrap overflow-hidden border-r-4 border-green-500">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes typing {
    0%, 10% { width: 0 }
    45%, 55% { width: 6.2em }
    90%, 100% { width: 0 }
  }

  @keyframes blink {
    50% { border-color: transparent }
  }

  .animate-typing-cursor {
    animation: 
      typing 4s steps(11) infinite,
      blink 0.5s step-end infinite alternate;
  }
`;

const LoaderTerminalComponent = () => (
  <>
    <style>{styles}</style>
    <TerminalLoader />
  </>
);

export default LoaderTerminalComponent;