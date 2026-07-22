(() => {
  'use strict';

  const PACKAGE_GROUPS = {
  "1D": [
    {
      "id": "isha-marudhamalai",
      "title": "Isha + Marudhamalai",
      "duration": "1 Day",
      "image": "images/destinations/isha.webp",
      "pilgrim": true
    },
    {
      "id": "ooty",
      "title": "Ooty",
      "duration": "1 Day",
      "image": "images/destinations/ooty.webp",
      "pilgrim": false
    },
    {
      "id": "top-slip-masani-amman",
      "title": "Top Slip + Masani Amman",
      "duration": "1 Day",
      "image": "images/destinations/top-slip.webp",
      "pilgrim": true
    },
    {
      "id": "guruvayur",
      "title": "Guruvayur",
      "duration": "1 Day",
      "image": "images/destinations/guruvayur.webp",
      "pilgrim": true
    },
    {
      "id": "palani",
      "title": "Palani",
      "duration": "1 Day",
      "image": "images/destinations/palani.webp",
      "pilgrim": true
    }
  ],
  "2D": [
    {
      "id": "ooty-2d",
      "title": "Ooty",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/ooty.webp",
      "pilgrim": false
    },
    {
      "id": "valparai-2d",
      "title": "Valparai",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/valparai.webp",
      "pilgrim": false
    },
    {
      "id": "kodaikanal-2d",
      "title": "Kodaikanal",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/kodaikanal.webp",
      "pilgrim": false
    },
    {
      "id": "munnar-2d",
      "title": "Munnar",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/munnar.webp",
      "pilgrim": false
    },
    {
      "id": "mysore-2d",
      "title": "Mysore",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/mysore.webp",
      "pilgrim": false
    },
    {
      "id": "malampuzha-guruvayur-2d",
      "title": "Malampuzha Dam + Guruvayur",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/guruvayur.webp",
      "pilgrim": true
    },
    {
      "id": "sabarimalai-2d",
      "title": "Sabarimalai",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/sabarimalai.webp",
      "pilgrim": true
    },
    {
      "id": "rameshwaram-2d",
      "title": "Rameshwaram",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/rameswaram.webp",
      "pilgrim": true
    },
    {
      "id": "thiruchendur-2d",
      "title": "Thiruchendur",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/thiruchendur.webp",
      "pilgrim": true
    },
    {
      "id": "thiruvannamalai-2d",
      "title": "Thiruvannamalai",
      "duration": "2 Days / 1 Night",
      "image": "images/destinations/thiruvannamalai.webp",
      "pilgrim": true
    }
  ],
  "3D": [
    {
      "id": "ooty-3d",
      "title": "Ooty",
      "duration": "3 Days / 2 Nights",
      "image": "images/destinations/ooty.webp",
      "pilgrim": false
    },
    {
      "id": "kodaikanal-3d",
      "title": "Kodaikanal",
      "duration": "3 Days / 2 Nights",
      "image": "images/destinations/kodaikanal.webp",
      "pilgrim": false
    },
    {
      "id": "munnar-3d",
      "title": "Munnar",
      "duration": "3 Days / 2 Nights",
      "image": "images/destinations/munnar.webp",
      "pilgrim": false
    },
    {
      "id": "wayanad-3d",
      "title": "Wayanad",
      "duration": "3 Days / 2 Nights",
      "image": "images/destinations/wayanad.webp",
      "pilgrim": false
    },
    {
      "id": "valparai-3d",
      "title": "Valparai + Athirapally",
      "duration": "3 Days / 2 Nights",
      "image": "images/destinations/athirapally.webp",
      "pilgrim": false
    },
    {
      "id": "mysore-coorg-3d",
      "title": "Mysore + Coorg",
      "duration": "3 Days / 2 Nights",
      "image": "images/destinations/coorg.webp",
      "pilgrim": false
    },
    {
      "id": "navagraha-temple-3d",
      "title": "Navagraha Temple",
      "duration": "3 Days / 2 Nights",
      "image": "images/destinations/navagraha.webp",
      "pilgrim": true
    }
  ],
  "4D": [
    {
      "id": "ooty-4d",
      "title": "Ooty",
      "duration": "4 Days / 3 Nights",
      "image": "images/destinations/ooty.webp",
      "pilgrim": false
    },
    {
      "id": "kodaikanal-4d",
      "title": "Kodaikanal",
      "duration": "4 Days / 3 Nights",
      "image": "images/destinations/kodaikanal.webp",
      "pilgrim": false
    },
    {
      "id": "ooty-mysore-4d",
      "title": "Ooty + Mysore",
      "duration": "4 Days / 3 Nights",
      "image": "images/destinations/mysore.webp",
      "pilgrim": false
    },
    {
      "id": "munnarthekkady-4d",
      "title": "Munnar + Thekkady",
      "duration": "4 Days / 3 Nights",
      "image": "images/destinations/thekkady.webp",
      "pilgrim": false
    },
    {
      "id": "coorgchikmagalur-4d",
      "title": "Coorg + Chikmagalur",
      "duration": "4 Days / 3 Nights",
      "image": "images/destinations/chikmagalur.webp",
      "pilgrim": false
    },
    {
      "id": "coorgwayanad-4d",
      "title": "Coorg + Wayanad",
      "duration": "4 Days / 3 Nights",
      "image": "images/destinations/coorg.webp",
      "pilgrim": false
    },
    {
      "id": "kodaikanal-madurai-rameswaram-4d",
      "title": "Kodaikanal + Madurai + Rameswaram",
      "duration": "4 Days / 3 Nights",
      "image": "images/destinations/rameswaram.webp",
      "pilgrim": true
    }
  ]
};

  const packageGrid = document.querySelector('[data-package-grid]');
  const packageCount = document.querySelector('[data-package-count]');
  const filterButtons = [...document.querySelectorAll('[data-package-filter]')];
  const enquiryBridge = document.getElementById('packageEnquiryBridge');

  const allPackages = Object.entries(PACKAGE_GROUPS).flatMap(([group, items]) =>
    items.map(item => ({ ...item, group }))
  );

  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[character]));

  function visiblePackages(filter) {
    if (filter === 'all') return allPackages;
    if (filter === 'pilgrim') return allPackages.filter(pkg => pkg.pilgrim);
    return (PACKAGE_GROUPS[filter] || []).map(item => ({ ...item, group: filter }));
  }

  function packageCard(pkg) {
    return `
      <div class="col-6 col-md-4 col-xl-3 col-xxl-2" id="${escapeHtml(pkg.id)}">
        <article class="package-card">
          <div class="package-card-media">
            <img src="${escapeHtml(pkg.image)}" alt="${escapeHtml(pkg.title)} tour package" loading="lazy" data-package-image>
          </div>
          <div class="package-card-body">
            <span class="package-duration">${escapeHtml(pkg.duration)}</span>
            <h3>${escapeHtml(pkg.title)}</h3>
            <button class="btn btn-outline-primary btn-sm w-100" type="button" data-package-enquire-id="${escapeHtml(pkg.id)}">Enquire Now</button>
          </div>
        </article>
      </div>`;
  }

  function attachImageFallback(root) {
    root.querySelectorAll('img[data-package-image]').forEach(image => {
      const markMissing = () => {
        const parent = image.parentElement;
        image.remove();
        parent?.classList.add('image-placeholder');
      };
      image.addEventListener('error', markMissing, { once: true });
      if (image.complete && !image.naturalWidth) markMissing();
    });
  }

  function renderPackages(filter = 'all') {
    if (!packageGrid) return;
    const list = visiblePackages(filter);
    packageGrid.innerHTML = list.map(packageCard).join('');
    if (packageCount) packageCount.textContent = String(list.length);
    attachImageFallback(packageGrid);
  }

  function findPackage(id) {
    return allPackages.find(pkg => pkg.id === id) || null;
  }

  packageGrid?.addEventListener('click', event => {
    const button = event.target.closest('[data-package-enquire-id]');
    if (!button || !enquiryBridge) return;

    const pkg = findPackage(button.dataset.packageEnquireId);
    if (!pkg) return;

    enquiryBridge.dataset.service = 'Tour package';
    enquiryBridge.dataset.selection = `${pkg.title} — ${pkg.duration}`;
    enquiryBridge.dataset.destination = pkg.title;
    enquiryBridge.click();
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(item => item.classList.toggle('active', item === button));
      renderPackages(button.dataset.packageFilter);
    });
  });

  function scrollToHashPackage() {
    const id = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!id || !findPackage(id)) return;
    renderPackages('all');
    filterButtons.forEach(button => button.classList.toggle('active', button.dataset.packageFilter === 'all'));
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target?.classList.add('package-highlight');
      setTimeout(() => target?.classList.remove('package-highlight'), 1800);
    });
  }

  renderPackages('all');
  scrollToHashPackage();
})();
