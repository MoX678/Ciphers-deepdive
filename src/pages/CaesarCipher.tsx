import { useState, useEffect } from "react";
import { CipherLayout } from "@/components/CipherLayout";
import { LetterBox } from "@/components/LetterBox";
import { AlphabetWheel } from "@/components/AlphabetWheel";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caesarEncrypt(text: string, shift: number): string {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      if (ALPHABET.includes(char)) {
        const index = ALPHABET.indexOf(char);
        return ALPHABET[(index + shift + 26) % 26];
      }
      return char;
    })
    .join("");
}

function caesarDecrypt(text: string, shift: number): string {
  return caesarEncrypt(text, -shift);
}

export default function CaesarCipher() {
  const [inputText, setInputText] = useState("HELLO");
  const [shift, setShift] = useState(3);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [outputText, setOutputText] = useState("");

  const processText = mode === "encrypt" ? caesarEncrypt : caesarDecrypt;
  const effectiveShift = mode === "encrypt" ? shift : -shift;

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveIndex(0);
    setOutputText("");
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setActiveIndex(-1);
    setOutputText(processText(inputText, shift));
  };

  useEffect(() => {
    if (!isAnimating || activeIndex < 0) return;

    if (activeIndex >= inputText.length) {
      setIsAnimating(false);
      return;
    }

    const timer = setTimeout(() => {
      const char = inputText[activeIndex].toUpperCase();
      const processed = ALPHABET.includes(char)
        ? ALPHABET[(ALPHABET.indexOf(char) + effectiveShift + 26) % 26]
        : char;
      setOutputText((prev) => prev + processed);
      setActiveIndex((prev) => prev + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [isAnimating, activeIndex, inputText, effectiveShift]);

  useEffect(() => {
    setOutputText(processText(inputText, shift));
  }, [inputText, shift, mode]);

  const currentInputLetter = activeIndex >= 0 && activeIndex < inputText.length 
    ? inputText[activeIndex].toUpperCase() 
    : undefined;
  
  const currentOutputLetter = currentInputLetter && ALPHABET.includes(currentInputLetter)
    ? ALPHABET[(ALPHABET.indexOf(currentInputLetter) + effectiveShift + 26) % 26]
    : undefined;

  const displayShift = mode === "encrypt" ? shift : (26 - shift) % 26;

  return (
    <CipherLayout
      title="Caesar Cipher"
      description="Classic substitution cipher that shifts letters by a fixed amount"
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
              onChange={(e) => setInputText(e.target.value.toUpperCase().slice(0, 20))}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 font-mono text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={mode === "encrypt" ? "Enter your message..." : "Enter ciphertext..."}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Shift Value: <span className="text-primary font-mono">{shift}</span>
            </label>
            <Slider
              value={[shift]}
              onValueChange={([value]) => setShift(value)}
              min={1}
              max={25}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1 font-mono">
              <span>1</span>
              <span>25</span>
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
          
          {/* Input letters */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              Input ({mode === "encrypt" ? "Plaintext" : "Ciphertext"})
            </p>
            <div className="flex flex-wrap gap-2">
              {inputText.split("").map((letter, i) => (
                <LetterBox
                  key={`input-${i}`}
                  letter={letter}
                  variant="input"
                  isActive={i === activeIndex}
                  isHighlighted={i < activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Transformation indicator */}
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="font-mono text-sm">Each letter</span>
              <span className={mode === "encrypt" ? "text-primary" : "text-secondary"}>→</span>
              <span className="font-mono text-sm">
                {mode === "encrypt" ? "Shift by" : "Shift back by"}{" "}
                <span className={mode === "encrypt" ? "text-primary" : "text-secondary"}>{shift}</span>
              </span>
              <span className={mode === "encrypt" ? "text-primary" : "text-secondary"}>→</span>
              <span className="font-mono text-sm">New letter</span>
            </div>
          </div>

          {/* Output letters */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              Output ({mode === "encrypt" ? "Ciphertext" : "Plaintext"})
            </p>
            <div className="flex flex-wrap gap-2">
              {(isAnimating ? outputText : processText(inputText, shift)).split("").map((letter, i) => (
                <LetterBox
                  key={`output-${i}`}
                  letter={letter}
                  variant="output"
                  isHighlighted={i === activeIndex - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Alphabet mapping */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Alphabet Mapping</h3>
          <AlphabetWheel 
            shift={displayShift} 
            highlightedInput={currentInputLetter}
            highlightedOutput={currentOutputLetter}
          />
        </div>

        {/* Explanation */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">How It Works</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            {mode === "encrypt" ? (
              <>
                <p>
                  The Caesar cipher encrypts by shifting each letter forward by a fixed number of positions.
                </p>
                <p>
                  With a shift of <span className="text-primary font-mono">{shift}</span>:
                </p>
                <ul className="list-disc list-inside space-y-1 font-mono text-foreground">
                  <li>A → {ALPHABET[(0 + shift) % 26]}</li>
                  <li>B → {ALPHABET[(1 + shift) % 26]}</li>
                  <li>Z → {ALPHABET[(25 + shift) % 26]}</li>
                </ul>
              </>
            ) : (
              <>
                <p>
                  To decrypt, we shift each letter backward by the same amount used to encrypt.
                </p>
                <p>
                  With a shift of <span className="text-secondary font-mono">{shift}</span> (back):
                </p>
                <ul className="list-disc list-inside space-y-1 font-mono text-foreground">
                  <li>{ALPHABET[(0 + shift) % 26]} → A</li>
                  <li>{ALPHABET[(1 + shift) % 26]} → B</li>
                  <li>{ALPHABET[(25 + shift) % 26]} → Z</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </CipherLayout>
  );
}
