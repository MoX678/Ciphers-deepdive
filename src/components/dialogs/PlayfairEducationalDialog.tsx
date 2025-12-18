import { Info, Grid3x3, Key, ArrowRight, ArrowDown, Maximize2, Shield, BookOpen, Target, ListOrdered, Binary } from "lucide-react";
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
        <Button variant="ghost" size="sm" className="text-xs gap-2 hover:bg-primary/10 transition-colors">
          <Info className="w-3.5 h-3.5" />
          How It Works
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b border-border/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-cyan-500/35 to-cyan-500/15 border-2 border-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-500/20">
              <Grid3x3 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Playfair Cipher</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">Interactive Educational Guide</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto flex-1 px-1">
          <div className="space-y-6 py-6">
            {/* Overview Section - Always Visible */}
            <div className="bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-cyan-500/35 to-cyan-500/15 border-2 border-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-500/20">
                  <Grid3x3 className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground">How Playfair Cipher Works</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                The Playfair Cipher, invented by Charles Wheatstone in 1854 and popularized by Lord Playfair, 
                is a digraphic substitution cipher that encrypts pairs of letters using a 5×5 key matrix. 
                It was the first practical digraph cipher and was used extensively in military communications through World War I.
              </p>
              
              {/* Visual Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-blue-500/35 to-blue-500/15 border border-blue-500 flex items-center justify-center">
                      <Key className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">1. Build Matrix</span>
                  </div>
                  <p className="text-xs text-muted-foreground">5×5 grid from MONARCHY</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-purple-500/35 to-purple-500/15 border border-purple-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-400">AB</span>
                    </div>
                    <span className="text-xs font-semibold text-foreground">2. Split Digraphs</span>
                  </div>
                  <p className="text-xs text-muted-foreground">HE LX LO (add X)</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-orange-500/35 to-orange-500/15 border border-orange-500 flex items-center justify-center">
                      <Grid3x3 className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">3. Find Positions</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Locate each pair in grid</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-green-500/35 to-green-500/15 border border-green-500 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">4. Apply Rules</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Row, column, or rectangle</p>
                </div>
                
                <div className="bg-background/60 rounded-lg p-4 border border-border/50 hover:border-pink-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-b from-pink-500/35 to-pink-500/15 border border-pink-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-pink-400">QF</span>
                    </div>
                    <span className="text-xs font-semibold text-foreground">5. Ciphertext</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Output encrypted pairs</p>
                </div>
              </div>
            </div>

            {/* Tabs Section - Educational Deep Dive */}
            <Tabs defaultValue="keyMatrix" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-1 bg-muted/30">
                <TabsTrigger value="keyMatrix" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:border-cyan-500/50 flex items-center gap-2 text-xs py-2">
                  <Key className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Key Matrix</span>
                </TabsTrigger>
                <TabsTrigger value="digraphs" className="data-[state=active]:bg-purple-500/20 data-[state=active]:border-purple-500/50 flex items-center gap-2 text-xs py-2">
                  <span className="hidden sm:inline">Digraphs</span>
                  <span className="sm:hidden">Pairs</span>
                </TabsTrigger>
                <TabsTrigger value="row" className="data-[state=active]:bg-orange-500/20 data-[state=active]:border-orange-500/50 flex items-center gap-2 text-xs py-2">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Row Rule</span>
                </TabsTrigger>
                <TabsTrigger value="column" className="data-[state=active]:bg-green-500/20 data-[state=active]:border-green-500/50 flex items-center gap-2 text-xs py-2">
                  <ArrowDown className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Column Rule</span>
                </TabsTrigger>
                <TabsTrigger value="rectangle" className="data-[state=active]:bg-blue-500/20 data-[state=active]:border-blue-500/50 flex items-center gap-2 text-xs py-2">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Rectangle Rule</span>
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-indigo-500/20 data-[state=active]:border-indigo-500/50 flex items-center gap-2 text-xs py-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">History</span>
                </TabsTrigger>
              </TabsList>

              {/* Key Matrix Tab */}
              <TabsContent value="keyMatrix" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-5 border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-cyan-500/35 to-cyan-500/15 border-2 border-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-500/20">
                      <Key className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-cyan-400">5×5 Key Matrix Construction</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The key matrix is a 5×5 grid filled with the alphabet (I and J share one cell) based on a keyword. 
                      This matrix defines how each pair of letters will be encrypted.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">How to Build (Keyword: MONARCHY)</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Write keyword:</strong> M O N A R C H Y</li>
                      <li><strong className="text-foreground">Remove duplicates:</strong> M O N A R C H Y (no duplicates)</li>
                      <li><strong className="text-foreground">Fill remaining alphabet:</strong> Add B D E F G I/J K L P Q S T U V W X Z</li>
                      <li><strong className="text-foreground">Arrange in 5×5 grid:</strong>
                        <div className="bg-muted/30 rounded p-3 mt-2 font-mono text-xs border border-cyan-500/20">
                          <div className="grid grid-cols-5 gap-2 text-center">
                            <div className="border border-cyan-500/30 rounded p-2 bg-cyan-500/10">M</div>
                            <div className="border border-cyan-500/30 rounded p-2 bg-cyan-500/10">O</div>
                            <div className="border border-cyan-500/30 rounded p-2 bg-cyan-500/10">N</div>
                            <div className="border border-cyan-500/30 rounded p-2 bg-cyan-500/10">A</div>
                            <div className="border border-cyan-500/30 rounded p-2 bg-cyan-500/10">R</div>
                            <div className="border border-border/30 rounded p-2">C</div>
                            <div className="border border-border/30 rounded p-2">H</div>
                            <div className="border border-border/30 rounded p-2">Y</div>
                            <div className="border border-border/30 rounded p-2">B</div>
                            <div className="border border-border/30 rounded p-2">D</div>
                            <div className="border border-border/30 rounded p-2">E</div>
                            <div className="border border-border/30 rounded p-2">F</div>
                            <div className="border border-border/30 rounded p-2">G</div>
                            <div className="border border-border/30 rounded p-2">I/J</div>
                            <div className="border border-border/30 rounded p-2">K</div>
                            <div className="border border-border/30 rounded p-2">L</div>
                            <div className="border border-border/30 rounded p-2">P</div>
                            <div className="border border-border/30 rounded p-2">Q</div>
                            <div className="border border-border/30 rounded p-2">S</div>
                            <div className="border border-border/30 rounded p-2">T</div>
                            <div className="border border-border/30 rounded p-2">U</div>
                            <div className="border border-border/30 rounded p-2">V</div>
                            <div className="border border-border/30 rounded p-2">W</div>
                            <div className="border border-border/30 rounded p-2">X</div>
                            <div className="border border-border/30 rounded p-2">Z</div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* I/J Merging */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why I/J Merge?</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      The English alphabet has 26 letters, but a 5×5 grid holds only 25 cells. 
                      Historically, I and J were considered variants of the same letter, so they share a cell.
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2 text-xs text-muted-foreground">
                      <strong className="text-yellow-400">Tip:</strong> When decrypting, context determines whether to use I or J.
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-cyan-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The keyword makes the matrix unique. Different keywords create different letter arrangements, 
                      so the same plaintext produces different ciphertext. This is the "key" that must be kept secret.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Digraphs Tab */}
              <TabsContent value="digraphs" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-purple-500/35 to-purple-500/15 border-2 border-purple-500 flex items-center justify-center shadow-sm shadow-purple-500/20">
                      <Grid3x3 className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-400">Digraph Preparation</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Playfair encrypts pairs of letters (digraphs) rather than single letters. 
                      The plaintext must be split into two-letter groups following specific rules.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Digraph Rules</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-3 text-xs text-muted-foreground">
                      <li><strong className="text-foreground">Remove spaces and punctuation:</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-purple-500/20">
                          "HELLO WORLD" → "HELLOWORLD"
                        </div>
                      </li>
                      <li><strong className="text-foreground">Replace J with I:</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-purple-500/20">
                          "JUMP" → "IUMP"
                        </div>
                      </li>
                      <li><strong className="text-foreground">Split into pairs:</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-purple-500/20">
                          "HELLO" → "HE LL O?"
                        </div>
                      </li>
                      <li><strong className="text-foreground">Insert X between double letters:</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-purple-500/20">
                          "LL" → "LX L"<br/>
                          Result: "HE LX LO"
                        </div>
                      </li>
                      <li><strong className="text-foreground">Add X if odd number of letters:</strong>
                        <div className="bg-muted/30 rounded p-2 mt-1 font-mono text-xs border border-purple-500/20">
                          "HELLO" (5 letters) → "HE LX LO" → "HE LX LO X" (even pairs)
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* Complete Example */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Complete Example</h4>
                    </div>
                    <div className="space-y-2 text-xs font-mono bg-muted/30 rounded p-3 border border-purple-500/20">
                      <div><span className="text-purple-400">Input:</span> "BALLOON"</div>
                      <div><span className="text-purple-400">Step 1:</span> Remove spaces → "BALLOON"</div>
                      <div><span className="text-purple-400">Step 2:</span> Replace J → "BALLOON" (no J)</div>
                      <div><span className="text-purple-400">Step 3:</span> Split → "BA LL OO N?"</div>
                      <div><span className="text-purple-400">Step 4:</span> Insert X for doubles → "BA LX LO OX N?"</div>
                      <div><span className="text-purple-400">Step 5:</span> Add X at end → "BA LX LO OX NX"</div>
                      <div className="mt-2 pt-2 border-t border-border text-green-400">
                        Final digraphs: BA / LX / LO / OX / NX
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-purple-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Encrypting pairs instead of single letters obscures letter frequency patterns that can break simple substitution ciphers. 
                      The digraph preparation rules ensure consistent encryption and successful decryption.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Row Rule Tab */}
              <TabsContent value="row" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-orange-500/35 to-orange-500/15 border-2 border-orange-500 flex items-center justify-center shadow-sm shadow-orange-500/20">
                      <ArrowRight className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-400">Row Rule</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      When both letters of a digraph are in the same row, replace each with the letter to its right (wrapping around).
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <strong className="text-foreground">Rule:</strong>
                        <p className="text-muted-foreground mt-1">
                          Each letter shifts one position to the right. The rightmost letter wraps to the leftmost position of the same row.
                        </p>
                      </div>
                      <div>
                        <strong className="text-foreground">Example with MONARCHY matrix:</strong>
                        <div className="bg-muted/30 rounded p-3 mt-2 font-mono text-xs border border-orange-500/20">
                          <div className="mb-2 text-muted-foreground">Row 0: M O N A R</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-400">Digraph "AR":</span>
                              <span className="text-muted-foreground">A is at [0,3], R is at [0,4]</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-orange-400" />
                              <span className="text-muted-foreground">A → R (shift right)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-orange-400" />
                              <span className="text-muted-foreground">R → M (wrap around)</span>
                            </div>
                            <div className="mt-2 pt-2 border-t border-border text-green-400">
                              Result: "AR" → "RM"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Demo */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-orange-300" />
                      <h4 className="font-semibold text-sm text-foreground">Visual Demonstration</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 border border-orange-500/20">
                      <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
                        <div className="border border-orange-500/30 rounded p-2 bg-orange-500/10">M</div>
                        <div className="border border-orange-500/30 rounded p-2 bg-orange-500/10">O</div>
                        <div className="border border-orange-500/30 rounded p-2 bg-orange-500/10">N</div>
                        <div className="border border-green-500/50 rounded p-2 bg-green-500/20 font-bold">A</div>
                        <div className="border border-blue-500/50 rounded p-2 bg-blue-500/20 font-bold">R</div>
                      </div>
                      <div className="flex items-center justify-center gap-2 my-2">
                        <ArrowDown className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
                        <div className="border border-orange-500/30 rounded p-2 bg-orange-500/10">M</div>
                        <div className="border border-orange-500/30 rounded p-2 bg-orange-500/10">O</div>
                        <div className="border border-orange-500/30 rounded p-2 bg-orange-500/10">N</div>
                        <div className="border border-blue-500/50 rounded p-2 bg-blue-500/20 font-bold">R</div>
                        <div className="border border-green-500/50 rounded p-2 bg-green-500/20 font-bold">M</div>
                      </div>
                      <div className="mt-3 text-center text-xs text-muted-foreground">
                        A shifts right to R, R wraps around to M
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
                      The row rule provides a simple, deterministic transformation that can be easily reversed during decryption 
                      (shift left instead of right). The wrap-around ensures all positions are used.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Column Rule Tab */}
              <TabsContent value="column" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-green-500/35 to-green-500/15 border-2 border-green-500 flex items-center justify-center shadow-sm shadow-green-500/20">
                      <ArrowDown className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-green-400">Column Rule</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      When both letters of a digraph are in the same column, replace each with the letter directly below it (wrapping around).
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <strong className="text-foreground">Rule:</strong>
                        <p className="text-muted-foreground mt-1">
                          Each letter shifts one position down. The bottom letter wraps to the top position of the same column.
                        </p>
                      </div>
                      <div>
                        <strong className="text-foreground">Example with MONARCHY matrix:</strong>
                        <div className="bg-muted/30 rounded p-3 mt-2 font-mono text-xs border border-green-500/20">
                          <div className="mb-2 text-muted-foreground">Column 0: M C E L U</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-green-400">Digraph "ME":</span>
                              <span className="text-muted-foreground">M is at [0,0], E is at [2,0]</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <ArrowDown className="w-3 h-3 text-green-400" />
                              <span className="text-muted-foreground">M → C (shift down)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <ArrowDown className="w-3 h-3 text-green-400" />
                              <span className="text-muted-foreground">E → L (shift down)</span>
                            </div>
                            <div className="mt-2 pt-2 border-t border-border text-green-400">
                              Result: "ME" → "CL"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Demo */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Visual Demonstration</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 border border-green-500/20">
                      <div className="flex gap-8 justify-center">
                        <div>
                          <div className="text-xs text-center text-muted-foreground mb-2">Before</div>
                          <div className="space-y-2">
                            <div className="border border-green-500/50 rounded p-2 bg-green-500/20 text-xs font-mono w-12 text-center font-bold">M</div>
                            <div className="border border-green-500/30 rounded p-2 bg-green-500/10 text-xs font-mono w-12 text-center">C</div>
                            <div className="border border-blue-500/50 rounded p-2 bg-blue-500/20 text-xs font-mono w-12 text-center font-bold">E</div>
                            <div className="border border-green-500/30 rounded p-2 bg-green-500/10 text-xs font-mono w-12 text-center">L</div>
                            <div className="border border-green-500/30 rounded p-2 bg-green-500/10 text-xs font-mono w-12 text-center">U</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <div className="text-xs text-center text-muted-foreground mb-2">After</div>
                          <div className="space-y-2">
                            <div className="border border-green-500/30 rounded p-2 bg-green-500/10 text-xs font-mono w-12 text-center">M</div>
                            <div className="border border-green-500/50 rounded p-2 bg-green-500/20 text-xs font-mono w-12 text-center font-bold">C</div>
                            <div className="border border-green-500/30 rounded p-2 bg-green-500/10 text-xs font-mono w-12 text-center">E</div>
                            <div className="border border-blue-500/50 rounded p-2 bg-blue-500/20 text-xs font-mono w-12 text-center font-bold">L</div>
                            <div className="border border-green-500/30 rounded p-2 bg-green-500/10 text-xs font-mono w-12 text-center">U</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-center text-xs text-muted-foreground">
                        M shifts down to C, E shifts down to L
                      </div>
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-background/60 rounded-lg p-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-green-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Like the row rule, the column rule provides deterministic, reversible encryption. 
                      Together, these rules ensure that letters in the same row or column are handled consistently.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Rectangle Rule Tab */}
              <TabsContent value="rectangle" className="mt-6 space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-blue-500/35 to-blue-500/15 border-2 border-blue-500 flex items-center justify-center shadow-sm shadow-blue-500/20">
                      <Maximize2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-400">Rectangle Rule</h3>
                  </div>
                  
                  {/* What It Does */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">What It Does</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      When letters are in different rows AND different columns, they form opposite corners of a rectangle. 
                      Replace each letter with the one on the same row but in the other letter's column.
                    </p>
                  </div>

                  {/* How It Works */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <ListOrdered className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">How It Works</h4>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <strong className="text-foreground">Rule:</strong>
                        <p className="text-muted-foreground mt-1">
                          Each letter moves horizontally to the column of the other letter, creating a rectangle transformation.
                        </p>
                      </div>
                      <div>
                        <strong className="text-foreground">Example with MONARCHY matrix:</strong>
                        <div className="bg-muted/30 rounded p-3 mt-2 font-mono text-xs border border-blue-500/20">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-blue-400">Digraph "HE":</span>
                            </div>
                            <div className="text-muted-foreground">
                              H is at [1,1] (row 1, col 1)<br/>
                              E is at [2,0] (row 2, col 0)
                            </div>
                            <div className="mt-2 p-2 bg-background/50 rounded">
                              <div className="text-blue-400 mb-1">Rectangle corners:</div>
                              <div className="grid grid-cols-2 gap-2 text-center">
                                <div className="border border-green-500/50 rounded p-1 bg-green-500/20">H [1,1]</div>
                                <div className="border border-blue-500/50 rounded p-1 bg-blue-500/20">? [1,0]</div>
                                <div className="border border-orange-500/50 rounded p-1 bg-orange-500/20">? [2,1]</div>
                                <div className="border border-purple-500/50 rounded p-1 bg-purple-500/20">E [2,0]</div>
                              </div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-border">
                              <ArrowRight className="w-3 h-3 inline text-blue-400 mr-1" />
                              <span className="text-muted-foreground">H [1,1] → C [1,0] (same row, E's column)</span>
                            </div>
                            <div>
                              <ArrowRight className="w-3 h-3 inline text-blue-400 mr-1" />
                              <span className="text-muted-foreground">E [2,0] → F [2,1] (same row, H's column)</span>
                            </div>
                            <div className="mt-2 pt-2 border-t border-border text-green-400">
                              Result: "HE" → "CF"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Demo */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Binary className="w-4 h-4 text-blue-300" />
                      <h4 className="font-semibold text-sm text-foreground">Visual Demonstration</h4>
                    </div>
                    <div className="bg-muted/30 rounded p-3 border border-blue-500/20">
                      <div className="text-xs text-center text-muted-foreground mb-3">MONARCHY Matrix (relevant section)</div>
                      <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono mb-2">
                        <div className="border border-border/30 rounded p-2">M</div>
                        <div className="border border-border/30 rounded p-2">O</div>
                        <div className="border border-border/30 rounded p-2">N</div>
                        <div className="border border-border/30 rounded p-2">A</div>
                        <div className="border border-border/30 rounded p-2">R</div>
                        <div className="border border-blue-500/50 rounded p-2 bg-blue-500/20 font-bold">C</div>
                        <div className="border border-green-500/50 rounded p-2 bg-green-500/20 font-bold">H</div>
                        <div className="border border-border/30 rounded p-2">Y</div>
                        <div className="border border-border/30 rounded p-2">B</div>
                        <div className="border border-border/30 rounded p-2">D</div>
                        <div className="border border-purple-500/50 rounded p-2 bg-purple-500/20 font-bold">E</div>
                        <div className="border border-orange-500/50 rounded p-2 bg-orange-500/20 font-bold">F</div>
                        <div className="border border-border/30 rounded p-2">G</div>
                        <div className="border border-border/30 rounded p-2">I/J</div>
                        <div className="border border-border/30 rounded p-2">K</div>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/50"></div>
                          <span>H [1,1] swaps column with E → C [1,0]</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded bg-purple-500/20 border border-purple-500/50"></div>
                          <span>E [2,0] swaps column with H → F [2,1]</span>
                        </div>
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
                      The rectangle rule is the most common case (neither same row nor same column). 
                      It creates complex substitution patterns that differ based on the keyword, 
                      providing the primary security of Playfair Cipher. This rule is self-inverse: 
                      applying it twice returns the original letters.
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
                        <strong className="text-indigo-400">1854:</strong> Charles Wheatstone (inventor of the telegraph) created the cipher but never published it
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1854:</strong> Lord Lyon Playfair promoted the cipher to the British Foreign Office, giving it his name
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">Context:</strong> First practical digraph cipher - encrypts letter pairs instead of single letters
                      </div>
                    </div>
                  </div>

                  {/* Military Usage */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ListOrdered className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Military Usage</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">Boer War (1899-1902):</strong> British forces used Playfair for tactical communications
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">World War I (1914-1918):</strong> Extensively used by British forces despite known weaknesses
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">World War II (1939-1945):</strong> Used by some military units and resistance groups for field communications
                      </div>
                      <div className="bg-background/50 rounded p-3">
                        <strong className="text-indigo-400">1918:</strong> French cryptanalyst Georges Painvin broke German ADFGVX cipher (based on Playfair + transposition)
                      </div>
                    </div>
                  </div>

                  {/* Why Playfair? */}
                  <div className="bg-background/60 rounded-lg p-4 mb-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Binary className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Why It Was Popular</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                      <li><strong className="text-indigo-400">Manual Implementation:</strong> Could be used with just paper and pencil</li>
                      <li><strong className="text-indigo-400">Memorizable Key:</strong> Single keyword instead of full 26-letter substitution</li>
                      <li><strong className="text-indigo-400">Digraphic Security:</strong> Resisted simple frequency analysis</li>
                      <li><strong className="text-indigo-400">Speed:</strong> Faster than more complex ciphers for field use</li>
                      <li><strong className="text-indigo-400">No Special Equipment:</strong> No codebooks or machines required</li>
                    </ul>
                  </div>

                  {/* Fun Facts */}
                  <div className="bg-background/60 rounded-lg p-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-indigo-300" />
                      <h4 className="font-semibold text-sm text-foreground">Fun Facts</h4>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>📖 Lord Playfair never claimed credit - he always attributed it to Wheatstone</div>
                      <div>🎖️ British rejected the cipher initially, saying "it would never be used by our military"</div>
                      <div>💀 Zimmermann Telegram (1917) used a more complex system, but Playfair was still in active use</div>
                      <div>🔍 By 1915, cryptanalysts could break Playfair with enough ciphertext (~50 letters)</div>
                      <div>📚 Still taught today as an introduction to polygraphic substitution</div>
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
