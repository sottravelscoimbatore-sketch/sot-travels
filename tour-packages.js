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
        "id": "coonoor",
        "title": "Coonoor",
        "duration": "1 Day",
        "image": "images/destinations/coonoor.webp",
        "pilgrim": false
      },
      {
        "id": "kotagiri",
        "title": "Kotagiri",
        "duration": "1 Day",
        "image": "images/destinations/kotagiri.webp",
        "pilgrim": false
      },
      {
        "id": "pollachi-aliyar-monkey-falls",
        "title": "Pollachi + Aliyar Dam + Monkey Falls",
        "duration": "1 Day",
        "image": "images/destinations/aliyar.webp",
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
        "id": "valparai",
        "title": "Valparai",
        "duration": "1 Day",
        "image": "images/destinations/valparai.webp",
        "pilgrim": false
      },
      {
        "id": "parambikulam",
        "title": "Parambikulam",
        "duration": "1 Day",
        "image": "images/destinations/parambikulam.webp",
        "pilgrim": false
      },
      {
        "id": "nelliyampathy",
        "title": "Nelliyampathy",
        "duration": "1 Day",
        "image": "images/destinations/nelliyampathy.webp",
        "pilgrim": false
      },
      {
        "id": "athirapally",
        "title": "Athirapally",
        "duration": "1 Day",
        "image": "images/destinations/athirapally.webp",
        "pilgrim": false
      },
      {
        "id": "hogenakkal",
        "title": "Hogenakkal",
        "duration": "1 Day",
        "image": "images/destinations/hogenakkal.webp",
        "pilgrim": false
      },
      {
        "id": "palani",
        "title": "Palani",
        "duration": "1 Day",
        "image": "images/destinations/palani.webp",
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
        "id": "guruvayur-thrissur",
        "title": "Guruvayur + Thrissur",
        "duration": "1 Day",
        "image": "images/destinations/thrissur.webp",
        "pilgrim": true
      },
      {
        "id": "madurai",
        "title": "Madurai",
        "duration": "1 Day",
        "image": "images/destinations/madurai.webp",
        "pilgrim": true
      },
      {
        "id": "trichy-srirangam",
        "title": "Trichy + Srirangam",
        "duration": "1 Day",
        "image": "images/destinations/srirangam.webp",
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
        "id": "ooty-coonoor-2d",
        "title": "Ooty + Coonoor",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/coonoor.webp",
        "pilgrim": false
      },
      {
        "id": "ooty-kotagiri-2d",
        "title": "Ooty + Kotagiri",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/kotagiri.webp",
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
        "id": "pollachi-valparai-2d",
        "title": "Pollachi + Valparai",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/Aliyar.webp",
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
        "id": "yercaud-2d",
        "title": "Yercaud",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/yercaud.webp",
        "pilgrim": false
      },
      {
        "id": "kolli-hills-2d",
        "title": "Kolli Hills",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/kolli-hills.webp",
        "pilgrim": false
      },
      {
        "id": "yelagiri-2d",
        "title": "Yelagiri",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/yelagiri.webp",
        "pilgrim": false
      },
      {
        "id": "hogenakkal-2d",
        "title": "Hogenakkal",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/hogenakkal.webp",
        "pilgrim": false
      },
      {
        "id": "madurai-2d",
        "title": "Madurai",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/madurai.webp",
        "pilgrim": true
      },
      {
        "id": "madurai-palani-2d",
        "title": "Madurai + Palani",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/palani.webp",
        "pilgrim": true
      },
      {
        "id": "trichy-srirangam-2d",
        "title": "Trichy + Srirangam",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/trichy.webp",
        "pilgrim": true
      },
      {
        "id": "trichy-thanjavur-2d",
        "title": "Trichy + Thanjavur",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/thanjavur.webp",
        "pilgrim": true
      },
      {
        "id": "malampuzha-guruvayur-2d",
        "title": "Malampuzha Dam + Guruvayur",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/guruvayur.webp",
        "pilgrim": true
      },
      {
        "id": "sabarimala-2d",
        "title": "Sabarimala",
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
      },
      {
        "id": "munnar-2d",
        "title": "Munnar",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/munnar.webp",
        "pilgrim": false
      },
      {
        "id": "thekkady-2d",
        "title": "Thekkady",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/thekkady.webp",
        "pilgrim": false
      },
      {
        "id": "vagamon-2d",
        "title": "Vagamon",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/vagamon.webp",
        "pilgrim": false
      },
      {
        "id": "athirapally-guruvayur-2d",
        "title": "Athirapally + Guruvayur",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/athirapally.webp",
        "pilgrim": true
      },
      {
        "id": "mysore-2d",
        "title": "Mysore",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/mysore.webp",
        "pilgrim": false
      },
      {
        "id": "mysore-bandipur-2d",
        "title": "Mysore + Bandipur",
        "duration": "2 Days / 1 Night",
        "image": "images/destinations/bandipur.webp",
        "pilgrim": false
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
        "id": "ooty-coonoor-kotagiri-3d",
        "title": "Ooty + Coonoor + Kotagiri",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/coonoor.webp",
        "pilgrim": false
      },
      {
        "id": "ooty-bandipur-3d",
        "title": "Ooty + Bandipur",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/bandipur.webp",
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
        "id": "kodaikanal-madurai-3d",
        "title": "Kodaikanal + Madurai",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/madurai.webp",
        "pilgrim": false
      },
      {
        "id": "yercaud-hogenakkal-3d",
        "title": "Yercaud + Hogenakkal",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/yercaud.webp",
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
        "id": "munnar-thekkady-3d",
        "title": "Munnar + Thekkady",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/thekkady.webp",
        "pilgrim": false
      },
      {
        "id": "munnar-athirapally-3d",
        "title": "Munnar + Athirapally",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/athirapally.webp",
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
        "id": "wayanad-kozhikode-3d",
        "title": "Wayanad + Kozhikode",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/kozhikode.webp",
        "pilgrim": false
      },
      {
        "id": "valparai-athirapally-3d",
        "title": "Valparai + Athirapally",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/athirapally.webp",
        "pilgrim": false
      },
      {
        "id": "kochi-athirapally-3d",
        "title": "Kochi + Athirapally",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/kochi.webp",
        "pilgrim": false
      },
      {
        "id": "kochi-alleppey-3d",
        "title": "Kochi + Alleppey",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/alleppey.webp",
        "pilgrim": false
      },
      {
        "id": "vagamon-thekkady-3d",
        "title": "Vagamon + Thekkady",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/vagamon.webp",
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
        "id": "mysore-bandipur-kabini-3d",
        "title": "Mysore + Bandipur + Kabini",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/kabini.webp",
        "pilgrim": false
      },
      {
        "id": "coorg-nagarhole-3d",
        "title": "Coorg + Nagarhole",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/nagarhole.webp",
        "pilgrim": false
      },
      {
        "id": "chikmagalur-belur-halebidu-3d",
        "title": "Chikmagalur + Belur + Halebidu",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/chikmagalur.webp",
        "pilgrim": false
      },
      {
        "id": "sakleshpur-belur-halebidu-3d",
        "title": "Sakleshpur + Belur + Halebidu",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/sakleshpur.webp",
        "pilgrim": false
      },
      {
        "id": "bangalore-mysore-3d",
        "title": "Bangalore + Mysore",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/bangalore.webp",
        "pilgrim": false
      },
      {
        "id": "dharmasthala-kukke-sringeri-3d",
        "title": "Dharmasthala + Kukke Subramanya + Sringeri",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/dharmasthala.webp",
        "pilgrim": true
      },
      {
        "id": "madurai-rameshwaram-dhanushkodi-3d",
        "title": "Madurai + Rameshwaram + Dhanushkodi",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/dhanushkodi.webp",
        "pilgrim": true
      },
      {
        "id": "trichy-thanjavur-kumbakonam-3d",
        "title": "Trichy + Thanjavur + Kumbakonam",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/kumbakonam.webp",
        "pilgrim": true
      },
      {
        "id": "pondicherry-mahabalipuram-3d",
        "title": "Pondicherry + Mahabalipuram",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/pondicherry.webp",
        "pilgrim": false
      },
      {
        "id": "courtallam-tirunelveli-kanyakumari-3d",
        "title": "Courtallam + Tirunelveli + Kanyakumari",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/kanyakumari.webp",
        "pilgrim": false
      },
      {
        "id": "velankanni-nagore-thanjavur-3d",
        "title": "Velankanni + Nagore + Thanjavur",
        "duration": "3 Days / 2 Nights",
        "image": "images/destinations/velankanni.webp",
        "pilgrim": true
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
        "id": "ooty-mysore-bandipur-4d",
        "title": "Ooty + Mysore + Bandipur",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/bandipur.webp",
        "pilgrim": false
      },
      {
        "id": "ooty-wayanad-4d",
        "title": "Ooty + Wayanad",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/wayanad.webp",
        "pilgrim": false
      },
      {
        "id": "ooty-coonoor-mysore-4d",
        "title": "Ooty + Coonoor + Mysore",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/coonoor.webp",
        "pilgrim": false
      },
      {
        "id": "yercaud-kolli-hills-4d",
        "title": "Yercaud + Kolli Hills",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kolli-hills.webp",
        "pilgrim": false
      },
      {
        "id": "yercaud-hogenakkal-4d",
        "title": "Yercaud + Hogenakkal",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/hogenakkal.webp",
        "pilgrim": false
      },
      {
        "id": "kodaikanal-madurai-4d",
        "title": "Kodaikanal + Madurai",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/madurai.webp",
        "pilgrim": false
      },
      {
        "id": "kodaikanal-palani-4d",
        "title": "Kodaikanal + Palani",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/palani.webp",
        "pilgrim": true
      },
      {
        "id": "meghamalai-theni-suruli-falls-4d",
        "title": "Meghamalai + Theni + Suruli Falls",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/meghamalai.webp",
        "pilgrim": false
      },
      {
        "id": "madurai-rameshwaram-dhanushkodi-4d",
        "title": "Madurai + Rameshwaram + Dhanushkodi",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/dhanushkodi.webp",
        "pilgrim": true
      },
      {
        "id": "madurai-rameshwaram-kanyakumari-4d",
        "title": "Madurai + Rameshwaram + Kanyakumari",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kanyakumari.webp",
        "pilgrim": true
      },
      {
        "id": "courtallam-tirunelveli-kanyakumari-4d",
        "title": "Courtallam + Tirunelveli + Kanyakumari",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/courtallam.webp",
        "pilgrim": false
      },
      {
        "id": "trichy-srirangam-thanjavur-kumbakonam-4d",
        "title": "Trichy + Srirangam + Thanjavur + Kumbakonam",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/thanjavur.webp",
        "pilgrim": true
      },
      {
        "id": "kumbakonam-darasuram-chidambaram-4d",
        "title": "Kumbakonam + Darasuram + Chidambaram",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/darasuram.webp",
        "pilgrim": true
      },
      {
        "id": "thanjavur-velankanni-nagore-4d",
        "title": "Thanjavur + Velankanni + Nagore",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/velankanni.webp",
        "pilgrim": true
      },
      {
        "id": "pondicherry-mahabalipuram-chennai-4d",
        "title": "Pondicherry + Mahabalipuram + Chennai",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/pondicherry.webp",
        "pilgrim": false
      },
      {
        "id": "chennai-mahabalipuram-kanchipuram-4d",
        "title": "Chennai + Mahabalipuram + Kanchipuram",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/mahabalipuram.webp",
        "pilgrim": false
      },
      {
        "id": "vellore-sripuram-thiruvannamalai-4d",
        "title": "Vellore + Sripuram + Thiruvannamalai",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/sripuram-golden-temple.webp",
        "pilgrim": true
      },
      {
        "id": "karaikudi-chettinad-madurai-4d",
        "title": "Karaikudi + Chettinad + Madurai",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/chettinad.webp",
        "pilgrim": false
      },
      {
        "id": "munnar-4d",
        "title": "Munnar",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/munnar.webp",
        "pilgrim": false
      },
      {
        "id": "munnar-thekkady-4d",
        "title": "Munnar + Thekkady",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/thekkady.webp",
        "pilgrim": false
      },
      {
        "id": "munnar-athirapally-4d",
        "title": "Munnar + Athirapally",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/athirapally.webp",
        "pilgrim": false
      },
      {
        "id": "munnar-kochi-4d",
        "title": "Munnar + Kochi",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kochi.webp",
        "pilgrim": false
      },
      {
        "id": "munnar-vagamon-4d",
        "title": "Munnar + Vagamon",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/vagamon.webp",
        "pilgrim": false
      },
      {
        "id": "kochi-fort-kochi-alleppey-4d",
        "title": "Kochi + Fort Kochi + Alleppey",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/fort-kochi.webp",
        "pilgrim": false
      },
      {
        "id": "kochi-alleppey-kumarakom-4d",
        "title": "Kochi + Alleppey + Kumarakom",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/alleppey.webp",
        "pilgrim": false
      },
      {
        "id": "athirapally-kochi-alleppey-4d",
        "title": "Athirapally + Kochi + Alleppey",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/athirapally.webp",
        "pilgrim": false
      },
      {
        "id": "vagamon-thekkady-4d",
        "title": "Vagamon + Thekkady",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/vagamon.webp",
        "pilgrim": false
      },
      {
        "id": "idukki-ramakkalmedu-thekkady-4d",
        "title": "Idukki + Ramakkalmedu + Thekkady",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/ramakkalmedu.webp",
        "pilgrim": false
      },
      {
        "id": "varkala-kovalam-thiruvananthapuram-4d",
        "title": "Varkala + Kovalam + Thiruvananthapuram",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/varkala.webp",
        "pilgrim": false
      },
      {
        "id": "thenmala-palaruvi-kollam-munroe-island-4d",
        "title": "Thenmala + Palaruvi + Kollam + Munroe Island",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/munroe-island.webp",
        "pilgrim": false
      },
      {
        "id": "guruvayur-thrissur-athirapally-kochi-4d",
        "title": "Guruvayur + Thrissur + Athirapally + Kochi",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/guruvayur.webp",
        "pilgrim": true
      },
      {
        "id": "kozhikode-kappad-kannur-4d",
        "title": "Kozhikode + Kappad + Kannur",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kappad.webp",
        "pilgrim": false
      },
      {
        "id": "kannur-bekal-kasaragod-4d",
        "title": "Kannur + Bekal + Kasaragod",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/bekal.webp",
        "pilgrim": false
      },
      {
        "id": "mysore-coorg-4d",
        "title": "Mysore + Coorg",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/coorg.webp",
        "pilgrim": false
      },
      {
        "id": "mysore-bandipur-kabini-4d",
        "title": "Mysore + Bandipur + Kabini",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kabini.webp",
        "pilgrim": false
      },
      {
        "id": "mysore-nagarhole-kabini-4d",
        "title": "Mysore + Nagarhole + Kabini",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/nagarhole.webp",
        "pilgrim": false
      },
      {
        "id": "coorg-nagarhole-kabini-4d",
        "title": "Coorg + Nagarhole + Kabini",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kabini.webp",
        "pilgrim": false
      },
      {
        "id": "coorg-chikmagalur-4d",
        "title": "Coorg + Chikmagalur",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/chikmagalur.webp",
        "pilgrim": false
      },
      {
        "id": "coorg-wayanad-4d",
        "title": "Coorg + Wayanad",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/coorg.webp",
        "pilgrim": false
      },
      {
        "id": "chikmagalur-belur-halebidu-4d",
        "title": "Chikmagalur + Belur + Halebidu",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/belur.webp",
        "pilgrim": false
      },
      {
        "id": "chikmagalur-sringeri-horanadu-4d",
        "title": "Chikmagalur + Sringeri + Horanadu",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/horanadu.webp",
        "pilgrim": true
      },
      {
        "id": "sakleshpur-belur-halebidu-4d",
        "title": "Sakleshpur + Belur + Halebidu",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/sakleshpur.webp",
        "pilgrim": false
      },
      {
        "id": "bangalore-mysore-4d",
        "title": "Bangalore + Mysore",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/bangalore.webp",
        "pilgrim": false
      },
      {
        "id": "mangalore-udupi-murudeshwar-4d",
        "title": "Mangalore + Udupi + Murudeshwar",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/murudeshwar.webp",
        "pilgrim": true
      },
      {
        "id": "dharmasthala-kukke-sringeri-4d",
        "title": "Dharmasthala + Kukke Subramanya + Sringeri",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kukke-subramanya.webp",
        "pilgrim": true
      },
      {
        "id": "valparai-athirapally-guruvayur-4d",
        "title": "Valparai + Athirapally + Guruvayur",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/athirapally.webp",
        "pilgrim": true
      },
      {
        "id": "pollachi-parambikulam-valparai-4d",
        "title": "Pollachi + Parambikulam + Valparai",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/parambikulam.webp",
        "pilgrim": false
      },
      {
        "id": "madurai-thekkady-munnar-4d",
        "title": "Madurai + Thekkady + Munnar",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/munnar.webp",
        "pilgrim": false
      },
      {
        "id": "kanyakumari-kovalam-thiruvananthapuram-4d",
        "title": "Kanyakumari + Kovalam + Thiruvananthapuram",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/kovalam.webp",
        "pilgrim": false
      },
      {
        "id": "mysore-wayanad-4d",
        "title": "Mysore + Wayanad",
        "duration": "4 Days / 3 Nights",
        "image": "images/destinations/wayanad.webp",
        "pilgrim": false
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
