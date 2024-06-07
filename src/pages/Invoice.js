import React from "react";

const Invoice = () => {
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
            <tr className="tabletitle title-pad">
              <td className="item">
                <h5>Item Description</h5>
              </td>
              <td className="Hours">
                <h5>Qty</h5>
              </td>
              <td className="Rate">
                <h5>Unit Price</h5>
              </td>
              <td className="subtotal">
                <h5>Total</h5>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Communication</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">5</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹375.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Asset Gathering</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">3</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹225.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Design Development</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">5</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹375.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">20</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹1,500.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation Revisions</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">10</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹750.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">adfdc</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">HST</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">13%</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹419.25</p>
              </td>
            </tr>
            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Asset Gathering</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">3</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹225.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Design Development</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">5</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹375.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">20</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹1,500.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation Revisions</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">10</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹750.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">cdvfd</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">HST</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">13%</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹419.25</p>
              </td>
            </tr>
            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Asset Gathering</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">3</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹225.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Design Development</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">5</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹375.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">20</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹1,500.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation Revisions</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">10</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹750.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">dvdss</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">HST</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">13%</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹419.25</p>
              </td>
            </tr>
            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Asset Gathering</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">3</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹225.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Design Development</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">5</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹375.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">20</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹1,500.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Animation Revisions</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">10</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹75</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹750.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">cdfdvds</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">HST</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">13%</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">₹419.25</p>
              </td>
            </tr>

            <tr className="tabletitle">
              <td className="tableitem">
                <p className="itemtext">
                  <h5>Total</h5>
                </p>
              </td>
              <td className="tableitem">
                <p className="itemtext">
                  <h5>1000</h5>
                </p>
              </td>
              <td className="tableitem">
                <p className="itemtext">
                  <h5>₹2,463.25</h5>
                </p>
              </td>
              <td className="tableitem">
                <p className="itemtext">
                  <h5>₹3,644.25</h5>
                </p>
              </td>
            </tr>
          </table>
        </div>
        
      </div>
    </>
  );
};

export default Invoice;
