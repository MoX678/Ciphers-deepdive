import { Info, Grid3x3, ArrowRight, ArrowDown, Maximize2, Key, Shield, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PlayfairEducationalDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-xs">
          <Info className="w-3.5 h-3.5 mr-1" />
          How It Works
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-b from-cyan-500/35 to-cyan-500/15 border-2 border-cyan-500">
              <Grid3x3 className="w-6 h-6 text-cyan-400" />
            </div>
            Playfair Cipher - Educational Guide
          </DialogTitle>
        </DialogHeader>

        {/* Overview Section */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-5 border border-cyan-500/30">
          <h3 className="font-semibold text-lg text-cyan-400 mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The Playfair Cipher, invented by Charles Wheatstone in 1854 and popularized by Lord Playfair, 
            is a digraphic substitution cipher that encrypts pairs of letters using a 5×5 key matrix. 
            It was the first practical digraph cipher and was used extensively in military communications through World War I.
          </p>
          
          {/* Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
            <div className="bg-background/50 rounded-lg p-3 border border-blue-500/20">
              <div className="text-xs font-semibold text-blue-400 mb-1">1. Build Matrix</div>
              <div className="text-xs text-muted-foreground">5×5 grid from keyword</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-purple-500/20">
              <div className="text-xs font-semibold text-purple-400 mb-1">2. Split Digraphs</div>
              <div className="text-xs text-muted-foreground font-mono">HE LX LO</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-orange-500/20">
              <div className="text-xs font-semibold text-orange-400 mb-1">3. Find Positions</div>
              <div className="text-xs text-muted-foreground">Locate in matrix</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-green-500/20">
              <div className="text-xs font-semibold text-green-400 mb-1">4. Apply Rule</div>
              <div className="text-xs text-muted-foreground">Row/Col/Rectangle</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-pink-500/20">
              <div className="text-xs font-semibold text-pink-400 mb-1">5. Get Ciphertext</div>
              <div className="text-xs text-muted-foreground font-mono">Output pairs</div>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="matrix" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="matrix">Key Matrix</TabsTrigger>
            <TabsTrigger value="rowRule">Row Rule</TabsTrigger>
            <TabsTrigger value="colRule">Column Rule</TabsTrigger>
            <TabsTrigger value="rectRule">Rectangle</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Key Matrix Construction Tab */}
          <TabsContent value="matrix" className="space-y-4">
            <div className="bg-gradient-to-b from-cyan-500/35 to-cyan-500/15 rounded-lg p-4 border-2 border-cyan-500 shadow-sm shadow-cyan-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-cyan-500/20">
                  <Grid3x3 className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-lg text-cyan-400">5×5 Key Matrix Construction</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    The key matrix is a 5×5 grid containing all 25 letters of the alphabet (I and J share a cell). 
                    It's built from a keyword to create a unique arrangement that serves as the encryption key.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Choose keyword:</strong> Example: "MONARCHY"</li>
                    <li><strong>Remove duplicates:</strong> MONARCHY → MONARCH (remove duplicate Y)</li>
                    <li><strong>Fill matrix left-to-right, top-to-bottom:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Start with unique keyword letters: M O N A R C H</li>
                        <li>Continue with remaining alphabet letters in order</li>
                        <li>Combine I/J into one cell (treat J as I)</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Example Matrix with "MONARCHY"</h4>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="grid grid-cols-5 gap-2 max-w-xs mx-auto font-mono text-sm">
                      {["M", "O", "N", "A", "R", "C", "H", "B", "D", "E", "F", "G", "I/J", "K", "L", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"].map((letter, idx) => (
                        <div key={idx} className="aspect-square flex items-center justify-center rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-center text-muted-foreground mt-3">
                      Row indices: 0-4 (top to bottom)<br/>
                      Column indices: 0-4 (left to right)
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Important Notes</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div><strong className="text-cyan-400">I/J Combination:</strong> Since 26 letters don't fit in 5×5 (25 cells), I and J share a cell. During encryption/decryption, J is treated as I.</div>
                    <div><strong className="text-cyan-400">Case Insensitive:</strong> All letters are converted to uppercase before processing.</div>
                    <div><strong className="text-cyan-400">Unique Keyword:</strong> Longer, more unique keywords create more secure matrices with less predictable letter positions.</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The key matrix arrangement determines the entire encryption. Different keywords produce different matrices, 
                    changing how letter pairs are encrypted. This provides much stronger security than simple substitution ciphers 
                    because the same letter can encrypt to different letters depending on its pair.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Row Rule Tab */}
          <TabsContent value="rowRule" className="space-y-4">
            <div className="bg-gradient-to-b from-blue-500/35 to-blue-500/15 rounded-lg p-4 border-2 border-blue-500 shadow-sm shadow-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-blue-500/20">
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-blue-400">Same Row Rule</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    When both letters of a digraph are in the same row, replace each letter with the letter immediately 
                    to its right. If a letter is at the end of the row, wrap around to the beginning.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Encryption (shift right):</strong>
                      <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
                        <li>Identify row of first letter</li>
                        <li>Move one position to the right</li>
                        <li>If at row end (column 4), wrap to row start (column 0)</li>
                        <li>Repeat for second letter</li>
                      </ol>
                    </div>
                    <div>
                      <strong className="text-foreground">Decryption (shift left):</strong>
                      <p className="ml-4 mt-1">Same process but shift left instead of right. Wrap from column 0 to column 4.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Visual Example</h4>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">Matrix Row 0: P L A Y F</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm">
                          <span className="text-blue-400 font-bold">Plaintext:</span> <span className="bg-blue-500/20 px-2 py-1 rounded">PL</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="font-mono text-sm">
                          <span className="text-green-400 font-bold">Ciphertext:</span> <span className="bg-green-500/20 px-2 py-1 rounded">LA</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        P (col 0) → shift right → L (col 1)<br/>
                        L (col 1) → shift right → A (col 2)
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm">
                          <span className="text-blue-400 font-bold">Plaintext:</span> <span className="bg-blue-500/20 px-2 py-1 rounded">YF</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="font-mono text-sm">
                          <span className="text-green-400 font-bold">Ciphertext:</span> <span className="bg-green-500/20 px-2 py-1 rounded">FP</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Y (col 3) → shift right → F (col 4)<br/>
                        F (col 4) → shift right → <strong className="text-orange-400">wrap to P (col 0)</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The row rule handles a specific geometric case in the matrix. The wraparound ensures every pair has 
                    a valid encryption, preventing edge cases. This simple shift operation maintains the digraphic nature 
                    of the cipher while being easy to implement manually.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Column Rule Tab */}
          <TabsContent value="colRule" className="space-y-4">
            <div className="bg-gradient-to-b from-purple-500/35 to-purple-500/15 rounded-lg p-4 border-2 border-purple-500 shadow-sm shadow-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-purple-500/20">
                  <ArrowDown className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg text-purple-400">Same Column Rule</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    When both letters of a digraph are in the same column, replace each letter with the letter immediately 
                    below it. If a letter is at the bottom of the column, wrap around to the top.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Encryption (shift down):</strong>
                      <ol className="list-decimal list-inside ml-4 mt-1 space-y-1">
                        <li>Identify column of first letter</li>
                        <li>Move one position down</li>
                        <li>If at column bottom (row 4), wrap to column top (row 0)</li>
                        <li>Repeat for second letter</li>
                      </ol>
                    </div>
                    <div>
                      <strong className="text-foreground">Decryption (shift up):</strong>
                      <p className="ml-4 mt-1">Same process but shift up instead of down. Wrap from row 0 to row 4.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Visual Example</h4>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">Matrix Column 0: P I/J E N U</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm">
                          <span className="text-purple-400 font-bold">Plaintext:</span> <span className="bg-purple-500/20 px-2 py-1 rounded">PI</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="font-mono text-sm">
                          <span className="text-green-400 font-bold">Ciphertext:</span> <span className="bg-green-500/20 px-2 py-1 rounded">IE</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        P (row 0) → shift down → I/J (row 1)<br/>
                        I/J (row 1) → shift down → E (row 2)
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm">
                          <span className="text-purple-400 font-bold">Plaintext:</span> <span className="bg-purple-500/20 px-2 py-1 rounded">NU</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="font-mono text-sm">
                          <span className="text-green-400 font-bold">Ciphertext:</span> <span className="bg-green-500/20 px-2 py-1 rounded">UP</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        N (row 3) → shift down → U (row 4)<br/>
                        U (row 4) → shift down → <strong className="text-orange-400">wrap to P (row 0)</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The column rule complements the row rule, handling the second geometric alignment case. Together with the row rule, 
                    these cover all situations where digraph letters share either a row or column, ensuring complete coverage of the matrix structure.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Rectangle Rule Tab */}
          <TabsContent value="rectRule" className="space-y-4">
            <div className="bg-gradient-to-b from-orange-500/35 to-orange-500/15 rounded-lg p-4 border-2 border-orange-500 shadow-sm shadow-orange-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-orange-500/20">
                  <Maximize2 className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-semibold text-lg text-orange-400">Rectangle Rule</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    When the two letters form opposite corners of a rectangle (different rows AND different columns), 
                    replace each letter with the letter in the same row but the other letter's column. This "swaps" the columns.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Locate both letters:</strong> Find positions (row₁, col₁) and (row₂, col₂)</li>
                    <li><strong>Form rectangle:</strong> The letters are at opposite corners</li>
                    <li><strong>Swap columns:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>First letter: take letter at (row₁, col₂)</li>
                        <li>Second letter: take letter at (row₂, col₁)</li>
                      </ul>
                    </li>
                    <li><strong>Same rule for encryption and decryption:</strong> Rectangle rule is self-inverse</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Visual Example</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">MONARCHY Matrix excerpt (rows 0-2):</div>
                      <div className="grid grid-cols-5 gap-1 max-w-[200px] font-mono text-xs">
                        {["M", "O", "N", "A", "R", "C", "H", "B", "D", "E", "F", "G", "I", "K", "L"].map((letter, idx) => (
                          <div key={idx} className={`aspect-square flex items-center justify-center rounded border ${
                            letter === "A" || letter === "H" ? "bg-orange-500/30 border-orange-400 font-bold text-orange-300" :
                            letter === "O" || letter === "D" ? "bg-green-500/30 border-green-400 font-bold text-green-300" :
                            "bg-background/50 border-border text-muted-foreground"
                          }`}>
                            {letter}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm">
                          <span className="text-orange-400 font-bold">Plaintext:</span> <span className="bg-orange-500/20 px-2 py-1 rounded">AH</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <div className="font-mono text-sm">
                          <span className="text-green-400 font-bold">Ciphertext:</span> <span className="bg-green-500/20 px-2 py-1 rounded">OD</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>A at (row 0, col 3) → take (row 0, col 1) = <strong className="text-green-400">O</strong></div>
                        <div>H at (row 1, col 1) → take (row 1, col 3) = <strong className="text-green-400">D</strong></div>
                        <div className="mt-2 pt-2 border-t border-border text-orange-400">
                          Rectangle corners: A(0,3) and H(1,1)<br/>
                          Other corners: O(0,1) and D(1,3) form the ciphertext
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Self-Inverse Property</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">The rectangle rule is <strong className="text-orange-400">self-inverse</strong>:</p>
                    <div className="font-mono text-xs space-y-1">
                      <div>AH → OD (encryption)</div>
                      <div>OD → AH (decryption, same operation!)</div>
                    </div>
                    <p className="mt-2">
                      This elegant property means the same rule works for both encryption and decryption, 
                      simplifying implementation and mental calculation.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The rectangle rule handles the most common case (letters in different rows and columns) and provides 
                    the most confusion in the cipher. The column swap creates a non-obvious transformation that's difficult 
                    to predict without knowing the key matrix, significantly strengthening security.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4">
            <div className="bg-gradient-to-b from-red-500/35 to-red-500/15 rounded-lg p-4 border-2 border-red-500 shadow-sm shadow-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-red-500/20">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-semibold text-lg text-red-400">Security Analysis</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Strengths Over Simple Substitution</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div><strong className="text-green-400">Digraphic Encryption:</strong> Encrypts letter pairs, not individual letters, obscuring single-letter frequency analysis</div>
                    <div><strong className="text-green-400">Polyalphabetic Effect:</strong> Same letter can encrypt differently (E in "HE" vs "BE"), appearing in different positions</div>
                    <div><strong className="text-green-400">26² = 676 digraphs:</strong> vs 26 single letters, provides more complexity</div>
                    <div><strong className="text-green-400">Keyword Security:</strong> Unknown keyword makes the 5×5 matrix arrangement secret</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Vulnerabilities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-red-400">Digraph Frequency Analysis:</strong>
                      <p className="text-muted-foreground mt-1">
                        Common digraphs like "TH", "HE", "AN" still have recognizable patterns. With sufficient ciphertext, 
                        attackers can identify frequent digraph patterns and deduce the key matrix structure.
                      </p>
                      <div className="text-xs mt-2 text-muted-foreground">
                        English digraph frequencies: TH (3.2%), HE (2.7%), AN (1.9%), ER (1.8%)
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">Known Plaintext Attack:</strong>
                      <p className="text-muted-foreground mt-1">
                        If attacker knows some plaintext-ciphertext pairs, they can deduce portions of the key matrix. 
                        With enough pairs (typically 25-50 digraphs), the entire matrix can be reconstructed.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-yellow-400">Limited Key Space:</strong>
                      <p className="text-muted-foreground mt-1">
                        25! ≈ 1.5×10²⁵ possible matrix arrangements seems large, but many are equivalent due to symmetries. 
                        Effective key space much smaller, vulnerable to modern computing power.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-purple-400">X Padding Artifacts:</strong>
                      <p className="text-muted-foreground mt-1">
                        Inserted X characters for duplicate letters create recognizable patterns. Decrypted text retains X padding 
                        (e.g., "BALLOON" → "BALXLOON"), providing clues about the original structure.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-blue-400">Short Messages Weakness:</strong>
                      <p className="text-muted-foreground mt-1">
                        Playfair requires reasonable message length for security. Very short messages (&lt; 20 characters) 
                        don't provide enough statistical variation to hide patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Historical Effectiveness</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">
                      Playfair was considered secure and practical for tactical military communications (WWI) because:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Could be performed manually in the field without machines</li>
                      <li>Faster than more complex ciphers like Hill Cipher</li>
                      <li>Resistant to casual cryptanalysis without frequency analysis knowledge</li>
                      <li>Short tactical messages didn't provide enough ciphertext for statistical attacks</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-red-400 mb-2">⚠️ Modern Perspective</h4>
                  <p className="text-sm text-muted-foreground">
                    Playfair is <strong className="text-red-400">completely insecure</strong> by modern standards. 
                    Automated cryptanalysis tools can break it in seconds with sufficient ciphertext. 
                    Use only for educational purposes to understand digraphic encryption and historical cryptography.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-4">
            <div className="bg-gradient-to-b from-indigo-500/35 to-indigo-500/15 rounded-lg p-4 border-2 border-indigo-500 shadow-sm shadow-indigo-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-indigo-500/20">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-lg text-indigo-400">Historical Context & Legacy</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Origins & Name</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1854:</strong> Sir Charles Wheatstone invented the cipher at Stonyhurst College, Lancashire
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">Naming:</strong> Lord Lyon Playfair, 1st Baron Playfair, promoted the cipher to the British Foreign Office. 
                      Despite Wheatstone's invention, it became known as the "Playfair Cipher"
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">Wheatstone's Modesty:</strong> Charles Wheatstone insisted Lord Playfair take credit, 
                      demonstrating Victorian-era scientific courtesy (though creating lasting historical confusion!)
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Historical Figures</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-indigo-400">Sir Charles Wheatstone (1802-1875):</strong>
                      <p>English scientist and inventor, also known for the Wheatstone bridge (electrical measurement) and contributions to telegraphy. 
                      His cipher was one of the first practical digraphic substitution ciphers.</p>
                    </div>
                    <div>
                      <strong className="text-indigo-400">Lord Playfair (1818-1898):</strong>
                      <p>British scientist and politician who served as Postmaster General. Recognized the cipher's military potential 
                      and successfully advocated for its adoption by the British government.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Military Usage</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div><strong className="text-green-400">Boer War (1899-1902):</strong> First documented military use by British forces in South Africa</div>
                    <div><strong className="text-green-400">World War I (1914-1918):</strong> Extensively used by British forces for tactical field communications</div>
                    <div><strong className="text-green-400">World War II (1939-1945):</strong> Still used for low-level tactical messages, though largely replaced by machine ciphers (Enigma, etc.)</div>
                    <div className="mt-2 pt-2 border-t border-border">
                      <strong className="text-yellow-400">Why it worked for military:</strong> Simple enough to use in the field without equipment, 
                      secure enough for short tactical messages that would be obsolete within hours.
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Notable Historical Incidents</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-orange-400">JFK Assassination (1963):</strong> 
                      According to some theories, a Playfair-encrypted message was found among Lee Harvey Oswald's possessions, 
                      though this remains unverified and disputed.
                    </div>
                    <div>
                      <strong className="text-orange-400">British Special Forces:</strong> 
                      Used as backup cipher by British SAS and other special forces units through the 1970s for emergency field communications 
                      when radio encryption failed.
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Educational Legacy</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Playfair remains a staple of cryptography education because it demonstrates:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li><strong className="text-indigo-400">Digraphic Substitution:</strong> First practical implementation of pair-based encryption</li>
                    <li><strong className="text-indigo-400">Geometric Rules:</strong> Spatial relationships in key matrix determine transformations</li>
                    <li><strong className="text-indigo-400">Manual Practicality:</strong> Can be performed without computers or machines</li>
                    <li><strong className="text-indigo-400">Historical Significance:</strong> Bridge between classical substitution and modern block ciphers</li>
                    <li><strong className="text-indigo-400">Cryptanalysis:</strong> Teaches digraph frequency analysis techniques</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Fun Facts</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground space-y-2">
                    <div>🎯 Playfair was the first cipher used by the U.S. Army in 1912</div>
                    <div>📚 Featured in Dorothy L. Sayers' mystery novel "Have His Carcase" (1932)</div>
                    <div>🎮 Appears in video games like "Assassin's Creed" and puzzle hunts as a classic cipher</div>
                    <div>⚡ A skilled operator could encrypt/decrypt at ~1 letter per second (much faster than complex ciphers)</div>
                    <div>🌍 Used by British colonial forces across multiple continents simultaneously during WWI</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
