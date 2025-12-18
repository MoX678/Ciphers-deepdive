import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Info, Lock, Key, Shield, Cpu, Fingerprint, ArrowRightLeft, 
  Shuffle, Plus, ListOrdered, Binary, Target, Layers
} from "lucide-react";

export function AESEducationalDialog() {
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
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-primary/35 to-primary/15 border-2 border-primary flex items-center justify-center shadow-sm shadow-primary/20">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Advanced Encryption Standard (AES)</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">Interactive Educational Guide</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto flex-1 px-1">
          <div className="space-y-6 py-6">
            {/* Overview Section - Always Visible */}
            <div className="bg-gradient-to-br from-primary/15 via-primary/5 to-blue-500/10 rounded-xl p-6 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-primary/35 to-primary/15 border-2 border-primary flex items-center justify-center shadow-sm shadow-primary/20">
                  <ListOrdered className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">How AES Encryption Works</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                AES is a symmetric block cipher that transforms 128-bit plaintext into ciphertext through multiple rounds of substitution, permutation, and mixing operations.
              </p>
              
              {/* Visual Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-blue-500/35 to-blue-500/15 border border-blue-500 flex items-center justify-center">
                      <Binary className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">1. Input Data</span>
                  </div>
                  <p className="text-xs text-muted-foreground">128-bit plaintext arranged in 4×4 byte matrix</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-yellow-500/35 to-yellow-500/15 border border-yellow-500 flex items-center justify-center">
                      <Key className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">2. Key Setup</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Expand key into 11 round keys (128-bit)</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-purple-500/35 to-purple-500/15 border border-purple-500 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">3. 10 Rounds</span>
                  </div>
                  <p className="text-xs text-muted-foreground">SubBytes → ShiftRows → MixColumns → AddRoundKey</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-green-500/35 to-green-500/15 border border-green-500 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">4. Output</span>
                  </div>
                  <p className="text-xs text-muted-foreground">128-bit encrypted ciphertext</p>
                </div>
              </div>
            </div>

            {/* Tabs Section - Educational Deep Dive */}
            <Tabs defaultValue="subbytes" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-1 bg-muted/30">
                <TabsTrigger value="subbytes" className="data-[state=active]:bg-orange-500/20 data-[state=active]:border-orange-500/50 flex items-center gap-2 text-xs py-2">
                  <Fingerprint className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SubBytes</span>
                </TabsTrigger>
                <TabsTrigger value="shiftrows" className="data-[state=active]:bg-blue-500/20 data-[state=active]:border-blue-500/50 flex items-center gap-2 text-xs py-2">
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">ShiftRows</span>
                </TabsTrigger>
                <TabsTrigger value="mixcolumns" className="data-[state=active]:bg-purple-500/20 data-[state=active]:border-purple-500/50 flex items-center gap-2 text-xs py-2">
                  <Shuffle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">MixColumns</span>
                </TabsTrigger>
                <TabsTrigger value="addroundkey" className="data-[state=active]:bg-green-500/20 data-[state=active]:border-green-500/50 flex items-center gap-2 text-xs py-2">
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">AddRoundKey</span>
                </TabsTrigger>
                <TabsTrigger value="keyexpansion" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:border-yellow-500/50 flex items-center gap-2 text-xs py-2">
                  <Key className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Key Expansion</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:border-emerald-500/50 flex items-center gap-2 text-xs py-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="implementation" className="data-[state=active]:bg-indigo-500/20 data-[state=active]:border-indigo-500/50 flex items-center gap-2 text-xs py-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Implementation</span>
                </TabsTrigger>
              </TabsList>

              {/* SubBytes Tab */}
              <TabsContent value="subbytes" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-orange-500/35 to-orange-500/15 border-2 border-orange-500 flex items-center justify-center shadow-sm shadow-orange-500/20">
                      <Fingerprint className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-400">SubBytes Transformation</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Non-linear byte substitution that replaces each byte in the state matrix with a corresponding byte from the Rijndael S-box. 
                      This is the only non-linear transformation in AES, providing crucial confusion (Shannon's principle).
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">Step 1:</strong> Take each byte from the state matrix
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">Step 2:</strong> Find its multiplicative inverse in GF(2⁸) (0x00 maps to itself)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">Step 3:</strong> Apply affine transformation with fixed matrix and constant 0x63
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">Step 4:</strong> Replace original byte with transformed byte
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mathematical Equation */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Mathematical Equation</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs text-orange-400 border border-orange-500/20 mb-2">
                      S(byte) = AffineTrans(Inverse_GF(2⁸)(byte))
                    </div>
                    <div className="bg-muted/30 rounded p-3 space-y-1">
                      <div className="text-xs font-mono text-orange-400">Example: 0x53 → S-box → 0xED</div>
                      <div className="text-xs text-muted-foreground">Each byte is uniquely mapped to prevent patterns</div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Security Impact:</strong> Provides resistance against differential and linear cryptanalysis. 
                      The non-linearity ensures that the relationship between plaintext, ciphertext, and key is highly complex and unpredictable.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* ShiftRows Tab */}
              <TabsContent value="shiftrows" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
                      <ArrowRightLeft className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-400">ShiftRows Operation</h3>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Cyclically shifts each row of the state matrix left by its row number. This transposition step provides diffusion by mixing data across columns.
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 space-y-2">
                      <div className="text-xs font-mono text-blue-400">Row 0: [a, b, c, d] → [a, b, c, d] (no shift)</div>
                      <div className="text-xs font-mono text-blue-400">Row 1: [e, f, g, h] → [f, g, h, e] (shift 1 left)</div>
                      <div className="text-xs font-mono text-blue-400">Row 2: [i, j, k, l] → [k, l, i, j] (shift 2 left)</div>
                      <div className="text-xs font-mono text-blue-400">Row 3: [m, n, o, p] → [p, m, n, o] (shift 3 left)</div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Mathematical Result</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Each column of the output contains bytes from different positions of different columns in the input.
                    </p>
                    <div className="bg-muted/30 rounded p-2 font-mono text-xs text-blue-400 border border-blue-500/20">
                      state[row][col] = state[row][(col + row) mod 4]
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Security Impact:</strong> Ensures that data from each column is distributed across multiple columns in subsequent operations, 
                      preventing column-wise attacks and enabling full diffusion when combined with MixColumns.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* MixColumns Tab */}
              <TabsContent value="mixcolumns" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-purple-500/35 to-purple-500/15 border-2 border-purple-500 flex items-center justify-center shadow-sm shadow-purple-500/20">
                      <Shuffle className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-400">MixColumns Transformation</h3>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Performs matrix multiplication on each column of the state using a fixed polynomial matrix in GF(2⁸). 
                      This provides maximum diffusion where each output byte depends on all four input bytes of the column.
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Each column is multiplied by a fixed 4×4 matrix in Galois Field GF(2⁸):
                    </p>
                    <div className="bg-muted/30 rounded p-3">
                      <div className="font-mono text-xs text-purple-400 leading-relaxed">
                        [02 03 01 01]   [s₀]   [s'₀]<br/>
                        [01 02 03 01] × [s₁] = [s'₁]<br/>
                        [01 01 02 03]   [s₂]   [s'₂]<br/>
                        [03 01 01 02]   [s₃]   [s'₃]
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Mathematical Equation</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs text-purple-400 border border-purple-500/20 mb-2">
                      s'₀ = (2×s₀) ⊕ (3×s₁) ⊕ s₂ ⊕ s₃
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Note: Multiplication is in GF(2⁸), not regular integer multiplication. Omitted in the final round.
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Security Impact:</strong> Provides the highest level of diffusion in AES. 
                      A single bit change in input affects all four bytes of the output column, making it extremely difficult to trace relationships between input and output.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* AddRoundKey Tab */}
              <TabsContent value="addroundkey" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/35 to-green-500/15 border-2 border-green-500 flex items-center justify-center shadow-sm shadow-green-500/20">
                      <Plus className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-green-400">AddRoundKey Operation</h3>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Combines the state matrix with the round key using bitwise XOR operation. This is the only step that incorporates the secret key into the encryption process.
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />
                        <p className="text-xs text-muted-foreground">Each byte of the state is XORed with the corresponding byte of the round key</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />
                        <p className="text-xs text-muted-foreground">The operation is performed element-wise across the entire 4×4 matrix</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />
                        <p className="text-xs text-muted-foreground">This is the fastest operation in AES (computationally)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Mathematical Equation</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs text-green-400 border border-green-500/20 mb-2">
                      State[i][j] ⊕ RoundKey[i][j] = NewState[i][j]
                    </div>
                    <p className="text-xs text-muted-foreground">
                      XOR is self-inverse: applying it twice with the same key returns the original value (essential for decryption).
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Security Impact:</strong> This is where the secret key protects your data. 
                      Without the correct key, it's computationally infeasible to reverse this operation across all rounds.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Key Expansion Tab */}
              <TabsContent value="keyexpansion" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-5 border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-yellow-500/35 to-yellow-500/15 border-2 border-yellow-500 flex items-center justify-center shadow-sm shadow-yellow-500/20">
                      <Key className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold text-yellow-400">Key Expansion Algorithm</h3>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-yellow-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Expands the original 128-bit key into 11 round keys (176 bytes total, 44 words). 
                      Each round of AES uses a unique round key derived from the original key.
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-yellow-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">The algorithm uses three operations:</p>
                    <div className="space-y-3">
                      <div className="bg-background/50 rounded p-3 border border-yellow-500/20">
                        <div className="font-medium text-foreground text-xs mb-1">1. RotWord</div>
                        <div className="text-muted-foreground text-xs">Cyclically rotates a 4-byte word left by 1 position</div>
                        <div className="text-xs font-mono text-yellow-400 mt-1">[a, b, c, d] → [b, c, d, a]</div>
                      </div>
                      <div className="bg-background/50 rounded p-3 border border-yellow-500/20">
                        <div className="font-medium text-foreground text-xs mb-1">2. SubWord</div>
                        <div className="text-muted-foreground text-xs">Applies S-box substitution to each byte of the word</div>
                      </div>
                      <div className="bg-background/50 rounded p-3 border border-yellow-500/20">
                        <div className="font-medium text-foreground text-xs mb-1">3. Rcon (Round Constant)</div>
                        <div className="text-muted-foreground text-xs">XOR with round-specific constant: [01, 02, 04, 08, 10, 20, 40, 80, 1B, 36]</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-yellow-300" />
                      <h4 className="font-semibold text-sm text-foreground">Mathematical Equation</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs text-yellow-400 border border-yellow-500/20 mb-2">
                      W[i] = W[i-4] ⊕ SubWord(RotWord(W[i-1])) ⊕ Rcon[i/4]
                    </div>
                    <p className="text-xs text-muted-foreground">
                      For words that are multiples of 4. Other words use: W[i] = W[i-4] ⊕ W[i-1]
                    </p>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-yellow-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Security Impact:</strong> Strong key schedule prevents related-key attacks. 
                      Each round key is cryptographically derived from the original key, making it impossible to reverse-engineer the master key from a single round key.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-5 border border-emerald-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-emerald-500/35 to-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/20">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-400">Security Properties</h3>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-emerald-300" />
                      <h4 className="font-semibold text-sm text-foreground">Cryptographic Properties</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" />
                        <div className="text-xs">
                          <strong className="text-foreground">Confusion:</strong>
                          <span className="text-muted-foreground ml-1">Output bits have complex dependency on key bits</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" />
                        <div className="text-xs">
                          <strong className="text-foreground">Diffusion:</strong>
                          <span className="text-muted-foreground ml-1">Single bit change affects ~50% of output bits</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" />
                        <div className="text-xs">
                          <strong className="text-foreground">Avalanche Effect:</strong>
                          <span className="text-muted-foreground ml-1">Small input changes cause large output changes</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-emerald-300" />
                      <h4 className="font-semibold text-sm text-foreground">Attack Resistance</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-muted/30 rounded p-3 border border-emerald-500/10">
                        <div className="text-xs font-medium text-emerald-300 mb-1">Brute Force</div>
                        <div className="text-xs text-muted-foreground">2¹²⁸ key space</div>
                        <div className="text-xs text-emerald-400 mt-1">~10³⁸ years</div>
                      </div>
                      <div className="bg-muted/30 rounded p-3 border border-emerald-500/10">
                        <div className="text-xs font-medium text-emerald-300 mb-1">Differential</div>
                        <div className="text-xs text-muted-foreground">S-box resistant</div>
                        <div className="text-xs text-emerald-400 mt-1">Proven secure</div>
                      </div>
                      <div className="bg-muted/30 rounded p-3 border border-emerald-500/10">
                        <div className="text-xs font-medium text-emerald-300 mb-1">Linear</div>
                        <div className="text-xs text-muted-foreground">Low bias</div>
                        <div className="text-xs text-emerald-400 mt-1">Highly resistant</div>
                      </div>
                      <div className="bg-muted/30 rounded p-3 border border-emerald-500/10">
                        <div className="text-xs font-medium text-emerald-300 mb-1">Related Key</div>
                        <div className="text-xs text-muted-foreground">Strong schedule</div>
                        <div className="text-xs text-emerald-400 mt-1">Protected</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-emerald-300" />
                      <h4 className="font-semibold text-sm text-foreground">Key Space</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 border border-emerald-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-foreground">AES-128:</span>
                        <span className="text-xs font-mono text-emerald-400">2¹²⁸ = 3.4 × 10³⁸ keys</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-foreground">AES-192:</span>
                        <span className="text-xs font-mono text-emerald-400">2¹⁹² = 6.3 × 10⁵⁷ keys</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground">AES-256:</span>
                        <span className="text-xs font-mono text-emerald-400">2²⁵⁶ = 1.2 × 10⁷⁷ keys</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Implementation Tab */}
              <TabsContent value="implementation" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl p-5 border border-indigo-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-indigo-500/35 to-indigo-500/15 border-2 border-indigo-500 flex items-center justify-center shadow-sm shadow-indigo-500/20">
                      <Cpu className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold text-indigo-400">Implementation & Real-World Usage</h3>
                  </div>
                  
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Hardware Optimizations</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">AES-NI:</strong> Intel/AMD CPU instructions for hardware-accelerated AES
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">Lookup Tables:</strong> Trade memory for speed using precomputed S-box tables
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">
                          <strong className="text-foreground">Parallel Processing:</strong> Independent blocks can be encrypted simultaneously
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Modes of Operation</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded text-xs text-indigo-300">
                        CBC - Cipher Block Chaining
                      </span>
                      <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded text-xs text-indigo-300">
                        GCM - Galois/Counter Mode
                      </span>
                      <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded text-xs text-indigo-300">
                        CTR - Counter Mode
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-300">
                        ECB - Not Recommended
                      </span>
                      <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded text-xs text-indigo-300">
                        XTS - Disk Encryption
                      </span>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Side-Channel Protection</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">Timing attack mitigation through constant-time implementations</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">Cache-timing resistance using bitsliced implementations</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                        <div className="text-xs text-muted-foreground">Power analysis protection in cryptographic hardware</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Standards & Applications</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-muted/30 rounded p-3 border border-indigo-500/10">
                        <div className="text-xs font-medium text-indigo-300 mb-1">Standards</div>
                        <div className="text-xs text-muted-foreground">NIST FIPS 197 (2001)</div>
                        <div className="text-xs text-muted-foreground">ISO/IEC 18033-3</div>
                      </div>
                      <div className="bg-muted/30 rounded p-3 border border-indigo-500/10">
                        <div className="text-xs font-medium text-indigo-300 mb-1">Applications</div>
                        <div className="text-xs text-muted-foreground">TLS/SSL, VPNs, WiFi</div>
                        <div className="text-xs text-muted-foreground">Disk encryption, Cloud storage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Other tabs continue here... Due to character limits, I'll create the file in parts */}
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
