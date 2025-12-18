import { Info, Lock, Shuffle, Grid3x3, Binary, Key, Shield, AlertTriangle } from "lucide-react";
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
        <Button variant="ghost" size="sm" className="text-xs">
          <Info className="w-3.5 h-3.5 mr-1" />
          How It Works
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            Data Encryption Standard (DES) - Educational Guide
          </DialogTitle>
        </DialogHeader>

        {/* Overview Section */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-5 border border-blue-500/30">
          <h3 className="font-semibold text-lg text-blue-400 mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            DES (Data Encryption Standard) is a symmetric-key block cipher established by NIST in 1977. 
            It encrypts data in 64-bit blocks using a 56-bit effective key through a Feistel network structure with 16 rounds.
          </p>
          
          {/* Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
            <div className="bg-background/50 rounded-lg p-3 border border-blue-500/20">
              <div className="text-xs font-semibold text-blue-400 mb-1">1. Input</div>
              <div className="text-xs text-muted-foreground">64-bit plaintext block</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-purple-500/20">
              <div className="text-xs font-semibold text-purple-400 mb-1">2. Initial Permutation</div>
              <div className="text-xs text-muted-foreground">Bit rearrangement</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-orange-500/20">
              <div className="text-xs font-semibold text-orange-400 mb-1">3. 16 Feistel Rounds</div>
              <div className="text-xs text-muted-foreground">L/R processing</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-pink-500/20">
              <div className="text-xs font-semibold text-pink-400 mb-1">4. Final Permutation</div>
              <div className="text-xs text-muted-foreground">Inverse of IP</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-green-500/20">
              <div className="text-xs font-semibold text-green-400 mb-1">5. Output</div>
              <div className="text-xs text-muted-foreground">64-bit ciphertext</div>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="feistel" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="feistel">Feistel</TabsTrigger>
            <TabsTrigger value="expansion">Expansion</TabsTrigger>
            <TabsTrigger value="sboxes">S-boxes</TabsTrigger>
            <TabsTrigger value="permutation">Permutation</TabsTrigger>
            <TabsTrigger value="keySchedule">Key Schedule</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Feistel Network Tab */}
          <TabsContent value="feistel" className="space-y-4">
            <div className="bg-gradient-to-b from-blue-500/35 to-blue-500/15 rounded-lg p-4 border-2 border-blue-500 shadow-sm shadow-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-blue-500/20">
                  <Shuffle className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-blue-400">Feistel Network Structure</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    The Feistel structure divides each 64-bit block into two 32-bit halves (Left and Right) and processes them 
                    through 16 rounds. Each round swaps and transforms the halves using a round function.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Split:</strong> Divide 64-bit block into L₀ (left 32 bits) and R₀ (right 32 bits)</li>
                    <li><strong>Round Processing:</strong> For rounds 1-16:
                      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                        <li>L<sub>i</sub> = R<sub>i-1</sub> (right becomes new left)</li>
                        <li>R<sub>i</sub> = L<sub>i-1</sub> ⊕ f(R<sub>i-1</sub>, K<sub>i</sub>) (XOR left with function output)</li>
                      </ul>
                    </li>
                    <li><strong>Swap:</strong> After round 16, swap L₁₆ and R₁₆</li>
                    <li><strong>Combine:</strong> Concatenate to form 64-bit output</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Mathematical Representation</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-blue-400">
                    L<sub>i</sub> = R<sub>i-1</sub><br/>
                    R<sub>i</sub> = L<sub>i-1</sub> ⊕ f(R<sub>i-1</sub>, K<sub>i</sub>)<br/>
                    <br/>
                    Where f = Feistel function (E, XOR, S-boxes, P)
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The Feistel structure ensures that encryption and decryption use the same algorithm (just with reversed key order), 
                    simplifying implementation. It also guarantees that even weak round functions provide security through multiple iterations.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Expansion Tab */}
          <TabsContent value="expansion" className="space-y-4">
            <div className="bg-gradient-to-b from-orange-500/35 to-orange-500/15 rounded-lg p-4 border-2 border-orange-500 shadow-sm shadow-orange-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-orange-500/20">
                  <Binary className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-semibold text-lg text-orange-400">Expansion Function (E)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    The expansion function takes the 32-bit right half and expands it to 48 bits by duplicating certain bits 
                    according to a fixed expansion table. This matches the 48-bit subkey size.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Input:</strong> 32-bit right half (R<sub>i-1</sub>)</li>
                    <li><strong>Expansion Table:</strong> Each bit position maps to a specific output position, with edge bits duplicated:
                      <div className="bg-background/50 rounded p-2 mt-2 text-xs font-mono">
                        Bit 1 → positions 1, 48<br/>
                        Bit 32 → positions 32, 1<br/>
                        Middle bits duplicated to adjacent groups
                      </div>
                    </li>
                    <li><strong>Output:</strong> 48-bit expanded value ready for XOR with subkey</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Expansion Pattern</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-xs text-orange-400">
                    32-bit input: [1, 2, 3, ..., 30, 31, 32]<br/>
                    48-bit output: [32, 1, 2, 3, 4, 5, ..., 28, 29, 30, 31, 32, 1]<br/>
                    <br/>
                    Each 4-bit input group becomes 6-bit output group
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    Expansion increases diffusion by making each output bit depend on multiple input bits. 
                    Duplicating edge bits ensures that bits from adjacent S-boxes influence each other, strengthening the cipher.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* S-boxes Tab */}
          <TabsContent value="sboxes" className="space-y-4">
            <div className="bg-gradient-to-b from-purple-500/35 to-purple-500/15 rounded-lg p-4 border-2 border-purple-500 shadow-sm shadow-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-purple-500/20">
                  <Grid3x3 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg text-purple-400">Substitution Boxes (S-boxes)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    S-boxes provide the only non-linear transformation in DES. Eight S-boxes each take 6 input bits and 
                    produce 4 output bits using lookup tables, reducing 48 bits to 32 bits with confusion.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Input Division:</strong> 48-bit value split into eight 6-bit groups</li>
                    <li><strong>Row Selection:</strong> Outer bits (1st and 6th) form 2-bit row number (0-3)</li>
                    <li><strong>Column Selection:</strong> Middle 4 bits form 4-bit column number (0-15)</li>
                    <li><strong>Lookup:</strong> Each S-box has 4×16 lookup table with values 0-15</li>
                    <li><strong>Output:</strong> Table value converted to 4-bit output</li>
                    <li><strong>Concatenation:</strong> Eight 4-bit outputs combined into 32-bit result</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Example S-box Lookup</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-purple-400">
                    Input: 6 bits = 011011<br/>
                    Row: bits 1,6 = 01 = row 1<br/>
                    Column: bits 2-5 = 1101 = column 13<br/>
                    S-box[1][13] = 5 = 0101<br/>
                    Output: 4 bits = 0101
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    S-boxes are the heart of DES security. They provide confusion (complex relationship between key and ciphertext) 
                    and resistance to linear and differential cryptanalysis. Their carefully designed values prevent simple mathematical attacks.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Permutation Tab */}
          <TabsContent value="permutation" className="space-y-4">
            <div className="bg-gradient-to-b from-pink-500/35 to-pink-500/15 rounded-lg p-4 border-2 border-pink-500 shadow-sm shadow-pink-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-pink-500/20">
                  <Shuffle className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="font-semibold text-lg text-pink-400">Permutation Functions</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    DES uses three types of permutations: Initial Permutation (IP), P-box inside the Feistel function, 
                    and Final Permutation (FP). They rearrange bit positions to increase diffusion across the cipher.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Initial Permutation (IP):</strong>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Applied to 64-bit plaintext before first round</li>
                        <li>Rearranges bits according to fixed IP table</li>
                        <li>Example: bit 58 moves to position 1, bit 50 to position 2, etc.</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-foreground">P-box Permutation:</strong>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Applied after S-boxes in each round</li>
                        <li>Rearranges 32 bits from S-box output</li>
                        <li>Ensures output bits influence multiple S-boxes in next round</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-foreground">Final Permutation (FP):</strong>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Applied after all 16 rounds</li>
                        <li>Inverse of IP (undoes initial permutation)</li>
                        <li>Produces final 64-bit ciphertext</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Permutation Property</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-pink-400">
                    FP = IP<sup>-1</sup><br/>
                    FP(IP(x)) = x<br/>
                    <br/>
                    This ensures symmetric encryption/decryption
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    Permutations provide diffusion by spreading the influence of each plaintext bit across many ciphertext bits. 
                    Combined with S-boxes (confusion), they create a strong cipher that resists statistical and algebraic attacks.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Key Schedule Tab */}
          <TabsContent value="keySchedule" className="space-y-4">
            <div className="bg-gradient-to-b from-yellow-500/35 to-yellow-500/15 rounded-lg p-4 border-2 border-yellow-500 shadow-sm shadow-yellow-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-yellow-500/20">
                  <Key className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-lg text-yellow-400">Key Schedule Algorithm</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    The key schedule generates 16 unique 48-bit subkeys from the original 56-bit key (64 bits with parity). 
                    Each round uses a different subkey derived through permutation and rotation operations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Permuted Choice 1 (PC-1):</strong> 64-bit key → 56 bits (drops 8 parity bits), split into C₀ (28 bits) and D₀ (28 bits)</li>
                    <li><strong>Left Circular Shifts:</strong> For each round i:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Rounds 1, 2, 9, 16: shift left by 1 bit</li>
                        <li>Other rounds: shift left by 2 bits</li>
                        <li>C<sub>i</sub> = LeftShift(C<sub>i-1</sub>), D<sub>i</sub> = LeftShift(D<sub>i-1</sub>)</li>
                      </ul>
                    </li>
                    <li><strong>Permuted Choice 2 (PC-2):</strong> Combine C<sub>i</sub> and D<sub>i</sub> (56 bits), select 48 bits for subkey K<sub>i</sub></li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Schedule Process</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-yellow-400">
                    64-bit input key (with 8 parity bits)<br/>
                    ↓ PC-1<br/>
                    56-bit key → C₀(28) | D₀(28)<br/>
                    ↓ Left shifts (1 or 2 bits per round)<br/>
                    C<sub>i</sub>(28) | D<sub>i</sub>(28)<br/>
                    ↓ PC-2<br/>
                    48-bit subkey K<sub>i</sub> (for round i)
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The key schedule ensures each round uses a different subkey, preventing simple attacks. 
                    The shift schedule and PC-2 permutation ensure good key bit distribution across rounds, 
                    with each key bit affecting multiple rounds in complex ways.
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
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-semibold text-lg text-red-400">Security Analysis & Vulnerabilities</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Critical Weakness: Key Size</h4>
                  <p className="text-sm text-muted-foreground">
                    DES's 56-bit effective key size (2⁵⁶ ≈ 7.2×10¹⁶ possibilities) is now vulnerable to brute-force attacks. 
                    In 1998, EFF's "Deep Crack" machine broke DES in 56 hours. Modern GPUs can break DES in hours or days.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Attack Methods</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-red-400">Brute Force:</strong>
                      <p className="text-muted-foreground mt-1">
                        Test all 2⁵⁶ keys. Feasible with modern hardware. Average time to break: hours to days with dedicated hardware.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">Differential Cryptanalysis:</strong>
                      <p className="text-muted-foreground mt-1">
                        Requires 2⁴⁷ chosen plaintexts. S-boxes were designed to resist this, but not perfectly. Faster than brute force.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-yellow-400">Linear Cryptanalysis:</strong>
                      <p className="text-muted-foreground mt-1">
                        Requires 2⁴³ known plaintexts. Exploits linear approximations in S-boxes. More practical than differential attack.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-purple-400">Meet-in-the-Middle (for 2-DES):</strong>
                      <p className="text-muted-foreground mt-1">
                        Double DES provides only 57 bits of security (not 112). Use Triple DES (3DES) instead for backward compatibility.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Modern Alternatives</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong className="text-green-400">AES-128/192/256:</strong> Modern standard, 128+ bit keys, highly efficient</li>
                      <li><strong className="text-blue-400">3DES (Triple DES):</strong> Applies DES three times, 112-168 bit security, slower</li>
                      <li><strong className="text-purple-400">ChaCha20:</strong> Stream cipher alternative, fast on mobile devices</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-red-400 mb-2">⚠️ Security Recommendation</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-red-400">Do NOT use DES for any production system.</strong> It is only suitable for educational 
                    purposes and understanding cryptographic principles. Use AES with 128-bit or stronger keys for all modern applications.
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
                  <Shield className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-lg text-indigo-400">Historical Context & Legacy</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Origins & Development</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1973:</strong> IBM develops "Lucifer" cipher, precursor to DES
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1975:</strong> NIST (then NBS) solicits proposals for encryption standard
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1977:</strong> DES adopted as Federal Information Processing Standard (FIPS 46)
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1997:</strong> NIST announces DES Cracking Contest; DESCHALL breaks it in 96 days
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1998:</strong> EFF's Deep Crack breaks DES in 56 hours, proving vulnerability
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">2001:</strong> AES (Rijndael) selected as replacement for DES
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">2005:</strong> DES officially withdrawn as standard (FIPS 46-3)
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Controversy & NSA Involvement</h4>
                  <p className="text-sm text-muted-foreground">
                    The NSA's involvement in DES development raised concerns about potential backdoors. They reduced the key size 
                    from 128 bits to 56 bits and modified the S-boxes. Later discoveries showed the S-box changes actually 
                    <strong className="text-indigo-400"> strengthened</strong> DES against differential cryptanalysis 
                    (a technique not publicly known until 1990). The key reduction, however, made brute-force attacks feasible.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Educational Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    DES remains the gold standard for teaching symmetric cryptography due to its:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mt-2">
                    <li>Clear Feistel structure demonstrating confusion and diffusion principles</li>
                    <li>Relatively simple operations (permutations, XOR, table lookups)</li>
                    <li>Historical significance in cryptography standardization</li>
                    <li>Real-world example of how mathematical design affects practical security</li>
                    <li>Foundation for understanding modern ciphers like AES</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Real-World Usage (Historical)</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <strong className="text-foreground">Former Applications:</strong>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Banking: ATM PINs, EMV chip card authentication (now deprecated)</li>
                      <li>Government: Classified communications (until AES adoption)</li>
                      <li>Commercial: Payment processing, secure communications</li>
                      <li>Legacy Systems: Some older systems still use 3DES for backward compatibility</li>
                    </ul>
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
