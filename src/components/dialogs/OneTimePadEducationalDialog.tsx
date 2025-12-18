import { Info, Infinity as InfinityIcon, Lock, Key, AlertTriangle, Shield, BookOpen, Target, ListOrdered, Binary } from "lucide-react";
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
        <Button variant="ghost" size="sm" className="text-xs gap-2 hover:bg-primary/10 transition-colors">
          <Info className="w-3.5 h-3.5" />
          How It Works
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b border-border/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-violet-500/35 to-violet-500/15 border-2 border-violet-500 flex items-center justify-center shadow-sm shadow-violet-500/20">
              <InfinityIcon className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <DialogTitle className="text-2xl">One-Time Pad</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">Interactive Educational Guide</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto flex-1 px-1">
          <div className="space-y-6 py-6">
            {/* Overview Section - Always Visible */}
            <div className="bg-gradient-to-br from-violet-500/15 via-violet-500/5 to-purple-500/10 rounded-xl p-6 border border-violet-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-violet-500/35 to-violet-500/15 border-2 border-violet-500 flex items-center justify-center shadow-sm shadow-violet-500/20">
                  <InfinityIcon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">How One-Time Pad Works</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                The One-Time Pad (OTP), invented by Gilbert Vernam in 1917 and proven unbreakable by Claude Shannon in 1945, 
                is the only theoretically unbreakable encryption method. It uses a truly random key that is as long as the message, 
                used only once, and never reused. When used correctly, it provides perfect secrecy.
              </p>
              
              {/* Visual Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-blue-500/35 to-blue-500/15 border border-blue-500 flex items-center justify-center">
                      <Key className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">1. Random Key</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Truly random, same length</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-purple-500/35 to-purple-500/15 border border-purple-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-400">⊕</span>
                    </div>
                    <span className="text-xs font-semibold text-foreground">2. XOR Operation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Combine P ⊕ K</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-orange-500/35 to-orange-500/15 border border-orange-500 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">3. Ciphertext</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Perfect encryption</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-green-500/35 to-green-500/15 border border-green-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-green-400">⊕</span>
                    </div>
                    <span className="text-xs font-semibold text-foreground">4. Decrypt</span>
                  </div>
                  <p className="text-xs text-muted-foreground">C ⊕ K = P</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-red-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-red-500/35 to-red-500/15 border border-red-500 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">5. Destroy Key</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Never reuse!</p>
                </div>
              </div>
            </div>

            {/* Tabs Section - Educational Deep Dive */}
            <Tabs defaultValue="xor" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-1 bg-muted/30">
                <TabsTrigger value="xor" className="data-[state=active]:bg-violet-500/20 data-[state=active]:border-violet-500/50 flex items-center gap-2 text-xs py-2">
                  <Binary className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">XOR Operation</span>
                </TabsTrigger>
                <TabsTrigger value="perfect" className="data-[state=active]:bg-blue-500/20 data-[state=active]:border-blue-500/50 flex items-center gap-2 text-xs py-2">
                  <InfinityIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Perfect Secrecy</span>
                </TabsTrigger>
                <TabsTrigger value="requirements" className="data-[state=active]:bg-purple-500/20 data-[state=active]:border-purple-500/50 flex items-center gap-2 text-xs py-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Requirements</span>
                </TabsTrigger>
                <TabsTrigger value="practical" className="data-[state=active]:bg-orange-500/20 data-[state=active]:border-orange-500/50 flex items-center gap-2 text-xs py-2">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Practical Issues</span>
                </TabsTrigger>
                <TabsTrigger value="usage" className="data-[state=active]:bg-green-500/20 data-[state=active]:border-green-500/50 flex items-center gap-2 text-xs py-2">
                  <Key className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Usage</span>
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-indigo-500/20 data-[state=active]:border-indigo-500/50 flex items-center gap-2 text-xs py-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">History</span>
                </TabsTrigger>
              </TabsList>

              {/* XOR Operation Tab */}
              <TabsContent value="xor" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl p-5 border border-violet-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-violet-500/35 to-violet-500/15 border-2 border-violet-500 flex items-center justify-center shadow-sm shadow-violet-500/20">
                      <Binary className="w-5 h-5 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-bold text-violet-400">XOR (Exclusive OR) Operation</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-violet-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-violet-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      XOR (⊕) is a binary operation that outputs 1 when inputs differ, and 0 when they match. 
                      It's the foundation of OTP encryption because it's perfectly reversible: applying XOR twice with the same key returns the original value.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-violet-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-violet-300" />
                      <h4 className="font-semibold text-sm text-foreground">XOR Truth Table</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs border border-violet-500/20">
                      <div className="grid grid-cols-3 gap-2 text-center font-bold mb-2 pb-2 border-b border-border">
                        <div className="text-blue-400">Input A</div>
                        <div className="text-green-400">Input B</div>
                        <div className="text-violet-400">A ⊕ B</div>
                      </div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>0</div>
                          <div>0</div>
                          <div className="text-violet-400 font-bold">0</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>0</div>
                          <div>1</div>
                          <div className="text-violet-400 font-bold">1</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>1</div>
                          <div>0</div>
                          <div className="text-violet-400 font-bold">1</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>1</div>
                          <div>1</div>
                          <div className="text-violet-400 font-bold">0</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border text-muted-foreground">
                        Result is 1 only when inputs are different
                      </div>
                    </div>
                  </div>

                  {/* Binary Example */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-violet-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-violet-300" />
                      <h4 className="font-semibold text-sm text-foreground">Binary Example</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs border border-violet-500/20 space-y-1">
                      <div className="text-blue-400">Plaintext:  01001000 (H = 72)</div>
                      <div className="text-green-400">Key:        01010101 (U = 85)</div>
                      <div className="border-t border-border my-2"></div>
                      <div className="text-violet-400">XOR Result: 00011101 (29)</div>
                      <div className="mt-3 pt-2 border-t border-border text-muted-foreground">
                        Each bit position: if bits differ → 1, if same → 0
                      </div>
                    </div>
                  </div>

                  {/* Self-Inverse Property */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-violet-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-violet-300" />
                      <h4 className="font-semibold text-sm text-foreground">Self-Inverse Property</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <p className="text-muted-foreground">XOR has a unique property: applying it twice with the same value returns the original.</p>
                      <div className="bg-muted/30 rounded p-3 font-mono border border-violet-500/20 space-y-1">
                        <div className="text-blue-400">P ⊕ K = C (encryption)</div>
                        <div className="text-green-400">C ⊕ K = P (decryption)</div>
                        <div className="mt-2 pt-2 border-t border-border text-violet-400">
                          Because: (P ⊕ K) ⊕ K = P ⊕ (K ⊕ K) = P ⊕ 0 = P
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-violet-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-violet-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      XOR's self-inverse property means encryption and decryption use the exact same operation. 
                      This simplicity, combined with a truly random key, creates mathematically perfect encryption.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Perfect Secrecy Tab */}
              <TabsContent value="perfect" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
                      <InfinityIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-400">Perfect Secrecy (Shannon's Theorem)</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Claude Shannon proved in 1945 that One-Time Pad provides "perfect secrecy" - meaning ciphertext reveals 
                      absolutely no information about plaintext to an attacker, even with unlimited computing power.
                    </p>
                  </div>

                  {/* Shannon's Proof */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It's Unbreakable</h4>
                    </div>
                    <div className="space-y-3 text-xs text-muted-foreground">
                      <div>
                        <strong className="text-foreground">Every plaintext is equally likely:</strong>
                        <p className="mt-1">
                          For any given ciphertext, every possible plaintext of the same length is equally probable. 
                          There's no way to determine which one is correct.
                        </p>
                      </div>
                      <div>
                        <strong className="text-foreground">Example:</strong>
                        <div className="bg-muted/30 rounded p-3 mt-2 font-mono border border-blue-500/20 space-y-1">
                          <div className="text-blue-400">Ciphertext: "XYZ"</div>
                          <div className="text-muted-foreground mt-2">Could be decrypted to:</div>
                          <div className="text-green-400">"YES" with key "ABC"</div>
                          <div className="text-green-400">"NO!" with key "KPT"</div>
                          <div className="text-green-400">"HI?" with key "PQG"</div>
                          <div className="text-green-400">...or any other 3-character string</div>
                          <div className="mt-2 pt-2 border-t border-border text-yellow-400">
                            Attacker has no way to know which is correct!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mathematical Proof */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Mathematical Basis</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs border border-blue-500/20 space-y-2">
                      <div className="text-blue-400">For perfect secrecy, Shannon proved:</div>
                      <div className="text-muted-foreground">P(P|C) = P(P)</div>
                      <div className="mt-2 pt-2 border-t border-border text-xs text-muted-foreground">
                        Meaning: Observing ciphertext C doesn't change the probability of any plaintext P. 
                        The attacker learns nothing.
                      </div>
                    </div>
                  </div>

                  {/* Requirements for Perfect Secrecy */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Three Requirements for Perfect Secrecy</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-xs text-muted-foreground">
                      <li><strong className="text-blue-400">Key is truly random:</strong> No patterns, unpredictable</li>
                      <li><strong className="text-blue-400">Key is as long as message:</strong> Each plaintext bit has unique key bit</li>
                      <li><strong className="text-blue-400">Key is used only once:</strong> Never reuse any part of the key</li>
                    </ol>
                    <div className="mt-3 p-2 bg-red-500/10 border border-red-500/30 rounded text-xs text-muted-foreground">
                      <strong className="text-red-400">Warning:</strong> Violating any single requirement breaks perfect secrecy!
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      OTP is the <strong className="text-blue-400">only encryption system proven unbreakable</strong> by mathematics. 
                      All other ciphers (including AES, RSA) rely on computational difficulty, not mathematical impossibility of breaking them. 
                      Quantum computers may break RSA, but they can never break a properly used OTP.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Requirements Tab */}
              <TabsContent value="requirements" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-purple-500/35 to-purple-500/15 border-2 border-purple-500 flex items-center justify-center shadow-sm shadow-purple-500/20">
                      <Shield className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-400">Strict Requirements</h3>
                  </div>
                  
                  {/* Requirement 1: True Randomness */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">1. Key Must Be Truly Random</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>The key must be generated by a truly random process, not pseudorandom algorithms.</p>
                      <div className="bg-muted/30 rounded p-3 border border-purple-500/20">
                        <div className="text-green-400 mb-2">✓ Good Sources:</div>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Radioactive decay measurements</li>
                          <li>Atmospheric noise</li>
                          <li>Quantum random number generators</li>
                          <li>Hardware RNG from physical phenomena</li>
                        </ul>
                        <div className="text-red-400 mt-3 mb-2">✗ Bad Sources:</div>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Pseudorandom algorithms (Math.random(), etc.)</li>
                          <li>Current time/date</li>
                          <li>Keyboard timings</li>
                          <li>Any deterministic process</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Requirement 2: Key Length */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ListOrdered className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">2. Key Must Equal Message Length</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>Every bit/character of plaintext must have a unique, independent random key bit/character.</p>
                      <div className="bg-muted/30 rounded p-3 border border-purple-500/20 font-mono">
                        <div className="text-blue-400">Message:  "HELLO WORLD" (11 chars)</div>
                        <div className="text-green-400">Key:      "XMCKL FODNG" (11 chars) ✓</div>
                        <div className="text-red-400 mt-2">Bad Key:  "SECRET" (6 chars) ✗ Too short!</div>
                      </div>
                      <div className="mt-2 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded">
                        <strong className="text-yellow-400">Note:</strong> Repeating/padding a short key turns it into a Vigenère cipher (breakable!)
                      </div>
                    </div>
                  </div>

                  {/* Requirement 3: One-Time Use */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">3. Key Must Never Be Reused</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>Each key must be used for exactly one message, then destroyed.</p>
                      <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                        <div className="text-red-400 font-bold mb-2">⚠️ Key Reuse Attack:</div>
                        <div className="font-mono space-y-1 text-xs">
                          <div>C1 = P1 ⊕ K</div>
                          <div>C2 = P2 ⊕ K (same key!)</div>
                          <div className="mt-2 pt-2 border-t border-border">
                            <div>C1 ⊕ C2 = (P1 ⊕ K) ⊕ (P2 ⊕ K)</div>
                            <div className="text-yellow-400">           = P1 ⊕ P2</div>
                          </div>
                          <div className="mt-2 pt-2 border-t border-border text-muted-foreground">
                            The key cancels out! Attacker can now use statistical analysis on P1 ⊕ P2 to recover both messages.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Requirement 4: Secure Distribution */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">4. Key Must Be Securely Distributed</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Both parties need the same key. This creates a key distribution problem: if you can securely 
                      share the key, why not just securely share the message? This is OTP's biggest practical limitation.
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="bg-purple-500/10 border-2 border-purple-500 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-purple-400" />
                      <h4 className="font-semibold text-sm text-purple-400">Critical Summary</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      If <strong>ANY</strong> requirement is violated, OTP loses perfect secrecy and becomes breakable. 
                      Even a 99.9% implementation is not "pretty good" - it's completely broken.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Practical Issues Tab */}
              <TabsContent value="practical" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-orange-500/35 to-orange-500/15 border-2 border-orange-500 flex items-center justify-center shadow-sm shadow-orange-500/20">
                      <AlertTriangle className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-400">Practical Challenges</h3>
                  </div>
                  
                  {/* Challenge 1: Key Distribution */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Key Distribution Problem</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p><strong className="text-foreground">The Paradox:</strong> You need to securely deliver a key as long as the message.</p>
                      <div className="bg-muted/30 rounded p-3 border border-orange-500/20">
                        <div className="text-orange-400 mb-2">Challenges:</div>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Can't send key over insecure channel (defeats purpose)</li>
                          <li>Can't use public key crypto (it's not proven unbreakable like OTP)</li>
                          <li>Physical delivery is slow, expensive, and risky</li>
                          <li>Need trusted couriers for sensitive communications</li>
                        </ul>
                      </div>
                      <div className="mt-2 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded">
                        <strong className="text-yellow-400">Reality:</strong> This is why OTP is rarely used despite being unbreakable
                      </div>
                    </div>
                  </div>

                  {/* Challenge 2: Key Storage */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ListOrdered className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Key Storage & Management</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>Securely storing massive amounts of random keys is challenging:</p>
                      <div className="bg-muted/30 rounded p-3 border border-orange-500/20">
                        <div className="font-mono space-y-1">
                          <div className="text-blue-400">1 MB message = 1 MB key needed</div>
                          <div className="text-purple-400">1 GB message = 1 GB key needed</div>
                          <div className="text-green-400">1 TB message = 1 TB key needed</div>
                        </div>
                        <div className="mt-3 pt-2 border-t border-border text-muted-foreground">
                          You need to pre-generate and securely store keys for all future messages. 
                          What if you need to send more data than you have keys?
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge 3: Key Generation */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">True Randomness is Hard</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>Generating cryptographically secure random numbers at scale is expensive and slow.</p>
                      <div className="bg-muted/30 rounded p-3 border border-orange-500/20">
                        <div className="text-orange-400 mb-2">Issues:</div>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Hardware RNGs are slow (few MB/sec)</li>
                          <li>Need specialized equipment for true randomness</li>
                          <li>Software PRNGs are not truly random</li>
                          <li>Quantum RNGs are expensive and require special setup</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Challenge 4: Synchronization */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Synchronization & Errors</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>Both parties must perfectly track which keys have been used:</p>
                      <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Single bit error in key = entire message corrupted</li>
                          <li>If sync is lost, keys might be reused (catastrophic!)</li>
                          <li>No error detection built into OTP</li>
                          <li>Message loss or duplication breaks synchronization</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* When to Actually Use OTP */}
                  <div className="bg-background/60 rounded-lg p-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">When OTP Makes Sense</h4>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Very high-value, short messages (diplomatic cables, military commands)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Pre-arranged communication with distributed keys</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>When perfect secrecy is worth the operational cost</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-red-400">✗</span>
                        <span>General-purpose encryption (use AES instead)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-400">✗</span>
                        <span>Large data transfers (impractical key management)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-400">✗</span>
                        <span>When key distribution is difficult</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Usage Tab */}
              <TabsContent value="usage" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/35 to-green-500/15 border-2 border-green-500 flex items-center justify-center shadow-sm shadow-green-500/20">
                      <Key className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-green-400">Real-World Usage</h3>
                  </div>
                  
                  {/* Historical Usage */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Historical Applications</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-green-400">Moscow-Washington Hotline (1963-2008):</strong> Used OTP for critical communications between US and Soviet leaders during Cold War
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-green-400">Soviet Spy Networks:</strong> KGB agents used OTP for field reports (one-time pad books)
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-green-400">CIA Operations:</strong> Used OTP for communications with deep-cover agents
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-green-400">Military Nuclear Commands:</strong> Some emergency action messages still use OTP-like systems
                      </div>
                    </div>
                  </div>

                  {/* Modern Usage */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ListOrdered className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Modern Limited Usage</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-blue-400">Diplomatic Communications:</strong> Some embassies maintain OTP systems for highest-security traffic
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-blue-400">Military COMSEC:</strong> Pre-shared keys for emergency nuclear launch authentication
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-blue-400">Intelligence Agencies:</strong> Backup encryption for dead-drop communications
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-blue-400">Financial Authentication:</strong> One-time password tokens (OTP-inspired, not true OTP)
                      </div>
                    </div>
                  </div>

                  {/* Why Not More Common */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why Modern Crypto Replaced OTP</h4>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span><strong>RSA/Diffie-Hellman (1976):</strong> Solved key distribution problem with public key crypto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span><strong>AES (2001):</strong> Fast, secure, no key distribution issues</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span><strong>Stream Ciphers:</strong> OTP-like behavior with short keys</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span><strong>Quantum Key Distribution:</strong> May enable practical OTP in the future</span>
                      </div>
                    </div>
                  </div>

                  {/* Current Recommendation */}
                  <div className="bg-green-500/10 border-2 border-green-500 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <h4 className="font-semibold text-sm text-green-400">💡 Modern Recommendation</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      For 99.9% of use cases, use <strong className="text-green-400">AES-256 with proper key management</strong>. 
                      It's secure enough to protect state secrets, much more practical than OTP, and will remain secure 
                      for decades (barring quantum computing breakthroughs).
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
                        <strong className="text-indigo-400">1882:</strong> Frank Miller published first description of OTP concept
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1917:</strong> Gilbert Vernam (AT&T) patented the Vernam cipher (automated OTP for telegraphy)
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1918:</strong> Major Joseph Mauborgne proved that random keys make it unbreakable
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1945:</strong> Claude Shannon mathematically proved perfect secrecy in "Communication Theory of Secrecy Systems"
                      </div>
                    </div>
                  </div>

                  {/* Famous Cases */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ListOrdered className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Famous Cases & Failures</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                        <strong className="text-green-400">✓ Success: Soviet Spy Networks (1940s-1960s):</strong> KGB one-time pads were never broken when used correctly
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                        <strong className="text-red-400">✗ Failure: VENONA Project (1940s-1950s):</strong> 
                        US/UK cryptanalysts partially broke Soviet messages because keys were <strong>reused</strong> due to wartime shortage. 
                        This revealed atomic spy Klaus Fuchs and Rosenbergs.
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                        <strong className="text-green-400">✓ Success: Moscow-Washington Hotline:</strong> 45 years of unbreakable communications
                      </div>
                    </div>
                  </div>

                  {/* Shannon's Legacy */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Claude Shannon's Contribution</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      Shannon's 1945 paper was revolutionary - he proved that OTP is the ONLY cipher with perfect secrecy 
                      given reasonable constraints. His proof showed:
                    </p>
                    <div className="bg-muted/30 rounded p-3 border border-indigo-500/20 text-xs">
                      <ul className="list-disc list-inside space-y-1 ml-2 text-muted-foreground">
                        <li>Perfect secrecy requires key length ≥ message length</li>
                        <li>Key must have full entropy (truly random)</li>
                        <li>Key must be used only once</li>
                        <li>Any cipher violating these cannot achieve perfect secrecy</li>
                      </ul>
                    </div>
                  </div>

                  {/* Fun Facts */}
                  <div className="bg-background/60 rounded-lg p-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Fun Facts</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>🎲 Pre-printed OTP booklets had pages numbered - after use, you'd tear out and destroy that page</div>
                      <div>🔥 Spy instructions: "Burn after reading" applied to both message AND key page</div>
                      <div>📱 Modern "OTP" apps (like Google Authenticator) are NOT one-time pads - they're time-based tokens</div>
                      <div>🧮 Vernam's cipher machine was electromechanical with paper tape as keys</div>
                      <div>🌌 Quantum Key Distribution (QKD) may enable practical OTP for critical communications</div>
                      <div>💎 OTP is the "diamond" of cryptography - perfect but impractical for everyday use</div>
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
