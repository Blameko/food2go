function format(value) {
  const formatter = new Intl.NumberFormat("ph-PH", {
    style: "currency",
    currency: "PHP",
  });

  return formatter.format(value);
}

module.exports = { format };
