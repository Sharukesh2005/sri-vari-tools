import diamond from "../assets/products/diamond.jpg";
import laser from "../assets/products/granite.jpg";
import graniteBuff from "../assets/products/marble.jpg";

const products = {
  diamondCircularSawBlades: {
    id: "diamond-circular-saw-blades",

    name: "Diamond Circular Saw Blades",

    description:
      "Diamond Circular Saw Blades designed for precision cutting of granite, marble and other hard stones.",

    image: diamond,

    specifications: {
      '10"': {
        image: diamond,
        outerDiameter: "250 mm",
        innerDiameter: "50 mm",
        segmentWidth: "40 mm",
        segmentThickness: "3.0 mm",
        segmentHeight: "12 mm",
        segments: "21",
        coreThickness: "2.2 mm",
      },

      '12"': {
        image: diamond,
        outerDiameter: "300 mm",
        innerDiameter: "50 mm",
        segmentWidth: "40 mm",
        segmentThickness: "3.0 mm",
        segmentHeight: "12 mm",
        segments: "27",
        coreThickness: "2.2 mm",
      },

      '14"': {
        image: diamond,
        outerDiameter: "350 mm",
        innerDiameter: "50 mm",
        segmentWidth: "40 mm",
        segmentThickness: "3.2 mm",
        segmentHeight: "12 mm",
        segments: "32",
        coreThickness: "2.4 mm",
      },

      '16"': {
        image: diamond,
        outerDiameter: "400 mm",
        innerDiameter: "50 mm",
        segmentWidth: "40 mm",
        segmentThickness: "3.6 mm",
        segmentHeight: "14 mm",
        segments: "38",
        coreThickness: "2.8 mm",
      },

      '18"': {
        image: diamond,
        outerDiameter: "450 mm",
        innerDiameter: "50 mm",
        segmentWidth: "40 mm",
        segmentThickness: "3.8 mm",
        segmentHeight: "14 mm",
        segments: "42",
        coreThickness: "3.2 mm",
      },

      '20"': {
        image: diamond,
        outerDiameter: "500 mm",
        innerDiameter: "50/60 mm",
        segmentWidth: "40 mm",
        segmentThickness: "4.2 mm",
        segmentHeight: "14 mm",
        segments: "46",
        coreThickness: "3.6 mm",
      },

      '24"': {
        image: diamond,
        outerDiameter: "600 mm",
        innerDiameter: "50/60 mm",
        segmentWidth: "40 mm",
        segmentThickness: "4.8 mm",
        segmentHeight: "14 mm",
        segments: "56",
        coreThickness: "4.2 mm",
      },

      '32"': {
        image: diamond,
        outerDiameter: "800 mm",
        innerDiameter: "50/60 mm",
        segmentWidth: "40 mm",
        segmentThickness: "6.0 mm",
        segmentHeight: "14 mm",
        segments: "72",
        coreThickness: "5.2 mm",
      },
    },
  },

  laserWeldedTuckPointBlades: {
    id: "laser-welded-tuck-point-blades",

    name: "Laser Welded Tuck Point Blades",

    description:
      "Laser welded tuck point blades are designed for cutting and cleaning masonry joints with excellent strength, durability and precision.",

    image: laser,

    specifications: {
      '4"': {
        image: laser,
        outerDiameter: "100 mm",
        boreSize: "20 mm",
        segmentWidth: "6 mm",
        segmentHeight: "10 mm",
        application: "Masonry Joint Cutting",
      },

      '4.5"': {
        image: laser,
        outerDiameter: "115 mm",
        boreSize: "22.23 mm",
        segmentWidth: "6 mm",
        segmentHeight: "10 mm",
        application: "Brick & Concrete",
      },

      '5"': {
        image: laser,
        outerDiameter: "125 mm",
        boreSize: "22.23 mm",
        segmentWidth: "6 mm",
        segmentHeight: "10 mm",
        application: "Concrete & Stone",
      },

      '7"': {
        image: laser,
        outerDiameter: "180 mm",
        boreSize: "22.23 mm",
        segmentWidth: "6 mm",
        segmentHeight: "10 mm",
        application: "Heavy Duty Masonry",
      },
    },
  },

  granitePolishingBuff: {
    id: "granite-polishing-buff",

    name: "Granite Polishing Buff",

    description:
      "Granite polishing buffs are designed to deliver a high-gloss finish on granite and engineered stone surfaces with excellent durability and consistent polishing performance.",

    image: graniteBuff,

    specifications: {
      "36": {
        image: graniteBuff,
        grit: "36",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "Heavy Grinding",
      },

      "50": {
        image: graniteBuff,
        grit: "50",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "Rough Polishing",
      },

      "100": {
        image: graniteBuff,
        grit: "100",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "Medium Polishing",
      },

      "200": {
        image: graniteBuff,
        grit: "200",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "Fine Polishing",
      },

      "400": {
        image: graniteBuff,
        grit: "400",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "Pre-Finishing",
      },

      "800": {
        image: graniteBuff,
        grit: "800",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "High Gloss Finish",
      },

      "1500": {
        image: graniteBuff,
        grit: "1500",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "Mirror Finish",
      },

      "3000": {
        image: graniteBuff,
        grit: "3000",
        diameter: "100 mm",
        thickness: "10 mm",
        application: "Premium Mirror Finish",
      },
    },
  },
};

export default products;