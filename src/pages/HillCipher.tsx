import { useState, useEffect } from "react";
import { CipherLayout } from "@/components/CipherLayout";
import { LetterBox } from "@/components/LetterBox";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Info } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Matrix operations
function matrixMultiply(matrix: number[][], vector: number[]): number[] {
  return matrix.map(row => 
    row.reduce((sum, val, i) => sum + val * vector[i], 0)
  );
}

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

// Calculate modular inverse using extended Euclidean algorithm
function modInverse(a: number, m: number): number {
  a = mod(a, m);
  for (let x = 1; x < m; x++) {
    if (mod(a * x, m) === 1) return x;
  }
  return -1; // No inverse exists
}

// Calculate determinant for 2x2 matrix
function determinant2x2(matrix: number[][]): number {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

// Calculate inverse matrix mod 26 for 2x2
function inverseMatrix2x2(matrix: number[][]): number[][] | null {
  const det = mod(determinant2x2(matrix), 26);
  const detInv = modInverse(det, 26);
  
  if (detInv === -1) return null; // No inverse exists
  
  return [
    [mod(matrix[1][1] * detInv, 26), mod(-matrix[0][1] * detInv, 26)],
    [mod(-matrix[1][0] * detInv, 26), mod(matrix[0][0] * detInv, 26)]
  ];
}

function hillEncrypt(text: string, keyMatrix: number[][]): string {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  // Pad with X if needed
  const paddedText = cleanText.length % 2 === 0 ? cleanText : cleanText + "X";
  
  let result = "";
  for (let i = 0; i < paddedText.length; i += 2) {
    const vector = [
      ALPHABET.indexOf(paddedText[i]),
      ALPHABET.indexOf(paddedText[i + 1])
    ];
    const encrypted = matrixMultiply(keyMatrix, vector).map(v => mod(v, 26));
    result += ALPHABET[encrypted[0]] + ALPHABET[encrypted[1]];
  }
  return result;
}

function hillDecrypt(text: string, keyMatrix: number[][]): string {
  const inverseKey = inverseMatrix2x2(keyMatrix);
  if (!inverseKey) return "INVALID KEY";
  
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  
  let result = "";
  for (let i = 0; i < cleanText.length; i += 2) {
    if (i + 1 >= cleanText.length) break;
    const vector = [
      ALPHABET.indexOf(cleanText[i]),
      ALPHABET.indexOf(cleanText[i + 1])
    ];
    const decrypted = matrixMultiply(inverseKey, vector).map(v => mod(v, 26));
    result += ALPHABET[decrypted[0]] + ALPHABET[decrypted[1]];
  }
  return result;
}

export default function HillCipher() {
  const [inputText, setInputText] = useState("HELP");
  const [keyMatrix, setKeyMatrix] = useState([
    [3, 3],
    [2, 5]
  ]);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [activeStep, setActiveStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [outputText, setOutputText] = useState("");
  const [currentCalculation, setCurrentCalculation] = useState<{
    inputPair: string;
    inputVector: number[];
    resultVector: number[];
    outputPair: string;
    matrixUsed: number[][];
    rawResults: number[];
  } | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);

  const cleanInput = inputText.toUpperCase().replace(/[^A-Z]/g, "");
  const paddedInput = cleanInput.length % 2 === 0 ? cleanInput : cleanInput + "X";
  const totalSteps = Math.ceil(paddedInput.length / 2);
  
  const processText = mode === "encrypt" ? hillEncrypt : hillDecrypt;
  const inverseKey = inverseMatrix2x2(keyMatrix);
  const isValidKey = inverseKey !== null;

  const startAnimation = () => {
    if (!isValidKey && mode === "decrypt") {
      return;
    }
    setIsAnimating(true);
    setActiveStep(0);
    setOutputText("");
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setActiveStep(-1);
    setCurrentCalculation(null);
    setOutputText(processText(inputText, keyMatrix));
  };

  useEffect(() => {
    if (!isAnimating || activeStep < 0) return;

    if (activeStep >= totalSteps) {
      setIsAnimating(false);
      setCurrentCalculation(null);
      return;
    }

    const idx = activeStep * 2;
    const char1 = paddedInput[idx];
    const char2 = paddedInput[idx + 1] || "X";
    const inputVector = [ALPHABET.indexOf(char1), ALPHABET.indexOf(char2)];
    
    const matrixUsed = mode === "encrypt" ? keyMatrix : inverseKey!;
    const rawResults = matrixMultiply(matrixUsed, inputVector);
    const resultVector = rawResults.map(v => mod(v, 26));
    const outputPair = ALPHABET[resultVector[0]] + ALPHABET[resultVector[1]];

    setCurrentCalculation({
      inputPair: char1 + char2,
      inputVector,
      resultVector,
      outputPair,
      matrixUsed,
      rawResults
    });

    const timer = setTimeout(() => {
      setOutputText((prev) => prev + outputPair);
      setActiveStep((prev) => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimating, activeStep]);

  useEffect(() => {
    const process = mode === "encrypt" ? hillEncrypt : hillDecrypt;
    setOutputText(process(inputText, keyMatrix));
  }, [inputText, keyMatrix, mode]);

  const handleMatrixChange = (row: number, col: number, value: string) => {
    const num = parseInt(value) || 0;
    const newMatrix = keyMatrix.map((r, i) => 
      r.map((c, j) => (i === row && j === col) ? mod(num, 26) : c)
    );
    setKeyMatrix(newMatrix);
  };

  return (
    <CipherLayout
      title="Hill Cipher"
      description="Matrix-based encryption using linear algebra"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mode Toggle */}
        <div className="flex justify-center">
          <ModeToggle mode={mode} onChange={setMode} />
        </div>

        {/* Controls */}
        <div className="glass-card p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {mode === "encrypt" ? "Plaintext Message" : "Ciphertext Message"}
              </label>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 16))}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 font-mono text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={mode === "encrypt" ? "Enter message..." : "Enter ciphertext..."}
              />
              {cleanInput.length % 2 !== 0 && mode === "encrypt" && (
                <p className="text-xs text-muted-foreground mt-1">
                  Text will be padded with 'X' to make even length
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Key Matrix (2×2)
              </label>
              <div className="flex items-center gap-2">
                <div className="text-4xl text-muted-foreground">[</div>
                <div className="grid grid-cols-2 gap-2">
                  {keyMatrix.map((row, i) => 
                    row.map((val, j) => (
                      <input
                        key={`${i}-${j}`}
                        type="number"
                        value={val}
                        onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                        className="w-14 h-14 bg-secondary/10 border border-secondary/50 rounded-lg text-center font-mono text-lg text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        min={0}
                        max={25}
                      />
                    ))
                  )}
                </div>
                <div className="text-4xl text-muted-foreground">]</div>
              </div>
              {!isValidKey && (
                <p className="text-xs text-red-500 mt-2">
                  Invalid key: determinant has no modular inverse (mod 26)
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={isAnimating ? () => setIsAnimating(false) : startAnimation}
              variant="neon"
              className="flex-1"
              disabled={!isValidKey && mode === "decrypt"}
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
          
          {/* Progress indicator */}
          {isAnimating && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress</span>
                <span>Pair {activeStep + 1} of {totalSteps}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}
          
          {/* Input letters in pairs */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {mode === "encrypt" ? "Plaintext" : "Ciphertext"} (grouped in pairs)
            </p>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: totalSteps }).map((_, stepIdx) => {
                const idx = stepIdx * 2;
                const char1 = paddedInput[idx];
                const char2 = paddedInput[idx + 1] || "X";
                const isActive = stepIdx === activeStep;
                const isProcessed = stepIdx < activeStep;
                
                return (
                  <div 
                    key={stepIdx} 
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                      isActive ? "bg-primary/20 ring-2 ring-primary scale-105" : 
                      isProcessed ? "bg-muted/50 opacity-75" : "bg-muted/20"
                    }`}
                  >
                    <div className="text-xs text-muted-foreground">Pair {stepIdx + 1}</div>
                    <div className="flex gap-1">
                      <LetterBox
                        letter={char1}
                        variant="input"
                        isActive={isActive}
                        showIndex
                        index={ALPHABET.indexOf(char1)}
                      />
                      <LetterBox
                        letter={char2}
                        variant="input"
                        isActive={isActive}
                        showIndex
                        index={ALPHABET.indexOf(char2)}
                      />
                    </div>
                    {isProcessed && (
                      <div className="text-xs text-green-400">✓ Processed</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Matrix multiplication visualization */}
          <div className="flex items-center justify-center py-4">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <div className={`text-4xl ${mode === "encrypt" ? "text-primary" : "text-secondary"}`}>↓</div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                {/* Key Matrix Preview */}
                <div className="flex items-center">
                  <div className="text-xl text-muted-foreground">[</div>
                  <div className="grid grid-cols-2 gap-0.5">
                    {(mode === "encrypt" ? keyMatrix : inverseKey || keyMatrix).map((row, i) => 
                      row.map((val, j) => (
                        <div key={`${i}-${j}`} className={`w-6 h-6 flex items-center justify-center text-xs ${
                          mode === "encrypt" ? "text-secondary" : "text-primary"
                        }`}>
                          {Math.round(val)}
                        </div>
                      ))
                    )}
                  </div>
                  <div className="text-xl text-muted-foreground">]</div>
                </div>
                <span className="text-sm">×</span>
                <span className="text-sm font-mono">[input vector]</span>
                <span className="text-sm">=</span>
                <span className="text-sm font-mono">[output]</span>
                <span className="text-sm">mod 26</span>
              </div>
              <div className={`text-4xl ${mode === "encrypt" ? "text-primary" : "text-secondary"}`}>↓</div>
            </div>
          </div>

          {/* Output letters */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {mode === "encrypt" ? "Ciphertext" : "Plaintext"}
            </p>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: Math.ceil((isAnimating ? outputText : processText(inputText, keyMatrix)).length / 2) }).map((_, stepIdx) => {
                const fullOutput = isAnimating ? outputText : processText(inputText, keyMatrix);
                const idx = stepIdx * 2;
                const char1 = fullOutput[idx];
                const char2 = fullOutput[idx + 1];
                if (!char1) return null;
                
                const isJustProcessed = stepIdx === activeStep - 1;
                
                return (
                  <div 
                    key={stepIdx} 
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                      isJustProcessed ? "bg-primary/20 ring-2 ring-primary scale-105" : "bg-muted/20"
                    }`}
                  >
                    <div className="text-xs text-muted-foreground">Result {stepIdx + 1}</div>
                    <div className="flex gap-1">
                      <LetterBox
                        letter={char1}
                        variant="output"
                        showIndex
                        index={ALPHABET.indexOf(char1)}
                      />
                      {char2 && (
                        <LetterBox
                          letter={char2}
                          variant="output"
                          showIndex
                          index={ALPHABET.indexOf(char2)}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current calculation detail */}
        {currentCalculation && isAnimating && (
          <div className="glass-card p-6 border-primary/50 space-y-6">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Step {activeStep + 1}: Processing "{currentCalculation.inputPair}"
            </h3>
            
            {/* Step 1: Letter to Number Conversion */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-400 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">1</span>
                Convert Letters to Numbers
              </h4>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-2xl font-bold text-blue-400">
                    {currentCalculation.inputPair[0]}
                  </div>
                  <div className="text-xs text-muted-foreground">Position in alphabet</div>
                  <div className="w-10 h-10 rounded bg-blue-500/30 flex items-center justify-center text-lg font-mono text-blue-300">
                    {currentCalculation.inputVector[0]}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-2xl font-bold text-blue-400">
                    {currentCalculation.inputPair[1]}
                  </div>
                  <div className="text-xs text-muted-foreground">Position in alphabet</div>
                  <div className="w-10 h-10 rounded bg-blue-500/30 flex items-center justify-center text-lg font-mono text-blue-300">
                    {currentCalculation.inputVector[1]}
                  </div>
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-3">
                A=0, B=1, C=2, ... Z=25
              </p>
            </div>

            {/* Step 2: Matrix Multiplication */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-purple-400 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">2</span>
                Matrix × Vector Multiplication
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-3 font-mono">
                {/* Matrix */}
                <div className="flex items-center">
                  <div className="text-3xl text-muted-foreground mr-1">[</div>
                  <div className="grid grid-cols-2 gap-1">
                    {currentCalculation.matrixUsed.map((row, i) => 
                      row.map((val, j) => (
                        <div 
                          key={`${i}-${j}`} 
                          className="w-10 h-10 flex items-center justify-center text-lg rounded bg-purple-500/20 text-purple-400 border border-purple-500/50"
                        >
                          {Math.round(val)}
                        </div>
                      ))
                    )}
                  </div>
                  <div className="text-3xl text-muted-foreground ml-1">]</div>
                </div>
                
                <span className="text-2xl text-purple-400">×</span>
                
                {/* Input vector */}
                <div className="flex items-center">
                  <div className="text-3xl text-muted-foreground mr-1">[</div>
                  <div className="flex flex-col gap-1">
                    <div className="w-10 h-10 flex items-center justify-center text-lg rounded bg-blue-500/20 text-blue-400 border border-blue-500/50">
                      {currentCalculation.inputVector[0]}
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center text-lg rounded bg-blue-500/20 text-blue-400 border border-blue-500/50">
                      {currentCalculation.inputVector[1]}
                    </div>
                  </div>
                  <div className="text-3xl text-muted-foreground ml-1">]</div>
                </div>
                
                <span className="text-2xl text-purple-400">=</span>
                
                {/* Raw result vector */}
                <div className="flex items-center">
                  <div className="text-3xl text-muted-foreground mr-1">[</div>
                  <div className="flex flex-col gap-1">
                    <div className="w-14 h-10 flex items-center justify-center text-lg rounded bg-orange-500/20 text-orange-400 border border-orange-500/50">
                      {currentCalculation.rawResults[0]}
                    </div>
                    <div className="w-14 h-10 flex items-center justify-center text-lg rounded bg-orange-500/20 text-orange-400 border border-orange-500/50">
                      {currentCalculation.rawResults[1]}
                    </div>
                  </div>
                  <div className="text-3xl text-muted-foreground ml-1">]</div>
                </div>
              </div>
              
              {/* Expanded calculation */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 justify-center flex-wrap">
                  <span className="text-muted-foreground">Row 1:</span>
                  <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400">
                    {Math.round(currentCalculation.matrixUsed[0][0])}
                  </span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                    {currentCalculation.inputVector[0]}
                  </span>
                  <span className="text-muted-foreground">+</span>
                  <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400">
                    {Math.round(currentCalculation.matrixUsed[0][1])}
                  </span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                    {currentCalculation.inputVector[1]}
                  </span>
                  <span className="text-muted-foreground">=</span>
                  <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 font-bold">
                    {currentCalculation.rawResults[0]}
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center flex-wrap">
                  <span className="text-muted-foreground">Row 2:</span>
                  <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400">
                    {Math.round(currentCalculation.matrixUsed[1][0])}
                  </span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                    {currentCalculation.inputVector[0]}
                  </span>
                  <span className="text-muted-foreground">+</span>
                  <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400">
                    {Math.round(currentCalculation.matrixUsed[1][1])}
                  </span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                    {currentCalculation.inputVector[1]}
                  </span>
                  <span className="text-muted-foreground">=</span>
                  <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 font-bold">
                    {currentCalculation.rawResults[1]}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3: Modulo Operation */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-green-400 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">3</span>
                Apply Modulo 26
              </h4>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm text-muted-foreground">Raw result</div>
                  <div className="w-14 h-12 rounded bg-orange-500/20 flex items-center justify-center text-xl font-mono text-orange-400">
                    {currentCalculation.rawResults[0]}
                  </div>
                  <div className="text-lg text-green-400">mod 26</div>
                  <div className="text-xs text-muted-foreground">
                    {currentCalculation.rawResults[0]} ÷ 26 = {Math.floor(currentCalculation.rawResults[0] / 26)} remainder {mod(currentCalculation.rawResults[0], 26)}
                  </div>
                  <div className="w-12 h-12 rounded bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-xl font-mono text-green-400">
                    {currentCalculation.resultVector[0]}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm text-muted-foreground">Raw result</div>
                  <div className="w-14 h-12 rounded bg-orange-500/20 flex items-center justify-center text-xl font-mono text-orange-400">
                    {currentCalculation.rawResults[1]}
                  </div>
                  <div className="text-lg text-green-400">mod 26</div>
                  <div className="text-xs text-muted-foreground">
                    {currentCalculation.rawResults[1]} ÷ 26 = {Math.floor(currentCalculation.rawResults[1] / 26)} remainder {mod(currentCalculation.rawResults[1], 26)}
                  </div>
                  <div className="w-12 h-12 rounded bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-xl font-mono text-green-400">
                    {currentCalculation.resultVector[1]}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Convert back to letters */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-primary mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">4</span>
                Convert Numbers to Letters
              </h4>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded bg-green-500/20 flex items-center justify-center text-xl font-mono text-green-400">
                    {currentCalculation.resultVector[0]}
                  </div>
                  <div className="text-2xl text-primary">↓</div>
                  <div className="w-14 h-14 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">
                    {currentCalculation.outputPair[0]}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded bg-green-500/20 flex items-center justify-center text-xl font-mono text-green-400">
                    {currentCalculation.resultVector[1]}
                  </div>
                  <div className="text-2xl text-primary">↓</div>
                  <div className="w-14 h-14 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">
                    {currentCalculation.outputPair[1]}
                  </div>
                </div>
              </div>
              <p className="text-center text-lg mt-4">
                <span className="text-muted-foreground">Result: </span>
                <span className="text-blue-400 font-bold">{currentCalculation.inputPair}</span>
                <span className="text-muted-foreground mx-2">→</span>
                <span className="text-primary font-bold text-xl">{currentCalculation.outputPair}</span>
              </p>
            </div>
          </div>
        )}

        {/* Matrix info */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Key Matrix Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-secondary mb-2">Encryption Matrix</h4>
              <div className="flex items-center gap-2 font-mono">
                <div className="text-xl text-muted-foreground">[</div>
                <div className="grid grid-cols-2 gap-2">
                  {keyMatrix.map((row, i) => 
                    row.map((val, j) => (
                      <div key={`enc-${i}-${j}`} className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center text-secondary">
                        {val}
                      </div>
                    ))
                  )}
                </div>
                <div className="text-xl text-muted-foreground">]</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                det = {mod(determinant2x2(keyMatrix), 26)} (mod 26)
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-primary mb-2">Decryption Matrix (Inverse)</h4>
              {inverseKey ? (
                <>
                  <div className="flex items-center gap-2 font-mono">
                    <div className="text-xl text-muted-foreground">[</div>
                    <div className="grid grid-cols-2 gap-2">
                      {inverseKey.map((row, i) => 
                        row.map((val, j) => (
                          <div key={`dec-${i}-${j}`} className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                            {Math.round(val)}
                          </div>
                        ))
                      )}
                    </div>
                    <div className="text-xl text-muted-foreground">]</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    K × K⁻¹ ≡ I (mod 26)
                  </p>
                </>
              ) : (
                <p className="text-sm text-red-500">
                  No inverse exists for this key matrix
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">How Hill Cipher Works</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTutorial(!showTutorial)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Info className="w-4 h-4 mr-1" />
              {showTutorial ? "Hide" : "Show"} Tutorial
            </Button>
          </div>
          
          {showTutorial && (
            <div className="space-y-6">
              {/* Visual Flow Diagram */}
              <div className="bg-muted/20 rounded-lg p-4">
                <h4 className="text-sm font-medium text-foreground mb-4 text-center">Encryption Process Flow</h4>
                <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
                  <div className="flex flex-col items-center gap-1">
                    <div className="px-3 py-2 rounded bg-blue-500/20 text-blue-400 font-mono">HE</div>
                    <span className="text-muted-foreground">Pair</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="px-3 py-2 rounded bg-blue-500/30 text-blue-300 font-mono">[7, 4]</div>
                    <span className="text-muted-foreground">Numbers</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-1 px-2">
                    <div className="grid grid-cols-2 gap-0.5 p-1 rounded bg-purple-500/20">
                      <span className="w-5 h-5 flex items-center justify-center text-purple-400">K</span>
                      <span className="w-5 h-5 flex items-center justify-center text-purple-400">×</span>
                      <span className="w-5 h-5 flex items-center justify-center text-purple-400">V</span>
                      <span className="w-5 h-5 flex items-center justify-center text-purple-400">=</span>
                    </div>
                    <span className="text-muted-foreground">Matrix Multiply</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="px-3 py-2 rounded bg-orange-500/20 text-orange-400 font-mono">[33, 34]</div>
                    <span className="text-muted-foreground">Raw Result</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="px-3 py-2 rounded bg-green-500/20 text-green-400 font-mono">mod 26</div>
                    <span className="text-muted-foreground">Wrap</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="px-3 py-2 rounded bg-green-500/30 text-green-300 font-mono">[7, 8]</div>
                    <span className="text-muted-foreground">Result</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="px-3 py-2 rounded bg-primary/20 text-primary font-mono font-bold">HI</div>
                    <span className="text-muted-foreground">Output</span>
                  </div>
                </div>
              </div>

              {/* Matrix Multiplication Explained */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/20 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-purple-400 mb-3">Matrix Multiplication Formula</h4>
                  <div className="font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-muted-foreground">Result[0] =</span>
                      <span className="text-purple-400">K[0,0]</span>
                      <span className="text-muted-foreground">×</span>
                      <span className="text-blue-400">V[0]</span>
                      <span className="text-muted-foreground">+</span>
                      <span className="text-purple-400">K[0,1]</span>
                      <span className="text-muted-foreground">×</span>
                      <span className="text-blue-400">V[1]</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-muted-foreground">Result[1] =</span>
                      <span className="text-purple-400">K[1,0]</span>
                      <span className="text-muted-foreground">×</span>
                      <span className="text-blue-400">V[0]</span>
                      <span className="text-muted-foreground">+</span>
                      <span className="text-purple-400">K[1,1]</span>
                      <span className="text-muted-foreground">×</span>
                      <span className="text-blue-400">V[1]</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/20 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-green-400 mb-3">Why Modulo 26?</h4>
                  <p className="text-sm text-muted-foreground">
                    There are 26 letters in the alphabet (A-Z). The modulo operation ensures 
                    results wrap around to stay within 0-25, so we can always map back to a letter.
                  </p>
                  <div className="mt-2 text-xs font-mono text-muted-foreground">
                    Example: 33 mod 26 = 7 → H
                  </div>
                </div>
              </div>

              {/* Key Requirements */}
              <div className="bg-muted/20 rounded-lg p-4">
                <h4 className="text-sm font-medium text-secondary mb-3">Key Matrix Requirements</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">1</div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Square Matrix</strong><br />
                      Must be n×n (we use 2×2)
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">2</div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Invertible mod 26</strong><br />
                      det(K) must be coprime with 26
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">3</div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Values 0-25</strong><br />
                      Each element represents a letter
                    </p>
                  </div>
                </div>
              </div>

              {/* Decryption Note */}
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
                <h4 className="text-sm font-medium text-primary mb-2">🔓 Decryption</h4>
                <p className="text-sm text-muted-foreground">
                  To decrypt, we multiply by the <strong className="text-foreground">inverse matrix</strong> (K⁻¹) instead of K.
                  The inverse matrix "undoes" the encryption: K⁻¹ × (K × V) = V
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </CipherLayout>
  );
}
