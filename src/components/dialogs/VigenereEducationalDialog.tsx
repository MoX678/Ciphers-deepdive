import { Info, Key, Grid, RepeatIcon, Shield, BookOpen, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function VigenereEducationalDialog() {
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
            <div className="p-2 rounded-lg bg-gradient-to-b from-emerald-500/35 to-emerald-500/15 border-2 border-emerald-500">
              <Key className="w-6 h-6 text-emerald-400" />
            </div>
            Vigenère Cipher - Educational Guide
          </DialogTitle>
        </DialogHeader>

        {/* Overview Section */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg p-5 border border-emerald-500/30">
          <h3 className="font-semibold text-lg text-emerald-400 mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The Vigenère Cipher, invented by Giovan Battista Bellaso in 1553 but misattributed to Blaise de Vigenère, 
            is a polyalphabetic substitution cipher that uses a keyword to determine letter shifts. Each letter in the keyword 
            specifies a different Caesar shift, making it resistant to simple frequency analysis and earning it the nickname 
            "le chiffre indéchiffrable" (the indecipherable cipher) for centuries.
          </p>
          
          {/* Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
            <div className="bg-background/50 rounded-lg p-3 border border-blue-500/20">
              <div className="text-xs font-semibold text-blue-400 mb-1">1. Repeat Key</div>
              <div className="text-xs text-muted-foreground font-mono">KEY KEY KEY</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-purple-500/20">
              <div className="text-xs font-semibold text-purple-400 mb-1">2. Align Text</div>
              <div className="text-xs text-muted-foreground font-mono">HELLO WORLD</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-orange-500/20">
              <div className="text-xs font-semibold text-orange-400 mb-1">3. Convert to Numbers</div>
              <div className="text-xs text-muted-foreground">A=0...Z=25</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-green-500/20">
              <div className="text-xs font-semibold text-green-400 mb-1">4. Add & Mod 26</div>
              <div className="text-xs text-muted-foreground">(P+K) mod 26</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-pink-500/20">
              <div className="text-xs font-semibold text-pink-400 mb-1">5. Convert Back</div>
              <div className="text-xs text-muted-foreground font-mono">Ciphertext</div>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="keyRepeat" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="keyRepeat">Key Repeat</TabsTrigger>
            <TabsTrigger value="encryption">Encryption</TabsTrigger>
            <TabsTrigger value="decryption">Decryption</TabsTrigger>
            <TabsTrigger value="tabula">Tabula Recta</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Key Repetition Tab */}
          <TabsContent value="keyRepeat" className="space-y-4">
            <div className="bg-gradient-to-b from-emerald-500/35 to-emerald-500/15 rounded-lg p-4 border-2 border-emerald-500 shadow-sm shadow-emerald-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-emerald-500/20">
                  <RepeatIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-lg text-emerald-400">Keyword Repetition</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    The keyword is repeated cyclically to match the length of the plaintext. Each letter of the keyword 
                    determines the Caesar shift for the corresponding plaintext letter, creating a polyalphabetic cipher.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Choose keyword:</strong> Example: "KEY"</li>
                    <li><strong>Align with plaintext:</strong> Repeat keyword to match plaintext length
                      <div className="bg-background/50 rounded p-3 mt-2 font-mono text-xs space-y-1">
                        <div>Plaintext:  <span className="text-blue-400">H E L L O W O R L D</span></div>
                        <div>Keyword:    <span className="text-emerald-400">K E Y K E Y K E Y K</span></div>
                      </div>
                    </li>
                    <li><strong>Each position uses different shift:</strong> K shifts by 10, E by 4, Y by 24</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Letter-to-Number Mapping</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm">
                    <div className="font-mono text-xs grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">A=0, B=1, C=2, ..., Z=25</div>
                      <div className="text-emerald-400">K=10, E=4, Y=24</div>
                    </div>
                    <div className="text-muted-foreground mt-2">
                      Each keyword letter value determines the shift amount for its position.
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The repeating keyword creates a pattern of different Caesar shifts. The same plaintext letter encrypts 
                    differently depending on its position: the first 'L' in "HELLO" is shifted by Y (24), while the second 'L' 
                    is shifted by K (10). This defeats simple frequency analysis that works against monoalphabetic ciphers.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Encryption Tab */}
          <TabsContent value="encryption" className="space-y-4">
            <div className="bg-gradient-to-b from-blue-500/35 to-blue-500/15 rounded-lg p-4 border-2 border-blue-500 shadow-sm shadow-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-blue-500/20">
                  <Key className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-blue-400">Encryption Process</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    Encryption adds the numeric value of each keyword letter to the corresponding plaintext letter (mod 26), 
                    effectively performing a Caesar shift specific to each position.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Formula</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-blue-400">
                    C<sub>i</sub> = (P<sub>i</sub> + K<sub>i</sub>) mod 26
                    <div className="text-xs text-muted-foreground mt-2">
                      Where:<br/>
                      C<sub>i</sub> = ciphertext letter at position i<br/>
                      P<sub>i</sub> = plaintext letter at position i<br/>
                      K<sub>i</sub> = keyword letter at position i (repeated)
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Step-by-Step Example</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-3 text-sm">
                    <div className="font-mono text-xs">
                      <div className="font-bold text-foreground mb-2">Plaintext: "HELLO" with keyword "KEY"</div>
                      <div className="space-y-2">
                        <div className="bg-background rounded p-2">
                          <div className="text-blue-400">H (7) + K (10) = 17 mod 26 = <strong className="text-green-400">R</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-blue-400">E (4) + E (4) = 8 mod 26 = <strong className="text-green-400">I</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-blue-400">L (11) + Y (24) = 35 mod 26 = <strong className="text-green-400">J</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-blue-400">L (11) + K (10) = 21 mod 26 = <strong className="text-green-400">V</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-blue-400">O (14) + E (4) = 18 mod 26 = <strong className="text-green-400">S</strong></div>
                        </div>
                      </div>
                      <div className="mt-3 font-bold text-green-400">Result: HELLO → RIJVS</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    This simple addition creates a powerful polyalphabetic effect. Each plaintext letter can encrypt to 
                    multiple different ciphertext letters depending on its position in the message, making frequency 
                    analysis much more difficult than simple substitution ciphers.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Decryption Tab */}
          <TabsContent value="decryption" className="space-y-4">
            <div className="bg-gradient-to-b from-purple-500/35 to-purple-500/15 rounded-lg p-4 border-2 border-purple-500 shadow-sm shadow-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-purple-500/20">
                  <Key className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg text-purple-400">Decryption Process</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    Decryption subtracts the keyword letter values from the ciphertext (mod 26), reversing the encryption shifts.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Formula</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-purple-400">
                    P<sub>i</sub> = (C<sub>i</sub> - K<sub>i</sub>) mod 26
                    <div className="text-xs text-muted-foreground mt-2">
                      Or equivalently:<br/>
                      P<sub>i</sub> = (C<sub>i</sub> + (26 - K<sub>i</sub>)) mod 26
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Step-by-Step Example</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-3 text-sm">
                    <div className="font-mono text-xs">
                      <div className="font-bold text-foreground mb-2">Ciphertext: "RIJVS" with keyword "KEY"</div>
                      <div className="space-y-2">
                        <div className="bg-background rounded p-2">
                          <div className="text-purple-400">R (17) - K (10) = 7 mod 26 = <strong className="text-green-400">H</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-purple-400">I (8) - E (4) = 4 mod 26 = <strong className="text-green-400">E</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-purple-400">J (9) - Y (24) = -15 mod 26 = 11 = <strong className="text-green-400">L</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-purple-400">V (21) - K (10) = 11 mod 26 = <strong className="text-green-400">L</strong></div>
                        </div>
                        <div className="bg-background rounded p-2">
                          <div className="text-purple-400">S (18) - E (4) = 14 mod 26 = <strong className="text-green-400">O</strong></div>
                        </div>
                      </div>
                      <div className="mt-3 font-bold text-green-400">Result: RIJVS → HELLO</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Handling Negative Numbers</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">When subtraction gives negative values, add 26 to wrap around:</p>
                    <div className="font-mono text-xs space-y-1">
                      <div>-15 mod 26 = -15 + 26 = 11</div>
                      <div>-3 mod 26 = -3 + 26 = 23</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The symmetric nature of modular arithmetic makes decryption straightforward once you have the keyword. 
                    Without the keyword, however, determining the correct shifts for each position becomes a challenging cryptanalysis problem.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tabula Recta Tab */}
          <TabsContent value="tabula" className="space-y-4">
            <div className="bg-gradient-to-b from-orange-500/35 to-orange-500/15 rounded-lg p-4 border-2 border-orange-500 shadow-sm shadow-orange-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-orange-500/20">
                  <Grid className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-semibold text-lg text-orange-400">Tabula Recta (Vigenère Square)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Is</h4>
                  <p className="text-sm text-muted-foreground">
                    The Tabula Recta (or Vigenère Square) is a 26×26 table showing all possible Caesar shifts. 
                    Historically, it was used as a lookup tool for manual encryption/decryption before the mathematical 
                    formula was widely understood.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Structure</h4>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">Partial Tabula Recta (first 8 rows/columns):</div>
                    <div className="font-mono text-[10px] overflow-x-auto">
                      <div className="grid grid-cols-9 gap-0.5 max-w-sm">
                        <div className="bg-background/50 p-1 text-center font-bold text-orange-400"></div>
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((letter) => (
                          <div key={letter} className="bg-background/50 p-1 text-center font-bold text-orange-400">{letter}</div>
                        ))}
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((rowLetter, rowIdx) => (
                          <>
                            <div key={`row-${rowLetter}`} className="bg-background/50 p-1 text-center font-bold text-orange-400">{rowLetter}</div>
                            {Array.from({ length: 8 }).map((_, colIdx) => {
                              const charCode = ((rowIdx + colIdx) % 26) + 65;
                              return (
                                <div key={`${rowIdx}-${colIdx}`} className="bg-cyan-500/10 p-1 text-center text-cyan-300">
                                  {String.fromCharCode(charCode)}
                                </div>
                              );
                            })}
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">
                      Each row represents a Caesar shift. Row A = shift 0, Row B = shift 1, etc.
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How to Use It</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Find the plaintext letter column:</strong> Top row headers</li>
                    <li><strong>Find the keyword letter row:</strong> Left column headers</li>
                    <li><strong>Intersection gives ciphertext:</strong> Where row and column meet
                      <div className="bg-background/50 rounded p-2 mt-2 font-mono text-xs">
                        Example: Plaintext 'H', keyword 'K'<br/>
                        Find column H, row K → intersection = <span className="text-green-400 font-bold">R</span>
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Historical Context</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">
                      The Tabula Recta was essential before calculators and computers. Operators would:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Print the square on a large sheet or card</li>
                      <li>Use a ruler to align rows and columns</li>
                      <li>Look up each letter manually during encryption/decryption</li>
                      <li>Process ~1 letter per 3-5 seconds (much faster than calculating mod 26!)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The Tabula Recta visually demonstrates the polyalphabetic nature of Vigenère. Each row represents 
                    a different substitution alphabet, and the keyword determines which alphabet is used for each position. 
                    This visual tool helped popularize the cipher and made it accessible for manual use.
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
                  <h4 className="font-semibold text-sm text-foreground mb-2">Historical Strength</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div><strong className="text-green-400">Polyalphabetic:</strong> Same letter encrypts differently based on position, defeating simple frequency analysis</div>
                    <div><strong className="text-green-400">"Indecipherable":</strong> Considered unbreakable for ~300 years (1553-1863)</div>
                    <div><strong className="text-green-400">Simple Implementation:</strong> Easy to use with Tabula Recta or mental arithmetic</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">The Kasiski Examination (1863)</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-red-400">Breaking Point:</strong> Friedrich Kasiski published a method to break Vigenère by exploiting keyword repetition:</p>
                    <ol className="list-decimal list-inside ml-4 space-y-1 mt-2">
                      <li><strong>Find repeated sequences</strong> in ciphertext</li>
                      <li><strong>Calculate distances</strong> between repetitions</li>
                      <li><strong>Find GCD</strong> (greatest common divisor) of distances → likely keyword length</li>
                      <li><strong>Split ciphertext</strong> into groups based on keyword length</li>
                      <li><strong>Frequency analysis</strong> on each group (each is a Caesar cipher!)</li>
                    </ol>
                    <div className="mt-2 pt-2 border-t border-border">
                      <strong>Example:</strong> If "THE" appears encrypted as "DXI" twice, 15 positions apart, 
                      keyword length likely divides 15 (3, 5, or 15).
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Modern Vulnerabilities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-red-400">Short Keywords:</strong>
                      <p className="text-muted-foreground mt-1">
                        Keywords shorter than the message create repetition patterns. A 3-letter keyword encrypting 
                        100 characters repeats 33 times, making Kasiski examination very effective.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">Known Plaintext:</strong>
                      <p className="text-muted-foreground mt-1">
                        If attacker knows any plaintext-ciphertext pair, they can deduce keyword letters: 
                        K<sub>i</sub> = C<sub>i</sub> - P<sub>i</sub> (mod 26)
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-yellow-400">Dictionary Words:</strong>
                      <p className="text-muted-foreground mt-1">
                        Keywords that are dictionary words are vulnerable to brute-force dictionary attacks, 
                        testing common words until plaintext emerges.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-purple-400">Computational Power:</strong>
                      <p className="text-muted-foreground mt-1">
                        Modern computers can break Vigenère with sufficient ciphertext in seconds using 
                        automated Kasiski examination and frequency analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-red-400 mb-2">⚠️ Modern Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Vigenère is <strong className="text-red-400">completely insecure</strong> for any modern application. 
                    It's only secure when the keyword is as long as the message and truly random (making it a One-Time Pad, 
                    which is a different cipher entirely). Use modern encryption like AES for actual security needs.
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
                  <h4 className="font-semibold text-sm text-foreground mb-2">The Misattribution Story</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1553:</strong> <strong>Giovan Battista Bellaso</strong>, Italian cryptologist, 
                      invented the cipher and published it in "La cifra del. Sig. Giovan Battista Bellaso"
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1586:</strong> <strong>Blaise de Vigenère</strong>, French diplomat, 
                      published a book describing various ciphers, including one similar to Bellaso's
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">19th Century:</strong> Historians mistakenly attributed the cipher to Vigenère. 
                      The name stuck despite Bellaso being the true inventor. Vigenère's actual cipher was much stronger (autokey variant).
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Le Chiffre Indéchiffrable</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <p>
                      For nearly 300 years, Vigenère was called <strong className="text-indigo-400">"le chiffre indéchiffrable"</strong> 
                      (the indecipherable cipher) because no one knew how to break it systematically.
                    </p>
                    <p className="mt-2">
                      Cryptanalysts could break simple substitution ciphers using frequency analysis, but Vigenère's 
                      polyalphabetic nature scattered letter frequencies across multiple alphabets, making traditional methods useless.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Breaking the Cipher</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">1854:</strong> <strong>Charles Babbage</strong> (computing pioneer) 
                      discovered a method to break Vigenère but never published it
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">1863:</strong> <strong>Friedrich Kasiski</strong> independently 
                      discovered and published the Kasiski examination, finally breaking the "unbreakable" cipher
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">Impact:</strong> Showed that even ciphers considered secure for centuries 
                      could be broken with mathematical analysis, spurring development of more sophisticated cryptosystems
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Military & Historical Usage</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong className="text-green-400">American Civil War (1861-1865):</strong> Used by Confederate forces, some messages broken by Union cryptanalysts</li>
                      <li><strong className="text-green-400">World War I:</strong> Still used for low-priority messages despite being theoretically breakable</li>
                      <li><strong className="text-green-400">1920s-1930s:</strong> Gradually replaced by rotor machines (Enigma, etc.) for military communications</li>
                      <li><strong className="text-green-400">Modern Era:</strong> Occasionally still used for simple obfuscation (e.g., geocaching puzzles, ARGs)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Educational Legacy</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Vigenère remains a cornerstone of cryptography education because it teaches:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li><strong className="text-indigo-400">Polyalphabetic Encryption:</strong> Multiple substitution alphabets defeat simple analysis</li>
                    <li><strong className="text-indigo-400">Modular Arithmetic:</strong> Addition and subtraction mod 26</li>
                    <li><strong className="text-indigo-400">Cryptanalysis:</strong> Kasiski examination demonstrates pattern analysis</li>
                    <li><strong className="text-indigo-400">Security Lifecycle:</strong> Even "unbreakable" ciphers can be broken with new techniques</li>
                    <li><strong className="text-indigo-400">Key Management:</strong> Importance of key length and randomness</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Fun Facts</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground space-y-2">
                    <div>📚 Jules Verne featured Vigenère in his 1885 novel "Mathias Sandorf"</div>
                    <div>🔐 Many modern "ROT13" online tools actually use Vigenère with keyword "N" (shift 13)</div>
                    <div>🎮 Used in numerous video games and puzzles as an intermediate-difficulty cipher</div>
                    <div>📜 The Babbage-Kasiski method remains relevant for breaking other periodic substitution ciphers</div>
                    <div>⚡ With a random key as long as the message, Vigenère becomes the unbreakable One-Time Pad</div>
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
