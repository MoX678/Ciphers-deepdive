import { Info, Key, Zap, Shield, AlertTriangle, BookOpen, Binary } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function OneTimePadEducationalDialog() {
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
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            One-Time Pad - Educational Guide
          </DialogTitle>
        </DialogHeader>

        {/* Overview Section */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-lg p-5 border border-emerald-500/30">
          <h3 className="font-semibold text-lg text-emerald-400 mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The One-Time Pad (OTP) is the only encryption method proven to be <strong className="text-emerald-400">mathematically unbreakable</strong> when 
            used correctly. Invented by Gilbert Vernam in 1917 and proven secure by Claude Shannon in 1949, it uses a truly random key 
            that is as long as the message and is never reused. The encryption is performed using XOR (exclusive OR) operation in binary, 
            or modular addition in text. Despite its perfect security, practical limitations have prevented widespread adoption.
          </p>
          
          {/* Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
            <div className="bg-background/50 rounded-lg p-3 border border-purple-500/20">
              <div className="text-xs font-semibold text-purple-400 mb-1">1. Generate Key</div>
              <div className="text-xs text-muted-foreground">True randomness</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-blue-500/20">
              <div className="text-xs font-semibold text-blue-400 mb-1">2. Convert to Binary</div>
              <div className="text-xs text-muted-foreground">ASCII/Binary</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-orange-500/20">
              <div className="text-xs font-semibold text-orange-400 mb-1">3. XOR Operation</div>
              <div className="text-xs text-muted-foreground">P ⊕ K = C</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-green-500/20">
              <div className="text-xs font-semibold text-green-400 mb-1">4. Transmit Cipher</div>
              <div className="text-xs text-muted-foreground">Send ciphertext</div>
            </div>
            <div className="bg-background/50 rounded-lg p-3 border border-pink-500/20">
              <div className="text-xs font-semibold text-pink-400 mb-1">5. XOR to Decrypt</div>
              <div className="text-xs text-muted-foreground">C ⊕ K = P</div>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="xor" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="xor">XOR Operation</TabsTrigger>
            <TabsTrigger value="perfect">Perfect Secrecy</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="practical">Practical Issues</TabsTrigger>
            <TabsTrigger value="usage">Historical Usage</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* XOR Operation Tab */}
          <TabsContent value="xor" className="space-y-4">
            <div className="bg-gradient-to-b from-blue-500/35 to-blue-500/15 rounded-lg p-4 border-2 border-blue-500 shadow-sm shadow-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-blue-500/20">
                  <Binary className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-blue-400">XOR (Exclusive OR) Operation</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Is</h4>
                  <p className="text-sm text-muted-foreground">
                    XOR (⊕) is a binary operation that outputs 1 when inputs differ and 0 when they're the same. 
                    It's the fundamental operation behind the One-Time Pad, providing perfect encryption when combined with a random key.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">XOR Truth Table</h4>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-2 max-w-xs font-mono text-sm">
                      <div className="font-bold text-blue-400 text-center">A</div>
                      <div className="font-bold text-blue-400 text-center">B</div>
                      <div className="font-bold text-blue-400 text-center">A ⊕ B</div>
                      <div className="font-bold text-blue-400 text-center">Result</div>
                      
                      <div className="bg-background p-2 text-center">0</div>
                      <div className="bg-background p-2 text-center">0</div>
                      <div className="bg-background p-2 text-center">⊕</div>
                      <div className="bg-green-500/20 p-2 text-center text-green-400">0</div>
                      
                      <div className="bg-background p-2 text-center">0</div>
                      <div className="bg-background p-2 text-center">1</div>
                      <div className="bg-background p-2 text-center">⊕</div>
                      <div className="bg-orange-500/20 p-2 text-center text-orange-400">1</div>
                      
                      <div className="bg-background p-2 text-center">1</div>
                      <div className="bg-background p-2 text-center">0</div>
                      <div className="bg-background p-2 text-center">⊕</div>
                      <div className="bg-orange-500/20 p-2 text-center text-orange-400">1</div>
                      
                      <div className="bg-background p-2 text-center">1</div>
                      <div className="bg-background p-2 text-center">1</div>
                      <div className="bg-background p-2 text-center">⊕</div>
                      <div className="bg-green-500/20 p-2 text-center text-green-400">0</div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">
                      Rule: Output is 1 when inputs are <strong>different</strong>, 0 when they're the <strong>same</strong>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Encryption Process</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-3 text-sm">
                    <div className="font-mono text-xs space-y-2">
                      <div className="font-bold text-foreground mb-2">Example: Encrypting "H" (ASCII 72)</div>
                      <div className="bg-background rounded p-2">
                        <div className="text-blue-400">Plaintext 'H': 01001000 (binary)</div>
                      </div>
                      <div className="bg-background rounded p-2">
                        <div className="text-purple-400">Random Key:  10110101 (random bits)</div>
                      </div>
                      <div className="bg-background rounded p-2 space-y-1">
                        <div className="text-muted-foreground">XOR operation:</div>
                        <div className="ml-4 space-y-0.5">
                          <div>  01001000 (H)</div>
                          <div>⊕ 10110101 (key)</div>
                          <div className="border-t border-border pt-0.5">  <span className="text-green-400 font-bold">11111101</span> (ciphertext)</div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                        <div className="text-green-400">Result: 11111101 (decimal 253)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Decryption Process</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-3 text-sm">
                    <div className="font-mono text-xs space-y-2">
                      <div className="font-bold text-foreground mb-2">Decryption uses the same XOR operation!</div>
                      <div className="bg-background rounded p-2">
                        <div className="text-orange-400">Ciphertext: 11111101</div>
                      </div>
                      <div className="bg-background rounded p-2">
                        <div className="text-purple-400">Same Key:  10110101</div>
                      </div>
                      <div className="bg-background rounded p-2 space-y-1">
                        <div className="text-muted-foreground">XOR operation:</div>
                        <div className="ml-4 space-y-0.5">
                          <div>  11111101 (ciphertext)</div>
                          <div>⊕ 10110101 (key)</div>
                          <div className="border-t border-border pt-0.5">  <span className="text-green-400 font-bold">01001000</span> (plaintext)</div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                        <div className="text-green-400">Result: 01001000 = 'H' restored!</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Self-Inverse Property</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground">
                    <p className="mb-2">XOR has a critical property: <strong className="text-blue-400">A ⊕ B ⊕ B = A</strong></p>
                    <p className="mt-2">This means:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                      <li>Encryption: Ciphertext = Plaintext ⊕ Key</li>
                      <li>Decryption: Plaintext = Ciphertext ⊕ Key</li>
                      <li>Same operation for encryption and decryption!</li>
                    </ul>
                    <div className="mt-3 p-2 bg-blue-500/10 border border-blue-500/30 rounded font-mono text-xs">
                      P ⊕ K = C<br/>
                      C ⊕ K = (P ⊕ K) ⊕ K = P ⊕ (K ⊕ K) = P ⊕ 0 = P
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    XOR is the perfect encryption primitive: fast, symmetric (same operation for encryption/decryption), 
                    and provides perfect confusion when combined with a random key. Each bit of the plaintext is independently 
                    scrambled by the corresponding key bit, making the ciphertext completely random and indistinguishable from noise.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Perfect Secrecy Tab */}
          <TabsContent value="perfect" className="space-y-4">
            <div className="bg-gradient-to-b from-emerald-500/35 to-emerald-500/15 rounded-lg p-4 border-2 border-emerald-500 shadow-sm shadow-emerald-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-emerald-500/20">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-lg text-emerald-400">Perfect Secrecy (Shannon's Theorem)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What It Is</h4>
                  <p className="text-sm text-muted-foreground">
                    In 1949, Claude Shannon proved that the One-Time Pad provides <strong className="text-emerald-400">perfect secrecy</strong>: 
                    the ciphertext reveals absolutely no information about the plaintext, regardless of computational power. 
                    An attacker with infinite computing power cannot break OTP if used correctly.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Shannon's Proof (Simplified)</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-emerald-400">Perfect Secrecy Definition:</strong></p>
                    <div className="font-mono text-xs bg-background p-3 rounded">
                      P(Plaintext = M | Ciphertext = C) = P(Plaintext = M)
                    </div>
                    <p className="mt-2">Meaning: Observing the ciphertext gives you no new information about the plaintext.</p>
                    
                    <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded">
                      <p className="font-bold text-emerald-400 mb-2">Why OTP Achieves This:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-2">
                        <li><strong>Every possible plaintext is equally likely</strong> for any given ciphertext</li>
                        <li><strong>Key is truly random</strong> → ciphertext is uniformly distributed</li>
                        <li><strong>Key used only once</strong> → no patterns across messages</li>
                        <li><strong>Key as long as message</strong> → every bit independently randomized</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Practical Example</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-3 text-sm">
                    <div className="font-mono text-xs">
                      <div className="font-bold text-foreground mb-2">Suppose you intercept ciphertext "X" (binary: 01011000)</div>
                      <div className="bg-background rounded p-2 space-y-1 mt-2">
                        <div className="text-blue-400">With key 00010000: plaintext = "H" (HELLO)</div>
                        <div className="text-purple-400">With key 00011001: plaintext = "A" (ATTACK)</div>
                        <div className="text-orange-400">With key 00001101: plaintext = "U" (URGENT)</div>
                        <div className="text-pink-400">With key 00101000: plaintext = "p" (peace)</div>
                      </div>
                      <div className="mt-3 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded">
                        <strong className="text-emerald-400">All equally possible!</strong> Without the key, you cannot determine 
                        which plaintext is correct. The ciphertext could decrypt to any message of the same length.
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Mathematical Guarantee</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground space-y-2">
                    <p>For an 8-bit ciphertext byte:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>There are 256 possible key bytes (2<sup>8</sup>)</li>
                      <li>Each key produces a different plaintext byte</li>
                      <li>All 256 plaintexts are equally likely (uniform distribution)</li>
                      <li>No statistical test can distinguish OTP ciphertext from true random data</li>
                    </ul>
                    <div className="mt-3 p-2 bg-background rounded font-mono text-xs">
                      Probability of any specific plaintext = 1/256 (uniform)<br/>
                      This probability doesn't change after observing ciphertext
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Comparison with Other Ciphers</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-red-400">AES, RSA, etc.:</strong>
                      <p className="text-muted-foreground mt-1">
                        <strong>Computationally secure</strong> - secure against attackers with realistic computing power, 
                        but could theoretically be broken with infinite computing resources (brute-force all keys)
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-emerald-400">One-Time Pad:</strong>
                      <p className="text-muted-foreground mt-1">
                        <strong>Information-theoretically secure</strong> - provably unbreakable even with infinite computing power, 
                        because the ciphertext contains no information about the plaintext
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    OTP is the gold standard of encryption - the only method proven to be absolutely unbreakable. 
                    This makes it invaluable for extremely sensitive communications where security is paramount and 
                    practical limitations can be overcome. It also serves as a theoretical benchmark for comparing other encryption schemes.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements" className="space-y-4">
            <div className="bg-gradient-to-b from-orange-500/35 to-orange-500/15 rounded-lg p-4 border-2 border-orange-500 shadow-sm shadow-orange-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-orange-500/20">
                  <Key className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-semibold text-lg text-orange-400">Strict Requirements for Security</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">The Four Critical Rules</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    OTP only provides perfect secrecy if <strong className="text-orange-400">ALL FOUR</strong> requirements are met. 
                    Violating even one destroys security:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-background/50 rounded-lg p-3 border-l-4 border-emerald-500">
                      <div className="font-semibold text-emerald-400 mb-1">1. True Randomness</div>
                      <p className="text-sm text-muted-foreground">
                        The key must be generated using a <strong>true random source</strong> (quantum processes, thermal noise, radioactive decay), 
                        not a pseudo-random number generator (PRNG). PRNGs are deterministic and predictable.
                      </p>
                      <div className="mt-2 p-2 bg-background rounded text-xs font-mono">
                        ❌ Math.random(), rand(), any software RNG<br/>
                        ✅ Hardware RNG, QRNG, atmospheric noise, lava lamps
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3 border-l-4 border-blue-500">
                      <div className="font-semibold text-blue-400 mb-1">2. Key Length = Message Length</div>
                      <p className="text-sm text-muted-foreground">
                        The key must be <strong>at least as long</strong> as the plaintext. Every bit of plaintext must be encrypted 
                        with a unique key bit. Short keys (like Vigenère) create patterns.
                      </p>
                      <div className="mt-2 p-2 bg-background rounded text-xs font-mono">
                        Plaintext: 1000 bytes → Key: ≥1000 bytes<br/>
                        Plaintext: 1 GB → Key: ≥1 GB (impractical!)
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3 border-l-4 border-purple-500">
                      <div className="font-semibold text-purple-400 mb-1">3. Used Only Once</div>
                      <p className="text-sm text-muted-foreground">
                        Each key must be used for <strong>exactly one message</strong> and then destroyed. Key reuse is catastrophic 
                        (see Practical Issues tab). This is why it's called "One-Time" Pad.
                      </p>
                      <div className="mt-2 p-2 bg-red-500/10 border border-red-500/30 rounded text-xs">
                        <strong className="text-red-400">CRITICAL:</strong> Using the same key twice allows attackers to XOR ciphertexts 
                        together, canceling out the key and revealing plaintext relationships!
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3 border-l-4 border-pink-500">
                      <div className="font-semibold text-pink-400 mb-1">4. Kept Completely Secret</div>
                      <p className="text-sm text-muted-foreground">
                        The key must be kept <strong>absolutely secret</strong> and securely delivered to the recipient. 
                        If an attacker obtains the key, they can decrypt all messages. Secure key exchange is the biggest challenge.
                      </p>
                      <div className="mt-2 p-2 bg-background rounded text-xs">
                        Must use secure channel (courier, diplomatic pouch) separate from message transmission. 
                        This is often as difficult as sending the message itself securely!
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">What Happens If You Violate These Rules?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <strong className="text-red-400">Pseudo-Random Key:</strong>
                      <p className="text-muted-foreground mt-1">
                        If the key is generated with software RNG (seeded with time, etc.), attacker can reproduce the 
                        seed and regenerate the entire keystream. Security = 0.
                      </p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <strong className="text-red-400">Short Key (Repeated):</strong>
                      <p className="text-muted-foreground mt-1">
                        Repeating a short key turns OTP into Vigenère cipher, which is breakable via Kasiski examination 
                        and frequency analysis. No longer perfectly secure.
                      </p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <strong className="text-red-400">Key Reuse:</strong>
                      <p className="text-muted-foreground mt-1">
                        Using the same key twice allows attacker to XOR two ciphertexts: C₁ ⊕ C₂ = (P₁ ⊕ K) ⊕ (P₂ ⊕ K) = P₁ ⊕ P₂. 
                        This reveals plaintext relationships and enables full decryption. (See Venona project example)
                      </p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <strong className="text-red-400">Key Compromise:</strong>
                      <p className="text-muted-foreground mt-1">
                        If attacker intercepts the key during distribution, all messages encrypted with that key are 
                        immediately decryptable. This is why key exchange is the Achilles' heel of OTP.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    These strict requirements explain why OTP, despite being perfectly secure, is rarely used in practice. 
                    The practical challenges of generating, distributing, and managing truly random keys as long as the 
                    messages have led to the development of computationally-secure alternatives like AES, which trade 
                    theoretical perfect security for practical usability.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Practical Issues Tab */}
          <TabsContent value="practical" className="space-y-4">
            <div className="bg-gradient-to-b from-yellow-500/35 to-yellow-500/15 rounded-lg p-4 border-2 border-yellow-500 shadow-sm shadow-yellow-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-yellow-500/20">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-lg text-yellow-400">Practical Limitations</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why OTP Is Rarely Used</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Despite perfect security, OTP is impractical for most applications due to severe logistical challenges:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-red-400">1. Key Distribution Problem</strong>
                      <p className="text-muted-foreground mt-1 text-sm">
                        <strong>Challenge:</strong> You need to securely deliver keys as large as all future messages to every recipient.<br/>
                        <strong>Example:</strong> To send 1 GB of encrypted data, you first need to securely deliver 1 GB of random key material.<br/>
                        <strong>Paradox:</strong> If you have a secure channel to send the key, why not just use that channel for the message itself?
                      </p>
                      <div className="mt-2 p-2 bg-background rounded text-xs font-mono">
                        Traditional solution: Physical courier with locked briefcase<br/>
                        Cost: Expensive, slow, vulnerable to interception
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">2. Key Storage</strong>
                      <p className="text-muted-foreground mt-1 text-sm">
                        <strong>Challenge:</strong> Both sender and receiver must store massive amounts of key material securely.<br/>
                        <strong>Example:</strong> A spy network using OTP might need to pre-distribute gigabytes of key pads.<br/>
                        <strong>Risk:</strong> Physical key pads can be stolen, copied, or lost.
                      </p>
                      <div className="mt-2 p-2 bg-background rounded text-xs">
                        Historical: Literal pads of paper with random numbers, pages destroyed after use<br/>
                        Modern: Encrypted USB drives, but securing those requires another encryption system!
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-purple-400">3. True Randomness</strong>
                      <p className="text-muted-foreground mt-1 text-sm">
                        <strong>Challenge:</strong> Generating truly random data (not pseudo-random) is difficult and slow.<br/>
                        <strong>Sources:</strong> Quantum phenomena, radioactive decay, atmospheric noise, thermal fluctuations.<br/>
                        <strong>Speed:</strong> True RNGs generate ~1-10 Mbps, far slower than modern network speeds (Gbps).
                      </p>
                      <div className="mt-2 p-2 bg-background rounded text-xs">
                        Example: Intel's RDRAND instruction uses thermal noise → ~800 Mbps<br/>
                        To encrypt a 1080p video stream (8 Mbps), you'd need continuous true RNG input!
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-blue-400">4. Key Synchronization</strong>
                      <p className="text-muted-foreground mt-1 text-sm">
                        <strong>Challenge:</strong> Sender and receiver must use the exact same portion of the key pad for each message.<br/>
                        <strong>Problem:</strong> If a message is lost or arrives out of order, key sync is lost.<br/>
                        <strong>Solution:</strong> Complex key management protocols, but adds overhead and vulnerability.
                      </p>
                    </div>

                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-pink-400">5. No Authentication</strong>
                      <p className="text-muted-foreground mt-1 text-sm">
                        <strong>Challenge:</strong> OTP provides confidentiality but not authentication or integrity.<br/>
                        <strong>Attack:</strong> Attacker can flip bits in ciphertext, causing predictable changes in plaintext.<br/>
                        <strong>Solution:</strong> Requires separate authentication mechanism (MAC, digital signature).
                      </p>
                      <div className="mt-2 p-2 bg-red-500/10 border border-red-500/30 rounded text-xs">
                        Example: If attacker knows plaintext starts with "ATTACK", they can XOR "ATTACK" ⊕ "DONOT " 
                        into the ciphertext to change message to "DONOT " without detection!
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">The Key Reuse Disaster</h4>
                  <div className="bg-red-500/10 border-2 border-red-500 rounded-lg p-4 space-y-2 text-sm">
                    <p className="font-bold text-red-400">Mathematical Explanation:</p>
                    <div className="font-mono text-xs bg-background p-3 rounded space-y-1">
                      <div>C₁ = P₁ ⊕ K (first message)</div>
                      <div>C₂ = P₂ ⊕ K (second message, SAME KEY)</div>
                      <div className="mt-2">C₁ ⊕ C₂ = (P₁ ⊕ K) ⊕ (P₂ ⊕ K)</div>
                      <div>         = P₁ ⊕ P₂ ⊕ (K ⊕ K)</div>
                      <div>         = P₁ ⊕ P₂ ⊕ 0</div>
                      <div className="text-red-400 font-bold">         = P₁ ⊕ P₂ (key cancels out!)</div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Now attacker has P₁ ⊕ P₂ without any key. Using frequency analysis, known plaintexts, or 
                      linguistic patterns, they can deduce both messages. This is exactly how the Venona project 
                      broke Soviet spy communications in the 1940s.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    These practical limitations explain why modern cryptography has shifted to computationally-secure 
                    systems like AES and RSA. While theoretically weaker than OTP, they offer a practical balance: 
                    strong security (secure against realistic attackers) with manageable key sizes, easy key exchange 
                    (using public-key crypto), and no need for true random number generators for every byte of data.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Historical Usage Tab */}
          <TabsContent value="usage" className="space-y-4">
            <div className="bg-gradient-to-b from-indigo-500/35 to-indigo-500/15 rounded-lg p-4 border-2 border-indigo-500 shadow-sm shadow-indigo-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-indigo-500/20">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-lg text-indigo-400">Historical Usage & Famous Cases</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Invention & Early Development</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1882:</strong> <strong>Frank Miller</strong> first described the one-time pad 
                      concept in a book, predating the 20th-century "invention" by 35 years.
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1917:</strong> <strong>Gilbert Vernam</strong> (AT&T engineer) invented the 
                      first practical teleprinter cipher device using XOR operation with a paper tape key. Called the "Vernam cipher."
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1919:</strong> <strong>Joseph Mauborgne</strong> (US Army) suggested using 
                      random keys and never reusing them, completing the modern OTP concept.
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-indigo-400">1949:</strong> <strong>Claude Shannon</strong> mathematically proved OTP 
                      provides perfect secrecy in his landmark paper "Communication Theory of Secrecy Systems."
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">World War II & Cold War Usage</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-green-400">Moscow-Washington Hotline (1963-Present):</strong>
                      <p className="mt-1">
                        The famous "red telephone" between US President and Soviet Premier used OTP for absolute security. 
                        Keys were exchanged via diplomatic courier monthly. Still in use today (now encrypted fax/email), 
                        OTP ensures even nation-state adversaries cannot intercept nuclear de-escalation communications.
                      </p>
                    </div>
                    <div>
                      <strong className="text-blue-400">Soviet Spy Networks (1940s-1980s):</strong>
                      <p className="mt-1">
                        KGB extensively used OTP for spy communications. Agents carried one-time pad booklets disguised as 
                        innocuous objects. Pages were destroyed after use (often by eating them!). When used correctly, 
                        messages were unbreakable.
                      </p>
                    </div>
                    <div>
                      <strong className="text-purple-400">Numbers Stations:</strong>
                      <p className="mt-1">
                        Mysterious shortwave radio broadcasts of random numbers, believed to transmit OTP-encrypted messages 
                        to spies worldwide. Still active today. Listeners can record transmissions but cannot decrypt without the pad.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">The Venona Project: When OTP Was Broken</h4>
                  <div className="bg-red-500/10 border-2 border-red-500 rounded-lg p-4 space-y-2 text-sm">
                    <p className="font-bold text-red-400">The Catastrophic Failure of Key Reuse</p>
                    <div className="bg-background/50 rounded p-3 space-y-2 text-muted-foreground">
                      <p>
                        <strong className="text-red-400">Background (1940s):</strong> Soviet intelligence agencies encrypted 
                        diplomatic and spy communications using OTP. Due to wartime pressure and key material shortages, they 
                        <strong className="text-red-400"> violated the cardinal rule: they reused keys</strong>.
                      </p>
                      <p>
                        <strong className="text-orange-400">US/UK Response (1943-1980):</strong> Allied cryptanalysts launched 
                        the Venona project to exploit this mistake. By XORing ciphertexts encrypted with the same key, they 
                        canceled out the key (C₁ ⊕ C₂ = P₁ ⊕ P₂) and used frequency analysis to recover plaintexts.
                      </p>
                      <p>
                        <strong className="text-yellow-400">Results:</strong> Decoded ~3,000 messages revealing:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Soviet atomic espionage (Klaus Fuchs, Julius & Ethel Rosenberg)</li>
                        <li>Hundreds of Soviet agents in US government</li>
                        <li>Details of Soviet intelligence operations</li>
                      </ul>
                      <p className="mt-2 p-2 bg-red-500/20 border border-red-500/30 rounded">
                        <strong>Lesson:</strong> Even the "unbreakable" OTP becomes completely broken if keys are reused. 
                        The Soviets learned this the hard way, and Venona changed the course of Cold War counterintelligence.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Modern & Specialized Applications</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-cyan-400">Quantum Key Distribution (QKD):</strong>
                      <p className="mt-1">
                        Modern OTP implementation using quantum mechanics to generate and distribute truly random keys. 
                        BB84 protocol allows secure key exchange over fiber optics. Any eavesdropping attempt disturbs 
                        quantum states, alerting parties. Used by banks, governments, military (China's Micius satellite).
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-green-400">High-Security Government Communications:</strong>
                      <p className="mt-1">
                        Still used for absolutely critical communications where key distribution logistics can be managed: 
                        head-of-state communications, nuclear command & control, top-level diplomatic cables.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-purple-400">Post-Quantum Cryptography:</strong>
                      <p className="mt-1">
                        With quantum computers threatening RSA/AES, OTP is gaining renewed interest. If quantum networks 
                        enable practical key distribution (via QKD), OTP could become viable for broader use as the only 
                        system provably secure against quantum attacks.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Fun Facts</h4>
                  <div className="bg-background/50 rounded-lg p-3 text-sm text-muted-foreground space-y-2">
                    <div>📞 The Moscow-Washington hotline was never a "red phone" - it was a teletype terminal, later upgraded to fax and email</div>
                    <div>📻 Numbers stations are still broadcasting OTP-encrypted messages on shortwave radio, audible worldwide</div>
                    <div>🎲 During Cold War, spies sometimes generated keys by rolling physical dice (6-sided dice → base-6 → convert to binary)</div>
                    <div>🔥 Physical one-time pads were often printed on flash paper (nitrocellulose) that burns instantly and completely</div>
                    <div>🚀 China's Micius satellite (2016) uses QKD to distribute OTP keys between ground stations 1,200 km apart</div>
                    <div>🧮 Alan Turing called OTP "theoretically unbreakable" but "practically very inconvenient"</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4">
            <div className="bg-gradient-to-b from-teal-500/35 to-teal-500/15 rounded-lg p-4 border-2 border-teal-500 shadow-sm shadow-teal-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-teal-500/20">
                  <Zap className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-semibold text-lg text-teal-400">Security Considerations</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Absolute Strengths (When Used Correctly)</h4>
                  <div className="bg-background/50 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                    <div><strong className="text-green-400">Information-Theoretic Security:</strong> Provably unbreakable even with infinite computing power</div>
                    <div><strong className="text-green-400">Quantum-Resistant:</strong> Secure against quantum computer attacks (unlike RSA, ECC)</div>
                    <div><strong className="text-green-400">No Ciphertext Analysis:</strong> Ciphertext reveals no patterns, frequencies, or structure</div>
                    <div><strong className="text-green-400">Perfect Forward Secrecy:</strong> Each message uses unique key; compromise of one key doesn't affect others</div>
                    <div><strong className="text-green-400">Simple Algorithm:</strong> Just XOR - no complex math, no side-channel attacks on algorithm itself</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Vulnerabilities & Attack Vectors</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-red-400">Key Reuse (Catastrophic):</strong>
                      <p className="text-muted-foreground mt-1">
                        Using the same key twice completely destroys security. Attacker can XOR ciphertexts to eliminate 
                        the key: C₁ ⊕ C₂ = P₁ ⊕ P₂. From there, frequency analysis and linguistics recover plaintexts. 
                        This is how Venona broke Soviet spy communications.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-orange-400">Pseudo-Random Keys:</strong>
                      <p className="text-muted-foreground mt-1">
                        Using software RNG (seeded with timestamp, user input, etc.) instead of true random source. 
                        Attacker can reproduce seed and regenerate keystream. Many "OTP" implementations fail here.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-yellow-400">Key Compromise:</strong>
                      <p className="text-muted-foreground mt-1">
                        If attacker intercepts key during physical delivery (courier robbery, border inspection), all 
                        messages encrypted with that key are immediately readable. This is not a cryptographic weakness 
                        but a practical vulnerability.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-purple-400">Known-Plaintext Attack:</strong>
                      <p className="text-muted-foreground mt-1">
                        If attacker knows any plaintext-ciphertext pair, they can compute the key for that portion: 
                        K = P ⊕ C. This reveals the key, allowing decryption of that segment. Not a full break, but 
                        dangerous if messages have predictable structure (headers, signatures).
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-pink-400">Malleability (No Authentication):</strong>
                      <p className="text-muted-foreground mt-1">
                        OTP provides confidentiality but not integrity. Attacker can flip bits in ciphertext, causing 
                        predictable changes in plaintext without detection. Example: Flipping bit 5 in C flips bit 5 in P.
                      </p>
                      <div className="mt-2 p-2 bg-red-500/10 border border-red-500/30 rounded text-xs font-mono">
                        Attack: If "ATTACK AT DAWN" is encrypted, attacker can change "ATTACK" to "DONOT " by XORing 
                        the difference into ciphertext, without knowing the key!
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <strong className="text-blue-400">Traffic Analysis:</strong>
                      <p className="text-muted-foreground mt-1">
                        OTP encrypts content but not metadata. Attacker can still observe: message timing, length, sender, 
                        recipient, frequency. This reveals patterns even without decrypting. Combine with padding/cover traffic.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Proper Implementation Checklist</h4>
                  <div className="bg-background/50 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Use hardware/quantum random number generator (QRNG, TRNG)</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Generate key length ≥ message length (never reuse/repeat key bytes)</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Deliver key via secure physical channel (courier, QKD)</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Implement strict key lifecycle: generate → deliver → encrypt once → destroy immediately</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Add authentication: use separate MAC or digital signature</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Pad messages to fixed length to hide true length from traffic analysis</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Secure key storage: encrypted at rest, secure deletion, tamper-evident containers</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <div className="text-muted-foreground">Key synchronization protocol: both parties must track which key bytes are used</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">When to Use OTP vs. Alternatives</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <strong className="text-green-400">Use OTP When:</strong>
                      <ul className="list-disc list-inside ml-2 mt-1 text-muted-foreground space-y-1">
                        <li>Absolute, provable security is required (nuclear command, head-of-state)</li>
                        <li>Protection against future quantum computers is needed</li>
                        <li>Message volume is low and infrequent</li>
                        <li>Key distribution logistics can be solved (QKD, trusted couriers)</li>
                        <li>Legal/regulatory requirements mandate information-theoretic security</li>
                      </ul>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                      <strong className="text-blue-400">Use AES/RSA Instead When:</strong>
                      <ul className="list-disc list-inside ml-2 mt-1 text-muted-foreground space-y-1">
                        <li>High-volume data encryption (streaming, databases, storage)</li>
                        <li>Need for practical key management (key exchange, PKI)</li>
                        <li>Secure key distribution is impossible/expensive</li>
                        <li>Real-time encryption required (no time to generate massive true random keys)</li>
                        <li>Standard internet/network protocols (TLS, IPsec, VPN)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-500/20 border-2 border-teal-500 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-teal-400 mb-2">⚡ Bottom Line</h4>
                  <p className="text-sm text-muted-foreground">
                    OTP is the theoretical gold standard - <strong className="text-teal-400">the only provably unbreakable cipher</strong>. 
                    However, its practical limitations mean it's reserved for the most critical applications where security 
                    absolutely cannot be compromised and key distribution challenges can be solved. For 99.9% of applications, 
                    modern ciphers like AES-256 provide more than adequate security with far better usability.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
