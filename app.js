// --- Data Configurations ---
const BUNDLES_DATA = {
  "Summer Cash iPhone 17 Pro Max 256GB + Silicone Case": 486.112,
  "Summer Inst 12M iPhone 17 Pro Max 256GB + Silicone Case": 486.112,
  "Summer Inst 18M iPhone 17 Pro Max 256GB + Silicone Case": 486.112,
  "Summer Inst 24M iPhone 17 Pro Max 256GB + Silicone Case": 486.112,
  "Summer One Plan Max Rental iPhone 17 Pro Max 256GB + Silicone Case": 86.112,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 256GB + Silicone Case": 186.112,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 256GB + Silicone Case": 186.112,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 256GB + Silicone Case": 286.112,
  "EGB 24M iPhone 17 Pro Max 256GB": 480.872,
  "Summer Cash iPhone 17 Pro Max 256GB + Clear Case": 486.112,
  "Summer Inst 12M iPhone 17 Pro Max 256GB + Clear Case": 486.112,
  "Summer Inst 18M iPhone 17 Pro Max 256GB + Clear Case": 486.112,
  "Summer Inst 24M iPhone 17 Pro Max 256GB + Clear Case": 486.112,
  "Summer One Plan Max Rental iPhone 17 Pro Max 256GB + Clear Case": 86.112,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 256GB + Clear Case": 186.112,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 256GB + Clear Case": 186.112,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 256GB + Clear Case": 286.112,
  "Summer Cash iPhone 17 Pro Max 256GB + Techwoven Case": 486.112,
  "Summer Inst 12M iPhone 17 Pro Max 256GB + Techwoven Case": 486.112,
  "Summer Inst 18M iPhone 17 Pro Max 256GB + Techwoven Case": 486.112,
  "Summer Inst 24M iPhone 17 Pro Max 256GB + Techwoven Case": 486.112,
  "Summer One Plan Max Rental iPhone 17 Pro Max 256GB + Techwoven Case": 86.112,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 256GB + Techwoven Case": 186.112,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 256GB + Techwoven Case": 186.112,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 256GB + Techwoven Case": 286.112,
  "Summer Cash iPhone 17 Pro Max 256GB": 486.112,
  "Summer Inst 12M iPhone 17 Pro Max 256GB": 486.112,
  "Summer Inst 18M iPhone 17 Pro Max 256GB": 486.112,
  "Summer Inst 24M iPhone 17 Pro Max 256GB": 486.112,
  "Summer One Plan Max Rental iPhone 17 Pro Max 256GB": 86.112,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 256GB": 186.112,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 256GB": 186.112,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 256GB": 286.112,
  "DDS One Plan Plus iPhone 17 Pro Max 256GB + INFINYTY": 211.8,
  "Inst 24M i17 Pro Max 256GB + Apple Watch S11 42 GPS": 685.61,
  "Royal 1M iPhone 17 Pro Max 256GB": 503.0,
  "EGB Investcorp iPhone 17 Pro Max 256GB 24M new": 444.6,
  "EGB 24M BD18 Max iPhone 17 Pro Max 256GB": 466.0,
  "EGB 24M iPhone 17 Pro Max 256GB-A": 491.8,
  "EGB Investcorp iPhone 17 Pro Max 256GB 24M": 444.6,
  "EGB Wael Pharmacy 24M iPhone 17 Pro Max 256GB": 519.83,
  "Cash iPhone 17 Pro Max 256GB + INFINYTY": 578.66,
  "Inst 12M iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 592.307,
  "Inst 18M iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 592.307,
  "Inst 24M iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 592.307,
  "One Plan Max Inst 24M iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 212.7,
  "One Plan Plus Inst 24M iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 312.7,
  "Inst 12M EM iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 18M EM iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 24M EM iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 12M Ultimate iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 18M Ultimate iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 24M Ultimate iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 12M STF iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 18M STF iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 24M STF iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 12M ULTMAX iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 18M ULTMAX iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "Inst 24M ULTMAX iPhone 17 Pro Max 256GB + AirTag 2GEN 4 Pack + AirTag Accessories": 513.704,
  "EGB 12M iPhone 17 Pro Max 256GB +AirPods Pro 3": 647.607,
  "EGB BTA iPhone 17 Pro Max 256GB + INFINYTY": 568.61,
  "Inst 12M iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 567.307,
  "Inst 18M iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 567.307,
  "Inst 24M iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 567.307,
  "One Plan Max Inst 24M iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 187.7,
  "One Plan Plus Inst 24M iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 287.7,
  "Inst 12M EM iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 18M EM iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 24M EM iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 12M Ultimate iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 18M Ultimate iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 24M Ultimate iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 12M STF iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 18M STF iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 24M STF iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 12M ULTMAX iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 18M ULTMAX iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 24M ULTMAX iPhone 17 Pro Max 256GB + AirTag 2GEN 1 Pack  + AirTag Accessories": 488.704,
  "Inst 24M STF iPhone 17 Pro Max 256GB + Apple TechWoven": 476.4,
  "EGB ABC iPhone 17 Pro Max 256GB 12M": 432.0,
  "EGB ABC iPhone 17 Pro Max 256GB 18M": 432.0,
  "EGB ABC iPhone 17 Pro Max 256GB 24M": 432.0,
  "EGB ABC iPhone 17 Pro Max 256GB 36M": 432.0,
  "AMTEL 06-01-2026-002": 0.0,
  "AMTEL 06-01-2026-001": 487200.0,
  "EGB 18M iPhone 17 Pro Max 256GB-A": 491.8,
  "EGB SKD 12M iPhone 17 Pro Max 256GB-A": 932.008,
  "EGB 24M iPhone 17 Pro Max 256GB-B": 558.66,
  "EGB 18M iPhone 17 Pro Max 256GB-B": 558.66,
  "EGB 12M iPhone 17 Pro Max 256GB-B": 558.66,
  "EGB Solidarity 24M iPhone 17 Pro Max 256GB-B": 480.0,
  "EGB SKD 12M iPhone 17 Pro Max 256GB": 497.23,
  "EGB 1M 2x iPhone 17 Pro Max 256GB with Apple Watch S11 GPS + Cellular 42mm Milanese": 1382.214,
  "CS Inst 12M STF iPhone 17 Pro Max 256GB + Apple Silicone": 484.0,
  "One Plan Max Inst 24M iPhone 17 Pro Max 256GB + Apple TechWoven": 189.0,
  "One Plan Plus Inst 24M iPhone 17 Pro Max 256GB + Apple TechWoven": 289.0,
  "AMTEL 16-10-2025-001": 75763.0,
  "Inst 12M Ultimate iPhone 17 Pro Max 256GB": 465.58,
  "Inst 18M Ultimate iPhone 17 Pro Max 256GB": 465.58,
  "Inst 24M Ultimate iPhone 17 Pro Max 256GB": 465.58,
  "Cash iPhone 17 Pro Max 256GB": 480.872,
  "Inst 12M EM iPhone 17 Pro Max 256GB": 465.58,
  "Inst 18M EM iPhone 17 Pro Max 256GB": 465.58,
  "Inst 24M EM iPhone 17 Pro Max 256GB": 465.58,
  "Inst 12M STF iPhone 17 Pro Max 256GB": 465.58,
  "Inst 18M STF iPhone 17 Pro Max 256GB": 465.58,
  "Inst 24M STF iPhone 17 Pro Max 256GB": 465.58,
  "Inst 12M Ult Max iPhone 17 Pro Max 256GB": 465.58,
  "Inst 18M Ult Max iPhone 17 Pro Max 256GB": 465.58,
  "Inst 24M Ult Max iPhone 17 Pro Max 256GB": 465.58,
  "Inst 12M EM iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 18M EM iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 24M EM iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 18M Ult Max iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 18M Ultimate iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 18M iPhone 17 Pro Max 256GB + Apple Case": 508.78,
  "Inst 24M EM iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 24M STF iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 24M Ult Max iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 24M Ultimate iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 24M iPhone 17 Pro Max 256GB + Apple Case": 508.78,
  "One Plan Max Inst 24M iPhone 17 Pro Max 256GB + Apple Case": 189.0,
  "One Plan Plus iPhone 17 Pro Max 256GB + Apple Case": 289.0,
  "One Plan Plus iPhone 17 Pro Max 256GB + INFINYTY": 289.0,
  "One Plan Max iPhone 17 Pro Max 256GB + INFINYTY": 189.0,
  "Cash iPhone 17 Pro Max 256GB + Apple Case": 578.66,
  "Inst 12M EM iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 12M STF iPhone 17 Pro Max 256GB + Apple Case": 484.0,
  "Inst 12M Ult Max iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 12M Ultimate iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 12M iPhone 17 Pro Max 256GB + Apple Case": 508.78,
  "Inst 18M EM iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 18M STF iPhone 17 Pro Max 256GB + Apple Case": 476.4,
  "Inst 12M iPhone 17 Pro Max 256GB + INFINYTY": 508.78,
  "Inst 18M iPhone 17 Pro Max 256GB + INFINYTY": 508.78,
  "Inst 24M iPhone 17 Pro Max 256GB + INFINYTY": 508.78,
  "Inst 12M Ultimate iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 18M Ultimate iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 24M Ultimate iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 12M STF iPhone 17 Pro Max 256GB + INFINYTY": 484.0,
  "BTA STF iPhone 17 Pro Max 256GB": 466.0,
  "BTA 1M iPhone 17 Pro Max 256GB + INFINYTY": 568.61,
  "DDS-DP Inst 24M iPhone 17 Pro Max 256GB + INFINYTY": 418.6,
  "Inst 12M EM22 iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 18M EM22 iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 24M EM22 iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 18M STF iPhone 17 Pro Max 256GB + INFINYTY": 476.4,
  "Inst 24M STF iPhone 17 Pro Max 256GB + INFINYTY": 476.4,

  // --- Extracted from Pro 256.csv ---
  "Cash iPhone 17 Pro 256GB": 409.0,
  "Inst 12M EM iPhone 17 Pro 256GB": 396.0,
  "Inst 12M STF iPhone 17 Pro 256GB": 396.0,
  "Inst 12M Ult Max iPhone 17 Pro 256GB": 396.0,
  "Inst 12M Ultimate iPhone 17 Pro 256GB": 396.0,
  "Inst 18M EM iPhone 17 Pro 256GB": 396.0,
  "Inst 18M STF iPhone 17 Pro 256GB": 396.0,
  "Inst 18M Ult Max iPhone 17 Pro 256GB": 396.0,
  "Inst 18M Ultimate iPhone 17 Pro 256GB": 396.0,
  "Inst 24M EM iPhone 17 Pro 256GB": 396.0,
  "Inst 24M STF iPhone 17 Pro 256GB": 396.0,
  "Inst 24M Ult Max iPhone 17 Pro 256GB": 396.0,
  "Inst 24M Ultimate iPhone 17 Pro 256GB": 396.0,
  "Inst 12M iPhone 17 Pro 256GB + Apple Case": 432.0,
  "Inst 18M iPhone 17 Pro 256GB + Apple Case": 432.0,
  "Inst 24M iPhone 17 Pro 256GB + Apple Case": 432.0,
  "Inst 12M EM iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 18M EM iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 24M EM iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 12M STF iPhone 17 Pro 256GB + Apple Case": 412.0,
  "Inst 18M STF iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 24M STF iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 12M Ult Max iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 18M Ult Max iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 24M Ult Max iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 12M Ultimate iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 18M Ultimate iPhone 17 Pro 256GB + Apple Case": 405.0,
  "Inst 24M Ultimate iPhone 17 Pro 256GB + Apple Case": 405.0,
  "One Plan Max Inst 24M iPhone 17 Pro 256GB + Apple Case": 119.0,
  "One Plan Plus iPhone 17 Pro 256GB + Apple Case": 219.0,
  "Summer Cash iPhone 17 Pro 256GB": 413.0,
  "Summer Inst 12M iPhone 17 Pro 256GB": 413.0,
  "Summer Inst 18M iPhone 17 Pro 256GB": 413.0,
  "Summer Inst 24M iPhone 17 Pro 256GB": 413.0,
  "Summer One Plan Max Rental iPhone 17 Pro 256GB": 13.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 256GB": 113.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 256GB": 113.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 256GB": 213.0,
  "Summer Cash iPhone 17 Pro 256GB + Clear Case": 413.0,
  "Summer Inst 12M iPhone 17 Pro 256GB + Clear Case": 413.0,
  "Summer Inst 18M iPhone 17 Pro 256GB + Clear Case": 413.0,
  "Summer Inst 24M iPhone 17 Pro 256GB + Clear Case": 413.0,
  "Summer One Plan Max Rental iPhone 17 Pro 256GB + Clear Case": 13.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 256GB + Clear Case": 113.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 256GB + Clear Case": 113.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 256GB + Clear Case": 213.0,
  "Summer Cash iPhone 17 Pro 256GB + Silicone Case": 413.0,
  "Summer Inst 12M iPhone 17 Pro 256GB + Silicone Case": 413.0,
  "Summer Inst 18M iPhone 17 Pro 256GB + Silicone Case": 413.0,
  "Summer Inst 24M iPhone 17 Pro 256GB + Silicone Case": 413.0,
  "Summer One Plan Max Rental iPhone 17 Pro 256GB + Silicone Case": 13.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 256GB + Silicone Case": 113.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 256GB + Silicone Case": 113.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 256GB + Silicone Case": 213.0,
  "Summer Cash iPhone 17 Pro 256GB + Techwoven Case": 413.0,
  "Summer Inst 12M iPhone 17 Pro 256GB + Techwoven Case": 413.0,
  "Summer Inst 18M iPhone 17 Pro 256GB + Techwoven Case": 413.0,
  "Summer Inst 24M iPhone 17 Pro 256GB + Techwoven Case": 413.0,
  "Summer One Plan Max Rental iPhone 17 Pro 256GB + Techwoven Case": 13.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 256GB + Techwoven Case": 113.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 256GB + Techwoven Case": 113.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 256GB + Techwoven Case": 213.0,

  // --- Extracted from Pro 512.csv ---
  "Cash iPhone 17 Pro 512GB": 502.0,
  "Inst 12M EM iPhone 17 Pro 512GB": 486.0,
  "Inst 12M STF iPhone 17 Pro 512GB": 486.0,
  "Inst 12M Ult Max iPhone 17 Pro 512GB": 486.0,
  "Inst 12M Ultimate iPhone 17 Pro 512GB": 486.0,
  "Inst 18M EM iPhone 17 Pro 512GB": 486.0,
  "Inst 18M STF iPhone 17 Pro 512GB": 486.0,
  "Inst 18M Ult Max iPhone 17 Pro 512GB": 486.0,
  "Inst 18M Ultimate iPhone 17 Pro 512GB": 486.0,
  "Inst 24M EM iPhone 17 Pro 512GB": 486.0,
  "Inst 24M STF iPhone 17 Pro 512GB": 486.0,
  "Inst 24M Ult Max iPhone 17 Pro 512GB": 486.0,
  "Inst 24M Ultimate iPhone 17 Pro 512GB": 486.0,
  "Inst 12M iPhone 17 Pro 512GB + Apple Case": 525.0,
  "Inst 18M iPhone 17 Pro 512GB + Apple Case": 525.0,
  "Inst 24M iPhone 17 Pro 512GB + Apple Case": 525.0,
  "Inst 12M EM iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 18M EM iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 24M EM iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 12M STF iPhone 17 Pro 512GB + Apple Case": 503.0,
  "Inst 18M STF iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 24M STF iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 12M Ult Max iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 18M Ult Max iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 24M Ult Max iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 12M Ultimate iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 18M Ultimate iPhone 17 Pro 512GB + Apple Case": 495.0,
  "Inst 24M Ultimate iPhone 17 Pro 512GB + Apple Case": 495.0,
  "One Plan Max Inst 24M iPhone 17 Pro 512GB + Apple Case": 208.0,
  "One Plan Plus iPhone 17 Pro 512GB + Apple Case": 308.0,
  "Summer Cash iPhone 17 Pro 512GB": 506.0,
  "Summer Inst 12M iPhone 17 Pro 512GB": 506.0,
  "Summer Inst 18M iPhone 17 Pro 512GB": 506.0,
  "Summer Inst 24M iPhone 17 Pro 512GB": 506.0,
  "Summer One Plan Max Rental iPhone 17 Pro 512GB": 106.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 512GB": 206.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 512GB": 206.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 512GB": 306.0,
  "Summer Cash iPhone 17 Pro 512GB + Clear Case": 506.0,
  "Summer Inst 12M iPhone 17 Pro 512GB + Clear Case": 506.0,
  "Summer Inst 18M iPhone 17 Pro 512GB + Clear Case": 506.0,
  "Summer Inst 24M iPhone 17 Pro 512GB + Clear Case": 506.0,
  "Summer One Plan Max Rental iPhone 17 Pro 512GB + Clear Case": 106.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 512GB + Clear Case": 206.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 512GB + Clear Case": 206.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 512GB + Clear Case": 306.0,
  "Summer Cash iPhone 17 Pro 512GB + Silicone Case": 506.0,
  "Summer Inst 12M iPhone 17 Pro 512GB + Silicone Case": 506.0,
  "Summer Inst 18M iPhone 17 Pro 512GB + Silicone Case": 506.0,
  "Summer Inst 24M iPhone 17 Pro 512GB + Silicone Case": 506.0,
  "Summer One Plan Max Rental iPhone 17 Pro 512GB + Silicone Case": 106.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 512GB + Silicone Case": 206.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 512GB + Silicone Case": 206.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 512GB + Silicone Case": 306.0,
  "Summer Cash iPhone 17 Pro 512GB + Techwoven Case": 506.0,
  "Summer Inst 12M iPhone 17 Pro 512GB + Techwoven Case": 506.0,
  "Summer Inst 18M iPhone 17 Pro 512GB + Techwoven Case": 506.0,
  "Summer Inst 24M iPhone 17 Pro 512GB + Techwoven Case": 506.0,
  "Summer One Plan Max Rental iPhone 17 Pro 512GB + Techwoven Case": 106.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 512GB + Techwoven Case": 206.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 512GB + Techwoven Case": 206.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 512GB + Techwoven Case": 306.0,

  // --- Extracted from Pro 1TB.csv ---
  "Cash iPhone 17 Pro 1TB": 595.0,
  "Inst 12M EM iPhone 17 Pro 1TB": 577.0,
  "Inst 12M STF iPhone 17 Pro 1TB": 577.0,
  "Inst 12M Ult Max iPhone 17 Pro 1TB": 577.0,
  "Inst 12M Ultimate iPhone 17 Pro 1TB": 577.0,
  "Inst 18M EM iPhone 17 Pro 1TB": 577.0,
  "Inst 18M STF iPhone 17 Pro 1TB": 577.0,
  "Inst 18M Ult Max iPhone 17 Pro 1TB": 577.0,
  "Inst 18M Ultimate iPhone 17 Pro 1TB": 577.0,
  "Inst 24M EM iPhone 17 Pro 1TB": 577.0,
  "Inst 24M STF iPhone 17 Pro 1TB": 577.0,
  "Inst 24M Ult Max iPhone 17 Pro 1TB": 577.0,
  "Inst 24M Ultimate iPhone 17 Pro 1TB": 577.0,
  "Inst 12M iPhone 17 Pro 1TB + Apple Case": 618.0,
  "Inst 18M iPhone 17 Pro 1TB + Apple Case": 618.0,
  "Inst 24M iPhone 17 Pro 1TB + Apple Case": 618.0,
  "Inst 12M EM iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 18M EM iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 24M EM iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 12M STF iPhone 17 Pro 1TB + Apple Case": 594.0,
  "Inst 18M STF iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 24M STF iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 12M Ult Max iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 18M Ult Max iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 24M Ult Max iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 12M Ultimate iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 18M Ultimate iPhone 17 Pro 1TB + Apple Case": 586.0,
  "Inst 24M Ultimate iPhone 17 Pro 1TB + Apple Case": 586.0,
  "One Plan Max Inst 24M iPhone 17 Pro 1TB + Apple Case": 298.0,
  "One Plan Plus iPhone 17 Pro 1TB + Apple Case": 398.0,
  "Summer Cash iPhone 17 Pro 1TB": 599.0,
  "Summer Inst 12M iPhone 17 Pro 1TB": 599.0,
  "Summer Inst 18M iPhone 17 Pro 1TB": 599.0,
  "Summer Inst 24M iPhone 17 Pro 1TB": 599.0,
  "Summer One Plan Max Rental iPhone 17 Pro 1TB": 199.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 1TB": 299.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 1TB": 299.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 1TB": 399.0,
  "Summer Cash iPhone 17 Pro 1TB + Clear Case": 599.0,
  "Summer Inst 12M iPhone 17 Pro 1TB + Clear Case": 599.0,
  "Summer Inst 18M iPhone 17 Pro 1TB + Clear Case": 599.0,
  "Summer Inst 24M iPhone 17 Pro 1TB + Clear Case": 599.0,
  "Summer One Plan Max Rental iPhone 17 Pro 1TB + Clear Case": 199.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 1TB + Clear Case": 299.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 1TB + Clear Case": 299.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 1TB + Clear Case": 399.0,
  "Summer Cash iPhone 17 Pro 1TB + Silicone Case": 599.0,
  "Summer Inst 12M iPhone 17 Pro 1TB + Silicone Case": 599.0,
  "Summer Inst 18M iPhone 17 Pro 1TB + Silicone Case": 599.0,
  "Summer Inst 24M iPhone 17 Pro 1TB + Silicone Case": 599.0,
  "Summer One Plan Max Rental iPhone 17 Pro 1TB + Silicone Case": 199.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 1TB + Silicone Case": 299.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 1TB + Silicone Case": 299.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 1TB + Silicone Case": 399.0,
  "Summer Cash iPhone 17 Pro 1TB + Techwoven Case": 599.0,
  "Summer Inst 12M iPhone 17 Pro 1TB + Techwoven Case": 599.0,
  "Summer Inst 18M iPhone 17 Pro 1TB + Techwoven Case": 599.0,
  "Summer Inst 24M iPhone 17 Pro 1TB + Techwoven Case": 599.0,
  "Summer One Plan Max Rental iPhone 17 Pro 1TB + Techwoven Case": 199.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 1TB + Techwoven Case": 299.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 1TB + Techwoven Case": 299.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 1TB + Techwoven Case": 399.0,

  // --- Extracted from Pro 2TB.csv ---
  "Cash iPhone 17 Pro 2TB": 688.0,
  "Inst 12M EM iPhone 17 Pro 2TB": 668.0,
  "Inst 12M STF iPhone 17 Pro 2TB": 668.0,
  "Inst 12M Ult Max iPhone 17 Pro 2TB": 668.0,
  "Inst 12M Ultimate iPhone 17 Pro 2TB": 668.0,
  "Inst 18M EM iPhone 17 Pro 2TB": 668.0,
  "Inst 18M STF iPhone 17 Pro 2TB": 668.0,
  "Inst 18M Ult Max iPhone 17 Pro 2TB": 668.0,
  "Inst 18M Ultimate iPhone 17 Pro 2TB": 668.0,
  "Inst 24M EM iPhone 17 Pro 2TB": 668.0,
  "Inst 24M STF iPhone 17 Pro 2TB": 668.0,
  "Inst 24M Ult Max iPhone 17 Pro 2TB": 668.0,
  "Inst 24M Ultimate iPhone 17 Pro 2TB": 668.0,
  "Inst 12M iPhone 17 Pro 2TB + Apple Case": 711.0,
  "Inst 18M iPhone 17 Pro 2TB + Apple Case": 711.0,
  "Inst 24M iPhone 17 Pro 2TB + Apple Case": 711.0,
  "Inst 12M EM iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 18M EM iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 24M EM iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 12M STF iPhone 17 Pro 2TB + Apple Case": 685.0,
  "Inst 18M STF iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 24M STF iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 12M Ult Max iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 18M Ult Max iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 24M Ult Max iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 12M Ultimate iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 18M Ultimate iPhone 17 Pro 2TB + Apple Case": 677.0,
  "Inst 24M Ultimate iPhone 17 Pro 2TB + Apple Case": 677.0,
  "One Plan Max Inst 24M iPhone 17 Pro 2TB + Apple Case": 389.0,
  "One Plan Plus iPhone 17 Pro 2TB + Apple Case": 489.0,
  "Summer Cash iPhone 17 Pro 2TB": 692.0,
  "Summer Inst 12M iPhone 17 Pro 2TB": 692.0,
  "Summer Inst 18M iPhone 17 Pro 2TB": 692.0,
  "Summer Inst 24M iPhone 17 Pro 2TB": 692.0,
  "Summer One Plan Max Rental iPhone 17 Pro 2TB": 292.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 2TB": 392.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 2TB": 392.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 2TB": 492.0,
  "Summer Cash iPhone 17 Pro 2TB + Clear Case": 692.0,
  "Summer Inst 12M iPhone 17 Pro 2TB + Clear Case": 692.0,
  "Summer Inst 18M iPhone 17 Pro 2TB + Clear Case": 692.0,
  "Summer Inst 24M iPhone 17 Pro 2TB + Clear Case": 692.0,
  "Summer One Plan Max Rental iPhone 17 Pro 2TB + Clear Case": 292.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 2TB + Clear Case": 392.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 2TB + Clear Case": 392.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 2TB + Clear Case": 492.0,
  "Summer Cash iPhone 17 Pro 2TB + Silicone Case": 692.0,
  "Summer Inst 12M iPhone 17 Pro 2TB + Silicone Case": 692.0,
  "Summer Inst 18M iPhone 17 Pro 2TB + Silicone Case": 692.0,
  "Summer Inst 24M iPhone 17 Pro 2TB + Silicone Case": 692.0,
  "Summer One Plan Max Rental iPhone 17 Pro 2TB + Silicone Case": 292.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 2TB + Silicone Case": 392.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 2TB + Silicone Case": 392.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 2TB + Silicone Case": 492.0,
  "Summer Cash iPhone 17 Pro 2TB + Techwoven Case": 692.0,
  "Summer Inst 12M iPhone 17 Pro 2TB + Techwoven Case": 692.0,
  "Summer Inst 18M iPhone 17 Pro 2TB + Techwoven Case": 692.0,
  "Summer Inst 24M iPhone 17 Pro 2TB + Techwoven Case": 692.0,
  "Summer One Plan Max Rental iPhone 17 Pro 2TB + Techwoven Case": 292.0,
  "Summer One Plan Max 2 - iPhone 17 Pro 2TB + Techwoven Case": 392.0,
  "Summer One Plan Plus Rental iPhone 17 Pro 2TB + Techwoven Case": 392.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro 2TB + Techwoven Case": 492.0,

  // --- Extracted from Pro max 512.csv ---
  "Cash iPhone 17 Pro Max 512GB": 548.0,
  "Inst 12M EM iPhone 17 Pro Max 512GB": 532.0,
  "Inst 12M STF iPhone 17 Pro Max 512GB": 532.0,
  "Inst 12M Ult Max iPhone 17 Pro Max 512GB": 532.0,
  "Inst 12M Ultimate iPhone 17 Pro Max 512GB": 532.0,
  "Inst 18M EM iPhone 17 Pro Max 512GB": 532.0,
  "Inst 18M STF iPhone 17 Pro Max 512GB": 532.0,
  "Inst 18M Ult Max iPhone 17 Pro Max 512GB": 532.0,
  "Inst 18M Ultimate iPhone 17 Pro Max 512GB": 532.0,
  "Inst 24M EM iPhone 17 Pro Max 512GB": 532.0,
  "Inst 24M STF iPhone 17 Pro Max 512GB": 532.0,
  "Inst 24M Ult Max iPhone 17 Pro Max 512GB": 532.0,
  "Inst 24M Ultimate iPhone 17 Pro Max 512GB": 532.0,
  "Inst 12M iPhone 17 Pro Max 512GB + Apple Case": 575.0,
  "Inst 18M iPhone 17 Pro Max 512GB + Apple Case": 575.0,
  "Inst 24M iPhone 17 Pro Max 512GB + Apple Case": 575.0,
  "Inst 12M EM iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 18M EM iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 24M EM iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 12M STF iPhone 17 Pro Max 512GB + Apple Case": 549.0,
  "Inst 18M STF iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 24M STF iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 12M Ult Max iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 18M Ult Max iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 24M Ult Max iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 12M Ultimate iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 18M Ultimate iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "Inst 24M Ultimate iPhone 17 Pro Max 512GB + Apple Case": 541.0,
  "One Plan Max Inst 24M iPhone 17 Pro Max 512GB + Apple Case": 254.0,
  "One Plan Plus iPhone 17 Pro Max 512GB + Apple Case": 354.0,
  "Summer Cash iPhone 17 Pro Max 512GB": 552.0,
  "Summer Inst 12M iPhone 17 Pro Max 512GB": 552.0,
  "Summer Inst 18M iPhone 17 Pro Max 512GB": 552.0,
  "Summer Inst 24M iPhone 17 Pro Max 512GB": 552.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 512GB": 152.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 512GB": 252.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 512GB": 252.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 512GB": 352.0,
  "Summer Cash iPhone 17 Pro Max 512GB + Clear Case": 552.0,
  "Summer Inst 12M iPhone 17 Pro Max 512GB + Clear Case": 552.0,
  "Summer Inst 18M iPhone 17 Pro Max 512GB + Clear Case": 552.0,
  "Summer Inst 24M iPhone 17 Pro Max 512GB + Clear Case": 552.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 512GB + Clear Case": 152.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 512GB + Clear Case": 252.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 512GB + Clear Case": 252.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 512GB + Clear Case": 352.0,
  "Summer Cash iPhone 17 Pro Max 512GB + Silicone Case": 552.0,
  "Summer Inst 12M iPhone 17 Pro Max 512GB + Silicone Case": 552.0,
  "Summer Inst 18M iPhone 17 Pro Max 512GB + Silicone Case": 552.0,
  "Summer Inst 24M iPhone 17 Pro Max 512GB + Silicone Case": 552.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 512GB + Silicone Case": 152.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 512GB + Silicone Case": 252.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 512GB + Silicone Case": 252.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 512GB + Silicone Case": 352.0,
  "Summer Cash iPhone 17 Pro Max 512GB + Techwoven Case": 552.0,
  "Summer Inst 12M iPhone 17 Pro Max 512GB + Techwoven Case": 552.0,
  "Summer Inst 18M iPhone 17 Pro Max 512GB + Techwoven Case": 552.0,
  "Summer Inst 24M iPhone 17 Pro Max 512GB + Techwoven Case": 552.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 512GB + Techwoven Case": 152.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 512GB + Techwoven Case": 252.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 512GB + Techwoven Case": 252.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 512GB + Techwoven Case": 352.0,

  // --- Extracted from Pro max 1 TB.csv ---
  "Cash iPhone 17 Pro Max 1TB": 641.0,
  "Inst 12M EM iPhone 17 Pro Max 1TB": 623.0,
  "Inst 12M STF iPhone 17 Pro Max 1TB": 623.0,
  "Inst 12M Ult Max iPhone 17 Pro Max 1TB": 623.0,
  "Inst 12M Ultimate iPhone 17 Pro Max 1TB": 623.0,
  "Inst 18M EM iPhone 17 Pro Max 1TB": 623.0,
  "Inst 18M STF iPhone 17 Pro Max 1TB": 623.0,
  "Inst 18M Ult Max iPhone 17 Pro Max 1TB": 623.0,
  "Inst 18M Ultimate iPhone 17 Pro Max 1TB": 623.0,
  "Inst 24M EM iPhone 17 Pro Max 1TB": 623.0,
  "Inst 24M STF iPhone 17 Pro Max 1TB": 623.0,
  "Inst 24M Ult Max iPhone 17 Pro Max 1TB": 623.0,
  "Inst 24M Ultimate iPhone 17 Pro Max 1TB": 623.0,
  "Inst 12M iPhone 17 Pro Max 1TB + Apple Case": 665.0,
  "Inst 18M iPhone 17 Pro Max 1TB + Apple Case": 665.0,
  "Inst 24M iPhone 17 Pro Max 1TB + Apple Case": 665.0,
  "Inst 12M EM iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 18M EM iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 24M EM iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 12M STF iPhone 17 Pro Max 1TB + Apple Case": 640.0,
  "Inst 18M STF iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 24M STF iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 12M Ult Max iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 18M Ult Max iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 24M Ult Max iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 12M Ultimate iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 18M Ultimate iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "Inst 24M Ultimate iPhone 17 Pro Max 1TB + Apple Case": 632.0,
  "One Plan Max Inst 24M iPhone 17 Pro Max 1TB + Apple Case": 344.0,
  "One Plan Plus iPhone 17 Pro Max 1TB + Apple Case": 444.0,
  "Summer Cash iPhone 17 Pro Max 1TB": 645.0,
  "Summer Inst 12M iPhone 17 Pro Max 1TB": 645.0,
  "Summer Inst 18M iPhone 17 Pro Max 1TB": 645.0,
  "Summer Inst 24M iPhone 17 Pro Max 1TB": 645.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 1TB": 245.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 1TB": 345.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 1TB": 345.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 1TB": 445.0,
  "Summer Cash iPhone 17 Pro Max 1TB + Clear Case": 645.0,
  "Summer Inst 12M iPhone 17 Pro Max 1TB + Clear Case": 645.0,
  "Summer Inst 18M iPhone 17 Pro Max 1TB + Clear Case": 645.0,
  "Summer Inst 24M iPhone 17 Pro Max 1TB + Clear Case": 645.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 1TB + Clear Case": 245.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 1TB + Clear Case": 345.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 1TB + Clear Case": 345.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 1TB + Clear Case": 445.0,
  "Summer Cash iPhone 17 Pro Max 1TB + Silicone Case": 645.0,
  "Summer Inst 12M iPhone 17 Pro Max 1TB + Silicone Case": 645.0,
  "Summer Inst 18M iPhone 17 Pro Max 1TB + Silicone Case": 645.0,
  "Summer Inst 24M iPhone 17 Pro Max 1TB + Silicone Case": 645.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 1TB + Silicone Case": 245.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 1TB + Silicone Case": 345.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 1TB + Silicone Case": 345.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 1TB + Silicone Case": 445.0,
  "Summer Cash iPhone 17 Pro Max 1TB + Techwoven Case": 645.0,
  "Summer Inst 12M iPhone 17 Pro Max 1TB + Techwoven Case": 645.0,
  "Summer Inst 18M iPhone 17 Pro Max 1TB + Techwoven Case": 645.0,
  "Summer Inst 24M iPhone 17 Pro Max 1TB + Techwoven Case": 645.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 1TB + Techwoven Case": 245.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 1TB + Techwoven Case": 345.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 1TB + Techwoven Case": 345.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 1TB + Techwoven Case": 445.0,

  // --- Extracted from Pro Max 2TB.csv ---
  "Cash iPhone 17 Pro Max 2TB": 734.0,
  "Inst 12M EM iPhone 17 Pro Max 2TB": 714.0,
  "Inst 12M STF iPhone 17 Pro Max 2TB": 714.0,
  "Inst 12M Ult Max iPhone 17 Pro Max 2TB": 714.0,
  "Inst 12M Ultimate iPhone 17 Pro Max 2TB": 714.0,
  "Inst 18M EM iPhone 17 Pro Max 2TB": 714.0,
  "Inst 18M STF iPhone 17 Pro Max 2TB": 714.0,
  "Inst 18M Ult Max iPhone 17 Pro Max 2TB": 714.0,
  "Inst 18M Ultimate iPhone 17 Pro Max 2TB": 714.0,
  "Inst 24M EM iPhone 17 Pro Max 2TB": 714.0,
  "Inst 24M STF iPhone 17 Pro Max 2TB": 714.0,
  "Inst 24M Ult Max iPhone 17 Pro Max 2TB": 714.0,
  "Inst 24M Ultimate iPhone 17 Pro Max 2TB": 714.0,
  "Inst 12M iPhone 17 Pro Max 2TB + Apple Case": 757.0,
  "Inst 18M iPhone 17 Pro Max 2TB + Apple Case": 757.0,
  "Inst 24M iPhone 17 Pro Max 2TB + Apple Case": 757.0,
  "Inst 12M EM iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 18M EM iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 24M EM iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 12M STF iPhone 17 Pro Max 2TB + Apple Case": 731.0,
  "Inst 18M STF iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 24M STF iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 12M Ult Max iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 18M Ult Max iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 24M Ult Max iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 12M Ultimate iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 18M Ultimate iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "Inst 24M Ultimate iPhone 17 Pro Max 2TB + Apple Case": 723.0,
  "One Plan Max Inst 24M iPhone 17 Pro Max 2TB + Apple Case": 435.0,
  "One Plan Plus iPhone 17 Pro Max 2TB + Apple Case": 535.0,
  "Summer Cash iPhone 17 Pro Max 2TB": 738.0,
  "Summer Inst 12M iPhone 17 Pro Max 2TB": 738.0,
  "Summer Inst 18M iPhone 17 Pro Max 2TB": 738.0,
  "Summer Inst 24M iPhone 17 Pro Max 2TB": 738.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 2TB": 338.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 2TB": 438.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 2TB": 438.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 2TB": 538.0,
  "Summer Cash iPhone 17 Pro Max 2TB + Clear Case": 738.0,
  "Summer Inst 12M iPhone 17 Pro Max 2TB + Clear Case": 738.0,
  "Summer Inst 18M iPhone 17 Pro Max 2TB + Clear Case": 738.0,
  "Summer Inst 24M iPhone 17 Pro Max 2TB + Clear Case": 738.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 2TB + Clear Case": 338.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 2TB + Clear Case": 438.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 2TB + Clear Case": 438.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 2TB + Clear Case": 538.0,
  "Summer Cash iPhone 17 Pro Max 2TB + Silicone Case": 738.0,
  "Summer Inst 12M iPhone 17 Pro Max 2TB + Silicone Case": 738.0,
  "Summer Inst 18M iPhone 17 Pro Max 2TB + Silicone Case": 738.0,
  "Summer Inst 24M iPhone 17 Pro Max 2TB + Silicone Case": 738.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 2TB + Silicone Case": 338.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 2TB + Silicone Case": 438.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 2TB + Silicone Case": 438.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 2TB + Silicone Case": 538.0,
  "Summer Cash iPhone 17 Pro Max 2TB + Techwoven Case": 738.0,
  "Summer Inst 12M iPhone 17 Pro Max 2TB + Techwoven Case": 738.0,
  "Summer Inst 18M iPhone 17 Pro Max 2TB + Techwoven Case": 738.0,
  "Summer Inst 24M iPhone 17 Pro Max 2TB + Techwoven Case": 738.0,
  "Summer One Plan Max Rental iPhone 17 Pro Max 2TB + Techwoven Case": 338.0,
  "Summer One Plan Max 2 - iPhone 17 Pro Max 2TB + Techwoven Case": 438.0,
  "Summer One Plan Plus Rental iPhone 17 Pro Max 2TB + Techwoven Case": 438.0,
  "Summer One Plan Plus 2 - iPhone 17 Pro Max 2TB + Techwoven Case": 538.0
};

// Postpaid Package Caps
const PKG_CAPS = {
  '10.5': { new: 200, existing: 300 },
  '11': { new: 400, existing: 500 },
  '12.5': { new: 400, existing: 500 },
  '15': { new: 400, existing: 600 },
  '22': { new: 400, existing: 600 }
};

// Standalone Package Caps
const SA_PKG_CAPS = {
  '16': { new: 800, existing: 800 },
  '18.5': { new: 800, existing: 800 },
  '30': { new: 1000, existing: 1000 },
  '44': { new: 1000, existing: 1000 },
  '110': { new: Infinity, existing: Infinity }
};

const INSURANCE_VAT_PLANS = {
  device: { 12: 3.90, 18: 5.85, 24: 7.80 },
  international: { 12: 5.10, 18: 7.65, 24: 10.20 },
  vip: { 12: 6.30, 18: 9.45, 24: 12.60 }
};

const INSURANCE_MONTHLY_RATES = {
  device: 3.25,
  international: 4.25,
  vip: 5.25
};

let tomSelectInstance = null;

// --- DOM Cache ---
const elements = {
  // Postpaid Elements
  customer: document.getElementById('customer'),
  package: document.getElementById('package'),
  risk: document.getElementById('risk'),
  term: document.getElementById('term'),
  insurance: document.getElementById('insurance'),
  appleCharges: document.getElementById('appleCharges'),
  regFeeCheck: document.getElementById('regFeeCheck'),
  deviceInput: document.getElementById('device'),
  deviceBundleSelect: document.getElementById('deviceBundle'),
  cap: document.getElementById('cap'),
  gap: document.getElementById('gap'),
  deviceMonthly: document.getElementById('deviceMonthly'),
  insuranceAmount: document.getElementById('insuranceAmount'),
  monthly: document.getElementById('monthly'),
  monthlyWithRental: document.getElementById('monthlyWithRental'),
  riskDP: document.getElementById('riskDP'),
  vat: document.getElementById('vat'),
  insuranceVat: document.getElementById('insuranceVat'),
  total: document.getElementById('total'),
  resetBtn: document.getElementById('resetBtn'),

  // Standalone Elements
  sa_customer: document.getElementById('sa_customer'),
  sa_package: document.getElementById('sa_package'),
  sa_risk: document.getElementById('sa_risk'),
  sa_term: document.getElementById('sa_term'),
  sa_insurance: document.getElementById('sa_insurance'),
  sa_deviceInput: document.getElementById('sa_device'),
  sa_regFeeCheck: document.getElementById('sa_regFeeCheck'),
  sa_cap: document.getElementById('sa_cap'),
  sa_gap: document.getElementById('sa_gap'),
  sa_deviceMonthly: document.getElementById('sa_deviceMonthly'),
  sa_insuranceAmount: document.getElementById('sa_insuranceAmount'),
  sa_monthly: document.getElementById('sa_monthly'),
  sa_monthlyWithRental: document.getElementById('sa_monthlyWithRental'),
  sa_riskDP: document.getElementById('sa_riskDP'),
  sa_vat: document.getElementById('sa_vat'),
  sa_insuranceVat: document.getElementById('sa_insuranceVat'),
  sa_total: document.getElementById('sa_total'),
  sa_resetBtn: document.getElementById('sa_resetBtn')
};

// --- Helper Functions ---
function formatBD(amount) {
  if (!isFinite(amount)) return "No Cap";
  return `BD ${Number(amount).toFixed(2)}`;
}

// --- Main Calculation Logic (Postpaid) ---
function calculateTotal() {
  const deviceVal = parseFloat(elements.deviceInput.value) || 0;
  const termVal = Number(elements.term.value);
  const riskMonths = Number(elements.risk.value); 
  const customerType = elements.customer.value;
  const selectedPkg = elements.package.value;
  const packageRentalFee = parseFloat(selectedPkg) || 0;
  const insuranceType = elements.insurance.value;
  const addAppleCharges = elements.appleCharges ? elements.appleCharges.checked : false;
  const addRegFee = elements.regFeeCheck ? elements.regFeeCheck.checked : false;

  const cap = (PKG_CAPS[selectedPkg] && PKG_CAPS[selectedPkg][customerType]) || 0;
  
  // 1. More Than Cap
  const gap = Math.max(0, deviceVal - cap);

  let insuranceVat = 0;
  let insuranceMonthly = 0;

  if (insuranceType !== '0') {
    // 2. Insurance VAT
    if (INSURANCE_VAT_PLANS[insuranceType]) {
      insuranceVat = INSURANCE_VAT_PLANS[insuranceType][termVal] || 0;
    }
    if (INSURANCE_MONTHLY_RATES[insuranceType]) {
      insuranceMonthly = INSURANCE_MONTHLY_RATES[insuranceType];
    }
  }

  const amountToFinance = Math.min(deviceVal, cap);
  const baseDeviceMonthly = termVal > 0 ? amountToFinance / termVal : 0;
  
  let deviceMonthly = baseDeviceMonthly;
  if (addAppleCharges) {
    deviceMonthly += 1.100;
  }

  // 3. Device VAT
  const vat = deviceVal * 0.10;
  
  // 4. Risk Down Payment (Excluding Apple monthly charges)
  const riskDP = baseDeviceMonthly * riskMonths;
  
  const regFee = addRegFee ? 5.500 : 0;

  // UPFRONT FORMULA: Insurance VAT + Device VAT + Risk Down Payment + More Than Cap
  const totalUpfront = insuranceVat + vat + riskDP + gap;
  
  const totalMonthly = deviceMonthly + insuranceMonthly + regFee;
  const totalMonthlyWithRental = totalMonthly + packageRentalFee;

  // Render UI
  elements.cap.textContent = formatBD(cap);
  elements.gap.textContent = formatBD(gap);
  elements.deviceMonthly.textContent = formatBD(deviceMonthly);
  elements.insuranceAmount.textContent = formatBD(insuranceMonthly);
  elements.riskDP.textContent = formatBD(riskDP);
  elements.vat.textContent = formatBD(vat);
  elements.insuranceVat.textContent = formatBD(insuranceVat);
  elements.total.textContent = formatBD(totalUpfront);
  elements.monthly.textContent = formatBD(totalMonthly);
  elements.monthlyWithRental.textContent = formatBD(totalMonthlyWithRental);
}

// --- Main Calculation Logic (Standalone) ---
function calculateStandaloneTotal() {
  const deviceVal = parseFloat(elements.sa_deviceInput.value) || 0;
  const termVal = Number(elements.sa_term.value);
  const riskMonths = Number(elements.sa_risk.value);
  const customerType = elements.sa_customer.value;
  const selectedPkg = elements.sa_package.value;
  const packageRentalFee = parseFloat(selectedPkg) || 0;
  const insuranceType = elements.sa_insurance.value;

  const cap = (SA_PKG_CAPS[selectedPkg] && SA_PKG_CAPS[selectedPkg][customerType]) || Infinity;
  
  // 1. More Than Cap
  const gap = isFinite(cap) ? Math.max(0, deviceVal - cap) : 0;

  let insuranceVat = 0;
  let insuranceMonthly = 0;

  if (insuranceType !== '0') {
    // 2. Insurance VAT
    if (INSURANCE_VAT_PLANS[insuranceType]) {
      insuranceVat = INSURANCE_VAT_PLANS[insuranceType][termVal] || 0;
    }
    if (INSURANCE_MONTHLY_RATES[insuranceType]) {
      insuranceMonthly = INSURANCE_MONTHLY_RATES[insuranceType];
    }
  }

  const amountToFinance = isFinite(cap) ? Math.min(deviceVal, cap) : deviceVal;
  const deviceMonthly = termVal > 0 ? amountToFinance / termVal : 0;
  
  // 3. Device VAT
  const vat = deviceVal * 0.10;

  // 4. Risk Down Payment
  const riskDP = deviceMonthly * riskMonths;
  
  // UPFRONT FORMULA: Insurance VAT + Device VAT + Risk Down Payment + More Than Cap
  const totalUpfront = insuranceVat + vat + riskDP + gap;
  
  const totalMonthly = deviceMonthly + insuranceMonthly;
  const totalMonthlyWithRental = totalMonthly + packageRentalFee;

  // Render Standalone UI
  elements.sa_cap.textContent = formatBD(cap);
  elements.sa_gap.textContent = formatBD(gap);
  elements.sa_deviceMonthly.textContent = formatBD(deviceMonthly);
  elements.sa_insuranceAmount.textContent = formatBD(insuranceMonthly);
  elements.sa_riskDP.textContent = formatBD(riskDP);
  elements.sa_vat.textContent = formatBD(vat);
  elements.sa_insuranceVat.textContent = formatBD(insuranceVat);
  elements.sa_total.textContent = formatBD(totalUpfront);
  elements.sa_monthly.textContent = formatBD(totalMonthly);
  elements.sa_monthlyWithRental.textContent = formatBD(totalMonthlyWithRental);
}

// --- Initialize TomSelect ---
function initTomSelect() {
  if (!elements.deviceBundleSelect) return;

  const options = Object.entries(BUNDLES_DATA).map(([name, price]) => ({
    value: price,
    text: name,
    price: price
  }));

  tomSelectInstance = new TomSelect('#deviceBundle', {
    options: options,
    valueField: 'value',
    labelField: 'text',
    searchField: 'text',
    placeholder: 'Search bundle...',
    maxOptions: null,
    render: {
      option: function(data, escape) {
        return `<div class="bundle-option">
                  <span>${escape(data.text)}</span>
                  <span class="bundle-price">BD ${Number(data.price).toFixed(3)}</span>
                </div>`;
      },
      item: function(data, escape) {
        return `<div>${escape(data.text)}</div>`;
      }
    },
    onChange: function(val) {
      if (val) {
        elements.deviceInput.value = val;
        calculateTotal();
      }
    }
  });
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Postpaid Listeners
  const postpaidInputs = [
    elements.customer,
    elements.package,
    elements.risk,
    elements.term,
    elements.insurance,
    elements.appleCharges,
    elements.regFeeCheck,
    elements.deviceInput
  ];

  postpaidInputs.forEach(input => {
    if (input) {
      input.addEventListener('change', calculateTotal);
      input.addEventListener('input', calculateTotal);
    }
  });

  // Clear TomSelect dropdown when device input is typed manually
  elements.deviceInput.addEventListener('input', () => {
    if (tomSelectInstance && tomSelectInstance.getValue()) {
      tomSelectInstance.clear(true);
    }
  });

  // Postpaid Reset
  elements.resetBtn.addEventListener('click', () => {
    elements.customer.value = 'existing';
    elements.package.value = '12.5';
    elements.risk.value = '2';
    elements.term.value = '24';
    elements.insurance.value = 'device';
    elements.deviceInput.value = '';
    if (elements.appleCharges) elements.appleCharges.checked = false;
    if (elements.regFeeCheck) elements.regFeeCheck.checked = false;
    if (tomSelectInstance) tomSelectInstance.clear();
    calculateTotal();
  });

  // Standalone Listeners
  const saInputs = [
    elements.sa_customer,
    elements.sa_package,
    elements.sa_risk,
    elements.sa_term,
    elements.sa_insurance,
    elements.sa_regFeeCheck,
    elements.sa_deviceInput
  ];

  saInputs.forEach(input => {
    if (input) {
      input.addEventListener('change', calculateStandaloneTotal);
      input.addEventListener('input', calculateStandaloneTotal);
    }
  });

  // Standalone Reset
  elements.sa_resetBtn.addEventListener('click', () => {
    elements.sa_customer.value = 'existing';
    elements.sa_package.value = '16';
    elements.sa_risk.value = '0';
    elements.sa_term.value = '24';
    elements.sa_insurance.value = '0';
    elements.sa_deviceInput.value = '';
    if (elements.sa_regFeeCheck) elements.sa_regFeeCheck.checked = false;
    calculateStandaloneTotal();
  });

  // Tab Navigation
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
  });
}

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTomSelect();
  setupEventListeners();
  calculateTotal();
  calculateStandaloneTotal();
});
