import './Footer.css';

function Footer() {
  return (
    <div className="footer-container h-42 bg-[var(--clr-navbar)] bottom-0 footer-text text-center text-[var(--primary)]">
      <div className="text-center text-xl pt-6">
        <a href="#" className="no-underline text-[var(--primary)]">
          Back to top ⬆️
        </a>
      </div>
      <p className="text-xl pt-4 px-12">
        If you liked what you saw, {"don't"} hesitate to contact me! :)
      </p>
      <p className="py-4 text-sm font-bold">© 2023 All rights reserved.</p>
    </div>
  );
}

export default Footer;
