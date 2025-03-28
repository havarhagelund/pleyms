---
// Astro frontmatter
---

<div class="relative min-h-screen bg-background overflow-hidden">
  {/* Decorative waves */}
  <div class="absolute inset-0 overflow-hidden">
    {/* White wave */}
    <div class="absolute -top-20 left-0 w-full animate-wave">
      <svg
        viewBox="0 0 1440 320"
        class="w-full h-40 opacity-20"
        fill="currentColor"
      >
        <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    {/* Red wave */}
    <div class="absolute top-1/3 left-0 w-full animate-wave-delayed">
      <svg
        viewBox="0 0 1440 320"
        class="w-full h-40 text-red-500/30"
        fill="currentColor"
      >
        <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    {/* Green wave */}
    <div class="absolute bottom-1/3 left-0 w-full animate-wave-more-delayed">
      <svg
        viewBox="0 0 1440 320"
        class="w-full h-40 text-green-500/30"
        fill="currentColor"
      >
        <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </div>

  {/* Content */}
  <div class="relative z-10 container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Our Menu</h1>
    {/* Add your menu content here */}
  </div>
</div>

<style>
  @keyframes wave {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-wave {
    animation: wave 8s ease-in-out infinite;
  }

  .animate-wave-delayed {
    animation: wave 10s ease-in-out infinite;
    animation-delay: -2s;
  }

  .animate-wave-more-delayed {
    animation: wave 12s ease-in-out infinite;
    animation-delay: -4s;
  }
</style> 