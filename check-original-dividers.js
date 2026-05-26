const { execSync } = require('child_process');

try {
  const originalBlueTeam = execSync('git show HEAD:src/app/services/defensive-security/blue-team/page.tsx', { encoding: 'utf8' });
  const hasBlueDivider = originalBlueTeam.includes('BlueSectionDivider');
  console.log("Original blue-team has BlueSectionDivider:", hasBlueDivider);
  if (hasBlueDivider) {
    console.log("Found matches in HEAD:");
    originalBlueTeam.split('\n').forEach((line, idx) => {
      if (line.includes('BlueSectionDivider')) console.log(`${idx+1}: ${line}`);
    });
  }

  const originalAntiPhishing = execSync('git show HEAD:src/app/services/defensive-security/anti-phishing/page.tsx', { encoding: 'utf8' });
  const hasBlueDividerAP = originalAntiPhishing.includes('BlueSectionDivider');
  console.log("Original anti-phishing has BlueSectionDivider:", hasBlueDividerAP);
  if (hasBlueDividerAP) {
    console.log("Found matches in HEAD:");
    originalAntiPhishing.split('\n').forEach((line, idx) => {
      if (line.includes('BlueSectionDivider')) console.log(`${idx+1}: ${line}`);
    });
  }
} catch (e) {
  console.error("Error:", e.message);
}
