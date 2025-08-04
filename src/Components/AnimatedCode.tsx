import React, { useState, useEffect } from "react";

interface CodeSegment {
  text: string;
  color: string;
}

const codeSegments: CodeSegment[] = [
  { text: "if", color: "#569CD6" },
  { text: " (", color: "#D4D4D4" },
  { text: "$coffee", color: "#9CDCFE" },
  { text: "->", color: "#D4D4D4" },
  { text: "empty", color: "#DCDCAA" },
  { text: "()", color: "#D4D4D4" },
  { text: ") {", color: "#D4D4D4" },
  { text: "\n  ", color: "#D4D4D4" },
  { text: "$coffee", color: "#9CDCFE" },
  { text: "->", color: "#D4D4D4" },
  { text: "refill", color: "#DCDCAA" },
  { text: "();", color: "#D4D4D4" },
  { text: "\n} else {", color: "#D4D4D4" },
  { text: "\n  ", color: "#D4D4D4" },
  { text: "$coffee", color: "#9CDCFE" },
  { text: "->", color: "#D4D4D4" },
  { text: "drink", color: "#DCDCAA" },
  { text: "();", color: "#D4D4D4" },
  { text: "\n  ", color: "#D4D4D4" },
  { text: "code", color: "#DCDCAA" },
  { text: "();", color: "#D4D4D4" },
  { text: "\n}", color: "#D4D4D4" }
];

const codeSegments2: CodeSegment[] = [
  { text: "function", color: "#569CD6" },
  { text: " repeat", color: "#f8cc05ff" },
  { text: "()", color: "#effda1ff" },
  { text: " {", color: "#effda1ff" },
  { text: "\n  ", color: "#D4D4D4" },
  { text: "eat();", color: "#9CDCFE" },
  { text: "\n  ", color: "#D4D4D4" },
  { text: "sleep();", color: "#9CDCFE" },
  { text: "\n  ", color: "#D4D4D4" },
  { text: "code();", color: "#9CDCFE" },
  { text: "\n  ", color: "#D4D4D4" },
  { text: "repeat();", color: "#9CDCFE" },
  { text: "\n}} ();", color: "#effda1ff" }
];

interface CodeTyperProps {
  segments: CodeSegment[];
}

const CodeTyper: React.FC<CodeTyperProps> = ({ segments }) => {
  const [displayed, setDisplayed] = useState<CodeSegment[]>([]);

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let currentColor = "";

    const interval = setInterval(() => {
      if (index >= segments.length) {
        clearInterval(interval);
        return;
      }

      if (charIndex === 0) {
        currentText = segments[index].text;
        currentColor = segments[index].color;
      }

      const nextChar = currentText.charAt(charIndex);
      if (nextChar) {
        setDisplayed((prev) => {
          const last = prev[prev.length - 1];
          if (last && last.color === currentColor) {
            return [
              ...prev.slice(0, -1),
              { text: last.text + nextChar, color: currentColor }
            ];
          } else {
            return [...prev, { text: nextChar, color: currentColor }];
          }
        });
        charIndex++;
      }

      if (charIndex >= currentText.length) {
        index++;
        charIndex = 0;
      }
    }, 50);

    return () => clearInterval(interval);
  }, [segments]);

  return (
    <pre
      style={{
        color: "#fff",
        padding: "1rem",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        textAlign: "left",
        flex: 1,
        minWidth: "300px"
      }}
    >
      {displayed.map((seg, i) => (
        <span key={i} style={{ color: seg.color }}>
          {seg.text}
        </span>
      ))}
    </pre>
  );
};

const AnimatedCode: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row", // side by side
        gap: "2rem",
        flexWrap: "wrap", // responsive fallback
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <CodeTyper segments={codeSegments} />
      <CodeTyper segments={codeSegments2} />
    </div>
  );
};

export default AnimatedCode;
