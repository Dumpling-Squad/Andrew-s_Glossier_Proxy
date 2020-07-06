const db = require('./index.js');

const arrayOfImgs = [
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1068364300-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-116358930-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-122343741-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-129312842-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183295373-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-185080176-2048x2048.jpg', // lip stick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-186804673-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-683785299-2048x2048.jpg', // lip stick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-88807455-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-897122950-2048x2048.jpg', // lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135727477-2048x2048.jpg', // Lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1211303139-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-122646611-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-559367905-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-618217927-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-640043694-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-730144101-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-730144105-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-730144109-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-98477659-2048x2048.jpg', // lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-867756570-2048x2048.jpg', // eye lashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1029518954-2048x2048.jpg', // eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139672376-2048x2048.jpg', // eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-519069996-2048x2048.jpg', // eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-867756570-2048x2048.jpg', // eye lashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-913898122-2048x2048.jpg', // eye lashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-174670970-2048x2048.jpg', // eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-128485232-2048x2048.jpg', // eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-157425138-2048x2048.jpg', // eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183339656-2048x2048.jpg', // eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135787449-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-155136172-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-157731865-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-171148644-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-172229249-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-548008547-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-839314812-2048x2048.jpg', // Lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-926168448-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-942144576-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-182797917-2048x2048.jpg', // lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139872080-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139872080-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139872080-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183414883-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-548008457-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-56516835-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-699167231-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-841228954-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-90999634-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-173807983-2048x2048.jpg', // nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135753814-2048x2048.jpg', // Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-113708974-2048x2048.jpg', // Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1141068744-2048x2048.jpg', // Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1187320856-2048x2048.jpg', // Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1187320857-2048x2048.jpg', // Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1195863234-2048x2048.jpg', // Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1201635365-2048x2048.jpg', // Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-138049530-2048x2048.jpg', // concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-200416162-001-2048x2048.jpg', // concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-92782825-2048x2048.jpg', // concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-114395499-2048x2048.jpg', // eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1038971684-2048x2048.jpg', // eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1143222753-2048x2048.jpg', // eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-114395499-2048x2048.jpg', // eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1168921228-2048x2048.jpg', // eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183031935-2048x2048.jpg', // eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-458935957-2048x2048.jpg', // eye liner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-520278492-2048x2048.jpg', // eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-870227788-2048x2048.jpg', // eye liner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-632002889-2048x2048.jpg', // eye liner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1059962886-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-106566237-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-488194819-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-56516848-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-653928456-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-91447846-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-953120006-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-96952636-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1129716834-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1132289833-2048x2048.jpg', // brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299838-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299876-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299915-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299963-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176302773-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1183158243-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261576-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261585-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261589-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261591-2048x2048.jpg', // blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-106566218-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135727688-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-114389581-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-471143383-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-529775992-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-591162973-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-670944769-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-73582197-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-926168506-2048x2048.jpg', // Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-960725982-2048x2048.jpg', // mascara

];

const arrayOfTitles = ['Lipstick', 'Lip Gloss', 'Eye Lashes', 'Lotion', 'Nail Polish', 'Concealer', 'Eyeliner', 'Brushes', 'Blender', 'Lash Stick'];

const arrayOfSub = [
  'Sheer matte lipstick • 0.1 oz / 3 g',
  'Cushiony glassy shine • Clear: 0.14 fl oz / 4.2 ml, Red + Holographic: 0.12 fl oz / 3.5 ml • ',
  'Mellow Fibers: For lash follicles.',
  'Buildable hydrating creme • 1.7 fl oz / 50 ml • ',
  'Nail Polish • 3 g',
  'Undetectable, flexible coverage• 0.17 oz / 4.8 g •',
  'Brush point liquid eyeliner• 0.47 ml / 0.01 fl oz •',
  'Bristles that tickle',
  'Comfortable soft blender',
  'Film form mascara• 8.5 g / 0.29 oz •',
];

const arrayOfIngredients = [
  'Wax Matrix: A combination of sunflower and synthetic beeswax that creates a smooth, cushiony texture and feel on lips and protects against bullet breakage. \n\nBlue Agave: Binds water inside lips for comfortable wear. \n\nSafflower Oil: High in linoleic acid, it creates a barrier to prevent moisture loss in lips. \n\nLychee Rose Scent Subtle and fresh.',

  'Gloss-Lock: Technology A mixture of emollients that bind to your lips, so the shine stays put. \n\nConditioning Jojoba oil: Helps the gloss smooth on and spread out evenly—no goopy feeling! \n\nVitamin E Acetate Leaves lips feeling moisturized and cushiony soft.',

  'These lashes are made from actual human hair. They have a clear band and are more comfortable than synthetic lashes. They are also slightly thinner than mink lashes. \n\nThese are a popular alternative to synthetic lashes because they are cheap and widely available. You can purchase a pair of natural human hair lashes here to go along with your lash binder!',

  'Hyaluronic Acid: Gives that cushiony effect through mega hydration. \n\nMushroom Super Hydrator A powerful plant extract that provides deep moisture. \n\nAnti-Redness Complex A soothing mix of tea and honey extracts that quickly and visibly reduces the appearance of redness. \n\nAntioxidant Blend Vitamins A, C, E and radish root.',

  'Glycofilm Pollustop: Key ingredient that helps form a physical film (or matrix) against skin-stressors. \n\nBotanical Blend: Antioxidant-rich extracts of Rosemary Leaf, Echinacea, Sunflower, and Rice Bran soothe and soften. \n\nFermented Coconut Fruit Extract: Optimized with nutrients for thirsty skin, fermented for better absorption. \n\nMeadowfoam Seed Oil: Rich in fatty acids to help lock in moisture.',

  'Beeswax & Microcrystalline Wax: Give concealer a super elastic consistency which allows it to move with your expressions, not stiffen and cake. \n\nAvocado & Jojoba Oil Nourish skin, prevent water loss, and give a natural dewy finish. \n\nCocoa Butter A natural fat full of the good stuff that promotes skin suppleness. \n\nAdaptable Mineral Pigments Merge seamlessly with a wide range of skin tones for natural-looking coverage.',

  '',

  'These brushes are made from actual human hair. They have a clear band and are more comfortable than synthetic lashes. They are also slightly thinner than mink lashes. \n\nThese are a popular alternative to synthetic lashes because they are cheap and widely available. You can purchase a pair of natural human hair lashes here to go along with your lash binder!',

  'Foam',

  'Japanese Fiber Technology: One and two millimeter-long curved fibers hook onto lashes, adding length. Consider these your lash “extensions.” \n\nVegan Biotin: Conditions and strengthens for healthier, softer lashes over time. \n\nNatural Shine Polymers: Enhances the formula’s black pigments so lashes are extra shiny and sleek. \n\nTapered Comb Brush: The tiered bristles and precise tip separate top and bottom lashes at the root, ensuring even application.',
];

const arrayOfUse = [
  'For a subtle wash of color, swipe Generation G onto naked lips once or twice.',
  'Sweep the Lip Gloss wand directly onto your lips for a cushiony, glassy shine.',
  'Glue it to your eyes dude.',
  'Pull a dab out of the bottle and rub it all over those hands',
  'Apply on nails',
  'Warm up Stretch Concealer by gently swirling fingertips over the surface layer of the opened pot, picking up a thin layer of product as you go',
  'To start, shake. Remove the cap, and glide tip along lash line, hugging as close to lashes as possible.',
  'Use the brush to BrushBrushBrush.',
  'Use the blender to BlendBlendBlend',
  'Comb the Lash Slick wand through the lashes from roots to tips.',
];

const arrayOfDescriptions = [
  'A new generation of lipstick',
  'Make your lips pop with a nourishing gloss',
  'The most vibrant lashes to ever grace your face',
  'An ultrarich, buttery moisturizer',
  'Polish that will make your nails PoP',
  'The healthiest concealer you could apply',
  'A highly pigmented gel eyeliner that lasts.',
  'Brush, set, match',
  'Blend with a comfortable grip',
  'Fluffy, instantly groomed lashes',
];

const arrayOfSpecials = [
  'A lip color that gives the look and finish of just-blotted lipstick, without the blo',
  'Fuzzy doe-foot applicator scoops up just the right amount of gloss, giving you instant shine in one swipe',
  'Vibrant lashes that make your eyes pop',
  'A blend of shea and murumuru butters melt right into skin for a sumptuous feel',
  'Have the hands of a model with polish that glows',
  'Control your glow by applying with the precise doe-foot applicator and blend seamlessly onto cheekbones, brow bones, the Cupid’s bow, and eyelids',
  'Waterproof formula doesn’t crease, smudge, tug, or skip when you apply it and lasts up to 12 hours (matte shades last in the waterline for up to 8 hours)',
  'Silky synthetic fibers pick up the exact amount of Wowder you need (never too little, never too much)',
  'The softest blender that gets the job done',
  'Curls and sculpts as it lengthens, creating a natural “baby extension” effect without clumping',
];

const arrayOfKnowledge = [
  'Buildable', 'Cruelty Free', 'Easy', 'Enhancing', 'Hydrating', 'Noncomedogenic', 'Nourishing', 'Purifying', 'Soothing', 'Vegan',
];

const arrayOfIcons = [
  'https://mock-logos.s3-us-west-1.amazonaws.com/buildable.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/cruelty+free.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/easy.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/enhancing.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/hydrating.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/Noncomedogenic.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/nourishing.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/purifying.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/soothing.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/vegan.png',
];

const arrayOfKeyWords = [
  'Lipstick', 'Lip Balm', 'Lashes', 'Lotion', 'Nail Polish', 'Concealer', 'Eyeliner', 'Brushes', 'Blender', 'Mascara', 'Easy', 'Buildable', 'Hydrating', 'Vegan', 'Cruelty Free', 'Enhancing',
  'Soothing', 'Purifying', 'Nourishing', 'Noncomedogenic',
];

const arrayOfPrices = [
  10, 12, 5, 9, 15, 20, 8, 6, 3, 17,
];

const arrayOfShades = [
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch1.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch2.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch3.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch4.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch5.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch6.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch2.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch3.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch4.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch5.jpg',
];

const createData = () => {
  const object = [];
  const object2 = [];
  const array = arrayOfTitles;
  const newTitleArray = [];
  const array2 = arrayOfDescriptions;
  const newDescriptions = [];
  const array3 = arrayOfSpecials;
  const newSpecial = [];
  const array4 = arrayOfSub;
  const newSub = [];
  const array5 = arrayOfIngredients;
  const newIngredients = [];
  const array6 = arrayOfUse;
  const newUse = [];
  let num = 0;
  let titleNum = 0;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      newTitleArray.push(array[i]);
      newDescriptions.push(array2[i]);
      newSpecial.push(array3[i]);
      newSub.push(array4[i]);
      newIngredients.push(array5[i]);
      newUse.push(array6[i]);
    }
  }

  while (num < 10) {
    for (let i = 0; i < 10; i += 1) {
      object.push({
        title: newTitleArray[titleNum + i], subTitle: newSub[titleNum + i], description: newDescriptions[titleNum + i], specialty: newSpecial[titleNum + i], price: arrayOfPrices[i], ingredients: newIngredients[titleNum + i], howTo: newUse[titleNum + i],
      });
    }

    for (let i = 0; i < 10; i += 1) {
      object2.push({
        goodToKnow: arrayOfKnowledge[i], icons: arrayOfIcons[i], shades: arrayOfShades[i], keywords: arrayOfKeyWords[i],
      });
    }

    titleNum += 10;
    num += 1;
  }

  object.map((object) => {
    db.query(`INSERT INTO product (title, subTitle, description, specialty, price, ingredients, howTo) VALUES ("${object.title}", "${object.subTitle}", "${object.description}", "${object.specialty}", ${object.price}, "${object.ingredients}", "${object.howTo}");`, (err) => {
      if (err) {
        console.log(err);
        console.log("Couldn't seed table", err);
      } else {
        console.log('Table seeded');
      }
    });
  });

  object2.map((object) => {
    db.query(`INSERT INTO details (goodToKnow, icons, shades, keywords) VALUES ("${object.goodToKnow}", "${object.icons}", "${object.shades}", "${object.keywords}");`, (err) => {
      if (err) {
        console.log("Couldn't seed details", err);
      } else {
        console.log('Details seeded');
      }
    });
  });

  arrayOfImgs.map((image) => {
    db.query(`INSERT INTO images (image) VALUES ("${image}");`, (err) => {
      if (err) {
        console.log("Couldn't seed images", err);
      } else {
        console.log('Images seeded');
      }
    });
  });
};

createData();
