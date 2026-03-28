export interface Location {
  slug: string
  name: string
  county: string
  description: string
  population: string
  waterDamageRisks: string[]
  commonIssues: string[]
  neighborhoods?: string[]
  nearbyAreas: string[]
  metaTitle: string
  metaDescription: string
}

export const locations: Location[] = [
  // Tier 1: Major Cities
  {
    slug: 'houston',
    name: 'Houston',
    county: 'Harris County',
    description: 'As the largest city in Texas and the fourth-largest in the nation, Houston faces unique water damage challenges. From tropical storms and hurricanes to aging infrastructure and flash flooding, Houston homeowners need reliable water damage estimates to protect their investments.',
    population: '2.3 million',
    waterDamageRisks: [
      'Hurricane and tropical storm flooding',
      'Flash flooding from heavy rainfall',
      'Bayou overflow during storm events',
      'Aging municipal water infrastructure',
      'High humidity leading to mold growth'
    ],
    commonIssues: [
      'Foundation flooding due to clay soil',
      'Slab leaks from shifting ground',
      'AC condensation line failures',
      'Storm drain backups',
      'Roof leaks from severe weather'
    ],
    neighborhoods: [
      'Memorial', 'The Heights', 'Montrose', 'River Oaks', 'Galleria',
      'Midtown', 'Downtown', 'West University', 'Bellaire', 'Meyerland'
    ],
    nearbyAreas: ['Katy', 'Sugar Land', 'The Woodlands', 'Pearland'],
    metaTitle: 'Water Damage Estimating Houston TX | Independent Xactimate Estimates',
    metaDescription: 'Professional water damage estimates for Houston homeowners. Get independent Xactimate estimates to maximize your insurance claim. 24/7 emergency service.'
  },
  {
    slug: 'katy',
    name: 'Katy',
    county: 'Harris, Fort Bend & Waller Counties',
    description: 'Katy has experienced rapid growth over the past two decades, with many homes built on former prairie land. This development pattern, combined with the area\'s low elevation and proximity to the Barker Reservoir, makes water damage a significant concern for Katy homeowners.',
    population: '21,000 (300,000+ in Greater Katy)',
    waterDamageRisks: [
      'Barker Reservoir controlled releases',
      'Flash flooding in newer developments',
      'Poor drainage in rapidly developed areas',
      'Hurricane evacuation route flooding',
      'Subsidence from groundwater extraction'
    ],
    commonIssues: [
      'New construction settling issues',
      'Improper grading around foundations',
      'Sump pump failures',
      'Water heater leaks in garages',
      'Irrigation system malfunctions'
    ],
    nearbyAreas: ['Houston', 'Sugar Land', 'Cypress', 'Richmond'],
    metaTitle: 'Water Damage Estimating Katy TX | Fair Insurance Estimates',
    metaDescription: 'Katy TX water damage estimates using Xactimate software. Independent estimates for flood, pipe bursts, and storm damage. Serving all of Greater Katy.'
  },
  {
    slug: 'sugar-land',
    name: 'Sugar Land',
    county: 'Fort Bend County',
    description: 'Sugar Land is one of the most affluent communities in the Houston metro area, with many high-value homes requiring careful documentation of water damage for insurance claims. The city\'s location along the Brazos River creates unique flooding concerns during major storm events.',
    population: '111,000',
    waterDamageRisks: [
      'Brazos River flooding',
      'Oyster Creek overflow',
      'Master-planned community drainage issues',
      'Heavy rainfall pooling',
      'Levee system concerns'
    ],
    commonIssues: [
      'Luxury home water damage documentation',
      'Pool equipment failures',
      'Sprinkler system leaks',
      'High-end appliance water damage',
      'Multi-story home water intrusion'
    ],
    nearbyAreas: ['Houston', 'Katy', 'Missouri City', 'Richmond'],
    metaTitle: 'Water Damage Estimating Sugar Land TX | Xactimate Estimates',
    metaDescription: 'Sugar Land water damage estimates for insurance claims. Professional Xactimate documentation for high-value homes. Maximize your settlement.'
  },
  {
    slug: 'the-woodlands',
    name: 'The Woodlands',
    county: 'Montgomery County',
    description: 'The Woodlands is a master-planned community known for its beautiful tree coverage and extensive waterway system. While this creates an attractive environment, it also means careful water management is essential, and homes near the many retention ponds and creeks face elevated flood risks.',
    population: '115,000',
    waterDamageRisks: [
      'Spring Creek flooding',
      'Lake Woodlands overflow',
      'Retention pond overflow',
      'Dense tree coverage blocking drainage',
      'Creek system flooding'
    ],
    commonIssues: [
      'Basement and below-grade flooding',
      'Foundation moisture issues',
      'Storm debris clogging drainage',
      'Luxury amenity water damage',
      'Golf course adjacent flooding'
    ],
    nearbyAreas: ['Houston', 'Conroe', 'Spring', 'Tomball'],
    metaTitle: 'Water Damage Estimating The Woodlands TX | Insurance Estimates',
    metaDescription: 'The Woodlands water damage and flood estimates. Independent Xactimate estimates for Spring Creek flooding, storm damage, and pipe bursts.'
  },
  {
    slug: 'pearland',
    name: 'Pearland',
    county: 'Brazoria County',
    description: 'Pearland is one of the fastest-growing cities in Texas, with rapid development creating both opportunities and challenges. The city\'s flat terrain and clay soils can lead to drainage issues, and many newer subdivisions have experienced flooding during major rain events.',
    population: '125,000',
    waterDamageRisks: [
      'Clear Creek flooding',
      'Flat terrain drainage challenges',
      'New development drainage issues',
      'Clay soil water retention',
      'Tropical storm flooding'
    ],
    commonIssues: [
      'New home construction defects',
      'Foundation settling and cracking',
      'Street flooding entering homes',
      'Sewer line backups',
      'Poor lot grading'
    ],
    nearbyAreas: ['Houston', 'Friendswood', 'League City', 'Pasadena'],
    metaTitle: 'Water Damage Estimating Pearland TX | Flood & Storm Estimates',
    metaDescription: 'Pearland TX water damage estimates for insurance claims. Expert Xactimate estimates for flooding, storm damage, and plumbing failures.'
  },
  {
    slug: 'league-city',
    name: 'League City',
    county: 'Galveston County',
    description: 'Located between Houston and Galveston, League City offers a suburban lifestyle with easy access to the coast. However, this proximity to the Gulf of Mexico means residents must be prepared for hurricane-related water damage and storm surge concerns.',
    population: '115,000',
    waterDamageRisks: [
      'Hurricane storm surge',
      'Clear Creek flooding',
      'Dickinson Bayou overflow',
      'Coastal wind-driven rain',
      'Tropical storm impacts'
    ],
    commonIssues: [
      'Roof damage from coastal winds',
      'Saltwater intrusion damage',
      'Window seal failures',
      'Garage flooding',
      'HVAC system water damage'
    ],
    nearbyAreas: ['Houston', 'Friendswood', 'Pearland', 'Galveston'],
    metaTitle: 'Water Damage Estimating League City TX | Hurricane & Flood Estimates',
    metaDescription: 'League City water damage estimates for hurricane, flood, and storm damage. Independent Xactimate estimates to maximize your insurance claim.'
  },
  {
    slug: 'pasadena',
    name: 'Pasadena',
    county: 'Harris County',
    description: 'Pasadena is a diverse industrial city east of Houston with a mix of older and newer housing stock. The city\'s proximity to the Houston Ship Channel and various bayous creates flooding concerns, while aging infrastructure in some neighborhoods leads to plumbing-related water damage.',
    population: '150,000',
    waterDamageRisks: [
      'Industrial area flooding',
      'Vince Bayou overflow',
      'Aging infrastructure failures',
      'Ship Channel storm surge',
      'Heavy industrial area drainage'
    ],
    commonIssues: [
      'Older home plumbing failures',
      'Foundation issues in older homes',
      'Sewage backups',
      'Roof deterioration',
      'Drainage system failures'
    ],
    nearbyAreas: ['Houston', 'Deer Park', 'La Porte', 'Baytown'],
    metaTitle: 'Water Damage Estimating Pasadena TX | Insurance Claim Estimates',
    metaDescription: 'Pasadena TX water damage estimates using industry-standard Xactimate. Fair estimates for flooding, plumbing failures, and storm damage.'
  },
  {
    slug: 'baytown',
    name: 'Baytown',
    county: 'Harris County',
    description: 'Baytown sits at the junction of the San Jacinto River and Galveston Bay, making it particularly vulnerable to flooding during tropical storms and hurricanes. The city\'s industrial heritage and mix of housing ages require expert water damage assessment.',
    population: '83,000',
    waterDamageRisks: [
      'San Jacinto River flooding',
      'Galveston Bay storm surge',
      'Cedar Bayou overflow',
      'Industrial area drainage',
      'Hurricane direct impacts'
    ],
    commonIssues: [
      'River flooding into neighborhoods',
      'Older home water damage',
      'Storm surge intrusion',
      'Bayou backup flooding',
      'Industrial contamination concerns'
    ],
    nearbyAreas: ['Houston', 'Pasadena', 'La Porte', 'Mont Belvieu'],
    metaTitle: 'Water Damage Estimating Baytown TX | Flood & Storm Damage',
    metaDescription: 'Baytown water damage estimates for flooding, hurricane damage, and plumbing issues. Professional Xactimate estimates for insurance claims.'
  },
  {
    slug: 'missouri-city',
    name: 'Missouri City',
    county: 'Fort Bend County',
    description: 'Missouri City is a diverse suburb southwest of Houston known for its established neighborhoods and family-friendly atmosphere. The city has experienced significant flooding events, and homeowners need accurate estimates to ensure fair insurance settlements.',
    population: '74,000',
    waterDamageRisks: [
      'Flat terrain flooding',
      'Oyster Creek overflow',
      'Drainage infrastructure limitations',
      'Heavy rainfall accumulation',
      'Older subdivision drainage issues'
    ],
    commonIssues: [
      'Foundation settling',
      'Slab leaks',
      'AC drain line issues',
      'Garage and carport flooding',
      'Landscape drainage problems'
    ],
    nearbyAreas: ['Houston', 'Sugar Land', 'Pearland', 'Stafford'],
    metaTitle: 'Water Damage Estimating Missouri City TX | Fair Estimates',
    metaDescription: 'Missouri City TX water damage estimates. Independent Xactimate estimates for flood damage, pipe bursts, and storm damage claims.'
  },
  {
    slug: 'conroe',
    name: 'Conroe',
    county: 'Montgomery County',
    description: 'Conroe has seen explosive growth as families move north from Houston. The city\'s location near Lake Conroe and the San Jacinto River means flooding is a real concern, especially during major storm events when dam releases may occur.',
    population: '100,000',
    waterDamageRisks: [
      'Lake Conroe dam releases',
      'San Jacinto River flooding',
      'Rapid development drainage issues',
      'Flash flooding',
      'Creek and stream overflow'
    ],
    commonIssues: [
      'New construction settling',
      'Improper drainage installation',
      'Septic system issues',
      'Well water problems',
      'Rural property flooding'
    ],
    nearbyAreas: ['The Woodlands', 'Spring', 'Tomball', 'Magnolia'],
    metaTitle: 'Water Damage Estimating Conroe TX | Lake & Flood Damage',
    metaDescription: 'Conroe water damage estimates for Lake Conroe area flooding, storm damage, and plumbing issues. Expert Xactimate documentation.'
  },
  {
    slug: 'spring',
    name: 'Spring',
    county: 'Harris County',
    description: 'Spring is an unincorporated community north of Houston that has grown rapidly over recent decades. The area\'s name comes from the natural springs that once dotted the landscape, and water remains a significant factor in property damage concerns.',
    population: '60,000',
    waterDamageRisks: [
      'Spring Creek flooding',
      'Cypress Creek overflow',
      'Subdivision drainage issues',
      'High groundwater table',
      'Flash flooding'
    ],
    commonIssues: [
      'Foundation moisture problems',
      'Crawl space flooding',
      'Sump pump failures',
      'Sprinkler system leaks',
      'Water heater failures'
    ],
    nearbyAreas: ['Houston', 'The Woodlands', 'Humble', 'Tomball'],
    metaTitle: 'Water Damage Estimating Spring TX | Creek Flooding & Storm Damage',
    metaDescription: 'Spring TX water damage estimates using Xactimate. Fair estimates for Spring Creek flooding, storm damage, and plumbing failures.'
  },
  {
    slug: 'cypress',
    name: 'Cypress',
    county: 'Harris County',
    description: 'Cypress is one of the fastest-growing areas in the Houston metro, with numerous master-planned communities. The area\'s rapid development has sometimes outpaced drainage infrastructure, leading to flooding concerns during major rain events.',
    population: '185,000',
    waterDamageRisks: [
      'Cypress Creek flooding',
      'Rapid development drainage gaps',
      'Detention pond overflow',
      'Flash flooding in newer areas',
      'Poor soil drainage'
    ],
    commonIssues: [
      'New home warranty issues',
      'Builder-grade plumbing failures',
      'Improper grading',
      'French drain failures',
      'Irrigation leaks'
    ],
    nearbyAreas: ['Houston', 'Katy', 'Tomball', 'Spring'],
    metaTitle: 'Water Damage Estimating Cypress TX | Flood & Plumbing Estimates',
    metaDescription: 'Cypress TX water damage estimates for insurance claims. Expert Xactimate estimates for flooding, new home water damage, and storm damage.'
  },
  {
    slug: 'humble',
    name: 'Humble',
    county: 'Harris County',
    description: 'Humble and the surrounding Kingwood area sit along the San Jacinto River and Lake Houston, creating significant flood risks. Hurricane Harvey devastated many homes in this area, and proper water damage documentation remains critical for homeowners.',
    population: '16,000 (200,000+ in Greater Humble/Kingwood)',
    waterDamageRisks: [
      'San Jacinto River flooding',
      'Lake Houston overflow',
      'Hurricane Harvey repeat flooding zones',
      'Bayou overflow',
      'Dam release impacts'
    ],
    commonIssues: [
      'Previous flood damage assessment',
      'Mold from repeated flooding',
      'Foundation damage from flooding',
      'Long-term moisture issues',
      'Structural damage documentation'
    ],
    neighborhoods: ['Kingwood', 'Atascocita', 'Summer Creek', 'Fall Creek'],
    nearbyAreas: ['Houston', 'Spring', 'Baytown', 'Conroe'],
    metaTitle: 'Water Damage Estimating Humble & Kingwood TX | Flood Estimates',
    metaDescription: 'Humble and Kingwood water damage estimates. Expert documentation for San Jacinto River flooding, hurricane damage, and insurance claims.'
  },
  {
    slug: 'friendswood',
    name: 'Friendswood',
    county: 'Galveston & Harris Counties',
    description: 'Friendswood is a family-oriented community that spans two counties. Its location along Clear Creek and proximity to the coast means flooding is a primary concern, particularly during tropical storms and hurricanes.',
    population: '40,000',
    waterDamageRisks: [
      'Clear Creek flooding',
      'Hurricane storm surge',
      'Mary\'s Creek overflow',
      'Coastal weather impacts',
      'Flash flooding'
    ],
    commonIssues: [
      'Creek-adjacent flooding',
      'Older home water intrusion',
      'Foundation drainage issues',
      'Storm window failures',
      'Garage flooding'
    ],
    nearbyAreas: ['Houston', 'Pearland', 'League City', 'Webster'],
    metaTitle: 'Water Damage Estimating Friendswood TX | Storm & Flood Estimates',
    metaDescription: 'Friendswood TX water damage estimates for Clear Creek flooding, hurricanes, and storm damage. Independent Xactimate estimates.'
  },
  {
    slug: 'tomball',
    name: 'Tomball',
    county: 'Harris County',
    description: 'Tomball has transformed from a small railroad town to a thriving suburb while maintaining its historic charm. The area\'s mix of older historic homes and new developments means varied water damage concerns and documentation needs.',
    population: '13,000 (growing rapidly)',
    waterDamageRisks: [
      'Spring Creek flooding',
      'Flash flooding',
      'Storm water runoff',
      'Older infrastructure issues',
      'Development pressure on drainage'
    ],
    commonIssues: [
      'Historic home water damage',
      'Mixed-age plumbing issues',
      'Septic system problems',
      'Well water issues',
      'Foundation settling'
    ],
    nearbyAreas: ['Houston', 'Spring', 'Cypress', 'The Woodlands'],
    metaTitle: 'Water Damage Estimating Tomball TX | Residential Estimates',
    metaDescription: 'Tomball water damage estimates for historic and new homes. Expert Xactimate documentation for insurance claims.'
  },
  // Tier 2 Cities
  {
    slug: 'richmond',
    name: 'Richmond',
    county: 'Fort Bend County',
    description: 'Richmond is the county seat of Fort Bend County and sits along the Brazos River. The city\'s historic downtown and surrounding neighborhoods face unique water damage challenges from both river flooding and aging infrastructure.',
    population: '12,500',
    waterDamageRisks: [
      'Brazos River flooding',
      'Historic area drainage issues',
      'Levee system concerns',
      'Flash flooding',
      'Storm water management'
    ],
    commonIssues: [
      'Historic home preservation',
      'Older plumbing systems',
      'Foundation issues',
      'River-adjacent flooding',
      'Drainage infrastructure'
    ],
    nearbyAreas: ['Sugar Land', 'Rosenberg', 'Katy', 'Missouri City'],
    metaTitle: 'Water Damage Estimating Richmond TX | Brazos River Flooding',
    metaDescription: 'Richmond TX water damage estimates for Brazos River flooding, historic homes, and storm damage. Professional Xactimate estimates.'
  },
  {
    slug: 'rosenberg',
    name: 'Rosenberg',
    county: 'Fort Bend County',
    description: 'Rosenberg is a growing city in Fort Bend County with a mix of established neighborhoods and new development. Located near the Brazos River, the city faces flooding concerns that require professional damage assessment.',
    population: '41,000',
    waterDamageRisks: [
      'Brazos River flooding',
      'Rapid development drainage',
      'Flash flooding',
      'Poor drainage in older areas',
      'Storm water issues'
    ],
    commonIssues: [
      'Mixed housing age issues',
      'Foundation problems',
      'Plumbing failures',
      'Yard drainage issues',
      'Roof leaks'
    ],
    nearbyAreas: ['Richmond', 'Sugar Land', 'Katy', 'Fulshear'],
    metaTitle: 'Water Damage Estimating Rosenberg TX | Insurance Estimates',
    metaDescription: 'Rosenberg water damage estimates using Xactimate. Fair estimates for flooding, plumbing issues, and storm damage claims.'
  },
  {
    slug: 'galveston',
    name: 'Galveston',
    county: 'Galveston County',
    description: 'As an island city, Galveston faces unique water damage challenges from hurricanes, storm surge, and coastal flooding. Historic homes and beachfront properties require specialized damage assessment and documentation.',
    population: '53,000',
    waterDamageRisks: [
      'Hurricane storm surge',
      'Coastal flooding',
      'High tide flooding',
      'Wind-driven rain',
      'Saltwater intrusion'
    ],
    commonIssues: [
      'Historic home damage',
      'Saltwater corrosion',
      'Beach property flooding',
      'Seawall overflow',
      'Hurricane preparedness'
    ],
    nearbyAreas: ['League City', 'Texas City', 'La Marque', 'Dickinson'],
    metaTitle: 'Water Damage Estimating Galveston TX | Hurricane & Coastal Flooding',
    metaDescription: 'Galveston Island water damage estimates for hurricanes, storm surge, and coastal flooding. Expert Xactimate documentation.'
  },
  {
    slug: 'texas-city',
    name: 'Texas City',
    county: 'Galveston County',
    description: 'Texas City is an industrial port city on Galveston Bay. Its coastal location and industrial infrastructure create unique water damage scenarios that require careful documentation for insurance claims.',
    population: '53,000',
    waterDamageRisks: [
      'Galveston Bay storm surge',
      'Hurricane impacts',
      'Industrial area flooding',
      'Levee system concerns',
      'Heavy rainfall flooding'
    ],
    commonIssues: [
      'Coastal wind damage',
      'Storm surge flooding',
      'Industrial contamination concerns',
      'Older home damage',
      'Foundation issues'
    ],
    nearbyAreas: ['Galveston', 'La Marque', 'Dickinson', 'League City'],
    metaTitle: 'Water Damage Estimating Texas City TX | Coastal Storm Damage',
    metaDescription: 'Texas City water damage estimates for storm surge, hurricane damage, and flooding. Professional Xactimate estimates.'
  },
  {
    slug: 'deer-park',
    name: 'Deer Park',
    county: 'Harris County',
    description: 'Deer Park is an industrial suburb east of Houston near the Ship Channel. The city\'s proximity to petrochemical facilities and bayous creates specific water damage concerns that require professional assessment.',
    population: '35,000',
    waterDamageRisks: [
      'Patrick Bayou flooding',
      'Ship Channel storm surge',
      'Industrial area drainage',
      'Flash flooding',
      'Infrastructure issues'
    ],
    commonIssues: [
      'Older subdivision flooding',
      'Industrial area impacts',
      'Foundation settling',
      'Plumbing system age',
      'Storm water management'
    ],
    nearbyAreas: ['Pasadena', 'La Porte', 'Houston', 'Baytown'],
    metaTitle: 'Water Damage Estimating Deer Park TX | Residential Estimates',
    metaDescription: 'Deer Park water damage estimates for flooding, storm damage, and plumbing issues. Fair Xactimate estimates for insurance claims.'
  },
  {
    slug: 'la-porte',
    name: 'La Porte',
    county: 'Harris County',
    description: 'La Porte sits on Galveston Bay with direct exposure to coastal weather. The city\'s waterfront location means storm surge and hurricane damage are primary concerns for homeowners.',
    population: '36,000',
    waterDamageRisks: [
      'Galveston Bay storm surge',
      'Hurricane direct impacts',
      'Coastal flooding',
      'Ship Channel impacts',
      'High wind rain intrusion'
    ],
    commonIssues: [
      'Waterfront property damage',
      'Storm surge flooding',
      'Roof wind damage',
      'Window seal failures',
      'Salt air corrosion'
    ],
    nearbyAreas: ['Deer Park', 'Pasadena', 'Baytown', 'Seabrook'],
    metaTitle: 'Water Damage Estimating La Porte TX | Coastal & Storm Damage',
    metaDescription: 'La Porte water damage estimates for coastal flooding, hurricanes, and storm damage. Expert Xactimate documentation.'
  },
  {
    slug: 'webster',
    name: 'Webster',
    county: 'Harris County',
    description: 'Webster is home to the NASA Johnson Space Center area and serves as a commercial hub for the Clear Lake region. Its location near Clear Lake and Galveston Bay creates flooding concerns during major storms.',
    population: '12,000',
    waterDamageRisks: [
      'Clear Lake flooding',
      'Hurricane storm surge',
      'Flash flooding',
      'Commercial area drainage',
      'Coastal weather impacts'
    ],
    commonIssues: [
      'Commercial property damage',
      'Older residential flooding',
      'Parking lot drainage',
      'HVAC system damage',
      'Roof leaks'
    ],
    nearbyAreas: ['League City', 'Friendswood', 'Clear Lake', 'Houston'],
    metaTitle: 'Water Damage Estimating Webster TX | Clear Lake Area Estimates',
    metaDescription: 'Webster TX water damage estimates for Clear Lake area flooding, storm damage, and plumbing issues. Professional estimates.'
  },
  {
    slug: 'clear-lake',
    name: 'Clear Lake',
    county: 'Harris County',
    description: 'Clear Lake is an affluent area near NASA and the bay that shares its name. High-value homes and waterfront properties require careful documentation when water damage occurs.',
    population: '100,000+ (area)',
    waterDamageRisks: [
      'Clear Lake/Bay flooding',
      'Hurricane storm surge',
      'Waterfront property exposure',
      'Boat dock damage',
      'Coastal weather'
    ],
    commonIssues: [
      'Luxury home damage',
      'Waterfront flooding',
      'Pool and outdoor amenities',
      'High-end finishes damage',
      'Dock and seawall issues'
    ],
    nearbyAreas: ['Houston', 'Webster', 'League City', 'Friendswood'],
    metaTitle: 'Water Damage Estimating Clear Lake TX | Waterfront & Luxury Homes',
    metaDescription: 'Clear Lake area water damage estimates for waterfront properties, luxury homes, and storm damage. Expert Xactimate documentation.'
  },
  {
    slug: 'atascocita',
    name: 'Atascocita',
    county: 'Harris County',
    description: 'Atascocita is a large master-planned community near Lake Houston. The area experienced devastating flooding during Hurricane Harvey, and proper documentation remains essential for homeowners.',
    population: '80,000',
    waterDamageRisks: [
      'Lake Houston overflow',
      'San Jacinto River flooding',
      'Hurricane Harvey repeat zones',
      'Flash flooding',
      'Detention pond overflow'
    ],
    commonIssues: [
      'Previous flood damage',
      'Foundation issues from flooding',
      'Mold remediation needs',
      'Long-term moisture damage',
      'Repeated flood claims'
    ],
    nearbyAreas: ['Humble', 'Kingwood', 'Spring', 'Houston'],
    metaTitle: 'Water Damage Estimating Atascocita TX | Lake Houston Flooding',
    metaDescription: 'Atascocita water damage estimates for Lake Houston flooding, hurricane damage, and storm claims. Fair Xactimate estimates.'
  },
  {
    slug: 'fulshear',
    name: 'Fulshear',
    county: 'Fort Bend County',
    description: 'Fulshear is one of the fastest-growing cities in Texas, with luxury master-planned communities expanding rapidly. New construction and high-value homes require professional damage assessment.',
    population: '25,000 (rapidly growing)',
    waterDamageRisks: [
      'Rapid development drainage issues',
      'Brazos River proximity',
      'New infrastructure stress',
      'Flash flooding',
      'Construction defect water intrusion'
    ],
    commonIssues: [
      'New home warranty claims',
      'Builder defect issues',
      'Improper grading',
      'Luxury finish damage',
      'Irrigation system failures'
    ],
    nearbyAreas: ['Katy', 'Richmond', 'Rosenberg', 'Sugar Land'],
    metaTitle: 'Water Damage Estimating Fulshear TX | New Home & Luxury Estimates',
    metaDescription: 'Fulshear water damage estimates for new construction, luxury homes, and flooding. Professional Xactimate documentation.'
  },
  // County Pages
  {
    slug: 'harris-county',
    name: 'Harris County',
    county: 'Harris County',
    description: 'Harris County is the largest county in Texas and third-largest in the nation, encompassing Houston and dozens of surrounding communities. The county\'s extensive bayou system and flat terrain make flooding a persistent challenge.',
    population: '4.7 million',
    waterDamageRisks: [
      'Extensive bayou system flooding',
      'Hurricane and tropical storm impacts',
      'Flash flooding throughout county',
      'Reservoir releases',
      'Urban development drainage issues'
    ],
    commonIssues: [
      'Varied housing stock challenges',
      'Urban and suburban flooding',
      'Infrastructure aging',
      'Drainage system capacity',
      'Diverse claim requirements'
    ],
    nearbyAreas: ['Fort Bend County', 'Montgomery County', 'Galveston County', 'Brazoria County'],
    metaTitle: 'Water Damage Estimating Harris County TX | County-Wide Service',
    metaDescription: 'Harris County water damage estimates for all cities and communities. Professional Xactimate estimates throughout the county.'
  },
  {
    slug: 'fort-bend-county',
    name: 'Fort Bend County',
    county: 'Fort Bend County',
    description: 'Fort Bend County is one of the fastest-growing and most diverse counties in America. Its location along the Brazos River and rapid development create unique water damage challenges.',
    population: '850,000',
    waterDamageRisks: [
      'Brazos River flooding',
      'Rapid development outpacing drainage',
      'Levee system concerns',
      'Flash flooding',
      'New construction issues'
    ],
    commonIssues: [
      'High-value home documentation',
      'New development drainage',
      'River corridor flooding',
      'Diverse housing needs',
      'Growing infrastructure strain'
    ],
    nearbyAreas: ['Harris County', 'Brazoria County', 'Waller County', 'Austin County'],
    metaTitle: 'Water Damage Estimating Fort Bend County TX | All Communities',
    metaDescription: 'Fort Bend County water damage estimates including Sugar Land, Katy, Missouri City, and Richmond. Expert Xactimate documentation.'
  },
  {
    slug: 'montgomery-county',
    name: 'Montgomery County',
    county: 'Montgomery County',
    description: 'Montgomery County north of Houston includes The Woodlands, Conroe, and surrounding communities. Lake Conroe and the San Jacinto River system create significant flooding potential during major storms.',
    population: '620,000',
    waterDamageRisks: [
      'Lake Conroe dam releases',
      'San Jacinto River flooding',
      'Spring Creek overflow',
      'Rapid growth drainage issues',
      'Forest fire and subsequent flooding'
    ],
    commonIssues: [
      'Lake-area property damage',
      'Rural and suburban flooding',
      'Septic and well issues',
      'New development problems',
      'Diverse property types'
    ],
    nearbyAreas: ['Harris County', 'Walker County', 'San Jacinto County', 'Liberty County'],
    metaTitle: 'Water Damage Estimating Montgomery County TX | The Woodlands & Conroe',
    metaDescription: 'Montgomery County water damage estimates for The Woodlands, Conroe, and all communities. Professional Xactimate estimates.'
  },
  {
    slug: 'brazoria-county',
    name: 'Brazoria County',
    county: 'Brazoria County',
    description: 'Brazoria County stretches from the Houston suburbs to the Gulf Coast, including Pearland, Angleton, and coastal communities. This diversity means varied water damage concerns from urban flooding to coastal storms.',
    population: '380,000',
    waterDamageRisks: [
      'Coastal hurricane impacts',
      'Brazos River flooding',
      'Gulf Coast storm surge',
      'Flash flooding',
      'Bayou and creek overflow'
    ],
    commonIssues: [
      'Coastal property damage',
      'Urban and rural flooding',
      'Hurricane preparation',
      'Diverse housing stock',
      'Agricultural property damage'
    ],
    nearbyAreas: ['Harris County', 'Fort Bend County', 'Galveston County', 'Matagorda County'],
    metaTitle: 'Water Damage Estimating Brazoria County TX | Pearland to Coast',
    metaDescription: 'Brazoria County water damage estimates from Pearland to the coast. Expert documentation for flooding, hurricanes, and storm damage.'
  },
  {
    slug: 'galveston-county',
    name: 'Galveston County',
    county: 'Galveston County',
    description: 'Galveston County includes Galveston Island, the Clear Lake area, and mainland communities. Coastal exposure makes hurricane and storm surge damage the primary concern for property owners.',
    population: '350,000',
    waterDamageRisks: [
      'Hurricane storm surge',
      'Coastal flooding',
      'Galveston Bay impacts',
      'Clear Lake flooding',
      'Wind-driven rain damage'
    ],
    commonIssues: [
      'Island property damage',
      'Historic structure preservation',
      'Waterfront home damage',
      'Salt air corrosion',
      'Repeated hurricane impacts'
    ],
    nearbyAreas: ['Harris County', 'Brazoria County', 'Chambers County'],
    metaTitle: 'Water Damage Estimating Galveston County TX | Island & Mainland',
    metaDescription: 'Galveston County water damage estimates for island and mainland properties. Hurricane, coastal flooding, and storm damage documentation.'
  }
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(loc => loc.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return locations.map(loc => loc.slug)
}
