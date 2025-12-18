gsap.registerPlugin(ScrollTrigger);

/* =========================================
   LOADER – 3 PNGs → MAIN LOGO → FADE OUT (NO MOVEMENT)
========================================== */
window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(".loader-layer1",
      { opacity: 0, rotate: -180, scale: 0.4 },
      { opacity: 1, rotate: 0, scale: 1, duration: 1 }
    )
    .fromTo(".loader-layer2",
      { opacity: 0, x: -120 },
      { opacity: 1, x: 0, duration: 1.2 },
      "-=0.35"
    )
    .fromTo(".loader-layer3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 },
      "-=0.25"
    )

    /* FAST fade PNG layers → show main logo */
    .to(".loader-logo img", { opacity: 0, duration: 0.3 })
    .set(".loader-logo", {
      backgroundImage: "url('img/1.png')",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    })

    /* FADE OUT LOADER QUICKLY – NO MOVE ANIMATION */
    .to(".loader", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        document.querySelector(".loader").style.display = "none";
        document.body.style.overflow = "auto";
      }
    })

    /* Show website */
    .fromTo(".main-content",
      { opacity: 0, filter: "blur(10px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.7 },
      "-=0.3"
    )

    /* Navbar fade-in */
    .from(".navbar", {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: "power1.out"
    });
});
/* Close mobile menu on link click */
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navBar");
    const bsCollapse = bootstrap.Collapse.getInstance(nav);
    if (bsCollapse) bsCollapse.hide();
  });
});


/* =========================================
   CURSOR GLOW
========================================== */
const cursorGlow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  gsap.to(cursorGlow, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
    ease: "power2.out"
  });
});

/* =========================================
   MAGNETIC BUTTONS
========================================== */
document.querySelectorAll(".magnet").forEach((btn) => {
  const strength = 0.35;
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(btn, {
      x: x * strength,
      y: y * strength,
      duration: 0.25,
      ease: "power2.out"
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

/* =========================================
   SCROLL ANIMATIONS
========================================== */
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(
    section.querySelectorAll(".section-title, .section-subtitle, .glass-card, .process-step, .faq-item"),
    {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out"
    }
  );
});

/* =========================================
   HERO PARALLAX (Orbit)
========================================== */
gsap.to(".hero-orbit", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  rotate: 25,
  scale: 1.1
});

/* =========================================
   FAQ DROPDOWN
========================================== */
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-question");
  const a = item.querySelector(".faq-answer");

  q.addEventListener("click", () => {
    const open = a.classList.contains("open");
    document.querySelectorAll(".faq-answer").forEach(e => e.classList.remove("open"));
    if (!open) a.classList.add("open");
  });
});

/* =========================================
   BOTTOM SIMPLE QUOTE FORM → WhatsApp
========================================== */
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    let text = `Hi SOT Travels,%0A%0AI am ${name}.%0A%0AService required: ${service}.%0APhone: ${phone}`;
    if (email) text += `%0AEmail: ${email}`;
    if (message) text += `%0A%0ATrip details: ${message}`;

    window.open(`https://wa.me/919488840240?text=${text}`, "_blank");
  });
}

/* =========================================
   TRIP TYPE TABS (Round vs Drop)
========================================== */
const tripTabs = document.querySelectorAll(".pkg-tab");
const tripTypeInput = document.getElementById("tripType");
const dropDateGroup = document.getElementById("dropDateGroup");
const dropTimeGroup = document.getElementById("dropTimeGroup");
const accomGroup = document.getElementById("accomGroup");

tripTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tripTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const type = tab.dataset.trip;
    tripTypeInput.value = type;

    if (type === "drop") {
      // Hide fields/controls for drop trip
      if (dropDateGroup) dropDateGroup.style.display = "none";
      if (dropTimeGroup) dropTimeGroup.style.display = "none";
      if (accomGroup) accomGroup.style.display = "none";
    } else {
      // Show for round trip
      if (dropDateGroup) dropDateGroup.style.display = "block";
      if (dropTimeGroup) dropTimeGroup.style.display = "block";
      if (accomGroup) accomGroup.style.display = "flex";
    }
  });
});

/* =========================================
   ACCOMMODATION TOGGLE LABEL
========================================== */
const accomCheckbox = document.getElementById("accom");
const accomLabel = document.getElementById("accomLabel");
if (accomCheckbox && accomLabel) {
  accomCheckbox.addEventListener("change", (e) => {
    accomLabel.innerText = e.target.checked ? "Yes" : "No";
  });
}

/* =========================================
   TOP BOOKING FORM → WhatsApp
========================================== */
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      trip: document.getElementById("tripType").value,
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      pickup: document.getElementById("pickup").value.trim(),
      drop: document.getElementById("drop").value.trim(),
      intermediate: document.getElementById("intermediate").value.trim(),
      pickupDate: document.getElementById("pickupDate").value,
      pickupTime: document.getElementById("pickupTime").value,
      dropDate: document.getElementById("dropDate").value,
      dropTime: document.getElementById("dropTime").value,
      vehicle: document.getElementById("vehicle").value,
      passengers: document.getElementById("passengers").value,
      accom: accomCheckbox && accomCheckbox.checked ? "Yes" : "No",
      extra: document.getElementById("additional").value.trim()
    };

    let text =
      `*New Booking Enquiry*\n\n` +
      `Trip Type: ${data.trip}\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n\n` +
      `Pickup: ${data.pickup}\n` +
      `Drop: ${data.drop}\n` +
      (data.intermediate ? `Intermediate: ${data.intermediate}\n` : "") +
      `Pickup Date: ${data.pickupDate} ${data.pickupTime}\n` +
      (data.trip === "round" && data.dropDate ? `Drop Date: ${data.dropDate} ${data.dropTime}\n` : "") +
      `Vehicle: ${data.vehicle}\n` +
      `Passengers: ${data.passengers}\n` +
      (data.trip === "round" ? `Accommodation: ${data.accom}\n` : "") +
      (data.extra ? `\nNotes: ${data.extra}` : "");

    window.open(`https://wa.me/919488840240?text=${encodeURIComponent(text)}`, "_blank");
  });
}



gsap.to(".float-cta .cta-btn", {
  y: -5,
  repeat: -1,
  yoyo: true,
  duration: 1.4,
  ease: "power1.inOut",
  stagger: 0.25
});

/* PAGE TRANSITION FADE-IN */
gsap.from("body", { opacity: 0, duration: 0.5 });

/* PAGE TRANSITION FADE-OUT ON LINK CLICK */
document.querySelectorAll("a.nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    const url = link.getAttribute("href");
    if (!url.startsWith("#")) {
      e.preventDefault();
      gsap.to("body", { opacity: 0, duration: 0.4, onComplete: () => {
        window.location.href = url;
      }});
    }
  });
});
