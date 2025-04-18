import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../body/inputBody.css"

const CodeCompiler = ({highlightedLine}) => {

  const demo = " #include<stdio.h>\n static int Kaushik = 112 ; \n  int sum(int x, int y);\n int main(){\n	int a = 5;\n	int b = 10;\n	int ans;\n	ans = sum(a,b);	\n 	return 0; \n }\n int sum(int x, int y){\n return x+y; \n }\n"
  const [code, setCode] = useState(demo); // User input code
  const [output, setOutput] = useState(""); // Compilation output
  const [error, setError] = useState(""); // Compilation error
  const [status, setStatus] = useState(""); // Status message
  const [isLoading, setIsLoading] = useState(false); // Loader
  const [lines, setLines] = useState(["1"]); // Line numbers state

  const textAreaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  const language = 50; // C language ID (Judge0)
  const RAPID_API_KEY = "9f6b81056fmsh0676fc084d91ac3p174b83jsn01b07a82eae6"; // Your RapidAPI key
  const RAPID_API_HOST = "judge0-ce.p.rapidapi.com"; // RapidAPI host

  useEffect(() => {
    updateLineNumbers();
  }, [code]);

  const updateLineNumbers = () => {
    const numberOfLines = code.split("\n").length;
    setLines(Array.from({ length: numberOfLines }, (_, i) => i + 1));
  };

  const syncScroll = () => {
    if (textAreaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError("");
      setOutput("");
      setStatus("Submitting...");

      const response = await axios.post(
        `https://${RAPID_API_HOST}/submissions`, // Judge0 API endpoint
        {
          language_id: language,
          source_code: code,
          stdin: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": RAPID_API_KEY,
            "X-RapidAPI-Host": RAPID_API_HOST,
          },
        }
      );

      if (!response.data.token) {
        throw new Error("Please enter a code in text area...");
      }

      const token = response.data.token;
      setStatus("Code submitted. Fetching results...");

      const resultResponse = await fetchResult(token);
      setStatus(resultResponse.status.description || "Execution Completed ✅");

      setOutput(resultResponse.stdout || "");
      setError(resultResponse.compile_output || resultResponse.stderr || "");
    } catch (error) {
      console.error("API Request Failed:", error);
      setError("API request failed. Please try again.");
      setStatus("Error occurred ❌");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResult = async (token) => {
    try {
      for (let i = 0; i < 10; i++) {
        const resultResponse = await axios.get(
          `https://${RAPID_API_HOST}/submissions/${token}?base64_encoded=true`,
          {
            headers: {
              "X-RapidAPI-Key": RAPID_API_KEY,
              "X-RapidAPI-Host": RAPID_API_HOST,
            },
          }
        );

        if (resultResponse.data.status.id > 2) {
          if (resultResponse.data.stdout) {
            resultResponse.data.stdout = atob(resultResponse.data.stdout);
          }
          if (resultResponse.data.stderr) {
            resultResponse.data.stderr = atob(resultResponse.data.stderr);
          }
          if (resultResponse.data.compile_output) {
            resultResponse.data.compile_output = atob(resultResponse.data.compile_output);
          }
          return resultResponse.data;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      throw new Error("Execution timeout after 10 retries.");
    } catch (error) {
      console.error("Result Fetch Failed:", error.response ? error.response.data : error.message);
      return { status: { description: "Error fetching result" } };
    }
  };

  return (
    <>
      <div className="textAreaDiv" style={{ display: "flex" }}>
        <div
          className="line-numbers"
          ref={lineNumbersRef}

          
        >
          {lines.map((line) => (
            <div key={line}
          
            className={parseInt(highlightedLine) === line ? "highlight" : ""}
       
            
            >{line}</div>
          ))}
        </div>
        <textarea
          className="textArea"
          placeholder="Enter C code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onScroll={syncScroll}
          ref={textAreaRef}
          
        ></textarea>
      </div>

      <div className="statusChecking">
        <div className="runBtn">
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Running..." : "Run Code"}
          </button>
        </div>

        <div className="status">
          <span>Status: {status}</span>
          {output && <pre>{output}</pre>}
          {error && <pre>{error}</pre>}
        </div>
      </div>
    </>
  );
};

export default CodeCompiler;
