import { Info, Lock, Shuffle, Grid3x3, Binary, Key, Shield, BookOpen, Target, ListOrdered, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DESEducationalDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-xs gap-2 hover:bg-primary/10 transition-colors">
          <Info className="w-3.5 h-3.5" />
          How It Works
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b border-border/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <DialogTitle className="text-2xl">DES (Data Encryption Standard)</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">Interactive Educational Guide</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto flex-1 px-1">
          <div className="space-y-6 py-6">
            {/* Overview Section - Always Visible */}
            <div className="bg-gradient-to-br from-blue-500/15 via-blue-500/5 to-purple-500/10 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">How DES Works</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                DES (Data Encryption Standard) is a symmetric-key block cipher established by NIST in 1977. 
                It encrypts data in 64-bit blocks using a 56-bit effective key (8 parity bits) through a Feistel network 
                structure with 16 rounds. While now considered insecure due to its short key length, DES was the dominant 
                encryption standard for over 20 years.
              </p>
              
              {/* Visual Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-blue-500/35 to-blue-500/15 border border-blue-500 flex items-center justify-center">
                      <Binary className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">1. Input Block</span>
                  </div>
                  <p className="text-xs text-muted-foreground">64-bit plaintext block</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-purple-500/35 to-purple-500/15 border border-purple-500 flex items-center justify-center">
                      <Shuffle className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">2. Initial Permutation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Bit rearrangement (IP)</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-orange-500/35 to-orange-500/15 border border-orange-500 flex items-center justify-center">
                      <Grid3x3 className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">3. 16 Rounds</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Feistel L/R processing</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-green-500/35 to-green-500/15 border border-green-500 flex items-center justify-center">
                      <Shuffle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">4. Final Permutation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Inverse of IP (IP⁻¹)</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-pink-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-pink-500/35 to-pink-500/15 border border-pink-500 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-pink-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">5. Ciphertext</span>
                  </div>
                  <p className="text-xs text-muted-foreground">64-bit encrypted block</p>
                </div>
              </div>
            </div>

            {/* Tabs Section - Educational Deep Dive */}
            <Tabs defaultValue="feistel" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-1 bg-muted/30">
                <TabsTrigger value="feistel" className="data-[state=active]:bg-blue-500/20 data-[state=active]:border-blue-500/50 flex items-center gap-2 text-xs py-2">
                  <Shuffle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Feistel</span>
                </TabsTrigger>
                <TabsTrigger value="expansion" className="data-[state=active]:bg-purple-500/20 data-[state=active]:border-purple-500/50 flex items-center gap-2 text-xs py-2">
                  <span className="hidden sm:inline">Expansion</span>
                  <span className="sm:hidden">Expand</span>
                </TabsTrigger>
                <TabsTrigger value="sboxes" className="data-[state=active]:bg-orange-500/20 data-[state=active]:border-orange-500/50 flex items-center gap-2 text-xs py-2">
                  <Grid3x3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">S-boxes</span>
                </TabsTrigger>
                <TabsTrigger value="permutation" className="data-[state=active]:bg-green-500/20 data-[state=active]:border-green-500/50 flex items-center gap-2 text-xs py-2">
                  <Binary className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">P-box</span>
                </TabsTrigger>
                <TabsTrigger value="keySchedule" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:border-cyan-500/50 flex items-center gap-2 text-xs py-2">
                  <Key className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Key Schedule</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-red-500/20 data-[state=active]:border-red-500/50 flex items-center gap-2 text-xs py-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-indigo-500/20 data-[state=active]:border-indigo-500/50 flex items-center gap-2 text-xs py-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">History</span>
                </TabsTrigger>
              </TabsList>

              {/* Feistel Network Tab */}
              <TabsContent value="feistel" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
                      <Shuffle className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-400">Feistel Network Structure</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The Feistel structure divides each 64-bit block into two 32-bit halves (Left and Right) and processes them 
                      through 16 rounds. Each round swaps and transforms the halves using a round function (F-function) and a subkey.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Initial Split:</strong> Divide 64-bit block into L₀ (left 32 bits) and R₀ (right 32 bits)</li>
                      <li><strong className="text-foreground">Round Processing (i = 1 to 16):</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-blue-500/20 space-y-1">
                          <div>L<sub>i</sub> = R<sub>i-1</sub></div>
                          <div>R<sub>i</sub> = L<sub>i-1</sub> ⊕ F(R<sub>i-1</sub>, K<sub>i</sub>)</div>
                        </div>
                      </li>
                      <li><strong className="text-foreground">Swap:</strong> Right half becomes new left half</li>
                      <li><strong className="text-foreground">F-function:</strong> Applies expansion, S-box substitution, and permutation to right half</li>
                      <li><strong className="text-foreground">XOR:</strong> Result XORed with left half to create new right half</li>
                      <li><strong className="text-foreground">Final Swap:</strong> After 16 rounds, concatenate R₁₆L₁₆ (swap one last time)</li>
                    </ol>
                  </div>

                  {/* Key Property */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Key Property: Self-Inverting</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      Feistel networks are elegant because encryption and decryption use the same algorithm. 
                      To decrypt, simply run the process with subkeys in reverse order (K₁₆ to K₁).
                    </p>
                    <div className="bg-muted/30 rounded p-2 font-mono text-xs border border-blue-500/20">
                      Encryption: K₁ → K₂ → ... → K₁₆<br/>
                      Decryption: K₁₆ → K₁₅ → ... → K₁
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The Feistel structure provides confusion and diffusion (Shannon's principles). Even if the F-function isn't 
                      invertible, the overall structure is, making implementation simpler. This design influenced many ciphers including 
                      Blowfish, Twofish, and CAST.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Expansion Tab */}
              <TabsContent value="expansion" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-purple-500/35 to-purple-500/15 border-2 border-purple-500 flex items-center justify-center shadow-sm shadow-purple-500/20">
                      <Binary className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-400">Expansion Permutation (E-box)</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The expansion function (E) takes the 32-bit right half and expands it to 48 bits. 
                      This matches the 48-bit subkey size for XOR operation and provides diffusion by duplicating some bits.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-3 text-xs text-muted-foreground">
                      <div>
                        <strong className="text-foreground">Expansion Pattern:</strong>
                        <p className="mt-1">The 32-bit input is divided into 8 groups of 4 bits. Each group is expanded to 6 bits by duplicating the edge bits.</p>
                      </div>
                      <div>
                        <strong className="text-foreground">Example:</strong>
                        <div className="bg-muted/30 rounded p-3 mt-2 font-mono text-xs border border-purple-500/20">
                          <div className="text-purple-400 mb-2">Input: 32 bits (bits 1-32)</div>
                          <div className="text-muted-foreground">Group 1: [32 1 2 3 4 5] (bit 32 and 5 duplicated)</div>
                          <div className="text-muted-foreground">Group 2: [4 5 6 7 8 9] (bit 4 and 9 duplicated)</div>
                          <div className="text-muted-foreground">...</div>
                          <div className="text-muted-foreground">Group 8: [28 29 30 31 32 1] (bit 28 and 1 duplicated)</div>
                          <div className="text-green-400 mt-2">Output: 48 bits (8 groups × 6 bits)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diffusion Effect */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Diffusion Effect</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      By duplicating edge bits, each input bit influences multiple S-boxes. A single bit change in the input 
                      affects multiple S-box outputs, spreading (diffusing) its influence across the entire block.
                    </p>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Expansion provides diffusion and allows the 48-bit subkey to be XORed with the expanded data. 
                      The bit duplication ensures that changes propagate more effectively through the cipher, 
                      making cryptanalysis harder.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* S-boxes Tab */}
              <TabsContent value="sboxes" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-orange-500/35 to-orange-500/15 border-2 border-orange-500 flex items-center justify-center shadow-sm shadow-orange-500/20">
                      <Grid3x3 className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-400">Substitution Boxes (S-boxes)</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      S-boxes are the heart of DES's security. They provide non-linear substitution, taking 6-bit inputs 
                      and producing 4-bit outputs. DES has 8 S-boxes (S1-S8), each with a unique lookup table.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">How S-boxes Work</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-3 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Input:</strong> 48 bits from expansion XOR subkey → split into 8 groups of 6 bits</li>
                      <li><strong className="text-foreground">For each 6-bit group (b₁b₂b₃b₄b₅b₆):</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-orange-500/20 space-y-1">
                          <div>Row = b₁b₆ (outer 2 bits) → 0-3</div>
                          <div>Column = b₂b₃b₄b₅ (inner 4 bits) → 0-15</div>
                          <div className="text-orange-400 mt-1">Lookup S-box[row][column] → 4-bit output</div>
                        </div>
                      </li>
                      <li><strong className="text-foreground">Output:</strong> 8 groups × 4 bits = 32 bits total</li>
                    </ol>
                  </div>

                  {/* Example */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Example with S1</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <strong className="text-foreground">Input to S1:</strong> 011011 (6 bits)
                      </div>
                      <div className="bg-muted/30 rounded p-2 font-mono border border-orange-500/20">
                        <div>Row = 01 (outer bits) = 1</div>
                        <div>Column = 1101 (inner bits) = 13</div>
                        <div className="text-orange-400 mt-1">S1[1][13] = 5 = 0101 (4 bits)</div>
                      </div>
                      <div className="text-muted-foreground">
                        Each S-box has a unique 4×16 lookup table with carefully designed values.
                      </div>
                    </div>
                  </div>

                  {/* S-box Properties */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">S-box Design Criteria</h4>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>• Each row is a permutation of 0-15 (no duplicates)</div>
                      <div>• Changing 1 input bit changes at least 2 output bits</div>
                      <div>• Each S-box output bit is not close to linear in input bits</div>
                      <div>• Designed to resist differential and linear cryptanalysis</div>
                      <div className="mt-2 pt-2 border-t border-border text-yellow-400">
                        <strong>Note:</strong> IBM knew about differential cryptanalysis in the 1970s, years before it was publicly discovered!
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      S-boxes provide the <strong className="text-orange-400">only non-linearity</strong> in DES. 
                      Without them, DES would be a linear cipher easily broken with linear algebra. 
                      The mysterious design criteria (revealed later) show that NSA was ahead of public cryptanalysis by decades.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Permutation Tab */}
              <TabsContent value="permutation" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/35 to-green-500/15 border-2 border-green-500 flex items-center justify-center shadow-sm shadow-green-500/20">
                      <Binary className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-green-400">Permutation (P-box)</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The permutation function (P) rearranges the 32 bits output from the S-boxes. 
                      This is the final step in the F-function before XOR with the left half.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>The P-box is a fixed permutation that rearranges 32 input bits to 32 output bits.</p>
                      <div className="bg-muted/30 rounded p-3 font-mono border border-green-500/20">
                        <div className="text-green-400 mb-2">Example P-box table (partial):</div>
                        <div className="grid grid-cols-8 gap-1 text-center text-xs">
                          <div className="border border-border rounded p-1">16</div>
                          <div className="border border-border rounded p-1">7</div>
                          <div className="border border-border rounded p-1">20</div>
                          <div className="border border-border rounded p-1">21</div>
                          <div className="border border-border rounded p-1">29</div>
                          <div className="border border-border rounded p-1">12</div>
                          <div className="border border-border rounded p-1">28</div>
                          <div className="border border-border rounded p-1">17</div>
                        </div>
                        <div className="text-muted-foreground mt-2">
                          Output bit 1 = Input bit 16, Output bit 2 = Input bit 7, etc.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diffusion Effect */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Enhanced Diffusion</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      The permutation spreads S-box outputs across the entire 32-bit block. Each S-box's output bits 
                      are distributed to different positions, ensuring that changes affect multiple S-boxes in the next round.
                    </p>
                    <div className="bg-muted/30 rounded p-2 text-xs border border-green-500/20">
                      <strong className="text-green-400">Avalanche Effect:</strong> A single bit change in plaintext or key 
                      causes approximately 50% of ciphertext bits to change after multiple rounds.
                    </div>
                  </div>

                  {/* Complete F-Function */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Complete F-Function Pipeline</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs border border-green-500/20 space-y-1">
                      <div className="text-blue-400">1. Input: 32 bits (right half)</div>
                      <div className="text-purple-400">2. Expansion: 32 → 48 bits (E-box)</div>
                      <div className="text-orange-400">3. XOR with subkey: 48 bits ⊕ 48-bit key</div>
                      <div className="text-pink-400">4. S-boxes: 48 → 32 bits (8 S-boxes)</div>
                      <div className="text-green-400">5. Permutation: 32 bits (P-box)</div>
                      <div className="text-cyan-400">6. Output: 32 bits → XOR with left half</div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The P-box completes DES's diffusion strategy. Combined with S-box substitution, it ensures that 
                      each plaintext bit influences many ciphertext bits, and each key bit affects many ciphertext bits. 
                      This is essential for Shannon's confusion and diffusion principles.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Key Schedule Tab */}
              <TabsContent value="keySchedule" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-5 border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-cyan-500/35 to-cyan-500/15 border-2 border-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-500/20">
                      <Key className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-cyan-400">Key Schedule</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The key schedule generates 16 round subkeys (K₁ through K₁₆) from the original 64-bit key. 
                      Each subkey is 48 bits and used in one round of the Feistel network.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">Key Schedule Process</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-3 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Input:</strong> 64-bit key (8 parity bits ignored → 56 effective bits)</li>
                      <li><strong className="text-foreground">Permuted Choice 1 (PC-1):</strong> Rearrange and select 56 bits, split into C₀ (28 bits) and D₀ (28 bits)</li>
                      <li><strong className="text-foreground">For each round i = 1 to 16:</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-cyan-500/20 space-y-1">
                          <div>• Left circular shift C and D by 1 or 2 positions</div>
                          <div className="text-muted-foreground ml-4">Rounds 1,2,9,16: shift by 1</div>
                          <div className="text-muted-foreground ml-4">Other rounds: shift by 2</div>
                          <div>• Cᵢ = LeftShift(Cᵢ₋₁), Dᵢ = LeftShift(Dᵢ₋₁)</div>
                          <div>• Concatenate: CᵢDᵢ (56 bits)</div>
                          <div>• Permuted Choice 2 (PC-2): Select and permute 48 bits</div>
                          <div className="text-cyan-400">• Output: Kᵢ (48-bit subkey)</div>
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* Why Different Shifts */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why Variable Shifts?</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      The variable shift pattern (1-2-2-2-2-2-2-2-1-2-2-2-2-2-2-1) ensures that each key bit is used 
                      in multiple rounds while maintaining roughly equal distribution across all subkeys.
                    </p>
                    <div className="bg-muted/30 rounded p-2 text-xs border border-cyan-500/20">
                      Total shifts: 28 positions = full rotation (C₁₆ and D₁₆ are back to original positions)
                    </div>
                  </div>

                  {/* Weak Keys */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-300" />
                      <h4 className="font-semibold text-sm text-foreground">Weak and Semi-Weak Keys</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
                        <strong className="text-yellow-400">4 Weak Keys:</strong> Generate identical subkeys for all rounds 
                        (e.g., all 0s, all 1s, alternating pattern)
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded p-2">
                        <strong className="text-orange-400">12 Semi-Weak Keys:</strong> Pairs of keys that encrypt/decrypt each other's ciphertext
                      </div>
                      <div className="text-muted-foreground">
                        In practice, these represent only 16 out of 2⁵⁶ possible keys (negligible probability).
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The key schedule ensures that different key bits influence different rounds, spreading key influence 
                      throughout the cipher. The circular shifts create interdependencies between subkeys, making it harder 
                      to analyze individual rounds in isolation.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-xl p-5 border border-red-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-red-500/35 to-red-500/15 border-2 border-red-500 flex items-center justify-center shadow-sm shadow-red-500/20">
                      <Shield className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-lg font-bold text-red-400">Security Analysis</h3>
                  </div>
                  
                  {/* Historical Strengths */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Historical Strengths</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div><strong className="text-green-400">Confusion & Diffusion:</strong> S-boxes provide non-linearity; permutations spread changes</div>
                      <div><strong className="text-green-400">Feistel Structure:</strong> Proven cryptographic design used in many ciphers</div>
                      <div><strong className="text-green-400">Avalanche Effect:</strong> Small input changes cause large output changes</div>
                      <div><strong className="text-green-400">S-box Design:</strong> Resistant to differential cryptanalysis (IBM knew this in 1970s!)</div>
                    </div>
                  </div>

                  {/* Fatal Weakness */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-red-300" />
                      <h4 className="font-semibold text-sm text-foreground">Fatal Weakness: 56-bit Key</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <p className="text-muted-foreground">
                        DES's key is only 56 bits effective (8 parity bits don't add security), making it vulnerable to brute force.
                      </p>
                      <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                        <div className="font-mono space-y-1">
                          <div className="text-red-400">Key space: 2⁵⁶ ≈ 72 quadrillion keys</div>
                          <div className="text-muted-foreground mt-2">Timeline:</div>
                          <div className="text-yellow-400">1977: Secure (years to brute force)</div>
                          <div className="text-orange-400">1998: EFF's "Deep Crack" broke DES in 56 hours ($250k machine)</div>
                          <div className="text-red-400">2006: COPACOBANA broke DES in 9 days ($10k machine)</div>
                          <div className="text-red-400">2025: Modern cloud computing can break DES in hours</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Known Attacks */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-red-300" />
                      <h4 className="font-semibold text-sm text-foreground">Known Attacks</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-red-400">Brute Force:</strong> Trying all 2⁵⁶ keys (now practical with modern hardware)
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-orange-400">Differential Cryptanalysis:</strong> Requires 2⁴⁷ chosen plaintexts (impractical but faster than brute force)
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-yellow-400">Linear Cryptanalysis:</strong> Requires 2⁴³ known plaintexts
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-purple-400">Meet-in-the-Middle:</strong> Double DES (2-DES) only has 57-bit security, not 112-bit
                      </div>
                    </div>
                  </div>

                  {/* Triple DES Solution */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Triple DES (3DES) Temporary Fix</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>To extend DES's life, Triple DES applies DES three times with different keys:</p>
                      <div className="bg-muted/30 rounded p-3 font-mono border border-green-500/20">
                        <div className="text-green-400">C = E<sub>K3</sub>(D<sub>K2</sub>(E<sub>K1</sub>(P)))</div>
                        <div className="text-muted-foreground mt-2">
                          (Encrypt → Decrypt → Encrypt pattern for backward compatibility)
                        </div>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-2 mt-2">
                        <strong className="text-green-400">3DES:</strong> 168-bit key (3 × 56), effective security ~112 bits. 
                        Still used in some legacy systems but being phased out.
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <h4 className="font-semibold text-sm text-red-400">⚠️ Security Recommendation</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-red-400">Never use DES for new applications!</strong> Use AES-256 instead. 
                      DES is only acceptable for educational purposes or when dealing with legacy systems. 
                      Even 3DES is being deprecated (NIST disallowed after 2023).
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-xl p-5 border border-indigo-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-indigo-500/35 to-indigo-500/15 border-2 border-indigo-500 flex items-center justify-center shadow-sm shadow-indigo-500/20">
                      <BookOpen className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold text-indigo-400">Historical Context & Legacy</h3>
                  </div>
                  
                  {/* Origins */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Origins</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1973:</strong> US National Bureau of Standards (NBS, now NIST) solicited proposals for a federal encryption standard
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1974:</strong> IBM submitted a cipher based on Horst Feistel's "Lucifer" cipher
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1975:</strong> NSA consulted on the design, strengthening S-boxes but reducing key size from 128 to 56 bits
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1977:</strong> DES officially adopted as Federal Information Processing Standard (FIPS 46)
                      </div>
                    </div>
                  </div>

                  {/* NSA Controversy */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ListOrdered className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">The NSA Controversy</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>NSA's involvement sparked suspicion and conspiracy theories:</p>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                        <strong className="text-yellow-400">Concern 1:</strong> Why reduce key from 128 to 56 bits? 
                        (Theory: NSA wanted a backdoor for brute force)
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                        <strong className="text-yellow-400">Concern 2:</strong> Why keep S-box design criteria classified? 
                        (Theory: NSA planted a backdoor)
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-3 mt-2">
                        <strong className="text-green-400">Reality (revealed 1990s):</strong> NSA actually strengthened DES! 
                        S-boxes were designed to resist differential cryptanalysis, which wasn't publicly known until 1990. 
                        NSA was protecting against attacks the academic community didn't know existed yet.
                      </div>
                    </div>
                  </div>

                  {/* Golden Age */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Golden Age (1977-1998)</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                      <li><strong className="text-indigo-400">Banking Standard:</strong> Used worldwide for ATM PIN encryption, financial transactions</li>
                      <li><strong className="text-indigo-400">Government Standard:</strong> Required for all federal sensitive but unclassified data</li>
                      <li><strong className="text-indigo-400">Commercial Adoption:</strong> Became the de facto encryption standard globally</li>
                      <li><strong className="text-indigo-400">Hardware Implementation:</strong> Specialized DES chips made encryption fast and cheap</li>
                    </ul>
                  </div>

                  {/* Decline and Replacement */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Decline & Replacement</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-orange-400">1998:</strong> EFF's Deep Crack breaks DES in 56 hours ($250,000 machine)
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-orange-400">1999:</strong> NIST announces AES competition to replace DES
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-orange-400">2001:</strong> Rijndael selected as AES (128/192/256-bit keys)
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-red-400">2005:</strong> DES officially withdrawn as a federal standard
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-red-400">2023:</strong> NIST disallows 3DES for new applications
                      </div>
                    </div>
                  </div>

                  {/* Legacy & Fun Facts */}
                  <div className="bg-background/60 rounded-lg p-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Legacy & Fun Facts</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>🏦 DES is still used in some legacy ATM and banking systems (with 3DES)</div>
                      <div>🎓 Remains a teaching staple in cryptography courses worldwide</div>
                      <div>🔬 Spawned entire field of block cipher cryptanalysis (differential, linear, etc.)</div>
                      <div>📊 Proved that practical symmetric encryption was possible for civilian use</div>
                      <div>🎨 Inspired dozens of ciphers: GOST, Blowfish, CAST, IDEA, etc.</div>
                      <div>⚡ Hardware implementations can still process DES at multi-gigabit speeds</div>
                      <div>🌟 One of the most analyzed cryptographic algorithms in history</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
