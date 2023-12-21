import HeaderNavigation from "./Header";
import { Box } from "@chakra-ui/react";
import "./footerstyles.css";
import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";

const Layout = ({ children }) => {
  const { currentTheme } = useContext(ThemeContext);
  const background = currentTheme.colors.background;
  const primaryColor = currentTheme.colors.primary;
  return (
    <>
      <HeaderNavigation />
      <Box px={4} bg={background}>
        {children}
      </Box>
      <Box px={4} bg={background}>
        <div className="footer" style={{ background: background }}>
          <div className="leftside">
            <img src="gdsclogo.png" alt="gdsclogo" />
            <h3 className="lheading">Social</h3>
            <div className="icons">
              <a href="#">
                <img
                  src="icons/blue_twitter_icon.svg"
                  alt="twittericon"
                  width="45"
                />
              </a>
              <a href="#">
                <img
                  src="icons/blue_linkedin_icon.svg"
                  alt="linkedinicon"
                  width="45"
                />
              </a>
              <a href="#">
                <img
                  src="icons/blue_mail_icon2.svg"
                  alt="mailicon"
                  width="45"
                />
              </a>
            </div>
          </div>
          <div className="center" style={{ color: primaryColor }}>
            <div>
              <h3 className="cheading">Pages</h3>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </div>
            <div>
              <h3 className="cheading">Links</h3>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Sponsor</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
            </div>
          </div>
          <div className="rightside">
            <h1 className="rheading">Join Our Newsletter</h1>
            <div className="inputbox">
              <input
                type="text"
                placeholder="abc@example.com"
                className="input"
              ></input>
              <button className="btn">Subscribe</button>
            </div>
            <div className="sentence" style={{ color: primaryColor }}>
              <p>
                By subscribing you agree to with our{" "}
                <a href="#">Privacy Policy</a> and provide consent to recieve
                updates from us.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="hr"> </div>

        <div className="endfooter" style={{ color: primaryColor }}>
          <li>2023 GDSC-UNILORIN. All right reserved</li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
          <li>
            <a href="#">Cookies Settings</a>
          </li>
        </div>
      </Box>
    </>
  );
};

export default Layout;
