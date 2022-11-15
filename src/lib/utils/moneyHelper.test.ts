import { describe, expect, it } from "vitest";
import { sumInvoices, sumLineItems } from "$lib/utils/moneyHelper";
import data from "../../seed.json";

const invoices: Invoice = data.invoices;

describe("moneyHelpers", () => {
  it("sums individual line items", () => {
    expect(sumLineItems(invoices[2].lineItems)).toBe(340099);
  });

  it("totals all line items", () => {
    expect(sumInvoices(invoices)).toBe(1016581);
  });
});
