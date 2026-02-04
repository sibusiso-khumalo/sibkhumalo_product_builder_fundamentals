/*
 * RATINGS
 */

/**
 * Calculates the risk premium based on the rating factors
 * @param {Record<string, any>} data The input data required to calculate the risk premium
 * @return The risk premium
 */
const calculateRiskPremium = (data) => {
  const { cover_amount, year_of_birth, dino_species,dino_health_checks} = data;

  const dino_species_factors = {
  'Tyrannosaurus Rex': 0.81,
  'Stegosaurus': 1.19,
  'Velociraptor': 0.76,
  'Brachiosaurus': 1.32,
  'Iguanodon': 1.07
  };
  
  const currentYear = new Date().getFullYear();
  const age = currentYear - year_of_birth;

  const dino_species_Multiplier = dino_species_factors[dino_species] ?? 1;
  const health_check_add = dino_health_checks === false ? 25000 : 0;

  const totalRiskPremium = (cover_amount) * (0.01*(age*0.001)) * (dino_species_Multiplier) + (health_check_add);

  return totalRiskPremium;
};

/**
 * Calculates the early warning network benefit premium based on the rating factors
 * @param {Record<string, any>} data The input data required to calculate the early warning network benefit premium
 * @return The early warning network benefit premium
 */
const calculateEarlyWarningNetworkBenefitPremium = (data) => {
  const earlyWarningNetworkBenefitPremium = data.early_warning_network_benefit ? 3 * 100 : 0;

  return earlyWarningNetworkBenefitPremium;
};

/**
 * Calculates the extraction benefit premium based on the rating factors
 * @param {Record<string, any>} data The input data required to calculate the extraction benefit premium
 * @return The extraction benefit premium
 */
const calculateExtractionBenefitPremium = (data) => {
  const extractionBenefitPremium = data.extraction_benefit ? 5 * 100 : 0;

  return extractionBenefitPremium;
};
