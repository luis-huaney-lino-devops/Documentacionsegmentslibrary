import { Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Highlight, themes } from "prism-react-renderer";

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      toast.success("Código copiado al portapapeles");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
    >
      <Copy size={16} className={copied ? "text-green-400" : "text-gray-300"} />
    </button>
  );
};

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
  <div className="relative">
    <Highlight theme={themes.vsDark} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} p-4 rounded-md overflow-x-auto text-sm md:text-base`}
          style={style}
        >
          {tokens.map((line, i) => {
            // Extraemos la propiedad "key" para evitar pasarla en el spread
            const { key: _lineKey, ...lineProps } = getLineProps({ line, key: i });
            return (
              <div key={i} {...lineProps}>
                {line.map((token, j) => {
                  const { key: _tokenKey, ...tokenProps } = getTokenProps({ token, key: j });
                  return <span key={j} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
    <CopyButton code={code} />
  </div>
);

export default CodeBlock;
