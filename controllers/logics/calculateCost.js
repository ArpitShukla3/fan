export default function calculateCost(components) {
    const parts = [];
    const PartsPrice = [
      10.28, 24.07, 33.3, 25.94, 32.39, 18.77, 15.13, 20.0, 42.31, 45.0, 45.0,
      30.0,
    ];
    const PartsName = [
      "LED Screen",
      "OLED Screen",
      "AMOLED Screen",
      "Wide-Angle Camera",
      "Ultra-Wide-Angle Camera",
      "USB-C Port",
      "Micro-USB Port",
      "Lightning Port",
      "Android OS",
      "iOS OS",
      "Metallic Body",
      "Plastic Body",
    ];
    let cost = 0;
    components.forEach((element) => {
      cost = cost + PartsPrice[element.charCodeAt(0) - "A".charCodeAt(0)];
      parts.push(PartsName[element.charCodeAt(0) - "A".charCodeAt(0)]);
    });
    return { cost, parts };
  }
  