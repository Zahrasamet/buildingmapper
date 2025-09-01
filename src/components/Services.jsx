
const serviceData = [
  {
    name: "construction",
    icon: <PiRallFill />,
    title: "Construction Services",
    description: `We build with precision and innovation, ensuring that every structure is strong,
    reliable, and built to last. From foundations to finishing touches, our expertise
    transforms ideas into reality.`,
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish"
    ],
    thembs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" }
    ]
  },

  {
    name: "renovation",
    icon: <PiPaintRollerFill/>,
    title: "Renovation Services",
    description: `Revitalizing space with modern design and high-quality craftsmanship.
    Whathar uppreding a home or remodeling an office,  we bring fresh life to every project `,
    serviceList: [
      "Kitchen Remodeling",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      'Carpentry',
      "Painting"
    ],
    thembs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" }
    ]
  },

   {
    name: "restoration",
    icon: <PiWrenchFill/>,
    title: "Renovation Services",
    description:  `Bringing donaged or aging structures back to life. We specialize in restoring
    historical landmarks, firm-damaged buildings, and water-domoged propertion with meticulous care`,
    serviceList: [
      "Historic Restore",
      "Water Danage",
      "Firm Repair",
      "Structural Fix",
      'Mold Removal',
      "Roof Restre"
    ],
    thembs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" }
    ]
  },

     {
    name: "consulting",
    icon: <PiUserGearFill/>,
    title: "Consulting Services",
    description:  `Providing export guidance for construction and renovation project from planning and budgeting
    to complince and sustainability, our consulting service ensure project success `,
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      'Sustainability',
      "Safety"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" }
    ]
  },
];

function Services() {
  return (
    <div className='h-screen bg-green-200' id='services'>Services</div>
  )
}

export default Services