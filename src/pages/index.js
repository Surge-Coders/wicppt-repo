import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlockImg
        id="perks"
        title="Services"
        // subtitle="Startup is perfect for helping to to start and grow your business. As
        //   you begin to gain new clients and expand you will see the benefits of
        //   a super-fast Gatsby website"
      >
        <div className="flex-container trio-block">
          <Perk
            // img={perk1Img}
            alt=""
            titleOne="Therapy Technique"
            contentOne="-Soft Tissue mobilization"
            contentTwo="-Joint mobilization"
            contentThree="-Myofascial Trigger point therapy"
            contentFour="-Myopain Seminars Certified Dry Needling"
            
           
           
          />
          <Perk
            // img={perk2Img}
            alt=""
            titleOne="Alternative Manual Therapy Technique"
            contentOne="-Gua Sha"
            contentTwo="-Cupping"
          />
          <Perk
            // img={perk3Img}
            alt=""
            titleOne="Modalities"
            contentOne="-Ultrasound"
            contentTwo="-Electrical Stimulation"
            contentThree="-Hot pack"
            contentFour="-Cold pack"
          />
        </div>
      </TextBlockImg>

      <TextBlock
        id="about"
        titleOne="Our Team"

        titleTwo="Ann Hessil, PT"
        paragraphTwo="Ann is the primary physical therapist at Wisconsin Chronic Pain Physical Therapy Inc."

        titleThree="Brian"
        paragraphThree="Brian is our PT Aide. He is a true professional."

      >
        {/* <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link> */}
      </TextBlock>

      <TextBlock
        id="about"
        titleOne="Where we are located"
        paragraphOne="Our clinic is located on the third floor of the Mayfair Professional building, which is the tallest part of Mayfair Mall.
        This location offers convenient parking and accessibility with a bus terminal served by several Milwaukee Public Transit Services bus lines, including lines 21,28,31,60."

        titleTwo="Driving Directions"
        paragraphTwo="Enter Mayfair parking lot at Center St (from Hwy 100) or 104th St (from North Ave). Follow signs for Nordstrom and AMC Theaters. Parking for the Mayfair Professional Building is between AMC Theaters and the north (upper) entrance to Nordstrom. Several spaces are reserved for the Mayfair Professional Building for your convenience, though you can choose another spot if these are full. Enter the mall through the Mayfair Professional Building, and stay to the left as you proceed past the shoe shine area. The elevators are just past the shoe shine area, and they will be on your right. (if you reach Starbucks, you have gone too far). Take the elevator to the 3rd level. Go left out of the elevator, and Wisconsin Chronic Pain Physical Therapy, LLC will be on your right."

        titleThree="Directions from the bus stop"
        paragraphThree="Proceed toward Macy's and Maggiano's. Enter the mall at the first set of doors past Macy's and continue down the corridor. Once you get to the main mall area, go right. At Starbucks you will turn left. Stay on the right hand side of this hallway until you reach the elevators, whicl will be on your left. (If you reach the shoe shine area, you've gone too far.) Take the elvator to the 3rd level. Go left out of the elevator and Wisconsin Chronic Pain Physical Therapy, LLC will be on your right."
      >
        {/* <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link> */}
      </TextBlock>
     
      
      <Packages
        title="New Patient Forms"
        para="If you are a new patient, you can fill out the intake paperwork before your appointment. This online form is HIPPA compliant and secure."
        
      >

<div>
      <a href="https://app.formdr.com/practice/MTQ2MTM=/form/exrtGOJoEt2WrUOfYkwrDrb_0MJ3DlF2" target="_blank" rel="noopener noreferrer">
        Click here for Online Patient Intake Forms
      </a>
    </div>
        
        {/* <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider> */}
      </Packages>
      <Contact
        id="contact"
        title="Contact us today and see how we can treat your pain"
        subtitle="Include relevant details in your message. No private information."
      />
    </>
  )
}

export default HomePage
