/**
 * Client-side Image Optimizer & WebP Converter
 * Converts uploaded images (JPG, PNG, GIF, BMP, etc.) into compressed WebP format.
 *
 * @param {File} file - User uploaded Image File
 * @param {Object} options - Custom options { maxWidth, maxHeight, quality }
 * @returns {Promise<{ dataUrl: string, originalSizeKb: number, compressedSizeKb: number, savingsPercent: number }>}
 */
export async function compressImageToWebP(file, options = {}) {
  const { maxWidth = 1200, maxHeight = 1200, quality = 0.8 } = options;

  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Selected file is not a valid image."));
      return;
    }

    const originalSizeKb = Math.round(file.size / 1024);
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Calculate proportional aspect ratio resizing
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          // Fallback if canvas context fails
          const rawResult = e.target.result;
          const rawKb = Math.round(rawResult.length / 1024);
          resolve({
            dataUrl: rawResult,
            originalSizeKb,
            compressedSizeKb: rawKb,
            savingsPercent: 0,
          });
          return;
        }

        // Draw image onto canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Export as WebP format with target compression quality
        const webpDataUrl = canvas.toDataURL("image/webp", quality);

        // Approximate size of Base64 string in KB (Base64 is ~1.33x raw binary)
        const compressedSizeKb = Math.round((webpDataUrl.length * 0.75) / 1024);
        const savingsPercent = Math.max(
          0,
          Math.round(((originalSizeKb - compressedSizeKb) / originalSizeKb) * 100)
        );

        resolve({
          dataUrl: webpDataUrl,
          originalSizeKb,
          compressedSizeKb,
          savingsPercent,
        });
      };

      img.onerror = (err) => reject(new Error("Failed to process image file."));
      img.src = e.target.result;
    };

    reader.onerror = (err) => reject(new Error("Failed to read image file."));
    reader.readAsDataURL(file);
  });
}

/**
 * Compresses a raw Base64 Data URL string to WebP format
 *
 * @param {string} base64Str - Raw image Base64 data URL
 * @param {number} maxWidth - Max width threshold (default: 1000px)
 * @param {number} quality - WebP quality (default: 0.8)
 * @returns {Promise<string>}
 */
export async function compressBase64ToWebP(base64Str, maxWidth = 1000, quality = 0.8) {
  if (!base64Str || typeof base64Str !== "string") return base64Str;
  if (!base64Str.startsWith("data:image/")) return base64Str;
  // If image is already lightweight (< 40KB), return as is
  if (base64Str.length < 40000) return base64Str;

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(base64Str);

        ctx.drawImage(img, 0, 0, width, height);
        const webp = canvas.toDataURL("image/webp", quality);
        resolve(webp);
      } catch (e) {
        resolve(base64Str);
      }
    };
    img.onerror = () => resolve(base64Str);
    img.src = base64Str;
  });
}

/**
 * Scans HTML content for embedded base64 <img> tags and compresses them to lightweight WebP
 *
 * @param {string} htmlContent - Article HTML content
 * @returns {Promise<string>}
 */
export async function compressHtmlContentImages(htmlContent = "") {
  if (!htmlContent || typeof htmlContent !== "string") return htmlContent;
  if (!htmlContent.includes("data:image/")) return htmlContent;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const images = Array.from(doc.querySelectorAll("img[src^='data:image/']"));

    if (images.length === 0) return htmlContent;

    for (const imgEl of images) {
      const currentSrc = imgEl.getAttribute("src");
      if (currentSrc && currentSrc.length > 40000) {
        const compressedWebp = await compressBase64ToWebP(currentSrc, 1000, 0.8);
        imgEl.setAttribute("src", compressedWebp);
      }
    }

    return doc.body.innerHTML;
  } catch (err) {
    console.error("Error processing content images:", err);
    return htmlContent;
  }
}
