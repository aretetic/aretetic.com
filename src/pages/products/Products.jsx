import React from 'react'
import './Products.css'
import { Button, ButtonGroup, ButtonOr } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
      <>
        <div class="pageContainer">
            <div class="pageContent">
            <h1>
                Shaping the Future of Decision Intelligence and Health Research
            </h1>

            <p>
                Welcome to <strong>Aretetic Solutions</strong>, where innovation meets precision in the art of decision-making and research. As a leader in computational social choice, our portfolio of groundbreaking products is empowering Fortune 500 companies and research institutions worldwide.
            </p>

            <h2>
                PrioPeak
            </h2>
            <p>
                <strong>PrioPeak</strong> is the cornerstone of our innovative suite, providing unparalleled predictive analytics. It elegantly deciphers complex priority structures, offering businesses deep insights into customer behavior and preferences. This empowers our clients to not only meet but anticipate the evolving demands of their markets, ensuring they stay ahead in a competitive landscape.
            </p>
            <ButtonGroup>
                <Link to='/aretetic-products/priopeak'>
                    <Button color='blue'>More about PrioPeak</Button>
                </Link>
                <ButtonOr />
                <Link to='/contact-us'>
                    <Button positive>Request a Demo</Button>
                </Link>
            </ButtonGroup>
<hr />
            <h2>
                SoChoice
            </h2>
            <p>
                <strong>SoChoice</strong> technology revolutionizes group decision-making. By harnessing the power of quadratic voting, SoChoice facilitates rapid, democratic decision-making within large groups, with a unique ability to gauge the intensity of preferences. This cutting-edge tool is vital for organizations aiming to make informed, inclusive, and rapid decisions in today's fast-paced world.
            </p>
            <ButtonGroup>
                <Link to='/aretetic-products/sochoice'>
                    <Button color='red'>More about SoChoice</Button>
                </Link>
                <ButtonOr />
                <Link to='/contact-us'>
                    <Button positive>Request a Demo</Button>
                </Link>
            </ButtonGroup>
<hr />
            <h2>
                Community-Driven Innovation (CDI)
            </h2>
            <p>
                With <strong>CDI</strong>, we're redefining health research methodologies. This tool allows for real-time tracking of symptom and treatment trends in specific disease communities, guiding research groups to focus on the most impactful areas. Our adaptive IRB protocols ensure that research remains agile, ethically sound, and most importantly, community-centric.
            </p>
            <ButtonGroup>
                <Link to='/aretetic-products/community-driven-innovation'>
                    <Button color='violet'>More about CDI</Button>
                </Link>
                <ButtonOr />
                <Link to='/contact-us'>
                    <Button positive>Request a Demo</Button>
                </Link>
            </ButtonGroup>
<hr />
            <h2>
                Digital Cabinet
            </h2>
            <p>
                <strong>Digital Cabinet</strong> offers a streamlined and cost-effective solution for rare disease registries looking to store their data securely and in compliance with regulatory standards. Designed with simplicity in mind, this digital platform transforms the complexities of data management into an intuitive, user-friendly experience. Our commitment to affordability ensures that even the most budget-conscious organizations can benefit from our secure, compliant environment. Digital Cabinet is not just a storage solution; it's a dependable partner in safeguarding sensitive medical data, providing peace of mind for researchers and advocacy groups in the rare disease community. With Digital Cabinet, you can focus more on research and advocacy, and less on the intricacies of data storage.
            </p>
            <ButtonGroup>
                <Link to='/aretetic-products/digital-cabinet'>
                    <Button color='brown'>More about Digital Cabinet</Button>
                </Link>
                <ButtonOr />
                <Link to='/contact-us'>
                    <Button positive>Request a Demo</Button>
                </Link>
            </ButtonGroup>
<hr />
            <p>
                At <strong>Aretetic Solutions</strong>, we're not just creating products; we're crafting the future of decision intelligence and responsive research. Join us on this journey as we continue to innovate and lead in these exciting fields.
            </p>

            </div>
        </div>
      </>
    )
  }
  
  export default Products