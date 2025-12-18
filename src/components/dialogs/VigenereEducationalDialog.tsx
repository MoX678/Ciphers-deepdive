import { Info, Repeat, Key, Lock, Grid3x3, Shield, BookOpen, Target, ListOrdered, Binary } from "lucide-react";
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
        <Button variant="ghost" size="sm" className="text-xs gap-2 hover:bg-primary/10 transition-colors">
          <Info className="w-3.5 h-3.5" />
          How It Works
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b border-border/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-emerald-500/35 to-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/20">
              <Repeat className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Vigenère Cipher</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">Interactive Educational Guide</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto flex-1 px-1">
          <div className="space-y-6 py-6">
            {/* Overview Section - Always Visible */}
            <div className="bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-green-500/10 rounded-xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-emerald-500/35 to-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/20">
                  <Repeat className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">How Vigenère Cipher Works</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                The Vigenère Cipher, developed by Giovan Battista Bellaso in 1553 and misattributed to Blaise de Vigenère, 
                is a polyalphabetic substitution cipher that uses a keyword to shift each plaintext letter by varying amounts. 
                Known as "le chiffre indéchiffrable" (the indecipherable cipher) for centuries, it resisted cryptanalysis until 1863.
              </p>
              
              {/* Visual Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-blue-500/35 to-blue-500/15 border border-blue-500 flex items-center justify-center">
                      <Key className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">1. Keyword</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Choose key: "KEY"</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-purple-500/35 to-purple-500/15 border border-purple-500 flex items-center justify-center">
                      <Repeat className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">2. Repeat Key</span>
                  </div>
                  <p className="text-xs text-muted-foreground">KEYKEYKEY...</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-orange-500/35 to-orange-500/15 border border-orange-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-orange-400">+</span>
                    </div>
                    <span className="text-xs font-semibold text-foreground">3. Add (mod 26)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">(P + K) mod 26</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-green-500/35 to-green-500/15 border border-green-500 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">4. Ciphertext</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Encrypted result</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-pink-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-pink-500/35 to-pink-500/15 border border-pink-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-pink-400">−</span>
                    </div>
                    <span className="text-xs font-semibold text-foreground">5. Decrypt</span>
                  </div>
                  <p className="text-xs text-muted-foreground">(C − K) mod 26</p>
                </div>
              </div>
            </div>

            {/* Tabs Section - Educational Deep Dive */}
            <Tabs defaultValue="keyRepeat" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-1 bg-muted/30">
                <TabsTrigger value="keyRepeat" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:border-emerald-500/50 flex items-center gap-2 text-xs py-2">
                  <Repeat className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Key Repeat</span>
                </TabsTrigger>
                <TabsTrigger value="encryption" className="data-[state=active]:bg-blue-500/20 data-[state=active]:border-blue-500/50 flex items-center gap-2 text-xs py-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Encryption</span>
                </TabsTrigger>
                <TabsTrigger value="decryption" className="data-[state=active]:bg-purple-500/20 data-[state=active]:border-purple-500/50 flex items-center gap-2 text-xs py-2">
                  <Key className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Decryption</span>
                </TabsTrigger>
                <TabsTrigger value="tabula" className="data-[state=active]:bg-orange-500/20 data-[state=active]:border-orange-500/50 flex items-center gap-2 text-xs py-2">
                  <Grid3x3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tabula Recta</span>
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

              {/* Key Repeat Tab */}
              <TabsContent value="keyRepeat" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl p-5 border border-emerald-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-emerald-500/35 to-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/20">
                      <Repeat className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-400">Key Repetition</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-emerald-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The keyword is repeated cyclically to match the length of the plaintext. 
                      Each keyword letter determines how much to shift the corresponding plaintext letter.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-emerald-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <strong className="text-foreground">Example with keyword "KEY":</strong>
                        <div className="bg-muted/30 rounded p-3 mt-2 font-mono border border-emerald-500/20 space-y-1">
                          <div className="text-emerald-400">Plaintext:  HELLO WORLD</div>
                          <div className="text-muted-foreground">Remove spaces: HELLOWORLD</div>
                          <div className="text-purple-400 mt-2">Keyword:    KEY (length 3)</div>
                          <div className="text-blue-400 mt-2">Repeated:   KEYKEYKEYK</div>
                          <div className="mt-2 pt-2 border-t border-border">
                            <div className="grid grid-cols-10 gap-1 text-center">
                              <div className="text-emerald-400">H</div>
                              <div className="text-emerald-400">E</div>
                              <div className="text-emerald-400">L</div>
                              <div className="text-emerald-400">L</div>
                              <div className="text-emerald-400">O</div>
                              <div className="text-emerald-400">W</div>
                              <div className="text-emerald-400">O</div>
                              <div className="text-emerald-400">R</div>
                              <div className="text-emerald-400">L</div>
                              <div className="text-emerald-400">D</div>
                              <div className="text-blue-400">K</div>
                              <div className="text-blue-400">E</div>
                              <div className="text-blue-400">Y</div>
                              <div className="text-blue-400">K</div>
                              <div className="text-blue-400">E</div>
                              <div className="text-blue-400">Y</div>
                              <div className="text-blue-400">K</div>
                              <div className="text-blue-400">E</div>
                              <div className="text-blue-400">Y</div>
                              <div className="text-blue-400">K</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key as Shifts */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-emerald-300" />
                      <h4 className="font-semibold text-sm text-foreground">Key Letters as Shift Values</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <p className="text-muted-foreground">Each key letter represents a Caesar cipher shift amount:</p>
                      <div className="bg-muted/30 rounded p-3 font-mono border border-emerald-500/20 space-y-1">
                        <div className="text-emerald-400">K = 10 (shift by 10)</div>
                        <div className="text-blue-400">E = 4  (shift by 4)</div>
                        <div className="text-purple-400">Y = 24 (shift by 24)</div>
                        <div className="mt-2 pt-2 border-t border-border text-muted-foreground">
                          So "KEY" means: shift 1st letter by 10, 2nd by 4, 3rd by 24, 4th by 10 (repeat), etc.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-emerald-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Repeating the key creates a <strong className="text-emerald-400">polyalphabetic</strong> cipher where the same plaintext letter 
                      can encrypt to different ciphertext letters depending on its position. This defeats simple frequency analysis, 
                      which made Vigenère unbreakable for 300+ years.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Encryption Tab */}
              <TabsContent value="encryption" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
                      <Lock className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-400">Encryption Process</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Each plaintext letter is shifted by the corresponding key letter's position in the alphabet using modular addition.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Step-by-Step Process</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-3 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Convert to numbers:</strong> A=0, B=1, C=2, ..., Z=25
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono border border-blue-500/20">
                          Plaintext "H" = 7<br/>
                          Key letter "K" = 10
                        </div>
                      </li>
                      <li><strong className="text-foreground">Add modulo 26:</strong> (Plaintext + Key) mod 26
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono border border-blue-500/20">
                          (7 + 10) mod 26 = 17
                        </div>
                      </li>
                      <li><strong className="text-foreground">Convert back to letter:</strong> 17 = R
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono border border-blue-500/20 text-green-400">
                          Ciphertext: R
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* Complete Example */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Complete Example: "HELLO" with key "KEY"</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs border border-blue-500/20">
                      <div className="grid grid-cols-6 gap-2 text-center mb-2 font-bold border-b border-border pb-2">
                        <div className="text-muted-foreground">Letter</div>
                        <div className="text-emerald-400">Plain</div>
                        <div className="text-blue-400">Key</div>
                        <div className="text-orange-400">Add</div>
                        <div className="text-purple-400">Mod 26</div>
                        <div className="text-green-400">Cipher</div>
                      </div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">1</div>
                          <div className="text-emerald-400">H(7)</div>
                          <div className="text-blue-400">K(10)</div>
                          <div className="text-orange-400">17</div>
                          <div className="text-purple-400">17</div>
                          <div className="text-green-400">R</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">2</div>
                          <div className="text-emerald-400">E(4)</div>
                          <div className="text-blue-400">E(4)</div>
                          <div className="text-orange-400">8</div>
                          <div className="text-purple-400">8</div>
                          <div className="text-green-400">I</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">3</div>
                          <div className="text-emerald-400">L(11)</div>
                          <div className="text-blue-400">Y(24)</div>
                          <div className="text-orange-400">35</div>
                          <div className="text-purple-400">9</div>
                          <div className="text-green-400">J</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">4</div>
                          <div className="text-emerald-400">L(11)</div>
                          <div className="text-blue-400">K(10)</div>
                          <div className="text-orange-400">21</div>
                          <div className="text-purple-400">21</div>
                          <div className="text-green-400">V</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">5</div>
                          <div className="text-emerald-400">O(14)</div>
                          <div className="text-blue-400">E(4)</div>
                          <div className="text-orange-400">18</div>
                          <div className="text-purple-400">18</div>
                          <div className="text-green-400">S</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border text-green-400 text-center">
                        "HELLO" + "KEY" → "RIJVS"
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Notice that the two L's in "HELLO" encrypt to different letters (J and V) because they align with different key letters. 
                      This variability makes frequency analysis much harder compared to monoalphabetic ciphers.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Decryption Tab */}
              <TabsContent value="decryption" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-purple-500/35 to-purple-500/15 border-2 border-purple-500 flex items-center justify-center shadow-sm shadow-purple-500/20">
                      <Key className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-400">Decryption Process</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Decryption reverses encryption by subtracting the key letters instead of adding them.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Step-by-Step Process</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-3 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Convert to numbers:</strong> A=0, B=1, C=2, ..., Z=25
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono border border-purple-500/20">
                          Ciphertext "R" = 17<br/>
                          Key letter "K" = 10
                        </div>
                      </li>
                      <li><strong className="text-foreground">Subtract modulo 26:</strong> (Ciphertext − Key) mod 26
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono border border-purple-500/20">
                          (17 − 10) mod 26 = 7
                        </div>
                      </li>
                      <li><strong className="text-foreground">Handle negative results:</strong> If result is negative, add 26
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono border border-purple-500/20">
                          Example: (3 − 10) = −7 → (−7 + 26) = 19
                        </div>
                      </li>
                      <li><strong className="text-foreground">Convert back to letter:</strong> 7 = H
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono border border-purple-500/20 text-green-400">
                          Plaintext: H
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* Complete Example */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Complete Example: "RIJVS" with key "KEY"</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 font-mono text-xs border border-purple-500/20">
                      <div className="grid grid-cols-6 gap-2 text-center mb-2 font-bold border-b border-border pb-2">
                        <div className="text-muted-foreground">Letter</div>
                        <div className="text-blue-400">Cipher</div>
                        <div className="text-orange-400">Key</div>
                        <div className="text-red-400">Subtract</div>
                        <div className="text-purple-400">Mod 26</div>
                        <div className="text-green-400">Plain</div>
                      </div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">1</div>
                          <div className="text-blue-400">R(17)</div>
                          <div className="text-orange-400">K(10)</div>
                          <div className="text-red-400">7</div>
                          <div className="text-purple-400">7</div>
                          <div className="text-green-400">H</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">2</div>
                          <div className="text-blue-400">I(8)</div>
                          <div className="text-orange-400">E(4)</div>
                          <div className="text-red-400">4</div>
                          <div className="text-purple-400">4</div>
                          <div className="text-green-400">E</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">3</div>
                          <div className="text-blue-400">J(9)</div>
                          <div className="text-orange-400">Y(24)</div>
                          <div className="text-red-400">−15</div>
                          <div className="text-purple-400">11</div>
                          <div className="text-green-400">L</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">4</div>
                          <div className="text-blue-400">V(21)</div>
                          <div className="text-orange-400">K(10)</div>
                          <div className="text-red-400">11</div>
                          <div className="text-purple-400">11</div>
                          <div className="text-green-400">L</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-center">
                          <div className="text-muted-foreground">5</div>
                          <div className="text-blue-400">S(18)</div>
                          <div className="text-orange-400">E(4)</div>
                          <div className="text-red-400">14</div>
                          <div className="text-purple-400">14</div>
                          <div className="text-green-400">O</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border text-green-400 text-center">
                        "RIJVS" − "KEY" → "HELLO"
                      </div>
                    </div>
                  </div>

                  {/* Mathematical Formula */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Mathematical Formula</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-muted/30 rounded p-3 font-mono border border-purple-500/20">
                        <div className="text-purple-400 mb-2">Encryption: C[i] = (P[i] + K[i mod keyLength]) mod 26</div>
                        <div className="text-blue-400">Decryption: P[i] = (C[i] − K[i mod keyLength] + 26) mod 26</div>
                      </div>
                      <p className="text-muted-foreground">Where P = plaintext, C = ciphertext, K = key, i = position</p>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The subtraction operation is the exact inverse of addition (mod 26), ensuring perfect decryption. 
                      Adding 26 before the final modulo ensures we never get negative results.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Tabula Recta Tab */}
              <TabsContent value="tabula" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-orange-500/35 to-orange-500/15 border-2 border-orange-500 flex items-center justify-center shadow-sm shadow-orange-500/20">
                      <Grid3x3 className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-400">Tabula Recta (Vigenère Square)</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The Tabula Recta is a 26×26 grid showing all possible Caesar cipher shifts. 
                      It provides a visual lookup table for encryption without needing to calculate modular arithmetic manually.
                    </p>
                  </div>

                  {/* How to Use */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">How to Use</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Find the key letter row:</strong> Locate the row labeled with the current key letter</li>
                      <li><strong className="text-foreground">Find the plaintext letter column:</strong> Locate the column labeled with the plaintext letter</li>
                      <li><strong className="text-foreground">Intersection is ciphertext:</strong> The cell where row and column meet is your encrypted letter</li>
                    </ol>
                  </div>

                  {/* Visual Example */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Partial Tabula Recta (first 10 rows/columns)</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 border border-orange-500/20 overflow-x-auto">
                      <div className="font-mono text-xs">
                        <div className="grid grid-cols-11 gap-1 text-center">
                          <div className="font-bold text-orange-400"></div>
                          <div className="font-bold text-emerald-400">A</div>
                          <div className="font-bold text-emerald-400">B</div>
                          <div className="font-bold text-emerald-400">C</div>
                          <div className="font-bold text-emerald-400">D</div>
                          <div className="font-bold text-emerald-400">E</div>
                          <div className="font-bold text-emerald-400">F</div>
                          <div className="font-bold text-emerald-400">G</div>
                          <div className="font-bold text-emerald-400">H</div>
                          <div className="font-bold text-emerald-400">I</div>
                          <div className="font-bold text-emerald-400">J</div>
                        </div>
                        <div className="grid grid-cols-11 gap-1 text-center mt-1">
                          <div className="font-bold text-blue-400">A</div>
                          <div className="border border-border/30 rounded p-1">A</div>
                          <div className="border border-border/30 rounded p-1">B</div>
                          <div className="border border-border/30 rounded p-1">C</div>
                          <div className="border border-border/30 rounded p-1">D</div>
                          <div className="border border-border/30 rounded p-1">E</div>
                          <div className="border border-border/30 rounded p-1">F</div>
                          <div className="border border-border/30 rounded p-1">G</div>
                          <div className="border border-border/30 rounded p-1">H</div>
                          <div className="border border-border/30 rounded p-1">I</div>
                          <div className="border border-border/30 rounded p-1">J</div>
                        </div>
                        <div className="grid grid-cols-11 gap-1 text-center">
                          <div className="font-bold text-blue-400">B</div>
                          <div className="border border-border/30 rounded p-1">B</div>
                          <div className="border border-border/30 rounded p-1">C</div>
                          <div className="border border-border/30 rounded p-1">D</div>
                          <div className="border border-border/30 rounded p-1">E</div>
                          <div className="border border-border/30 rounded p-1">F</div>
                          <div className="border border-border/30 rounded p-1">G</div>
                          <div className="border border-border/30 rounded p-1">H</div>
                          <div className="border border-border/30 rounded p-1">I</div>
                          <div className="border border-border/30 rounded p-1">J</div>
                          <div className="border border-border/30 rounded p-1">K</div>
                        </div>
                        <div className="grid grid-cols-11 gap-1 text-center">
                          <div className="font-bold text-blue-400">K</div>
                          <div className="border border-border/30 rounded p-1">K</div>
                          <div className="border border-border/30 rounded p-1">L</div>
                          <div className="border border-border/30 rounded p-1">M</div>
                          <div className="border border-border/30 rounded p-1">N</div>
                          <div className="border border-border/30 rounded p-1">O</div>
                          <div className="border border-border/30 rounded p-1">P</div>
                          <div className="border border-border/30 rounded p-1">Q</div>
                          <div className="border border-green-500/50 rounded p-1 bg-green-500/20 font-bold">R</div>
                          <div className="border border-border/30 rounded p-1">S</div>
                          <div className="border border-border/30 rounded p-1">T</div>
                        </div>
                        <div className="grid grid-cols-11 gap-1 text-center">
                          <div className="font-bold text-blue-400">E</div>
                          <div className="border border-border/30 rounded p-1">E</div>
                          <div className="border border-border/30 rounded p-1">F</div>
                          <div className="border border-border/30 rounded p-1">G</div>
                          <div className="border border-border/30 rounded p-1">H</div>
                          <div className="border border-border/30 rounded p-1">I</div>
                          <div className="border border-border/30 rounded p-1">J</div>
                          <div className="border border-border/30 rounded p-1">K</div>
                          <div className="border border-border/30 rounded p-1">L</div>
                          <div className="border border-border/30 rounded p-1">M</div>
                          <div className="border border-border/30 rounded p-1">N</div>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">
                        <strong className="text-green-400">Example:</strong> To encrypt "H" with key "K", 
                        find row K and column H → intersection shows "R"
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
                      The Tabula Recta makes manual encryption practical without requiring mental arithmetic or calculators. 
                      Historically, soldiers and diplomats could carry a printed square and encrypt messages in the field. 
                      Each row is simply a Caesar cipher with a different shift value.
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
                  
                  {/* Strengths */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Strengths</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div><strong className="text-green-400">Polyalphabetic:</strong> Same plaintext letter encrypts differently based on position</div>
                      <div><strong className="text-green-400">Defeats Simple Frequency Analysis:</strong> Letter frequencies are obscured when key is long</div>
                      <div><strong className="text-green-400">Historically Unbreakable:</strong> Resisted cryptanalysis for over 300 years (1553-1863)</div>
                      <div><strong className="text-green-400">Symmetric:</strong> Same key for encryption and decryption</div>
                    </div>
                  </div>

                  {/* Vulnerabilities */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-red-300" />
                      <h4 className="font-semibold text-sm text-foreground">Vulnerabilities</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-red-400">Kasiski Examination (1863):</strong>
                        <p className="text-muted-foreground mt-1">
                          Friedrich Kasiski discovered that repeated plaintext + same key position = repeated ciphertext. 
                          By finding repeated patterns and measuring distances between them, attackers can determine key length.
                        </p>
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-orange-400">Friedman Index of Coincidence (1920):</strong>
                        <p className="text-muted-foreground mt-1">
                          William Friedman developed statistical methods to determine key length without finding repeating patterns. 
                          Once key length is known, the cipher reduces to multiple Caesar ciphers.
                        </p>
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-yellow-400">Short Keys = Weak Security:</strong>
                        <p className="text-muted-foreground mt-1">
                          Keys shorter than ~10 letters are vulnerable to frequency analysis after grouping ciphertext by key position. 
                          A 3-letter key repeats every 3 positions, making patterns detectable with enough ciphertext.
                        </p>
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-purple-400">Known-Plaintext Attack:</strong>
                        <p className="text-muted-foreground mt-1">
                          If attacker knows plaintext-ciphertext pairs, they can subtract to recover key letters: K = C − P (mod 26)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-red-400" />
                      <h4 className="font-semibold text-sm text-red-400">⚠️ Security Recommendation</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Use Vigenère Cipher for <strong className="text-red-400">educational purposes only</strong>. 
                      Modern cryptanalysis can break it with sufficient ciphertext. Use AES-256 or RSA for real security needs.
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
                      <h4 className="font-semibold text-sm text-foreground">Origins & Misattribution</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1553:</strong> Giovan Battista Bellaso published the cipher in "La cifra del. Sig. Giovan Battista Bellaso"
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1586:</strong> Blaise de Vigenère described similar systems in "Traicté des Chiffres"
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">19th Century:</strong> Historians incorrectly attributed the cipher to Vigenère, and the name stuck
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-yellow-400">Irony:</strong> Bellaso invented it, but Vigenère got the credit for 300+ years!
                      </div>
                    </div>
                  </div>

                  {/* The "Indecipherable Cipher" */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ListOrdered className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">"Le Chiffre Indéchiffrable"</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">16th-19th Century:</strong> Considered unbreakable - no mathematical methods existed to attack it
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1863:</strong> Friedrich Kasiski published the first successful cryptanalysis method
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1920:</strong> William Friedman developed statistical attacks (Index of Coincidence)
                      </div>
                    </div>
                  </div>

                  {/* Military Usage */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Military & Diplomatic Use</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                      <li><strong className="text-indigo-400">American Civil War:</strong> Confederate forces used Vigenère for field communications</li>
                      <li><strong className="text-indigo-400">World War I:</strong> Still in use despite known vulnerabilities</li>
                      <li><strong className="text-indigo-400">Diplomatic Cables:</strong> Used by embassies through the early 20th century</li>
                    </ul>
                  </div>

                  {/* Fun Facts */}
                  <div className="bg-background/60 rounded-lg p-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Fun Facts</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>🎖️ Confederate General's cipher messages were decoded by Union cryptanalysts</div>
                      <div>📚 Charles Babbage (computer pioneer) independently broke Vigenère in 1854 but never published</div>
                      <div>🔐 One-Time Pad is essentially Vigenère with a truly random key as long as the message (unbreakable!)</div>
                      <div>📖 Lewis Carroll (Alice in Wonderland author) created Vigenère-like ciphers for fun</div>
                      <div>💻 Modern stream ciphers are descendants of Vigenère's polyalphabetic concept</div>
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
