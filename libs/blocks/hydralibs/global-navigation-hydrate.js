import {
  closeAllDropdowns,
  decorateCta,
  fetchAndProcessPlainHtml,
  getActiveLink,
  getAnalyticsValue,
  getExperienceName,
  isActiveLink,
  icons,
  isDesktop,
  isTangentToViewport,
  lanaLog,
  loadBaseStyles,
  loadDecorateMenu,
  rootPath,
  loadStyles,
  logErrorFor,
  selectors,
  setActiveDropdown,
  setCurtainState,
  setUserProfile,
  toFragment,
  trigger,
  yieldToMain,
  addMepHighlightAndTargetId,
  isDarkMode,
  darkIcons,
  setDisableAEDState,
  animateInSequence,
  transformTemplateToMobile,
  closeAllTabs,
  disableMobileScroll,
  enableMobileScroll,
  setAsyncDropdownCount,
  branchBannerLoadCheck,
  getBranchBannerInfo
} from '../global-navigation/utilities/utilities.js';
import {Gnav} from '../global-navigation/global-navigation.js' 
const x = document.querySelector('header').getAttribute("data-feds");
const hydrationToken = "global-navigation/global-navigation.js";

class HGnav extends Gnav {
  block_0({
    isDesktop,
    dropdownTrigger,
    isSectionMenu
  }) {
    isDesktop = window.matchMedia('(min-width: 900px)')
    dropdownTrigger.addEventListener('click', e => {
      if (!isDesktop.matches && this.newMobileNav && isSectionMenu) {
        const popup = dropdownTrigger.nextElementSibling;
        if (popup && this.isLocalNav()) {
          this.updatePopupPosition(popup);
        }
        this.makeTabActive(popup);
      } else if (isDesktop.matches && this.newMobileNav && isSectionMenu) {
        const popup = dropdownTrigger.nextElementSibling;
        if (popup) popup.style.removeProperty('top');
      }
      trigger({
        element: dropdownTrigger,
        event: e,
        type: 'dropdown'
      });
      setActiveDropdown(dropdownTrigger);
    });

    isDesktop.addEventListener('change', async () => {
      const popup = document.querySelector('.feds-popup');
      let originalContent = popup.innerHTML;
      const item = document.querySelector('h2#creativity--design');
      enableMobileScroll();
      if (isDesktop.matches) {
        popup.innerHTML = originalContent;
        this.block.classList.remove('new-nav');
      } else {
        originalContent = `\n        <div class="feds-menu-container">\n          <div class="feds-menu-content"><div class="feds-menu-column"><div class="feds-menu-section"><div class="feds-menu-headline" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" daa-ll="Shop for-1">\n      Shop for\n    </div><div class="feds-menu-items" daa-lh="Shop for"><a href="https://www.adobe.com/creativecloud.html" class="feds-navLink" daa-ll="What is Creative Cloud-1">\n      <div class="feds-navLink-image"><picture><img loading="lazy" src="https://www.adobe.com/federal/assets/svgs/creative-cloud-40.svg" alt="Adobe Creative Cloud"></picture></div>\n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">What is Creative Cloud?</div>\n      <div class="feds-navLink-description">Creative apps and services for everyone</div>\n    </div>\n    </a><a href="https://www.adobe.com/creativecloud/photography.html" class="feds-navLink" daa-ll="Photographers-2">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Photographers</div>\n      <div class="feds-navLink-description">Lightroom, Photoshop, and more</div>\n    </div>\n    </a><a href="https://www.adobe.com/creativecloud/all-apps.html" class="feds-navLink" daa-ll="Individuals-3">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Individuals</div>\n      <div class="feds-navLink-description">20+ creative apps, Acrobat, and more</div>\n    </div>\n    </a><a href="https://www.adobe.com/creativecloud/business.html" class="feds-navLink" daa-ll="Business-4">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Business</div>\n      <div class="feds-navLink-description">Solutions for teams and enterprises</div>\n    </div>\n    </a><a href="https://www.adobe.com/creativecloud/buy/students.html" class="feds-navLink" daa-ll="Students and teachers-5">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Students and teachers</div>\n      <div class="feds-navLink-description">Save over 65% on Creative Cloud</div>\n    </div>\n    </a><p data-path="/federal/globalnav/acom/fragments/cc/cc-column-1"></p><div class="feds-cta-wrapper">\n      <a href="/creativecloud/plans.html" class="feds-cta feds-cta--primary" daa-ll="View plans and pricing-6">View plans and pricing</a>\n    </div><p></p></div></div></div>\n<div class="feds-menu-column"><div class="feds-menu-section"><div class="feds-menu-headline" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" daa-ll="Featured products-2">\n      Featured products\n    </div><div class="feds-menu-items" daa-lh="Featured products"><a href="https://www.adobe.com/products/photoshop.html" class="feds-navLink" daa-ll="Photoshop-1">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Photoshop</div>\n      <div class="feds-navLink-description">Image editing and design</div>\n    </div>\n    </a><a href="https://www.adobe.com/products/premiere.html" class="feds-navLink" daa-ll="Premiere Pro-2">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Premiere Pro</div>\n      <div class="feds-navLink-description">Video editing and production</div>\n    </div>\n    </a><a href="https://www.adobe.com/products/illustrator.html" class="feds-navLink" daa-ll="Illustrator-3">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Illustrator</div>\n      <div class="feds-navLink-description">Vector graphics and illustration</div>\n    </div>\n    </a><a href="https://www.adobe.com/express/?promoid=Y69SGP43&amp;mv=other" class="feds-navLink" daa-ll="Adobe Express-4">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Adobe Express</div>\n      <div class="feds-navLink-description">All-in-one design, video, photo, and PDF app</div>\n    </div>\n    </a><a href="https://www.adobe.com/products/photoshop-lightroom.html" class="feds-navLink" daa-ll="Lightroom-5">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Lightroom</div>\n      <div class="feds-navLink-description">Photo editing and organization</div>\n    </div>\n    </a><a href="https://www.adobe.com/products/firefly.html" class="feds-navLink" daa-ll="Adobe Firefly-6">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Adobe Firefly</div>\n      <div class="feds-navLink-description">AI-powered content creation</div>\n    </div>\n    </a><a href="https://stock.adobe.com/?as_channel=adobe_com&amp;as_source=profile_menu&amp;as_campclass=brand&amp;as_campaign=may2017&amp;as_audience=users&amp;as_content=globalnav" class="feds-navLink" daa-ll="Adobe Stock-7">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">Adobe Stock</div>\n      <div class="feds-navLink-description">High-quality licensable assets</div>\n    </div>\n    </a><a href="https://www.adobe.com/products/catalog.html#category=creativity-design" class="feds-navLink feds-navLink--blue" daa-ll="View all products-8">\n      \n      <div class="feds-navLink-content">\n      <div class="feds-navLink-title">View all products</div>\n      \n    </div>\n    </a></div></div></div>\n<div class="feds-menu-column"><div class="feds-menu-section"><div class="feds-menu-headline" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" daa-ll="Explore-3">\n      Explore\n    </div><div class="feds-menu-items" daa-lh="Explore"><ul data-path="/federal/globalnav/acom/fragments/cc/cc-column-3">\n    <li><a href="/ai/overview.html" daa-ll="AI at Adobe-1" class="feds-navLink">AI at Adobe</a></li>\n    <li><a href="/creativecloud/photography/apps.html?promoid=D8F91JW4&amp;mv=other" daa-ll="Photo-2" class="feds-navLink">Photo</a></li>\n    <li><a href="/creativecloud/design.html" daa-ll="Design and illustration-3" class="feds-navLink">Design and illustration</a></li>\n    <li><a href="/creativecloud/video.html" daa-ll="Video and animation-4" class="feds-navLink">Video and animation</a></li>\n    <li><a href="/products/substance3d.html" daa-ll="3D-5" class="feds-navLink">3D</a></li>\n    <li><a href="/products/acrobat-pro-cc.html" daa-ll="PDF-6" class="feds-navLink">PDF</a></li>\n  </ul></div></div></div>\n<div class="feds-menu-column"><div class="feds-menu-section"><div class="feds-promo-wrapper" daa-lh="promo-card">\n      <div class="feds-promo feds-promo--dark" data-path="/federal/globalnav/acom/fragments/cc/cc-promo/cc-promo">\n    <a class="feds-promo-image" href="https://www.adobe.com/creativecloud/plan-recommender/quiz.html" daa-ll="promo-image">\n          <picture>\n          <source type="image/webp" srcset="https://www.adobe.com/federal/globalnav/acom/fragments/cc/cc-promo/media_1af073e5a0cd7dec058e62d473269d930634a83a9.png" media="(min-width: 600px)">\n          <source type="image/webp" srcset="https://www.adobe.com/federal/globalnav/acom/fragments/cc/cc-promo/media_1af073e5a0cd7dec058e62d473269d930634a83a9.png">\n          <source type="image/png" srcset="https://www.adobe.com/federal/globalnav/acom/fragments/cc/cc-promo/media_1af073e5a0cd7dec058e62d473269d930634a83a9.png" media="(min-width: 600px)">\n          <img loading="lazy" alt="Get started | decorative image" src="https://www.adobe.com/federal/globalnav/acom/fragments/cc/cc-promo/media_1af073e5a0cd7dec058e62d473269d930634a83a9.png" width="520" height="384">\n        </picture>\n        </a>\n    <div class="feds-promo-content">\n      <div>\n        <p><strong>Find the perfect app in about 60 seconds.</strong></p>\n        <p></p><div class="feds-cta-wrapper">\n      <a href="/creativecloud/plan-recommender/quiz.html" class="feds-cta feds-cta--primary" daa-ll="Get started-1">Get started</a>\n    </div><p></p>\n      </div>\n    </div>\n  </div>\n    </div></div></div>\n<div class="feds-menu-column"><div class="feds-menu-section"></div></div>\n</div>\n        </div>\n      `;
        popup.querySelector('.close-icon')?.addEventListener('click', this.toggleMenuMobile);
        this.block.classList.add('new-nav');
      }
    });

    document.addEventListener('click', (e) => {
      const openElemSelector = `${selectors.globalNav} [aria-expanded = "true"]:not(.universal-nav-container *), ${selectors.localNav} [aria-expanded = "true"]`;
      const isClickedElemOpen = [...document.querySelectorAll(openElemSelector)]
      .find((openItem) => openItem.parentElement.contains(e.target));

      if(!isClickedElemOpen) {
        const animatedElement = this.isLocalNav() ? document.querySelector('header.new-nav + .feds-localnav .feds-localnav-items') : undefined;
        const animationType = this.isLocalNav() ? 'transition' : undefined;
        closeAllDropdowns({ animatedElement, animationType });
      }
    });
  }

  block_4({
    localNav,
    title
  }) {
    localNav.querySelector('.feds-localnav-title').addEventListener('click', () => {
      localNav.classList.toggle('feds-localnav--active');
      const isActive = localNav.classList.contains('feds-localnav--active');
      localNav.querySelector('.feds-localnav-title').setAttribute('aria-expanded', isActive);
      localNav.querySelector('.feds-localnav-title').setAttribute('daa-ll', `${title}_localNav|${isActive ? 'close' : 'open'}`);
    });
  }
  block_2({
    toggle
  }) {
    toggle.addEventListener('click', () => logErrorFor(async () => {
      this.toggleMenuMobile();
      if (this.blocks?.search?.instance) {
        this.blocks.search.instance.clearSearchForm();
      } else {
        await this.loadSearch();
      }
      if (this.isToggleExpanded()) this.setHamburgerPadding();
    }, 'Toggle click failed', 'gnav', 'error'));
  }
}

/**
 * Dynamic Hydration Runtime Code
 * This module provides runtime functionality for hydrating components on the client side.
 */

/**
 * Performs client-side hydration dynamically at runtime using only 'id'.
 * Processes raw hydration data collected during SSR, finds corresponding
 * code block definition using 'id', resolves elements, and executes the code.
 * Replaces build-time generation of individual init_X functions.
 *
 * @param {Array<object>} rawHydratorData Raw hydration data array from SSR.
 * Example element: {id: 0, elements: {param1: "sh-id"}, data: {param3: "value"}}
 * @param {Array<object>} blockDefinitions Array defining hydration code blocks.
 * Example element: {id: 0, code: "console.log(param1);"}
 * 'id' must uniquely identify a code block in this version.
 */
export function hydrateDynamically(rawHydratorData, blockDefinitions = []) {
  const obj = window.customParseWithDomAndClasses(x, {
    "Gnav": {
      type: Gnav,
      inh: HGnav
    }
  });
  // 1. Validate Inputs
  if (!Array.isArray(rawHydratorData)) {
    console.error("Dynamic Hydration (ID Only) failed: rawHydratorData must be an array.", rawHydratorData);
    return;
  }
  if (!Array.isArray(blockDefinitions)) {
    console.error("Dynamic Hydration (ID Only) failed: blockDefinitions must be an array.", blockDefinitions);
    return;
  }
  if (rawHydratorData.length === 0) {
    console.log("No raw hydration data found.");
    return;
  }
  if (blockDefinitions.length === 0) {
    console.log("No hydration block definitions found.");
    // return;
  }

  console.log(`Starting dynamic hydration (ID Only). Found ${rawHydratorData.length} raw tasks and ${blockDefinitions.length} block definitions.`);

  // Create a map from blockDefinitions using only ID for faster lookups
  const blockMap = new Map();
  blockDefinitions.forEach(def => {
    // Check if definition has required fields (id and code)
    if (def && def.id !== undefined && typeof def.code === 'string') {
      const blockId = def.id; // Use ID as the key
      if (blockMap.has(blockId)) {
        // Warn about duplicates but allow last one to win
        console.warn(`Duplicate block definition found for id: ${blockId}. Last definition will be used.`);
      }
      blockMap.set(blockId, def.code);
    } else {
      console.warn("Invalid block definition encountered during map creation (missing id or code):", def);
    }
  });

  //   if (blockMap.size === 0) {
  //     console.error("No valid block definitions were processed into the lookup map. Cannot proceed.");
  //     return;
  //   }

  // 2. Process each raw hydration task instance from SSR
  rawHydratorData.forEach((rawTask, taskIndex) => {
    // Validate raw task structure needed for processing (only need id)
    if (!rawTask || typeof rawTask !== 'object' || rawTask.id === undefined) {
      console.warn(`Skipping invalid raw hydration task at index ${taskIndex} (missing id):`, rawTask);
      return;
    }

    // Find the corresponding code string using only the ID
    const blockId = rawTask.id;
    const blockCodeString = blockMap.get(blockId);

    // Skip if no code found for this task's block definition ID
    // if (blockCodeString === undefined) {
    //   console.warn(`No code definition found for block id "${blockId}" (Task index ${taskIndex}). Skipping task.`);
    //   return;
    // }

    try {
      const resolvedArgs = {}; // Holds resolved elements and data for this instance

      // 3. Resolve DOM Elements for this task instance
      const rawElements = rawTask.elements || {};
      for (const key in rawElements) {
        const idOrIds = rawElements[key];
        let selector = null;
        let isMultiple = false;

        if (Array.isArray(idOrIds)) {
          if (idOrIds.length > 0) {
            selector = idOrIds
              .map(mId => typeof mId === 'string' ? `[data-hydrate-multi="${mId}"]` : null)
              .filter(s => s !== null)
              .join(',');
            isMultiple = true;
            if (!selector) {
              console.warn(`Dynamic Hydration (ID: ${blockId}, Task: ${taskIndex}, Key: ${key}): No valid multi-IDs found in array:`, idOrIds);
              resolvedArgs[key] = document.querySelectorAll(`.non-existent-class-${Date.now()}`);
              continue;
            }
          } else {
            console.warn(`Dynamic Hydration (ID: ${blockId}, Task: ${taskIndex}, Key: ${key}): Empty array provided for multi-element IDs.`);
            resolvedArgs[key] = document.querySelectorAll(`.non-existent-class-${Date.now()}`);
            continue;
          }
        } else if (typeof idOrIds === 'string' && idOrIds.startsWith('sh-')) {
          selector = `[data-hydrate-id="${idOrIds}"]`;
          isMultiple = false;
        } else {
          console.warn(`Dynamic Hydration (ID: ${blockId}, Task: ${taskIndex}, Key: ${key}): Invalid element ID format found:`, idOrIds);
          resolvedArgs[key] = null;
          continue;
        }

        if (selector) {
          const elementsNodeList = document.querySelectorAll(selector);
          if (isMultiple) {
            resolvedArgs[key] = elementsNodeList;
            if (elementsNodeList.length === 0) {
              console.warn(`Dynamic Hydration (ID: ${blockId}, Task: ${taskIndex}, Key: ${key}): No elements found for selector '${selector}'`);
            }
          } else {
            resolvedArgs[key] = elementsNodeList[0] || null;
            if (!resolvedArgs[key]) {
              console.warn(`Dynamic Hydration (ID: ${blockId}, Task: ${taskIndex}, Key: ${key}): No element found for selector '${selector}'`);
            }
          }
        } else {
          resolvedArgs[key] = isMultiple ? document.querySelectorAll(`.non-existent-class-${Date.now()}`) : null;
        }
      }

      // 4. Merge Static Data for this task instance
      const rawData = rawTask.data || {};
      for (const key in rawData) {
        if (resolvedArgs.hasOwnProperty(key)) {
          console.warn(`Dynamic Hydration (ID: ${blockId}, Task: ${taskIndex}, Key: ${key}): Data key clashes with element key. Data value will be used.`);
        }
        resolvedArgs[key] = rawData[key];
      }

      // 5. Prepare for Code Execution
      const argNames = Object.keys(resolvedArgs);
      const argValues = argNames.map(name => resolvedArgs[name]);
      console.log(argNames);

      obj[`block_${rawTask.id}`](resolvedArgs);

      //hydrationBlocks[`block_${rawTask.id}`](resolvedArgs);


      // 6. Execute the User's Hydration Code for this specific instance
      // const hydrateAction = new Function(...argNames, blockCodeString);
      // const hydrateAction = function (...argValues) { eval(blockCodeString) };
      // hydrateAction(...argValues);

    } catch (error) {
      console.error(`Error during dynamic hydration execution (ID: ${blockId}, Task Index: ${taskIndex}):`, error, "Task details:", rawTask);
    }
  });

  console.log("Dynamic hydration process finished (ID Only).");
}

/**
 * Initializes dynamic hydration when the DOM is ready
 */
export function initializeDynamicHydration() {
  // Assumes window.__HYDRATOR_DATA__ (raw SSR data array) and
  // window.__BLOCK_DEFINITIONS__ (block definitions array) are populated globally
  const token = hydrationToken;
  const rawData = (window.hydrateData || []).filter(data => data.file === token);
  const blockDefs = (window.code || [])[token];


  // Call the main hydration function
  hydrateDynamically(rawData, blockDefs);
}

// Run after DOM is ready
if (typeof document !== 'undefined') {
  initializeDynamicHydration();
}