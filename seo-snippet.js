// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.truxtrains.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.truxtrains.com/","title_tag":"Inclusive Diversity Training & Leadership | TruxTrains","meta_description":"Inclusive diversity leadership training, culture audits, executive coaching and strategic planning to improve organizational performance and equity."},{"page_url":"https://www.truxtrains.com/about","title_tag":"Diversity Management Strategies & Audits | TruxTrains","meta_description":"We design diversity management strategies, culture audits and recruitment and retention solutions that align with organizational strategic priorities."},{"page_url":"https://www.truxtrains.com/services","title_tag":"Leadership Development & Diversity Training | TruxTrains","meta_description":"Inclusive diversity training, leadership competency development, multicultural consulting, public speaking and executive diversity coaching services."},{"page_url":"https://www.truxtrains.com/projects","title_tag":"Community Engagement Programs & Consulting | TruxTrains","meta_description":"Multi-cultural consulting, project management and community engagement programs that advance fairness, equity, inclusion and quality-of-life outcomes."},{"page_url":"https://www.truxtrains.com/contact","title_tag":"Inclusive Diversity Consulting Contact | TruxTrains","meta_description":"Contact TruxTrains for inclusive diversity training, multicultural consulting, leadership development, public speaking and community engagement support."}],"keywords":["inclusive diversity training","diversity management strategies","leadership competency development","organizational strategic planning","multi-cultural consulting","diversity culture audits","executive diversity coaching","recruitment and retention solutions","public speaking services","community engagement programs"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.truxtrains.com/#organization",
  "name": "TruxTrains and Consulting Services LLC",
  "url": "https://www.truxtrains.com/",
  "description": "TruxTrains and Consulting Services LLC specializes in inclusive diversity leadership, equity, and quantum leadership consulting. The firm provides tailored learning experiences, diversity and inclusion training, strategic planning, multicultural marketing, and project management services to improve recruitment, retention, succession planning, performance management, and workplace culture.",
  "image": "https://www.truxtrains.com/quality_auto/Diverse-crowd-of-people-horizontal-1.jpg",
  "sameAs": [],
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  },
  "keywords": [
    "inclusive diversity leadership",
    "diversity and inclusion training",
    "equity consulting",
    "quantum leadership",
    "multicultural marketing",
    "organizational diversity strategy",
    "diversity equity inclusion",
    "leadership development",
    "public speaking diversity",
    "community infrastructure projects"
  ],
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "United States"
  },
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Disability Connects Us",
      "url": "https://www.disabilityconnectsus.com/"
    }
  ],
  "slogan": "Service First and Always",
  "knowsAbout": [
    "inclusive diversity leadership",
    "diversity and inclusion competency",
    "executive diversity steering committees",
    "diversity councils",
    "diversity culture audits",
    "talent management analytics",
    "succession planning",
    "recruitment and retention strategies",
    "performance management systems",
    "multicultural marketing and communications",
    "supplier diversity initiatives",
    "public speaking on diversity and equity",
    "clean water and sewer infrastructure projects",
    "community health equity",
    "government and community relations"
  ],
  "department": [
    {
      "@type": "Organization",
      "name": "Government Relations & Community Affairs",
      "employee": {
        "@type": "Person",
        "name": "Harold Truxon",
        "jobTitle": "Senior Vice President; Government Relations & Community Affairs"
      }
    },
    {
      "@type": "Organization",
      "name": "Finance, Technology and Innovation",
      "employee": {
        "@type": "Person",
        "name": "Jasmine Truxon",
        "jobTitle": "Vice President, Finance, Technology and Innovation"
      }
    },
    {
      "@type": "Organization",
      "name": "Human Resources, Diversity, Equity, Inclusion and Accessibility",
      "employee": {
        "@type": "Person",
        "name": "Tiffany Truxon",
        "jobTitle": "Vice President, Human Resources, Diversity, Equity, Inclusion and Accessibility (DEIA)"
      }
    }
  ],
  "employee": [
    {
      "@type": "Person",
      "name": "Petra Truxon",
      "jobTitle": "Principal Partner, President"
    },
    {
      "@type": "Person",
      "name": "Fentress Truxon",
      "jobTitle": "Principal Partner; Senior Executive Vice President"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "TruxTrains Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Training",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Diversity and Inclusion Training",
            "description": "A 4-hour diversity and inclusion training session focused on building inclusive diversity competency for leaders and teams.",
            "serviceType": "Diversity and Inclusion Training"
          },
          {
            "@type": "Service",
            "name": "Real Colors Communication Training",
            "description": "A 4-hour Real Colors communication training designed to improve interpersonal communication and team effectiveness.",
            "serviceType": "Communication Training"
          },
          {
            "@type": "Service",
            "name": "Executive Diversity and Inclusion Steering Committee & Councils Setup",
            "description": "Guidance on how to set up Executive Diversity and Inclusion Steering Committees and D&I Councils.",
            "serviceType": "Diversity Governance Consulting"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Inclusive Diversity Strategy & Planning",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Inclusive Diversity Management Initiatives and Strategies",
            "description": "Creation of tailored inclusive diversity management initiatives and strategies to reverse negative recruitment trends, increase retention, build pipeline programs, and improve performance management appraisal systems.",
            "serviceType": "Inclusive Diversity Strategy"
          },
          {
            "@type": "Service",
            "name": "Inclusive Diversity Strategic Planning and Facilitation",
            "description": "Strategic planning and facilitation to align organizational priorities with recruitment, retention, succession planning, and performance management activities.",
            "serviceType": "Strategic Planning Facilitation"
          },
          {
            "@type": "Service",
            "name": "Train the Trainer: Sustaining Inclusive Diversity Competency",
            "description": "Train-the-trainer services to sustain inclusive diversity competency within organizations.",
            "serviceType": "Train the Trainer"
          },
          {
            "@type": "Service",
            "name": "On-Site Facilitator Services",
            "description": "On-site facilitator services acting as an unbiased, non-judgmental listener for diversity dialogues and organizational sessions.",
            "serviceType": "Facilitation Services"
          },
          {
            "@type": "Service",
            "name": "Senior Executive Coaching",
            "description": "\"One on one\" senior executive coaching available 24 hours a day, 360 days a year to meet client needs and leadership competency development.",
            "serviceType": "Executive Coaching"
          },
          {
            "@type": "Service",
            "name": "Leadership Competency Development Training",
            "description": "Leadership competency development training for lower ranks to build bench strength and improve performance.",
            "serviceType": "Leadership Development Training"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Multicultural Consulting & Communications",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Multicultural Marketing and Communications for Infrastructure Projects",
            "description": "Multicultural consulting and communication campaigns for infrastructure projects to improve quality of life and reduce health disparities in underserved communities.",
            "serviceType": "Multicultural Marketing"
          },
          {
            "@type": "Service",
            "name": "Supplier Diversity Initiatives",
            "description": "Consulting on supplier diversity initiatives focused on gaining parity partner results.",
            "serviceType": "Supplier Diversity Consulting"
          },
          {
            "@type": "Service",
            "name": "Public Speaking and Diversity Dialogues",
            "description": "Public speaking, diversity dialogue sessions, town halls, lunch and learns, and multicultural event planning.",
            "serviceType": "Public Speaking and Facilitation"
          },
          {
            "@type": "Service",
            "name": "Multicultural Event Planning",
            "description": "Planning and execution of multicultural events to support diversity, equity, and inclusion goals.",
            "serviceType": "Event Planning"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Project Management & Community Infrastructure",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Project Management for Clean Water and Sewer Infrastructure",
            "description": "Project management and community engagement services for clean drinking water and sewer infrastructure projects, with a focus on underserved and minority communities.",
            "serviceType": "Infrastructure Project Management"
          }
        ]
      }
    ]
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "@id": "https://www.truxtrains.com/about#webpage",
      "url": "https://www.truxtrains.com/about",
      "name": "About | TruxTrains",
      "description": "Overview of TruxTrains and Consulting Services LLC, its inclusive diversity leadership approach, diversity culture audits, and commitment to fairness, equity, and inclusion."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.truxtrains.com/services#webpage",
      "url": "https://www.truxtrains.com/services",
      "name": "Services | TruxTrains",
      "description": "Detailed list of services including diversity and inclusion training, inclusive diversity strategic planning, multicultural consulting, public speaking, and executive coaching."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.truxtrains.com/projects#webpage",
      "url": "https://www.truxtrains.com/projects",
      "name": "Project Management / Multicultural Marketing",
      "description": "Examples of multicultural marketing and project management services, including the Ellendale, Delaware clean drinking water and central sewer projects."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.truxtrains.com/contact#webpage",
      "url": "https://www.truxtrains.com/contact",
      "name": "Contact | TruxTrains",
      "description": "Contact page for TruxTrains and Consulting Services LLC with a form to submit inquiries."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
