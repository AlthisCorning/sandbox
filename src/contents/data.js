let filters = [
    {
        filterName: "Family",
        children:["Edge","Edge8","Plug&Play"]
    },
    {
        filterName: "Fiber Type",
        children:["OM3","OM4","OM5","OS2"]
    },
    {
        filterName: "Fiber Count",
        children:["8","16","32","64"]
    },
    {
        filterName: "Product Type",
        children:["Trunks", "Patch Cords", "Adapter Modules"]
    }
]

let tokenMappings = {
  "trunks": {field: "productType",
            value: "trunk"},
  "trunk": {field: "productType",
            value: "trunk"},
  "housings": {field: "productType",
              value: 'housings'},
  "housing": {field: "productType",
              value: 'housings'},
  "patch": {field: "productType",
             value: "patch-cords"},
  "cord": {field: "productType",
             value: "patch-cords"},
  "cords": {field: "productType",
            value: "patch-cords"},
  "harness": {field: "productType",
              value: "harnesses"},
  "harnesses": {field: "productType",
                value: "harnesses"},
  "edge": {field: "productFamily",
          value: "edge"},
  "edge8": {field: "productFamily",
            value: "edge8"},
  "single-mode": {field: "fiberType",
                  value: "os2"},
  "singlemode": {field: "fiberType",
                 value: "os2"},
  "jumpers": {field: "productType",
                 value: "patch-cords"},
  "om3": {field: "fiberType",
                 value: "om3"},
  "multi-mode3": {field: "fiberType",
                 value: "om3"},
  "multi-mode4": {field: "fiberType",
                 value: "om4"},
  "om4": {field: "fiberType",
                 value: "om4"},
  "om5": {field: "fiberType",
                 value: "om5"},
                 
  "multi-mode5": {field: "fiberType",
  value: "om5"},
  "jumper": {field: "productType",
             value:"patch-cords"}
}

let products = [
    {
      name: "Test Trunk1",
      partNumber: "1337HACKZOR3L337",
      productType: "trunk",
      productFamily: "edge8",
      fiberType: 'os2',
      description: "The last bit of fun Lucas will have before the official version"
    },
    {
      name: "Test Trunk2",
      partNumber: "SOMEPARTNUMBER",
      productType: "trunk",
      productFamily: "edge",
      fiberType: 'os2',
      description: "This type of fun shenanningans sure will be missed"
    },
    {
      name: "Test Trunk3",
      partNumber: "THEMISSINGNUMBER",
      productType: "trunk",
      productFamily: "edge8",
      fiberType: 'om5',
      description: "These violent means will surely have violent ends"
    },
    {
      name: "Test Patch1",
      partNumber: "80085PLZ",
      productType: "patch-cords",
      productFamily: "edge8",
      fiberType: 'om4',
      description: "Patch cords, two ends, flexible body, glass technology, rating: pretty neat"
    },
    {
      name: "Test Patch2",
      partNumber: "3DATK9000",
      productType: "patch-cords",
      productFamily: "edge",
      fiberType: 'om4',
      description: "The patchiest pack of cord you can ever parse. Over 9000 meters long. Good for maritime connections, blub blub"
    },
    {
      name: "Test Patch3",
      partNumber: "WRLD1SN0T",
      productType: "patch-cords",
      productFamily: "plug&play",
      fiberType: 'om2',
      description: "Arson-proof, no smoking allowed. Capable of fast sharing of memes. Ignoble at best."
    },
    {
      name: "Test Module1",
      partNumber: "V3k420",
      productType: "modules",
      productFamily: "plug&play",
      fiberType: 'om2',
      description: "OM3, 1 to 300 meters, available in blue, light blue, red, cyan"
    },
    {
      name: "Test Module2",
      partNumber: "HAL-9000",
      productType: "modules",
      productFamily: "edge",
      fiberType: 'om3',
      description: "Wants to take over the world, rated for space travel, available in red & black"
    },
    {
      name: "Test Module3",
      partNumber: "1NH3R1T4NC3",
      productType: "modules",
      productFamily: "edge8",
      fiberType: 'om3',
      description: "OM1, no pulling grip(duh!), pre-terminated, other jargon words"
    },
    {
      name: "Test Harness1",
      partNumber: "456029405FEED",
      productType: "harnesses",
      productFamily: "edge",
      description: "Now the last bit of fun for real"
    }
  ];
  
  export function getProducts() {
    return products;
  }

  export function getFilters(){
      return filters;
  }

  export function getFilterByName(name){
      return filters.find(
          filter => filter.filterName === name
      );
  }

  export function addProduct(number) {
    products = products.filter(
      product => product.number !== number
    );
  }

  export default function getTokenMappings(){
    return tokenMappings;
  };