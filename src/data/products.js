// ===============================
// Diamond Circular Saw Blades Images
// ===============================

// Supreme Series
import supreme10 from "../assets/products/diamond/supreme/10 inch.jpg";
import supreme14 from "../assets/products/diamond/supreme/14 inch.jpg";
import supreme18 from "../assets/products/diamond/supreme/18 inch.jpg";
import supreme20 from "../assets/products/diamond/supreme/20 inch.jpg";
import supreme22 from "../assets/products/diamond/supreme/22 inch.jpg";
import supreme24 from "../assets/products/diamond/supreme/24 inch.jpg";
import supreme26 from "../assets/products/diamond/supreme/26 inch.jpg";

// Ultra Fast Series
import ultra14 from "../assets/products/diamond/ultra-fast/14-inch.jpg";
import ultra16 from "../assets/products/diamond/ultra-fast/16-inch.jpg";
import ultra20 from "../assets/products/diamond/ultra-fast/20-inch.jpg";

// ===============================
// Other Product Cover Images
// ===============================

import laserCover from "../assets/products/laser/cover.jpg";
import polishingBuffCover from "../assets/products/polishing-buff/cover.jpg";
import segmentsCover from "../assets/products/segments/cover.jpg";
import smallBladeCover from "../assets/products/small-blades/4-inch granite1.jpg";

const products = {
  diamondCircularSawBlades: {
    id: "diamond-circular-saw-blades",

    name: "Diamond Circular Saw Blades",

    description:
      "Premium industrial diamond circular saw blades engineered for granite, marble and hard stone cutting.",

    heroImage: supreme20,

    series: {
      supreme: {
        title: "Supreme",

        description:
          "Premium long-life blades designed for continuous industrial cutting.",

        sizes: {
          '10"': {
            image: supreme10,
            outerDiameter: "250 mm",
            innerDiameter: "50 mm",
            segmentWidth: "40 mm",
            segmentThickness: "3.0 mm",
            segmentHeight: "12 mm",
            segments: "21",
            coreThickness: "2.2 mm",
          },

          '14"': {
            image: supreme14,
            outerDiameter: "350 mm",
            innerDiameter: "50 mm",
            segmentWidth: "40 mm",
            segmentThickness: "3.2 mm",
            segmentHeight: "12 mm",
            segments: "32",
            coreThickness: "2.4 mm",
          },

          '18"': {
            image: supreme18,
            outerDiameter: "450 mm",
            innerDiameter: "50 mm",
            segmentWidth: "40 mm",
            segmentThickness: "3.8 mm",
            segmentHeight: "14 mm",
            segments: "42",
            coreThickness: "3.2 mm",
          },

          '20"': {
            image: supreme20,
            outerDiameter: "500 mm",
            innerDiameter: "50 / 60 mm",
            segmentWidth: "40 mm",
            segmentThickness: "4.2 mm",
            segmentHeight: "14 mm",
            segments: "46",
            coreThickness: "3.6 mm",
          },

          '22"': {
            image: supreme22,
            outerDiameter: "550 mm",
            innerDiameter: "50 / 60 mm",
            segmentWidth: "40 mm",
            segmentThickness: "4.5 mm",
            segmentHeight: "14 mm",
            segments: "50",
            coreThickness: "4.0 mm",
          },

          '24"': {
            image: supreme24,
            outerDiameter: "600 mm",
            innerDiameter: "50 / 60 mm",
            segmentWidth: "40 mm",
            segmentThickness: "4.8 mm",
            segmentHeight: "14 mm",
            segments: "56",
            coreThickness: "4.2 mm",
          },

          '26"': {
            image: supreme26,
            outerDiameter: "650 mm",
            innerDiameter: "50 / 60 mm",
            segmentWidth: "40 mm",
            segmentThickness: "5.2 mm",
            segmentHeight: "14 mm",
            segments: "60",
            coreThickness: "4.6 mm",
          },
        },
      },

      ultraFast: {
        title: "Ultra Fast",

        description:
          "High-speed cutting blades designed for maximum productivity.",

        sizes: {
          '14"': {
            image: ultra14,
            outerDiameter: "350 mm",
            innerDiameter: "50 mm",
            segmentWidth: "40 mm",
            segmentThickness: "3.2 mm",
            segmentHeight: "12 mm",
            segments: "32",
            coreThickness: "2.4 mm",
          },

          '16"': {
            image: ultra16,
            outerDiameter: "400 mm",
            innerDiameter: "50 mm",
            segmentWidth: "40 mm",
            segmentThickness: "3.6 mm",
            segmentHeight: "14 mm",
            segments: "38",
            coreThickness: "2.8 mm",
          },

          '20"': {
            image: ultra20,
            outerDiameter: "500 mm",
            innerDiameter: "50 / 60 mm",
            segmentWidth: "40 mm",
            segmentThickness: "4.2 mm",
            segmentHeight: "14 mm",
            segments: "46",
            coreThickness: "3.6 mm",
          },
        },
      },
    },
  },
    laserWeldedTuckPointBlades: {
    id: "laser-welded-tuck-point-blades",

    name: "Laser Welded Tuck Point Blades",

    description:
      "Laser welded tuck point blades designed for cleaning masonry joints with superior cutting performance.",

    heroImage: laserCover,

    series: {
      standard: {
        title: "Standard Series",

        description:
          "Professional tuck point blades suitable for brick, concrete and stone.",

        sizes: {
          '4"': {
            image: laserCover,
            outerDiameter: "100 mm",
            boreSize: "20 mm",
            segmentWidth: "6 mm",
            segmentHeight: "10 mm",
            application: "Masonry Joint Cutting",
          },

          '4.5"': {
            image: laserCover,
            outerDiameter: "115 mm",
            boreSize: "22.23 mm",
            segmentWidth: "6 mm",
            segmentHeight: "10 mm",
            application: "Brick & Concrete",
          },

          '5"': {
            image: laserCover,
            outerDiameter: "125 mm",
            boreSize: "22.23 mm",
            segmentWidth: "6 mm",
            segmentHeight: "10 mm",
            application: "Concrete & Stone",
          },

          '7"': {
            image: laserCover,
            outerDiameter: "180 mm",
            boreSize: "22.23 mm",
            segmentWidth: "6 mm",
            segmentHeight: "10 mm",
            application: "Heavy Duty Masonry",
          },
        },
      },
    },
  },

  granitePolishingBuff: {
    id: "granite-polishing-buff",

    name: "Granite Polishing Buff",

    description:
      "Premium polishing buffs for achieving high-gloss granite and engineered stone finishes.",

    heroImage: polishingBuffCover,

    series: {
      standard: {
        title: "Granite Buff Series",

        description:
          "Available in multiple grit sizes for every stage of polishing.",

        sizes: {
          "36": {
            image: polishingBuffCover,
            grit: "36",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "Heavy Grinding",
          },

          "50": {
            image: polishingBuffCover,
            grit: "50",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "Rough Polishing",
          },

          "100": {
            image: polishingBuffCover,
            grit: "100",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "Medium Polishing",
          },

          "200": {
            image: polishingBuffCover,
            grit: "200",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "Fine Polishing",
          },

          "400": {
            image: polishingBuffCover,
            grit: "400",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "Pre-Finishing",
          },

          "800": {
            image: polishingBuffCover,
            grit: "800",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "High Gloss Finish",
          },

          "1500": {
            image: polishingBuffCover,
            grit: "1500",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "Mirror Finish",
          },

          "3000": {
            image: polishingBuffCover,
            grit: "3000",
            diameter: "100 mm",
            thickness: "10 mm",
            application: "Premium Mirror Finish",
          },
        },
      },
    },
  },
    circularSawBladeSegments: {
    id: "circular-saw-blade-segments",

    name: "Circular Saw Blade Segments",

    description:
      "Premium quality diamond circular saw blade segments manufactured for granite, marble, sandstone, concrete and other natural stones.",

    heroImage: segmentsCover,

    series: {
      standard: {
        title: "Standard Segments",

        description:
          "Available in multiple dimensions for industrial cutting applications.",

        sizes: {
          "24 mm": {
            image: segmentsCover,
            length: "24 mm",
            width: "3.2 mm",
            height: "10 mm",
            application: "Granite Cutting",
          },

          "40 mm": {
            image: segmentsCover,
            length: "40 mm",
            width: "3.6 mm",
            height: "12 mm",
            application: "Granite & Marble",
          },

          "42 mm": {
            image: segmentsCover,
            length: "42 mm",
            width: "4.0 mm",
            height: "12 mm",
            application: "Stone Cutting",
          },

          "50 mm": {
            image: segmentsCover,
            length: "50 mm",
            width: "4.2 mm",
            height: "12 mm",
            application: "Heavy Duty Granite",
          },

          "60 mm": {
            image: segmentsCover,
            length: "60 mm",
            width: "4.5 mm",
            height: "15 mm",
            application: "Industrial Cutting",
          },
        },
      },
    },
  },

  industrialAbrasives: {
    id: "industrial-abrasives",

    name: "Small Blades",

    description:
      "Compact diamond blades specially designed for granite, ceramic, vitrified tiles and other hard materials.",

    heroImage: smallBladeCover,

    series: {
      granite: {
        title: "Granite Blades",

        sizes: {
          '4"': {
            image: smallBladeCover,
            size: '4"',
            application: "Granite Cutting",
          },

          '5"': {
            image: smallBladeCover,
            size: '5"',
            application: "Granite Cutting",
          },

          '7"': {
            image: smallBladeCover,
            size: '7"',
            application: "Granite Cutting",
          },
        },
      },

      tile: {
        title: "Tile Blades",

        sizes: {
          '4"': {
            image: smallBladeCover,
            size: '4"',
            application: "Tile Cutting",
          },

          '5"': {
            image: smallBladeCover,
            size: '5"',
            application: "Tile Cutting",
          },

          '7"': {
            image: smallBladeCover,
            size: '7"',
            application: "Ceramic & Tile Cutting",
          },
        },
      },
    },
  },
};

export default products;