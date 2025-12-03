import { useState, useEffect } from "react";
import { CipherLayout } from "@/components/CipherLayout";
import { LetterBox } from "@/components/LetterBox";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Shuffle } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateRandomKey(): string {
  const letters = ALPHABET.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join("");
}

function monoEncrypt(text: string, key: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      const index = ALPHABET.indexOf(char);
      if (index !== -1) {
        return key[index];
      }
      return char;
    })
    .join("");
}

function monoDecrypt(text: string, key: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      const index = key.indexOf(char);
      if (index !== -1) {
        return ALPHABET[index];
      }
      return char;
    })
    .join("");
}

export default function MonoalphabeticCipher() {
  const [inputText, setInputText] = useState("HELLO");
  const [key, setKey] = useState("QWERTYUIOPASDFGHJKLZXCVBNM");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [outputText, setOutputText] = useState("");

  const cleanInput = inputText.toUpperCase().replace(/[^A-Z]/g, "");
  const processText = mode === "encrypt" ? monoEncrypt : monoDecrypt;

  const isValidKey = key.length === 26 && new Set(key.toUpperCase()).size === 26;

  const startAnimation = () => {
    if (!isValidKey) return;
    setIsAnimating(true);
    setActiveIndex(0);
    setOutputText("");
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setActiveIndex(-1);
    setOutputText(processText(inputText, key));
  };

  const shuffleKey = () => {
    setKey(generateRandomKey());
  };

  useEffect(() => {
    if (!isAnimating || activeIndex < 0) return;

    if (activeIndex >= cleanInput.length) {
      setIsAnimating(false);
      return;
    }

    const timer = setTimeout(() => {
      const char = cleanInput[activeIndex];
      let processed: string;
      
      if (mode === "encrypt") {
        const index = ALPHABET.indexOf(char);
        processed = key[index];
      } else {
        const index = key.indexOf(char);
        processed = ALPHABET[index];
      }
      
      setOutputText((prev) => prev + processed);
      setActiveIndex((prev) => prev + 1);
    }, 600);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimating, activeIndex]);

  useEffect(() => {
    if (isValidKey) {
      setOutputText(processText(inputText, key));
    }
  }, [inputText, key, mode, isValidKey, processText]);

  const getCurrentMapping = () => {
    if (activeIndex < 0 || activeIndex >= cleanInput.length || !isAnimating) return null;
    
    const inputChar = cleanInput[activeIndex];
    
    if (mode === "encrypt") {
      const plainIndex = ALPHABET.indexOf(inputChar);
      return {
        from: inputChar,
        fromIndex: plainIndex,
        to: key[plainIndex],
        toIndex: key.indexOf(key[plainIndex])
      };
    } else {
      const cipherIndex = key.indexOf(inputChar);
      return {
        from: inputChar,
        fromIndex: key.indexOf(inputChar),
        to: ALPHABET[cipherIndex],
        toIndex: cipherIndex
      };
    }
  };

  const currentMapping = getCurrentMapping();

  return (
    <CipherLayout
      title="Monoalphabetic Cipher"
      description="Simple substitution cipher with a fixed letter mapping"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mode Toggle */}
        <div className="flex justify-center">
          <ModeToggle mode={mode} onChange={setMode} />
        </div>

        {/* Controls */}
        <div className="glass-card p-6 space-y-6">
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
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-foreground">
                Substitution Key (26 unique letters)
              </label>
              <Button onClick={shuffleKey} variant="outline" size="sm" className="gap-2">
                <Shuffle className="w-4 h-4" />
                Randomize
              </Button>
            </div>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 26))}
              className={`w-full bg-input border rounded-lg px-4 py-3 font-mono text-lg text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary ${
                isValidKey ? "border-border" : "border-red-500"
              }`}
              placeholder="Enter 26 unique letters..."
              maxLength={26}
            />
            {!isValidKey && key.length > 0 && (
              <p className="text-xs text-red-500 mt-1">
                Key must contain all 26 letters exactly once
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={isAnimating ? () => setIsAnimating(false) : startAnimation}
              variant="neon"
              className="flex-1"
              disabled={!isValidKey}
            >
              {isAnimating ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAnimating ? "Pause" : "Animate"}
            </Button>
            <Button onClick={resetAnimation} variant="outline">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Alphabet Mapping Table */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Substitution Table</h3>
          
          <div className="overflow-x-auto">
            <div className="min-w-max">
              {/* Plain alphabet */}
              <div className="flex gap-1 mb-1">
                <div className="w-16 text-xs text-muted-foreground flex items-center">Plain:</div>
                {ALPHABET.split("").map((letter, i) => {
                  const isActive = currentMapping && 
                    ((mode === "encrypt" && letter === currentMapping.from) ||
                     (mode === "decrypt" && letter === currentMapping.to));
                  return (
                    <div
                      key={`plain-${i}`}
                      className={`w-8 h-8 flex items-center justify-center font-mono text-sm rounded transition-all ${
                        isActive 
                          ? "bg-primary text-primary-foreground ring-2 ring-primary" 
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
              
              {/* Arrow indicators */}
              <div className="flex gap-1 mb-1">
                <div className="w-16"></div>
                {ALPHABET.split("").map((_, i) => (
                  <div key={`arrow-${i}`} className="w-8 h-4 flex items-center justify-center text-muted-foreground text-xs">
                    ↓
                  </div>
                ))}
              </div>
              
              {/* Cipher alphabet */}
              <div className="flex gap-1">
                <div className="w-16 text-xs text-muted-foreground flex items-center">Cipher:</div>
                {key.split("").map((letter, i) => {
                  const isActive = currentMapping && 
                    ((mode === "encrypt" && letter === currentMapping.to) ||
                     (mode === "decrypt" && letter === currentMapping.from));
                  return (
                    <div
                      key={`cipher-${i}`}
                      className={`w-8 h-8 flex items-center justify-center font-mono text-sm rounded transition-all ${
                        isActive 
                          ? "bg-secondary text-secondary-foreground ring-2 ring-secondary" 
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {letter || "?"}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Visualization */}
        <div className="glass-card p-6 space-y-6">
          <h3 className="text-lg font-semibold text-foreground">
            Step-by-Step {mode === "encrypt" ? "Encryption" : "Decryption"}
          </h3>
          
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
                  index={mode === "encrypt" ? ALPHABET.indexOf(letter) : key.indexOf(letter)}
                />
              ))}
            </div>
          </div>

          {/* Transformation indicator */}
          <div className="flex items-center justify-center py-4">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className={mode === "encrypt" ? "text-primary" : "text-secondary"}>↓</span>
              <span className="font-mono text-sm text-center">
                {mode === "encrypt" 
                  ? "Look up each letter in substitution table" 
                  : "Reverse look up in substitution table"}
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
              {(isAnimating ? outputText : (isValidKey ? processText(inputText, key) : "")).split("").map((letter, i) => (
                <LetterBox
                  key={`output-${i}`}
                  letter={letter}
                  variant="output"
                  isHighlighted={i === activeIndex - 1}
                  showIndex
                  index={mode === "encrypt" ? key.indexOf(letter) : ALPHABET.indexOf(letter)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Current mapping */}
        {currentMapping && isAnimating && (
          <div className="glass-card p-6 border-primary/50">
            <h3 className="text-lg font-semibold text-primary mb-3">Current Substitution</h3>
            <div className="flex items-center justify-center gap-4 font-mono text-2xl">
              <div className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">
                  {mode === "encrypt" ? "Plain" : "Cipher"}
                </span>
                <span className="text-foreground bg-muted px-4 py-2 rounded-lg">
                  {currentMapping.from}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  index: {currentMapping.fromIndex}
                </span>
              </div>
              <span className="text-primary text-3xl">→</span>
              <div className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">
                  {mode === "encrypt" ? "Cipher" : "Plain"}
                </span>
                <span className="text-primary bg-primary/20 px-4 py-2 rounded-lg">
                  {currentMapping.to}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  index: {currentMapping.toIndex}
                </span>
              </div>
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
                  The monoalphabetic cipher replaces each letter with another letter according to a fixed substitution key.
                </p>
                <p>For each letter in the plaintext:</p>
                <ol className="list-decimal list-inside space-y-1 font-mono text-foreground">
                  <li>Find the letter's position in the standard alphabet (A=0, B=1, ...)</li>
                  <li>Look up the letter at that position in the cipher key</li>
                  <li>Use that letter as the ciphertext</li>
                </ol>
                <p className="mt-2">
                  Example with current key: A → {key[0]}, B → {key[1]}, C → {key[2]}
                </p>
              </>
            ) : (
              <>
                <p>
                  To decrypt, we reverse the substitution by finding each ciphertext letter in the key.
                </p>
                <p>For each letter in the ciphertext:</p>
                <ol className="list-decimal list-inside space-y-1 font-mono text-foreground">
                  <li>Find the letter's position in the cipher key</li>
                  <li>Look up the letter at that position in the standard alphabet</li>
                  <li>Use that letter as the plaintext</li>
                </ol>
                <p className="mt-2">
                  Example with current key: {key[0]} → A, {key[1]} → B, {key[2]} → C
                </p>
              </>
            )}
          </div>
        </div>

        {/* Security Note */}
        <div className="glass-card p-6 border-yellow-500/30">
          <h3 className="text-lg font-semibold text-yellow-500 mb-3">Security Note</h3>
          <p className="text-sm text-muted-foreground">
            While there are 26! (≈ 4 × 10²⁶) possible keys, monoalphabetic ciphers are easily broken 
            using <span className="text-foreground">frequency analysis</span>. In English, letters like 
            E, T, A, O, I, N appear most frequently, making it possible to deduce the key by analyzing 
            letter frequencies in the ciphertext.
          </p>
        </div>
      </div>
    </CipherLayout>
  );
}
