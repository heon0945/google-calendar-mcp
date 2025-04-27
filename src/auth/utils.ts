import * as path from 'path';
import { fileURLToPath } from 'url';
import os from "os";

// Helper to get the project root directory reliably
function getProjectRoot(): string {
  const __dirname = path.dirname(fileURLToPath(import.meta.url)); 
  // In build output (e.g., build/bundle.js), __dirname is .../build
  // Go up ONE level to get the project root
  const projectRoot = path.join(__dirname, ".."); // Corrected: Go up ONE level
  return path.resolve(projectRoot); // Ensure absolute path
}

// Returns the absolute path for the saved token file.
export function getSecureTokenPath(): string {
  const projectRoot = getProjectRoot();
  const tokenPath = path.join(projectRoot, ".gcp-saved-tokens.json");
  return tokenPath; // Already absolute from getProjectRoot
}

// Returns the absolute path for the GCP OAuth keys file.
export function getKeysFilePath(): string {
  const homeDir = process.env.HOME || process.env.USERPROFILE || os.homedir();
  const configDir = path.join(homeDir, ".gmail-mcp");
  return path.join(configDir, "credentials.json");
} 