// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-6">
        <div className="container mx-auto text-center">
          <p>My Application. All rights reserved.</p>
          {/* <p> */}
            <div className="hover:underline">Privacy Policy</div>
            <div className="hover:underline">Terms of Service</div>
          {/* </p> */}
        </div>
      </footer>
    );
  };
  export default Footer;