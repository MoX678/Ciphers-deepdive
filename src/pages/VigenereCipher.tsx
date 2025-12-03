import { useState, useEffect } from "react";
import { CipherLayout } from "@/components/CipherLayout";
import { LetterBox } from "@/components/LetterBox";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function vigenereEncrypt(text: string, key: string): string {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "");
  
  if (!cleanKey) return cleanText;
  
  return cleanText
    .split("")
    .map((char, i) => {
      const textIndex = ALPHABET.indexOf(char);
      const keyIndex = ALPHABET.indexOf(cleanKey[i % cleanKey.length]);
      return ALPHABET[(textIndex + keyIndex) % 26];
    })
    .join("");
}

function vigenereDecrypt(text: string, key: string): string {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "");
  
  if (!cleanKey) return cleanText;
  
  return cleanText
    .split("")
    .map((char, i) => {
      const textIndex = ALPHABET.indexOf(char);
      const keyIndex = ALPHABET.indexOf(cleanKey[i % cleanKey.length]);
      return ALPHABET[(textIndex - keyIndex + 26) % 26];
    })
    .join("");
}

export default function VigenereCipher() {
  const [inputText, setInputText] = useState("ATTACKATDAWN");
  const [key, setKey] = useState("LEMON");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [outputText, setOutputText] = useState("");

  const cleanInput = inputText.toUpperCase().replace(/[^A-Z]/g, "");
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "");
  const processText = mode === "encrypt" ? vigenereEncrypt : vigenereDecrypt;

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveIndex(0);
    setOutputText("");
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setActiveIndex(-1);
    setOutputText(processText(inputText, key));
  };

  useEffect(() => {
    if (!isAnimating || activeIndex < 0) return;

    if (activeIndex >= cleanInput.length) {
      setIsAnimating(false);
      return;
    }

    const timer = setTimeout(() => {
      const textChar = cleanInput[activeIndex];
      const keyChar = cleanKey[activeIndex % cleanKey.length];
      const textIndex = ALPHABET.indexOf(textChar);
      const keyIndex = ALPHABET.indexOf(keyChar);
      
      const encrypted = mode === "encrypt"
        ? ALPHABET[(textIndex + keyIndex) % 26]
        : ALPHABET[(textIndex - keyIndex + 26) % 26];
      
      setOutputText((prev) => prev + encrypted);
      setActiveIndex((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [isAnimating, activeIndex, cleanInput, cleanKey, mode]);

  useEffect(() => {
    setOutputText(processText(inputText, key));
  }, [inputText, key, mode]);

  const getKeyChar = (index: number) => {
    if (!cleanKey) return "";
    return cleanKey[index % cleanKey.length];
  };

  const getCurrentCalculation = () => {
    if (activeIndex < 0 || activeIndex >= cleanInput.length || !isAnimating) return null;
    
    const textChar = cleanInput[activeIndex];
    const keyChar = getKeyChar(activeIndex);
    const textIndex = ALPHABET.indexOf(textChar);
    const keyIndex = ALPHABET.indexOf(keyChar);
    
    if (mode === "encrypt") {
      const result = (textIndex + keyIndex) % 26;
      return {
        formula: `(${textIndex} + ${keyIndex}) mod 26 = ${result}`,
        result: ALPHABET[result],
        operation: "+"
      };
    } else {
      const result = (textIndex - keyIndex + 26) % 26;
      return {
        formula: `(${textIndex} - ${keyIndex} + 26) mod 26 = ${result}`,
        result: ALPHABET[result],
        operation: "-"
      };
    }
  };

  const calculation = getCurrentCalculation();

  return (
    <CipherLayout
      title="Vigenère Cipher"
      description="Polyalphabetic cipher using a keyword for shifting"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mode Toggle */}
        <div className="flex justify-center">
          <ModeToggle mode={mode} onChange={setMode} />
        </div>

        {/* Controls */}
        <div className="glass-card p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {mode === "encrypt" ? "Plaintext Message" : "Ciphertext Message"}
              </label>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 20))}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 font-mono text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={mode === "encrypt" ? "Enter message..." : "Enter ciphertext..."}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Keyword
              </label>
              <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 10))}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 font-mono text-lg text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter keyword..."
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={isAnimating ? () => setIsAnimating(false) : startAnimation}
              variant="neon"
              className="flex-1"
            >
              {isAnimating ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAnimating ? "Pause" : "Animate"}
            </Button>
            <Button onClick={resetAnimation} variant="outline">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Visualization */}
        <div className="glass-card p-6 space-y-6">
          <h3 className="text-lg font-semibold text-foreground">
            Step-by-Step {mode === "encrypt" ? "Encryption" : "Decryption"}
          </h3>
          
          {/* Key (repeated) */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">Key (repeated)</p>
            <div className="flex flex-wrap gap-2">
              {cleanInput.split("").map((_, i) => (
                <LetterBox
                  key={`key-${i}`}
                  letter={getKeyChar(i)}
                  variant="key"
                  isActive={i === activeIndex}
                  showIndex
                  index={ALPHABET.indexOf(getKeyChar(i))}
                />
              ))}
            </div>
          </div>

          {/* Input letters */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {mode === "encrypt" ? "Plaintext" : "Ciphertext"}
            </p>
            <div className="flex flex-wrap gap-2">
              {cleanInput.split("").map((letter, i) => (
                <LetterBox
                  key={`input-${i}`}
                  letter={letter}
                  variant="input"
                  isActive={i === activeIndex}
                  isHighlighted={i < activeIndex}
                  showIndex
                  index={ALPHABET.indexOf(letter)}
                />
              ))}
            </div>
          </div>

          {/* Transformation */}
          <div className="flex items-center justify-center py-4">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className={mode === "encrypt" ? "text-primary" : "text-secondary"}>↓</span>
              <span className="font-mono text-sm text-center">
                ({mode === "encrypt" ? "Plaintext" : "Ciphertext"} index {mode === "encrypt" ? "+" : "-"} Key index) mod 26
              </span>
              <span className={mode === "encrypt" ? "text-primary" : "text-secondary"}>↓</span>
            </div>
          </div>

          {/* Output letters */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {mode === "encrypt" ? "Ciphertext" : "Plaintext"}
            </p>
            <div className="flex flex-wrap gap-2">
              {(isAnimating ? outputText : processText(inputText, key)).split("").map((letter, i) => (
                <LetterBox
                  key={`output-${i}`}
                  letter={letter}
                  variant="output"
                  isHighlighted={i === activeIndex - 1}
                  showIndex
                  index={ALPHABET.indexOf(letter)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Current calculation */}
        {calculation && (
          <div className="glass-card p-6 border-primary/50">
            <h3 className="text-lg font-semibold text-primary mb-3">Current Calculation</h3>
            <div className="font-mono text-foreground space-y-2">
              <p>
                {mode === "encrypt" ? "Plaintext" : "Ciphertext"}:{" "}
                <span className="text-primary">{cleanInput[activeIndex]}</span> 
                (index: {ALPHABET.indexOf(cleanInput[activeIndex])})
              </p>
              <p>
                Key: <span className="text-secondary">{getKeyChar(activeIndex)}</span> 
                (index: {ALPHABET.indexOf(getKeyChar(activeIndex))})
              </p>
              <p>{calculation.formula}</p>
              <p>
                Result: <span className={mode === "encrypt" ? "text-primary" : "text-secondary"}>
                  {calculation.result}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Explanation */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">How It Works</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            {mode === "encrypt" ? (
              <>
                <p>
                  The Vigenère cipher encrypts by using a keyword to determine different shifts for each letter.
                </p>
                <p>For each letter in the plaintext:</p>
                <ol className="list-decimal list-inside space-y-1 font-mono text-foreground">
                  <li>Find the corresponding key letter (keyword repeats)</li>
                  <li>Add the plaintext letter's index to the key letter's index</li>
                  <li>Take modulo 26 to get the ciphertext letter</li>
                </ol>
              </>
            ) : (
              <>
                <p>
                  To decrypt, we subtract the key letter's index instead of adding it.
                </p>
                <p>For each letter in the ciphertext:</p>
                <ol className="list-decimal list-inside space-y-1 font-mono text-foreground">
                  <li>Find the corresponding key letter (keyword repeats)</li>
                  <li>Subtract the key letter's index from the ciphertext letter's index</li>
                  <li>Take modulo 26 (adding 26 first to handle negatives)</li>
                </ol>
              </>
            )}
          </div>
        </div>
      </div>
    </CipherLayout>
  );
}
