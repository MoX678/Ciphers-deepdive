import { Info, Grid3x3, Calculator, Lock, KeyRound, Shield, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HillEducationalDialog() {
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
            <div className="p-2 rounded-lg bg-gradient-to-b from-purple-500/35 to-purple-500/15 border-2 border-purple-500">
              <Grid3x3 className="w-6 h-6 text-purple-400" />
            </div>
            Hill Cipher - Educational Guide
          </DialogTitle>
        </DialogHeader>

        {/* Overview Section */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-5 border border-purple-500/30">
          <h3 className="font-semibold text-lg text-purple-400 mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The Hill Cipher, invented by Lester S. Hill in 1929, is a polygraphic substitution cipher based on linear algebra. 
            It encrypts blocks of plaintext letters simultaneously using matrix multiplication modulo 26, 
            making it one of the first practical polygraphic ciphers in cryptography history.
          </p>
          
          {/* Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
            <div className="bg-background/50 rounded-lg p-3 border border-blue-500/20">
              <div className="text-xs font-semibold text-blue-400 mb-1">1. Text to Numbers</div>
              <div className="text-xs text-muted-foreground font-mono">HE → [7, 4]</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-purple-500/20">
              <div className="text-xs font-semibold text-purple-400 mb-1">2. Matrix Multiply</div>
              <div className="text-xs text-muted-foreground font-mono">K × [7, 4]ᵀ</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-orange-500/20">
              <div className="text-xs font-semibold text-orange-400 mb-1">3. Mod 26</div>
              <div className="text-xs text-muted-foreground">[33, 34] mod 26</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-green-500/20">
              <div className="text-xs font-semibold text-green-400 mb-1">4. Result Vector</div>
              <div className="text-xs text-muted-foreground font-mono">[7, 8]</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-pink-500/20">
              <div className="text-xs font-semibold text-pink-400 mb-1">5. Numbers to Text</div>
              <div className="text-xs text-muted-foreground font-mono">[7, 8] → HI</div>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="matrixMultiply" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="matrixMultiply">Matrix Ops</TabsTrigger>
            <TabsTrigger value="modulo">Modulo 26</TabsTrigger>
            <TabsTrigger value="keyMatrix">Key Matrix</TabsTrigger>
            <TabsTrigger value="inverse">Decryption</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Matrix Multiplication Tab */}
          <TabsContent value="matrixMultiply" className="space-y-4">
            <div className="bg-gradient-to-b from-purple-500/35 to-purple-500/15 rounded-lg p-4 border-2 border-purple-500 shadow-sm shadow-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-purple-500/20">
                  <Calculator className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg text-purple-400">Matrix Multiplication</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    Matrix multiplication is the core encryption operation in Hill Cipher. Each plaintext block (converted to numbers) 
                    is treated as a vector and multiplied by the secret key matrix to produce the ciphertext vector.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works (2×2 Example)</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Input:</strong> Plaintext pair "HE" → vector [7, 4] (H=7, E=4)</li>
                    <li><strong>Key Matrix K:</strong> 2×2 matrix with values 0-25
                      <div className="bg-background/50 rounded p-2 mt-1 font-mono text-xs text-purple-400">
                        K = [[3, 3],<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2, 5]]
                      </div>
                    </li>
                    <li><strong>Multiplication:</strong> Compute K × [7, 4]ᵀ (transpose to column vector)
                      <div className="bg-background/50 rounded p-2 mt-1 font-mono text-xs">
                        Result[0] = (3 × 7) + (3 × 4) = 21 + 12 = 33<br/>
                        Result[1] = (2 × 7) + (5 × 4) = 14 + 20 = 34
                      </div>
                    </li>
                    <li><strong>Apply mod 26:</strong> [33, 34] mod 26 = [7, 8]</li>
                    <li><strong>Convert back:</strong> [7, 8] → "HI"</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">General Formula</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-purple-400">
                    For n×n key matrix K and plaintext vector P:<br/>
                    <br/>
                    C = (K × P) mod 26<br/>
                    <br/>
                    Where C is ciphertext vector
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    Matrix multiplication creates complex relationships between plaintext and ciphertext letters. 
                    Each ciphertext letter depends on <strong>multiple plaintext letters</strong>, providing stronger 
                    security than simple substitution ciphers that map one letter to one letter.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Modulo 26 Tab */}
          <TabsContent value="modulo" className="space-y-4">
            <div className="bg-gradient-to-b from-green-500/35 to-green-500/15 rounded-lg p-4 border-2 border-green-500 shadow-sm shadow-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-green-500/20">
                  <Calculator className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-lg text-green-400">Modular Arithmetic (mod 26)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    Modulo 26 operation wraps numbers into the range 0-25, which corresponds to the 26 letters of the alphabet (A=0, B=1, ..., Z=25). 
                    This ensures all results map back to valid letters.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Basic Concept:</strong>
                      <p className="mt-1">Modulo gives the remainder after division. For mod 26, divide by 26 and take the remainder.</p>
                      <div className="bg-background/50 rounded p-2 mt-2 font-mono text-xs space-y-1">
                        <div>33 mod 26 = 7 (because 33 = 1×26 + 7)</div>
                        <div>52 mod 26 = 0 (because 52 = 2×26 + 0)</div>
                        <div>25 mod 26 = 25 (because 25 = 0×26 + 25)</div>
                        <div>-5 mod 26 = 21 (because -5 + 26 = 21)</div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-foreground">Letter Mapping:</strong>
                      <div className="bg-background/50 rounded p-2 mt-2">
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          <div>A=0, B=1, C=2, ..., Z=25</div>
                          <div>Result 7 → H, Result 8 → I</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Properties of Modular Arithmetic</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div><strong className="text-green-400">Addition:</strong> (a + b) mod 26 = ((a mod 26) + (b mod 26)) mod 26</div>
                    <div><strong className="text-green-400">Multiplication:</strong> (a × b) mod 26 = ((a mod 26) × (b mod 26)) mod 26</div>
                    <div><strong className="text-green-400">Distribution:</strong> (a × (b + c)) mod 26 = ((a × b) + (a × c)) mod 26</div>
                    <div className="mt-2 pt-2 border-t border-border">
                      <strong className="text-yellow-400">Important:</strong> These properties allow us to apply mod 26 at any step without changing the final result.
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    Modular arithmetic creates a "closed system" where all operations stay within the alphabet range. 
                    Without mod 26, matrix multiplication could produce values like 100 or -20, which don't map to letters. 
                    This mathematical structure is fundamental to making Hill Cipher work with the alphabet.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Key Matrix Tab */}
          <TabsContent value="keyMatrix" className="space-y-4">
            <div className="bg-gradient-to-b from-orange-500/35 to-orange-500/15 rounded-lg p-4 border-2 border-orange-500 shadow-sm shadow-orange-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-orange-500/20">
                  <KeyRound className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-semibold text-lg text-orange-400">Key Matrix Requirements</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    The key matrix is the secret used for encryption. It must satisfy specific mathematical properties 
                    to ensure the cipher is reversible (decryptable) and secure.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Requirements</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Square Matrix:</strong> Must be n×n (commonly 2×2 or 3×3)
                      <div className="bg-background/50 rounded p-2 mt-1 font-mono text-xs">
                        Valid: 2×2, 3×3, 4×4, ...<br/>
                        Invalid: 2×3, 3×2 (non-square)
                      </div>
                    </li>
                    <li><strong className="text-foreground">Invertible mod 26:</strong> Determinant must be coprime with 26
                      <div className="bg-background/50 rounded p-2 mt-1 text-xs">
                        <div className="text-orange-400 mb-1">gcd(det(K), 26) = 1</div>
                        <div>Valid det values: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25</div>
                        <div className="text-red-400 mt-1">Invalid: 2, 4, 6, 8, 10, 12, 13, 14, 16, 18, 20, 22, 24, 26</div>
                        <div className="text-muted-foreground mt-2">(Invalid values share factors with 26 = 2×13)</div>
                      </div>
                    </li>
                    <li><strong className="text-foreground">Integer Values 0-25:</strong> All matrix elements must be in this range</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Determinant Calculation (2×2)</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2">
                    <div className="font-mono text-sm text-orange-400">
                      For K = [[a, b],<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[c, d]]<br/>
                      <br/>
                      det(K) = (a × d - b × c) mod 26
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">
                      <strong>Example:</strong> K = [[3, 3], [2, 5]]<br/>
                      det(K) = (3×5 - 3×2) mod 26 = (15 - 6) mod 26 = 9<br/>
                      gcd(9, 26) = 1 ✓ Valid key!
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    A key matrix that doesn't meet these requirements cannot be inverted, making decryption impossible. 
                    The coprimality requirement with 26 ensures that the multiplicative inverse exists in modular arithmetic, 
                    which is essential for finding the inverse matrix needed for decryption.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Inverse Matrix / Decryption Tab */}
          <TabsContent value="inverse" className="space-y-4">
            <div className="bg-gradient-to-b from-blue-500/35 to-blue-500/15 rounded-lg p-4 border-2 border-blue-500 shadow-sm shadow-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-blue-500/20">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-blue-400">Matrix Inversion & Decryption</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Does</h4>
                  <p className="text-sm text-muted-foreground">
                    Decryption uses the inverse of the key matrix (K⁻¹) to reverse the encryption. Multiplying ciphertext by K⁻¹ 
                    recovers the original plaintext because K⁻¹ × (K × P) = P.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">How It Works (2×2 Matrix)</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li><strong>Calculate determinant:</strong> det(K) = (a×d - b×c) mod 26</li>
                    <li><strong>Find modular inverse of det:</strong> Find d' where (det × d') mod 26 = 1
                      <div className="bg-background/50 rounded p-2 mt-1 font-mono text-xs">
                        Example: det = 9, then 9 × 3 = 27 ≡ 1 (mod 26)<br/>
                        So d' = 3 (multiplicative inverse of 9 mod 26)
                      </div>
                    </li>
                    <li><strong>Create adjugate matrix:</strong> Swap diagonal, negate off-diagonal
                      <div className="bg-background/50 rounded p-2 mt-1 font-mono text-xs">
                        K = [[a, b], [c, d]] → adj(K) = [[d, -b], [-c, a]]
                      </div>
                    </li>
                    <li><strong>Multiply and mod:</strong> K⁻¹ = (d' × adj(K)) mod 26</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Complete Example</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-xs text-blue-400 space-y-1">
                    <div className="text-foreground font-bold mb-2">Given K = [[3, 3], [2, 5]]</div>
                    <div>1. det(K) = (3×5 - 3×2) = 9</div>
                    <div>2. Inverse of 9 mod 26 = 3 (since 9×3 = 27 ≡ 1 mod 26)</div>
                    <div>3. adj(K) = [[5, -3], [-2, 3]]</div>
                    <div>4. K⁻¹ = 3 × [[5, -3], [-2, 3]] mod 26</div>
                    <div>&nbsp;&nbsp;&nbsp;= [[15, -9], [-6, 9]] mod 26</div>
                    <div>&nbsp;&nbsp;&nbsp;= [[15, 17], [20, 9]]</div>
                    <div className="mt-2 text-muted-foreground">
                      Verify: K × K⁻¹ ≡ [[1, 0], [0, 1]] (mod 26) ✓
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Decryption Formula</h4>
                  <div className="bg-background/50 rounded-lg p-3 font-mono text-sm text-blue-400">
                    P = (K⁻¹ × C) mod 26<br/>
                    <br/>
                    Where P = plaintext, C = ciphertext, K⁻¹ = inverse key
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    The existence of a unique inverse matrix is what makes Hill Cipher reversible and practical. 
                    This property depends on the determinant being coprime with 26. Without an inverse, encrypted messages 
                    would be permanently scrambled with no way to recover the original plaintext.
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
                  <h4 className="font-semibold text-sm text-foreground mb-2">Strengths</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div><strong className="text-green-400">Polygraphic:</strong> Encrypts multiple letters together, hiding single-letter frequency patterns</div>
                    <div><strong className="text-green-400">Diffusion:</strong> Each ciphertext letter depends on all plaintext letters in the block</div>
                    <div><strong className="text-green-400">Linear Algebra:</strong> First cipher based on mathematical operations rather than simple substitution</div>
                    <div><strong className="text-green-400">Resistant to Frequency Analysis:</strong> Single-letter frequencies are obscured in larger blocks</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Vulnerabilities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-red-400">Known-Plaintext Attack:</strong>
                      <p className="text-muted-foreground mt-1">
                        If attacker knows n plaintext-ciphertext pairs (where n = key size), they can solve for the key matrix using linear algebra. 
                        For 2×2 matrix, just 2 known pairs reveal the entire key.
                      </p>
                      <div className="font-mono text-xs mt-2 text-red-400">
                        K × P = C → K = C × P⁻¹ (when P is invertible)
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">Chosen-Plaintext Attack:</strong>
                      <p className="text-muted-foreground mt-1">
                        Attacker can choose specific plaintexts (like identity matrix blocks) to directly extract key matrix elements.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-yellow-400">Limited Key Space:</strong>
                      <p className="text-muted-foreground mt-1">
                        2×2 matrix: ~157,000 valid keys (not enough for modern security)<br/>
                        3×3 matrix: ~10¹² valid keys (still vulnerable to brute force)
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-purple-400">Linearity:</strong>
                      <p className="text-muted-foreground mt-1">
                        Hill Cipher is completely linear: C = K×P. This linearity can be exploited with sufficient known plaintext-ciphertext pairs.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Modern Perspective</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">
                      Hill Cipher is <strong className="text-red-400">not secure</strong> for modern use due to its vulnerability to known-plaintext attacks. 
                      However, it was revolutionary for introducing:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Matrix-based encryption (foundation for modern block ciphers)</li>
                      <li>Polygraphic substitution (encrypting multiple characters together)</li>
                      <li>Mathematical rigor in cryptography design</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-red-400 mb-2">⚠️ Security Recommendation</h4>
                  <p className="text-sm text-muted-foreground">
                    Use Hill Cipher for <strong className="text-red-400">educational purposes only</strong>. 
                    For actual encryption needs, use modern algorithms like AES-256, RSA, or ECC that are resistant to all known attacks.
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
                  <h4 className="font-semibold text-sm text-foreground mb-2">Origins</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1929:</strong> Lester S. Hill, mathematics professor at Hunter College, published "Cryptography in an Algebraic Alphabet" introducing the Hill Cipher
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1931:</strong> Hill published "Concerning Certain Linear Transformation Apparatus of Cryptography" describing mechanical implementations
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">Context:</strong> First practical application of linear algebra to cryptography, predating computer science by decades
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Lester S. Hill (1891-1961)</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">
                      Hill was an American mathematician and educator who taught at Columbia, Yale, and Hunter College. 
                      His cipher was designed to be implemented mechanically (before electronic computers existed).
                    </p>
                    <p>
                      Key insight: <strong className="text-indigo-400">Matrix multiplication could obscure letter patterns</strong> 
                      that made simple substitution ciphers easily breakable. This was revolutionary thinking for the 1920s.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Mechanical Implementation</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">
                      Hill designed mechanical devices using rotating wheels and gears to perform matrix multiplication. 
                      These machines were complex but practical for the era, when all calculations were manual or mechanical.
                    </p>
                    <p>
                      The cipher's mathematical simplicity made it suitable for mechanical implementation, 
                      unlike more complex mathematical operations that would be impossible without computers.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Educational Impact</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Hill Cipher remains one of the most taught classical ciphers because it demonstrates:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li><strong className="text-indigo-400">Linear Algebra Applications:</strong> Real-world use of matrix multiplication and inverses</li>
                    <li><strong className="text-indigo-400">Modular Arithmetic:</strong> Introduction to finite fields and number theory in cryptography</li>
                    <li><strong className="text-indigo-400">Polygraphic Encryption:</strong> Foundation for understanding block ciphers like AES</li>
                    <li><strong className="text-indigo-400">Known-Plaintext Attacks:</strong> Classic example of why pure mathematical systems need additional security layers</li>
                    <li><strong className="text-indigo-400">Cryptanalysis:</strong> Illustrates how mathematical structure can be exploited</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Legacy & Modern Relevance</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">
                      While not secure by modern standards, Hill Cipher introduced concepts that influenced:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong className="text-green-400">Block Ciphers:</strong> Modern ciphers like AES also process data in blocks</li>
                      <li><strong className="text-green-400">Linear Transformations:</strong> Used in AES MixColumns operation</li>
                      <li><strong className="text-green-400">Diffusion Principle:</strong> Each output bit depends on multiple input bits</li>
                      <li><strong className="text-green-400">Mathematical Cryptography:</strong> Paved way for rigorous mathematical analysis of ciphers</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Fun Facts</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground space-y-2">
                    <div>🔢 Hill's original paper used 6×6 matrices, but 2×2 and 3×3 are more common today for teaching</div>
                    <div>⚙️ Mechanical Hill Cipher machines were actually built and used before World War II</div>
                    <div>📚 Hill Cipher appears in almost every university cryptography and discrete mathematics course</div>
                    <div>🎓 It's often students' first encounter with "real" applied linear algebra</div>
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
