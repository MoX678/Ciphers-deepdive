import { useState, useEffect, useMemo } from "react";
import { CipherLayout } from "@/components/CipherLayout";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

function getColumnOrder(key: string): number[] {
  const keyChars = key.toUpperCase().split("");
  const sorted = [...keyChars].sort();
  return keyChars.map((char) => {
    const index = sorted.indexOf(char);
    sorted[index] = ""; // Mark as used
    return index;
  });
}

function transpose(text: string, key: string, decrypt: boolean): string {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
  const keyLen = key.length;
  if (keyLen === 0 || cleanText.length === 0) return cleanText;

  const order = getColumnOrder(key);
  const numRows = Math.ceil(cleanText.length / keyLen);
  const paddedText = cleanText.padEnd(numRows * keyLen, "X");

  if (!decrypt) {
    // Encrypt: write rows, read columns in order
    const grid: string[][] = [];
    for (let r = 0; r < numRows; r++) {
      grid.push(paddedText.slice(r * keyLen, (r + 1) * keyLen).split(""));
    }
    
    let result = "";
    for (let sortedCol = 0; sortedCol < keyLen; sortedCol++) {
      const actualCol = order.indexOf(sortedCol);
      for (let r = 0; r < numRows; r++) {
        result += grid[r][actualCol];
      }
    }
    return result;
  } else {
    // Decrypt: write columns in order, read rows
    const grid: string[][] = Array.from({ length: numRows }, () => Array(keyLen).fill(""));
    let pos = 0;
    
    for (let sortedCol = 0; sortedCol < keyLen; sortedCol++) {
      const actualCol = order.indexOf(sortedCol);
      for (let r = 0; r < numRows; r++) {
        grid[r][actualCol] = paddedText[pos++];
      }
    }
    
    return grid.map(row => row.join("")).join("");
  }
}

export default function TranspositionCipher() {
  const [inputText, setInputText] = useState("WEAREDISCOVERED");
  const [key, setKey] = useState("ZEBRAS");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [activeColumn, setActiveColumn] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [outputText, setOutputText] = useState("");

  const cleanInput = inputText.toUpperCase().replace(/[^A-Z]/g, "");
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "");
  const keyLen = cleanKey.length;
  const numRows = keyLen > 0 ? Math.ceil(cleanInput.length / keyLen) : 0;
  const paddedText = cleanInput.padEnd(numRows * keyLen, "X");
  const columnOrder = useMemo(() => getColumnOrder(cleanKey), [cleanKey]);

  // Build the grid
  const grid = useMemo(() => {
    if (keyLen === 0) return [];
    const g: string[][] = [];
    for (let r = 0; r < numRows; r++) {
      g.push(paddedText.slice(r * keyLen, (r + 1) * keyLen).split(""));
    }
    return g;
  }, [paddedText, keyLen, numRows]);

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveColumn(0);
    setOutputText("");
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setActiveColumn(-1);
    setOutputText(transpose(inputText, key, mode === "decrypt"));
  };

  useEffect(() => {
    if (!isAnimating || activeColumn < 0) return;

    if (activeColumn >= keyLen) {
      setIsAnimating(false);
      return;
    }

    const timer = setTimeout(() => {
      const actualCol = columnOrder.indexOf(activeColumn);
      let columnData = "";
      for (let r = 0; r < numRows; r++) {
        columnData += grid[r]?.[actualCol] || "";
      }
      setOutputText((prev) => prev + columnData);
      setActiveColumn((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAnimating, activeColumn, columnOrder, grid, numRows, keyLen]);

  useEffect(() => {
    setOutputText(transpose(inputText, key, mode === "decrypt"));
  }, [inputText, key, mode]);

  // Get column highlight status
  const isColumnActive = (colIndex: number) => {
    if (!isAnimating) return false;
    return columnOrder[colIndex] === activeColumn;
  };

  const isColumnDone = (colIndex: number) => {
    if (!isAnimating) return false;
    return columnOrder[colIndex] < activeColumn;
  };

  return (
    <CipherLayout
      title="Row Transposition Cipher"
      description="Rearranges plaintext by writing in rows and reading columns in key order"
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
                onChange={(e) => setInputText(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 30))}
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

        {/* Grid Visualization */}
        <div className="glass-card p-6 space-y-6">
          <h3 className="text-lg font-semibold text-foreground">
            Transposition Grid
          </h3>

          {keyLen > 0 && (
            <div className="overflow-x-auto">
              <table className="mx-auto border-collapse">
                {/* Key row with column order */}
                <thead>
                  <tr>
                    {cleanKey.split("").map((char, i) => (
                      <th
                        key={`key-${i}`}
                        className={cn(
                          "w-12 h-12 border border-border font-mono text-lg transition-all duration-300",
                          isColumnActive(i) && "bg-primary/30 border-primary text-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)]",
                          isColumnDone(i) && "bg-primary/10 border-primary/50 text-primary/70"
                        )}
                      >
                        {char}
                      </th>
                    ))}
                  </tr>
                  <tr>
                    {columnOrder.map((order, i) => (
                      <th
                        key={`order-${i}`}
                        className={cn(
                          "w-12 h-8 border border-border font-mono text-sm text-muted-foreground transition-all duration-300",
                          isColumnActive(i) && "bg-secondary/30 border-secondary text-secondary",
                          isColumnDone(i) && "bg-secondary/10 border-secondary/50 text-secondary/70"
                        )}
                      >
                        {order + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {grid.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                      {row.map((cell, colIndex) => (
                        <td
                          key={`cell-${rowIndex}-${colIndex}`}
                          className={cn(
                            "w-12 h-12 border border-border font-mono text-lg text-center transition-all duration-300",
                            isColumnActive(colIndex) && "bg-primary/20 border-primary text-primary animate-pulse",
                            isColumnDone(colIndex) && "bg-muted/50 text-muted-foreground"
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Reading order explanation */}
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Read columns in order:</span>
              {columnOrder.map((order, i) => (
                <span
                  key={i}
                  className={cn(
                    "font-mono px-2 py-1 rounded border",
                    columnOrder.indexOf(order) === i && isColumnActive(i)
                      ? "bg-primary/20 border-primary text-primary"
                      : isColumnDone(i)
                      ? "bg-muted border-border text-muted-foreground"
                      : "border-border text-foreground"
                  )}
                >
                  {order + 1}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            {mode === "encrypt" ? "Ciphertext" : "Plaintext"} Output
          </h3>
          <div className="flex flex-wrap gap-2">
            {(isAnimating ? outputText : transpose(inputText, key, mode === "decrypt"))
              .split("")
              .map((letter, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-10 h-12 flex items-center justify-center font-mono text-lg rounded-lg border transition-all duration-300",
                    "bg-primary/10 border-primary/50 text-primary"
                  )}
                >
                  {letter}
                </div>
              ))}
          </div>
        </div>

        {/* Step explanation */}
        {isAnimating && activeColumn >= 0 && activeColumn < keyLen && (
          <div className="glass-card p-6 border-primary/50">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Reading Column {activeColumn + 1}
            </h3>
            <p className="text-sm text-muted-foreground">
              The column under "<span className="text-secondary font-mono">{cleanKey[columnOrder.indexOf(activeColumn)]}</span>" 
              (position {columnOrder.indexOf(activeColumn) + 1} in the key) is read {activeColumn === 0 ? "first" : `${activeColumn + 1}${activeColumn === 1 ? "nd" : activeColumn === 2 ? "rd" : "th"}`} 
              because it has the {activeColumn + 1}{activeColumn === 0 ? "st" : activeColumn === 1 ? "nd" : activeColumn === 2 ? "rd" : "th"} letter alphabetically.
            </p>
          </div>
        )}

        {/* Explanation */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">How It Works</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            {mode === "encrypt" ? (
              <>
                <p>
                  The Row Transposition cipher rearranges the plaintext by writing it in rows 
                  and then reading the columns in a specific order determined by the keyword.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground">
                  <li>Write the keyword across the top as column headers</li>
                  <li>Number the columns based on alphabetical order of the key letters</li>
                  <li>Write the plaintext in rows beneath the keyword</li>
                  <li>Read the columns in numerical order (1, 2, 3...) to get the ciphertext</li>
                </ol>
                <p className="mt-2">
                  With key "<span className="text-secondary font-mono">{cleanKey}</span>", 
                  the column order is: {columnOrder.map(o => o + 1).join(", ")}
                </p>
              </>
            ) : (
              <>
                <p>
                  To decrypt, we reverse the process: fill the columns in key order, 
                  then read the rows.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground">
                  <li>Set up the grid with the keyword columns</li>
                  <li>Fill each column with ciphertext in numerical order</li>
                  <li>Read the rows left-to-right to recover the plaintext</li>
                </ol>
              </>
            )}
          </div>
        </div>
      </div>
    </CipherLayout>
  );
}
