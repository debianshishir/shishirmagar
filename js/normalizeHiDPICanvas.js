/**
 * =========================================================
 * normalizeHiDPICanvas()
 * =========================================================
 *   What It Does:
 *   Browsers often report two different “pixel” scales:
 *
 *     - CSS pixels   — how large an element appears on the page
 *     - Device pixels — how many physical pixels a screen actually has
 *
 *   On high‑resolution screens (like Retina or 4K), each CSS pixel can
 *   map to multiple device pixels. Canvases, by default, don’t adjust
 *   for that; their drawings can appear blurry because one drawn pixel
 *   may stretch across several hardware pixels.
 *
 *   This function corrects that by rescaling each <canvas> element’s
 *   internal size and 2D context so the graphics remain crisp on any
 *   display density.
 *
 *   In One Line:
 *   It automatically rescales all <canvas> elements so that drawings
 *   remain razor‑sharp on high‑DPI (retina) and multi‑monitor setups.
 */

      function normalizeHiDPICanvas() {
        document.querySelectorAll("canvas").forEach((canvas) => {
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          const dpr = window.devicePixelRatio || 1;
          const rect = canvas.getBoundingClientRect();

          if (
            canvas.width !== rect.width * dpr ||
            canvas.height !== rect.height * dpr
          ) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
          }
        });
      }

      window.addEventListener("load", normalizeHiDPICanvas);
      window.addEventListener("resize", normalizeHiDPICanvas);