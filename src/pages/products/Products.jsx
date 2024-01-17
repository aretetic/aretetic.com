import React from 'react'
import './Products.css'
import {Button} from 'semantic-ui-react'

const Products = () => {
    return (
      <>
        <div class="pageContainer">
            <div class="pageContent">
            <h1>Shaping the Future of Decision Intelligence and Health Research</h1>

            <p>Welcome to <strong>Aretetic Solutions</strong>, where innovation meets precision in the art of decision-making and research. As a leader in computational social choice, our portfolio of groundbreaking products is empowering Fortune 500 companies and research institutions worldwide.</p>

            <h2>PrioPeak</h2>
            <p><strong>PrioPeak</strong> is the cornerstone of our innovative suite, providing unparalleled predictive analytics. It elegantly deciphers complex priority structures, offering businesses deep insights into customer behavior and preferences. This empowers our clients to not only meet but anticipate the evolving demands of their markets, ensuring they stay ahead in a competitive landscape.</p>
            <Button basic color='blue'>More about PrioPeak</Button>
<hr />
            <h2>SoChoice</h2>
            <p><strong>SoChoice</strong> technology revolutionizes group decision-making. By harnessing the power of quadratic voting, SoChoice™ facilitates rapid, democratic decision-making within large groups, with a unique ability to gauge the intensity of preferences. This cutting-edge tool is vital for organizations aiming to make informed, inclusive, and rapid decisions in today's fast-paced world.</p>
            <Button basic color='red'>More about SoChoice</Button>
<hr />
            <h2>Community-Driven Innovation (CDI)</h2>
            <p>With <strong>CDI</strong>, we're redefining health research methodologies. This tool allows for real-time tracking of symptom and treatment trends in specific disease communities, guiding research groups to focus on the most impactful areas. Our adaptive IRB protocols ensure that research remains agile, ethically sound, and most importantly, community-centric.</p>
            <Button basic color='violet'>More about CDI</Button>
<hr />
            <p>At <strong>Aretetic Solutions</strong>, we're not just creating products; we're crafting the future of decision intelligence and responsive research. Join us on this journey as we continue to innovate and lead in these exciting fields.</p>

            </div>
        </div>
      </>
    )
  }
  
  export default Products