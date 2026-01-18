import { readFileSync, readdirSync } from "fs";
import { join } from "path";

interface ValidationError {
  file: string;
  error: string;
}

const errors: ValidationError[] = [];

function validateSlugs(content: any[], filePath: string, type: string) {
  const slugs = new Set<string>();

  content.forEach((item, index) => {
    if (!item.slug) {
      errors.push({ file: filePath, error: `${type}[${index}]: Missing slug` });
      return;
    }

    if (slugs.has(item.slug)) {
      errors.push({ file: filePath, error: `${type}[${index}]: Duplicate slug "${item.slug}"` });
    }
    slugs.add(item.slug);

    if (item.slug.length < 3) {
      errors.push({ file: filePath, error: `${type}[${index}]: Slug "${item.slug}" is too short` });
    }

    if (!/^[a-z0-9-]+$/.test(item.slug)) {
      errors.push({ file: filePath, error: `${type}[${index}]: Slug "${item.slug}" contains invalid characters` });
    }
  });
}

function validateRequiredFields(content: any[], filePath: string, type: string, requiredFields: string[]) {
  content.forEach((item, index) => {
    requiredFields.forEach((field) => {
      if (!item[field]) {
        errors.push({ file: filePath, error: `${type}[${index}]: Missing required field "${field}"` });
      }
    });
  });
}

function validateFAQs(content: any[], filePath: string, type: string) {
  content.forEach((item, index) => {
    if (item.faqs && Array.isArray(item.faqs)) {
      if (item.faqs.length === 0) {
        errors.push({ file: filePath, error: `${type}[${index}]: Empty FAQs array` });
      }
      item.faqs.forEach((faq: any, faqIndex: number) => {
        if (!faq.question || !faq.answer) {
          errors.push({ file: filePath, error: `${type}[${index}].faqs[${faqIndex}]: Missing question or answer` });
        }
        if (faq.answer && faq.answer.length < 20) {
          errors.push({ file: filePath, error: `${type}[${index}].faqs[${faqIndex}]: Answer too short` });
        }
      });
    }
  });
}

function validateDescriptions(content: any[], filePath: string, type: string) {
  content.forEach((item, index) => {
    if (item.description) {
      if (item.description.length < 50) {
        errors.push({ file: filePath, error: `${type}[${index}]: Description too short (${item.description.length} chars)` });
      }
      if (item.description.length > 320) {
        errors.push({ file: filePath, error: `${type}[${index}]: Description too long (${item.description.length} chars)` });
      }
    }
  });
}

function main() {
  console.log("Validating content files...");

  const contentDir = join(process.cwd(), "content");
  const files = readdirSync(contentDir).filter((f) => f.endsWith(".ts") && !f.includes("generated"));

  for (const file of files) {
    const filePath = join(contentDir, file);
    try {
      const content = readFileSync(filePath, "utf-8");

      // Basic validation - check for exports
      if (!content.includes("export const")) {
        continue; // Skip files without exports
      }

      // Try to import and validate
      // Note: This is a simplified validation. For full validation, you'd need to actually import the modules.
      // For now, we'll do basic checks on the file content.

      const type = file.replace(".ts", "");

      // Check for common issues
      if (content.includes("slug: \"\"")) {
        errors.push({ file, error: "Empty slug found" });
      }

      if (content.includes("description: \"\"")) {
        errors.push({ file, error: "Empty description found" });
      }

      // Count exports to ensure we have content
      const exportMatches = content.match(/export const \w+: \w+\[\] = \[/g);
      if (!exportMatches || exportMatches.length === 0) {
        errors.push({ file, error: "No content array exports found" });
      }

    } catch (err) {
      errors.push({ file, error: `Error reading file: ${err}` });
    }
  }

  // Validate generated files if they exist
  const generatedDir = join(contentDir, "generated");
  try {
    const generatedFiles = readdirSync(generatedDir).filter((f) => f.endsWith(".ts"));
    for (const file of generatedFiles) {
      const filePath = join(generatedDir, file);
      const content = readFileSync(filePath, "utf-8");

      // Check for empty arrays
      if (content.includes(": GeneratedPage[] = []")) {
        errors.push({ file: `generated/${file}`, error: "Empty generated pages array" });
      }
    }
  } catch (err) {
    // Generated directory doesn't exist yet, that's okay
  }

  // Report results
  if (errors.length === 0) {
    console.log("✓ All content files validated successfully");
    process.exit(0);
  } else {
    console.error(`✗ Found ${errors.length} validation errors:\n`);
    errors.forEach((err) => {
      console.error(`  ${err.file}: ${err.error}`);
    });
    process.exit(1);
  }
}

main();
