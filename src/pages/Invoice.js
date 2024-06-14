import React from "react";

const Invoice = () => {
  const invoiceData = [
    { description: "Communication", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Asset Gathering", qty: 3, unitPrice: 75, total: 225.0 },
    { description: "Design Development", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Animation", qty: 20, unitPrice: 75, total: 1500.0 },
    { description: "Animation Revisions", qty: 10, unitPrice: 75, total: 750.0 },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
    { description: "Communication", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Asset Gathering", qty: 3, unitPrice: 75, total: 225.0 },
    { description: "Design Development", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Animation", qty: 20, unitPrice: 75, total: 1500.0 },
    { description: "Animation Revisions", qty: 10, unitPrice: 75, total: 750.0 },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
    { description: "Communication", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Asset Gathering", qty: 3, unitPrice: 75, total: 225.0 },
    { description: "Design Development", qty: 5, unitPrice: 75, total: 375.0 },
    { description: "Animation", qty: 20, unitPrice: 75, total: 1500.0 },
    { description: "Animation Revisions", qty: 10, unitPrice: 75, total: 750.0 },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
    { description: "HST", qty: "HST", unitPrice: "13%", total: 419.25 },
  ];

  const calculateTotals = (items) => {
    const totalQty = items.reduce((acc, item) => acc + (typeof item.qty === 'number' ? item.qty : 0), 0);
    const totalUnitPrice = items.reduce((acc, item) => acc + (typeof item.unitPrice === 'number' ? item.unitPrice : 0), 0);
    const totalAmount = items.reduce((acc, item) => acc + item.total, 0);

    return { totalQty, totalUnitPrice, totalAmount };
  };

  const totals = calculateTotals(invoiceData);

  return (
    <>
      <div className="container bor-updn">
        <div className="container clr-tp ">
          <div className="row d-flex justify-content-center align-items-center py-4">
            <div className="col-2">
              <img
                className="w-50"
                src="assets/images/Winterbear-Favicon32x32.png"
                alt="Ping"
              />
            </div>
            <div className="col-4">
              <h4>WINTER BEAR</h4>
              <p>
                Official BT21 & LINE FRIENDS
                <br /> Merchandise in India.
                <br />
                Contact No: +91 1234567890
              </p>
            </div>
            <div className="col-4">
              <p>Date: 01/01/2024</p>
              <hr />
              <p>Invoice No: 123676d3dr456</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="fs-6 text-end px-2 py-2">
          Payment terms (due on receipt, due in X days)
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <h5>BILL TO</h5>
            <p>Contact Name: Afreen</p>
            <p>Company Name: something</p>
            <p>
              Address: Official BT21 & LINE FRIENDS
              <br /> Merchandise in India.
            </p>
            <p>Phone: +91 1234567890</p>
            <p>Email: abcd@gmail.com</p>
          </div>
          <div className="col-5">
            <h5>SHIP TO</h5>
            <p>Name: xyz</p>
            <p>Company Name: something</p>
            <p>
              Address: Official BT21 & LINE FRIENDS
              <br /> Merchandise in India.
            </p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
        <div className="d-block mx-auto py-4" id="table">
          <table className="w-100">
            <thead>
              <tr className="tabletitle title-pad">
                <th className="item">
                  <h5>Item Description</h5>
                </th>
                <th className="Hours">
                  <h5>Qty</h5>
                </th>
                <th className="Rate">
                  <h5>Unit Price</h5>
                </th>
                <th className="subtotal">
                  <h5>Total</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((item, index) => (
                <tr className="service" key={index}>
                  <td className="tableitem">
                    <p className="itemtext">{item.description}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">{item.qty}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">₹{item.unitPrice}</p>
                  </td>
                  <td className="tableitem">
                    <p className="itemtext">₹{item.total}</p>
                  </td>
                </tr>
              ))}
              <tr className="tabletitle">
                <td className="tableitem">
                  <h5>Total</h5>
                </td>
                <td className="tableitem">
                  <h5>{totals.totalQty}</h5>
                </td>
                <td className="tableitem">
                  <h5>₹{totals.totalUnitPrice}</h5>
                </td>
                <td className="tableitem">
                  <h5>₹{totals.totalAmount}</h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row sub-total">
          <div className="col-5">Remarks / Payment Instructions:
          </div>
          <div className="col-5">
            <p>SUBTOTAL:</p>
            <p>DISCOUNT:
            </p>
            <p>SUBTOTAL LESS DISCOUNT:
            </p>
            <p>TAX RATE:
            </p>
            <p>TOTAL TAX:
            </p>
            <p>SHIPPING/HANDLING:
            </p>
            <p className="clr-tp p-3"><b>BALANCE DUE:</b></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
