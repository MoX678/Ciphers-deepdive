import { TutorialStep } from "@/components/TutorialTooltip";

/**
 * Common tutorial steps that can be used across all cipher pages.
 * These steps highlight the common UI elements found in most cipher implementations.
 */

// Step for mode toggle (encrypt/decrypt switch)
export const modeToggleStep: TutorialStep = {
  target: "[data-tutorial='mode-toggle']",
  title: "Encrypt or Decrypt Mode",
  description: "Switch between encryption and decryption modes. Encryption encodes your message, while decryption reveals the original text.",
  position: "bottom",
};

// Step for input area
export const inputAreaStep: TutorialStep = {
  target: "[data-tutorial='input-area']",
  title: "Enter Your Message",
  description: "Type the text you want to encrypt or decrypt. The cipher works with letters only—other characters remain unchanged.",
  position: "right",
  offset: { x: 20, y: 0 },
};

// Step for key/shift controls (generic)
export const keyControlStep: TutorialStep = {
  target: "[data-tutorial='key-control']",
  title: "Set the Key",
  description: "Configure the encryption key. The key determines how your message is transformed. Different keys produce different results!",
  position: "right",
  offset: { x: 20, y: 0 },
};

// Step for shift control (Caesar-specific)
export const shiftControlStep: TutorialStep = {
  target: "[data-tutorial='shift-control']",
  title: "Adjust the Shift Amount",
  description: "The shift determines how many positions each letter moves in the alphabet. Try different values to see how it affects the result!",
  position: "right",
  offset: { x: 20, y: 0 },
};

// Step for matrix control (Hill cipher)
export const matrixControlStep: TutorialStep = {
  target: "[data-tutorial='matrix-control']",
  title: "Configure the Key Matrix",
  description: "The Hill cipher uses a matrix as its key. Each cell value affects how letters are transformed. The matrix must be invertible for decryption!",
  position: "right",
  offset: { x: 20, y: 0 },
};

// Step for animation controls
export const animationControlsStep: TutorialStep = {
  target: "[data-tutorial='animation-controls']",
  title: "Animation Controls",
  description: "Play to see the cipher in action step-by-step, pause to examine each transformation, or reset to start over. Watch how each letter transforms!",
  position: "top",
};

// Step for visualization area
export const visualizationStep: TutorialStep = {
  target: "[data-tutorial='visualization']",
  title: "Visual Representation",
  description: "This interactive visualization shows how the cipher works. Watch the transformation happen in real-time as the animation plays!",
  position: "left",
  offset: { x: -20, y: 0 },
};

// Step for output area
export const outputAreaStep: TutorialStep = {
  target: "[data-tutorial='output-area']",
  title: "View the Result",
  description: "Your encrypted or decrypted message appears here. Compare it with the input to see how the cipher transformed your text!",
  position: "top",
};

// Final step - All Ciphers sidebar (opens the sidebar and shows completion info box)
export const allCiphersSidebarStep: TutorialStep = {
  target: "[data-tutorial='sidebar-header']", // Target the sidebar header
  title: "Explore All Ciphers",
  description: "Browse through our complete collection of classical and modern encryption methods. Click 'Got it' when you're ready!",
  position: "bottom",
  offset: { x: 0, y: 20 }, // Position just below the header
  preClickTarget: "[data-tutorial='all-ciphers-button']", // Click the button to open sidebar first
  preClickDelay: 400, // Wait for sidebar animation to complete
  hideBackdrop: true, // Sidebar has its own backdrop, don't double up
  noHighlight: true, // Don't add highlight class to the sidebar (it would affect positioning)
  isFinalStep: true, // This is the final step
};

/**
 * Creates a complete tutorial steps array for a cipher page.
 * Automatically adds the "All Ciphers" step as the final step.
 * 
 * @param customSteps - Array of custom tutorial steps specific to the cipher
 * @param includeAllCiphersStep - Whether to include the final "All Ciphers" step (default: true)
 * @returns Complete array of tutorial steps
 */
export function createCipherTutorialSteps(
  customSteps: TutorialStep[],
  includeAllCiphersStep: boolean = true
): TutorialStep[] {
  if (includeAllCiphersStep) {
    return [...customSteps, allCiphersSidebarStep];
  }
  return customSteps;
}

/**
 * Pre-built tutorial configurations for common cipher types
 */

// Basic cipher tutorial (mode toggle, input, key, animation, visualization, output)
export const basicCipherTutorial: TutorialStep[] = createCipherTutorialSteps([
  modeToggleStep,
  inputAreaStep,
  keyControlStep,
  animationControlsStep,
  visualizationStep,
]);

// Caesar cipher specific tutorial
export const caesarCipherTutorial: TutorialStep[] = createCipherTutorialSteps([
  modeToggleStep,
  inputAreaStep,
  shiftControlStep,
  animationControlsStep,
  visualizationStep,
]);

// Hill cipher specific tutorial
export const hillCipherTutorial: TutorialStep[] = createCipherTutorialSteps([
  modeToggleStep,
  inputAreaStep,
  matrixControlStep,
  animationControlsStep,
  visualizationStep,
]);
