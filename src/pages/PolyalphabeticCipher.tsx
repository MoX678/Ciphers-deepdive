import { useState, useEffect } from "react";
import { CipherLayout } from "@/components/CipherLayout";
import { LetterBox } from "@/components/LetterBox";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Plus, Minus, ChevronRight, Info } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ShiftRule {
  position: number;
  shift: number;
}

function polyalphabeticEncrypt(text: string, rules: ShiftRule[]): string {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  if (rules.length === 0) return cleanText;
  
  return cleanText
    .split("")
    .map((char, i) => {
      const textIndex = ALPHABET.indexOf(char);
      const ruleIndex = i % rules.length;
      const shift = rules[ruleIndex].shift;
      return ALPHABET[(textIndex + shift + 26) % 26];
    })
    .join("");
}

function polyalphabeticDecrypt(text: string, rules: ShiftRule[]): string {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  if (rules.length === 0) return cleanText;
  
  return cleanText
    .split("")
    .map((char, i) => {
      const textIndex = ALPHABET.indexOf(char);
      const ruleIndex = i % rules.length;
      const shift = rules[ruleIndex].shift;
      return ALPHABET[(textIndex - shift + 26) % 26];
    })
    .join("");
}

export default function PolyalphabeticCipher() {
  const [inputText, setInputText] = useState("SECURITY");
  const [rules, setRules] = useState<ShiftRule[]>([
    { position: 1, shift: 3 },
    { position: 2, shift: 5 },
    { position: 3, shift: 7 },
  ]);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [outputText, setOutputText] = useState("");
  const [showTutorial, setShowTutorial] = useState(true);

  const cleanInput = inputText.toUpperCase().replace(/[^A-Z]/g, "");
  const processText = mode === "encrypt" ? polyalphabeticEncrypt : polyalphabeticDecrypt;

  const addRule = () => {
    if (rules.length < 10) {
      setRules([...rules, { position: rules.length + 1, shift: 1 }]);
    }
  };

  const removeRule = (index: number) => {
    if (rules.length > 1) {
      const newRules = rules.filter((_, i) => i !== index);
      setRules(newRules.map((r, i) => ({ ...r, position: i + 1 })));
    }
  };

  const updateShift = (index: number, shift: number) => {
    const newRules = [...rules];
    newRules[index].shift = ((shift % 26) + 26) % 26;
    setRules(newRules);
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveIndex(0);
    setOutputText("");
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setActiveIndex(-1);
    setOutputText(processText(inputText, rules));
  };

  useEffect(() => {
    if (!isAnimating || activeIndex < 0) return;

    if (activeIndex >= cleanInput.length) {
      setIsAnimating(false);
      return;
    }

    const timer = setTimeout(() => {
      const textChar = cleanInput[activeIndex];
      const ruleIndex = activeIndex % rules.length;
      const shift = rules[ruleIndex].shift;
      const textIndex = ALPHABET.indexOf(textChar);
      
      const resultIndex = mode === "encrypt"
        ? (textIndex + shift + 26) % 26
        : (textIndex - shift + 26) % 26;
      
      setOutputText((prev) => prev + ALPHABET[resultIndex]);
      setActiveIndex((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimating, activeIndex]);

  useEffect(() => {
    setOutputText(processText(inputText, rules));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText, rules, mode]);

  const getCurrentCalculation = () => {
    if (activeIndex < 0 || activeIndex >= cleanInput.length || !isAnimating) return null;
    
    const textChar = cleanInput[activeIndex];
    const ruleIndex = activeIndex % rules.length;
    const shift = rules[ruleIndex].shift;
    const textIndex = ALPHABET.indexOf(textChar);
    
    const resultIndex = mode === "encrypt"
      ? (textIndex + shift + 26) % 26
      : (textIndex - shift + 26) % 26;
    
    return {
      textChar,
      textIndex,
      ruleIndex,
      rulePosition: rules[ruleIndex].position,
      shift,
      resultIndex,
      result: ALPHABET[resultIndex],
      formula: mode === "encrypt"
        ? `(${textIndex} + ${shift}) mod 26 = ${resultIndex}`
        : `(${textIndex} - ${shift} + 26) mod 26 = ${resultIndex}`
    };
  };

  const calculation = getCurrentCalculation();

  // Get color for each rule
  const getRuleColor = (index: number) => {
    const colors = [
      { bg: "bg-blue-500/20", border: "border-blue-500", text: "text-blue-400" },
      { bg: "bg-green-500/20", border: "border-green-500", text: "text-green-400" },
      { bg: "bg-purple-500/20", border: "border-purple-500", text: "text-purple-400" },
      { bg: "bg-orange-500/20", border: "border-orange-500", text: "text-orange-400" },
      { bg: "bg-pink-500/20", border: "border-pink-500", text: "text-pink-400" },
      { bg: "bg-cyan-500/20", border: "border-cyan-500", text: "text-cyan-400" },
      { bg: "bg-yellow-500/20", border: "border-yellow-500", text: "text-yellow-400" },
      { bg: "bg-red-500/20", border: "border-red-500", text: "text-red-400" },
      { bg: "bg-indigo-500/20", border: "border-indigo-500", text: "text-indigo-400" },
      { bg: "bg-teal-500/20", border: "border-teal-500", text: "text-teal-400" },
    ];
    return colors[index % colors.length];
  };

  return (
    <CipherLayout
      title="Polyalphabetic Cipher"
      description="Position-based shifting with multiple shift rules"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Mode Toggle */}
        <div className="flex justify-center">
          <ModeToggle mode={mode} onChange={setMode} />
        </div>

        {/* Input */}
        <div className="glass-card p-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            {mode === "encrypt" ? "Plaintext Message" : "Ciphertext Message"}
          </label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 30))}
            className="w-full bg-input border border-border rounded-lg px-4 py-3 font-mono text-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={mode === "encrypt" ? "Enter message..." : "Enter ciphertext..."}
          />
        </div>

        {/* Shift Rules */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Shift Rules (Key)</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={addRule}
              disabled={rules.length >= 10}
            >
              <Plus className="w-4 h-4 mr-1" /> Add Rule
            </Button>
          </div>
          
          <div className="space-y-3">
            {rules.map((rule, index) => {
              const color = getRuleColor(index);
              return (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg ${color.bg} border ${color.border}`}
                >
                  <div className={`font-bold ${color.text} w-28 text-sm`}>
                    Rule {rule.position}:
                  </div>
                  <div className="flex-1 flex items-center gap-3 flex-wrap">
                    <span className="text-muted-foreground text-sm">Shift letter</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateShift(index, rule.shift - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <input
                      type="number"
                      value={rule.shift}
                      onChange={(e) => updateShift(index, parseInt(e.target.value) || 0)}
                      className={`w-16 h-10 bg-background/50 border ${color.border} rounded text-center font-mono text-lg ${color.text}`}
                      min={0}
                      max={25}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateShift(index, rule.shift + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <span className="text-muted-foreground text-sm">
                      positions to the {mode === "encrypt" ? "right" : "left"}
                    </span>
                  </div>
                  {rules.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeRule(index)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
          
          <p className="text-xs text-muted-foreground">
            Rules repeat cyclically: Letter {rules.length + 1} uses Rule 1, Letter {rules.length + 2} uses Rule 2, etc.
          </p>
        </div>

        {/* Animation Controls */}
        <div className="glass-card p-4">
          <div className="flex gap-3">
            <Button
              onClick={isAnimating ? () => setIsAnimating(false) : startAnimation}
              variant="neon"
              className="flex-1"
            >
              {isAnimating ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAnimating ? "Pause" : "Animate Step by Step"}
            </Button>
            <Button onClick={resetAnimation} variant="outline">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Progress */}
        {isAnimating && (
          <div className="glass-card p-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{activeIndex} / {cleanInput.length} characters</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(activeIndex / cleanInput.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Visualization */}
        <div className="glass-card p-6 space-y-6">
          <h3 className="text-lg font-semibold text-foreground">
            Step-by-Step {mode === "encrypt" ? "Encryption" : "Decryption"}
          </h3>
          
          {/* Rule applied to each position */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">Applied Shift (repeating pattern)</p>
            <div className="flex flex-wrap gap-1">
              {cleanInput.split("").map((_, i) => {
                const ruleIndex = i % rules.length;
                const color = getRuleColor(ruleIndex);
                return (
                  <div
                    key={`rule-${i}`}
                    className={`w-12 h-8 flex items-center justify-center rounded text-xs font-mono ${color.bg} ${color.text} border ${color.border} ${
                      i === activeIndex ? "ring-2 ring-primary scale-110" : ""
                    }`}
                  >
                    {mode === "encrypt" ? "+" : "-"}{rules[ruleIndex].shift}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Input letters */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {mode === "encrypt" ? "Plaintext" : "Ciphertext"}
            </p>
            <div className="flex flex-wrap gap-1">
              {cleanInput.split("").map((letter, i) => {
                const ruleIndex = i % rules.length;
                const color = getRuleColor(ruleIndex);
                return (
                  <div key={`input-${i}`} className="flex flex-col items-center gap-1">
                    <LetterBox
                      letter={letter}
                      variant="input"
                      isActive={i === activeIndex}
                      isHighlighted={i < activeIndex}
                      showIndex
                      index={ALPHABET.indexOf(letter)}
                    />
                    <div className={`text-[10px] ${color.text}`}>
                      R{(i % rules.length) + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="flex items-center justify-center py-2">
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl text-primary">↓</div>
              <div className="font-mono text-sm text-center px-4 py-2 rounded bg-muted/30">
                C = (P {mode === "encrypt" ? "+" : "-"} shift) mod 26
              </div>
              <div className="text-3xl text-primary">↓</div>
            </div>
          </div>

          {/* Output letters */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {mode === "encrypt" ? "Ciphertext" : "Plaintext"}
            </p>
            <div className="flex flex-wrap gap-1">
              {(isAnimating ? outputText : processText(inputText, rules)).split("").map((letter, i) => {
                const ruleIndex = i % rules.length;
                const color = getRuleColor(ruleIndex);
                return (
                  <div key={`output-${i}`} className="flex flex-col items-center gap-1">
                    <LetterBox
                      letter={letter}
                      variant="output"
                      isHighlighted={i === activeIndex - 1}
                      showIndex
                      index={ALPHABET.indexOf(letter)}
                    />
                    <div className={`text-[10px] ${color.text}`}>
                      R{(i % rules.length) + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current calculation */}
        {calculation && (
          <div className="glass-card p-6 border-primary/50">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Processing Letter {activeIndex + 1}: Using Rule {calculation.rulePosition}
            </h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              {/* Input Letter */}
              <div className="bg-muted/20 rounded-lg p-4 text-center">
                <div className="text-xs text-muted-foreground mb-2">
                  {mode === "encrypt" ? "Plaintext" : "Ciphertext"} Letter
                </div>
                <div className="w-14 h-14 mx-auto rounded-lg bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-2xl font-bold text-blue-400">
                  {calculation.textChar}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Index: <span className="text-blue-400 font-mono">{calculation.textIndex}</span>
                </div>
              </div>

              {/* Shift Amount */}
              <div className={`rounded-lg p-4 text-center ${getRuleColor(calculation.ruleIndex).bg} border ${getRuleColor(calculation.ruleIndex).border}`}>
                <div className="text-xs text-muted-foreground mb-2">
                  Rule {calculation.rulePosition} Shift
                </div>
                <div className={`w-14 h-14 mx-auto rounded-lg bg-background/50 border-2 ${getRuleColor(calculation.ruleIndex).border} flex items-center justify-center text-2xl font-bold ${getRuleColor(calculation.ruleIndex).text}`}>
                  {mode === "encrypt" ? "+" : "-"}{calculation.shift}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {mode === "encrypt" ? "Right" : "Left"} shift
                </div>
              </div>

              {/* Operation */}
              <div className="bg-muted/20 rounded-lg p-4 text-center flex flex-col justify-center">
                <div className="text-xs text-muted-foreground mb-2">Operation</div>
                <div className="font-mono text-lg text-foreground">
                  ({calculation.textIndex} {mode === "encrypt" ? "+" : "-"} {calculation.shift}) mod 26
                </div>
                <div className="text-2xl text-primary mt-2">=</div>
                <div className="font-mono text-xl text-primary">{calculation.resultIndex}</div>
              </div>

              {/* Result Letter */}
              <div className="bg-muted/20 rounded-lg p-4 text-center">
                <div className="text-xs text-muted-foreground mb-2">
                  {mode === "encrypt" ? "Ciphertext" : "Plaintext"} Letter
                </div>
                <div className="w-14 h-14 mx-auto rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">
                  {calculation.result}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Index: <span className="text-primary font-mono">{calculation.resultIndex}</span>
                </div>
              </div>
            </div>

            {/* Visual shift on alphabet */}
            <div className="mt-6 p-4 bg-muted/20 rounded-lg">
              <p className="text-xs text-muted-foreground mb-3 text-center">Alphabet Shift Visualization</p>
              <div className="flex justify-center">
                <div className="flex gap-0.5 overflow-x-auto pb-2">
                  {ALPHABET.split("").map((letter, i) => {
                    const isSource = i === calculation.textIndex;
                    const isTarget = i === calculation.resultIndex;
                    return (
                      <div
                        key={letter}
                        className={`w-7 h-7 flex items-center justify-center text-xs font-mono rounded transition-all ${
                          isSource
                            ? "bg-blue-500 text-white scale-110 ring-2 ring-blue-300"
                            : isTarget
                            ? "bg-primary text-primary-foreground scale-110 ring-2 ring-primary/50"
                            : "bg-muted/50 text-muted-foreground"
                        }`}
                      >
                        {letter}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center mt-2 text-xs">
                <span className="text-blue-400 mr-4">● Source: {calculation.textChar}</span>
                <span className="text-primary">● Result: {calculation.result}</span>
                <span className={`ml-4 ${getRuleColor(calculation.ruleIndex).text}`}>
                  (shifted {calculation.shift} {mode === "encrypt" ? "right" : "left"})
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Result Summary */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Result Summary</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/20 rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-2">
                {mode === "encrypt" ? "Plaintext" : "Ciphertext"}
              </div>
              <div className="font-mono text-xl text-foreground tracking-widest">
                {cleanInput || "-"}
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
              <div className="text-sm text-muted-foreground mb-2">
                {mode === "encrypt" ? "Ciphertext" : "Plaintext"}
              </div>
              <div className="font-mono text-xl text-primary tracking-widest">
                {processText(inputText, rules) || "-"}
              </div>
            </div>
          </div>
          
          {/* Show grouping by rule */}
          <div className="mt-4 p-4 bg-muted/20 rounded-lg">
            <p className="text-sm text-muted-foreground mb-3">Grouped by Rule Application</p>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: Math.ceil(cleanInput.length / rules.length) }).map((_, groupIdx) => (
                <div key={groupIdx} className="flex gap-0.5">
                  {rules.map((_, ruleIdx) => {
                    const charIdx = groupIdx * rules.length + ruleIdx;
                    if (charIdx >= cleanInput.length) return null;
                    const color = getRuleColor(ruleIdx);
                    const outputChar = processText(inputText, rules)[charIdx];
                    return (
                      <div key={ruleIdx} className={`px-2 py-1 rounded ${color.bg} ${color.text} font-mono text-sm`}>
                        {cleanInput[charIdx]}→{outputChar}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">How Polyalphabetic Cipher Works</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTutorial(!showTutorial)}
            >
              <Info className="w-4 h-4 mr-1" />
              {showTutorial ? "Hide" : "Show"}
            </Button>
          </div>

          {showTutorial && (
            <div className="space-y-6">
              {/* Key Concept */}
              <div className="bg-muted/20 rounded-lg p-4">
                <h4 className="text-sm font-medium text-foreground mb-3">💡 Key Concept</h4>
                <p className="text-sm text-muted-foreground">
                  Unlike monoalphabetic ciphers (where each letter always shifts by the same amount), 
                  polyalphabetic ciphers use <strong className="text-foreground">different shifts for different positions</strong>. 
                  This means the same letter can encrypt to different letters depending on where it appears in the message.
                </p>
              </div>

              {/* Example */}
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
                <h4 className="text-sm font-medium text-primary mb-3">📝 Your Current Rules</h4>
                <div className="space-y-2 text-sm">
                  {rules.map((rule, i) => {
                    const color = getRuleColor(i);
                    const positions = [];
                    for (let j = i; j < 20; j += rules.length) {
                      positions.push(j + 1);
                      if (positions.length >= 4) break;
                    }
                    return (
                      <div key={i} className={`flex items-center gap-2 ${color.text}`}>
                        <span className="font-bold">Rule {rule.position}:</span>
                        <span>Shift {rule.shift} positions right</span>
                        <span className="text-muted-foreground text-xs">
                          (applies to letters {positions.join(", ")}...)
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Visual Flow */}
              <div className="bg-muted/20 rounded-lg p-4">
                <h4 className="text-sm font-medium text-foreground mb-3">Encryption Flow</h4>
                <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
                  <div className="px-3 py-2 rounded bg-blue-500/20 text-blue-400 font-mono">Letter N</div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="px-3 py-2 rounded bg-secondary/20 text-secondary font-mono">Get Rule (N mod {rules.length})</div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="px-3 py-2 rounded bg-purple-500/20 text-purple-400 font-mono">Apply Shift</div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="px-3 py-2 rounded bg-primary/20 text-primary font-mono">Result</div>
                </div>
              </div>

              {/* Security Note */}
              <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                <h4 className="text-sm font-medium text-yellow-400 mb-2">🔐 Security</h4>
                <p className="text-xs text-muted-foreground">
                  Polyalphabetic ciphers are more secure than simple Caesar ciphers because frequency analysis 
                  becomes harder - the same letter encrypts differently at different positions. The security 
                  increases with more rules and varied shift values. However, patterns can emerge if 
                  the number of rules is small and the message is long.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </CipherLayout>
  );
}
