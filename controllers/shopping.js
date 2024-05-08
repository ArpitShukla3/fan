import allComponentsIncluded from "./logics/allComponentsIncluded.js";
import calculateCost from "./logics/calculateCost.js";

export default function shopping(req, res) {
  const { components } = req.body;
  if (allComponentsIncluded(components)) {
    const { cost, parts } = calculateCost(components);
    return res.status(200).json({
      success: true,
      order_id: "some_id",
      cost: cost,
      parts: parts,
    });
  }
  return res.status(500).json({
    success: false,
    message: "Error occurred",
  });
}