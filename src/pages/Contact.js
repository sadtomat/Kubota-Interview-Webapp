import "./Contact.css";
import HoverOverBox from "../components/HoverOverBox.jsx";

function Contact() {
    return (
        <div>
            <div className="top-box">
                <div className="title-box">
                    <h1 className="title-text">Get In Contact <br/> With Us</h1>
                </div>
                <img src="https://testwebappblobstorage.blob.core.windows.net/images/contactus1.jpg" className="top-img" alt=""/>
            </div>
            <div className="bottom-box">
                <div className="bottom-box-row">
                    <HoverOverBox title="Customer Support" content="customer.support@realemail.com" type="email"/>
                    <HoverOverBox title="Career Opportunities" content="career.opportunities@realemail.com" type="email"/>
                    <HoverOverBox title="Inquiries" content="inquiries@realemail.com" type="email"/>
                </div>
                <div className="bottom-box-row">
                    <HoverOverBox title="Support Hotline" content="647-424-0101" type="phone"/>
                    <HoverOverBox title="Buisness Hotline" content="647-787-0234" type="phone"/>
                    <HoverOverBox title="Order Hotline" content="647-424-8283" type="phone"/>
                </div>
            </div>
        </div>
    )
}

export default Contact;