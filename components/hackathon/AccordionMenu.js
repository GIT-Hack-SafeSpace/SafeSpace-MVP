import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

export default function AccordionMenu() {
    return (
       <>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Introduction</Accordion.Header>
                <Accordion.Body>
                <p>
                    According to an independent study by [McKinsey and Company] (<a target="_blank" href='https://wiw-report.s3.amazonaws.com/Women_in_the_Workplace_2021.pdf'>
                    read here
                    </a>), “women of color are more likely to face disrespectful and ‘othering’ microaggressions”, which perpetuate workplace trauma. Black women are facing these issues at an alarmingly disproportionate rate. <br/><br/>

                    We are often still expected to produce excellent work throughout these violent experiences and there is not a place for us to be free of judgement to share with other Black women who are also on the healing journey through workplace trauma, which can make us feel alone and lead to depression. <br/><br/>
                    During the trauma, we may not realize that we need to track these instances or need a community. As such, these events often go unreported and our source for proof is defined based on memory alone.<br/><br/>
                    We need a place that we can feel safe to share, or at the very least, keep track of these occurrences so that when the time comes, we will have a list of these things ready for us to make our case.<br/><br/>
                    <b>SafeSpace.</b>  also collects data on these issues for the world to see the impacts on Black women and how it hits companies’ bottom line. By tracking and fighting back in this way, we can help ourselves and other Black women know that they are not alone and that something must be done to stop workplace violence. 
                </p>
                </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                <Accordion.Header>Purpose & Motivation</Accordion.Header>
                <Accordion.Body>
                According to the McKinsey and Company study and our own constant personal experiences, as Black women, we experience more microaggressions than other groups of women, and are three to four times as likely as white women to be subjected to disrespectful and “othering” comments and behavior. We are also less likely to report that our managers check in on our well-being or help us balance priorities and deadlines.<br/><br/>

            The motivation behind this application is two-fold. To provide a <b>SafeSpace.</b>  for us to go in the midst of the violent behaviors we endure as a place for relief and centering and to document the incidents. In recording the incidents, not only do we name our trauma and record how we have handled and grown through our healing, but it also provides us with the documentation we need when we decide enough is enough and need to report the behavior. 
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                <Accordion.Header>How does the application work?</Accordion.Header>
                <Accordion.Body>
                Users are able to join and sign into <b>SafeSpace.</b>  anonymously by using their email address, which sends them a link to the email address they used to login to the application.<br/><br/>

            When a user logs in for the first time, they are prompted to set up their username, password, and if they are a member of the LGBTQA+ community. Then, they are taken to a Conflict Assessment that tells them a little more about themselves. This also allows other users to see the type of the person with whom they are interacting so, when giving advice, commenters can frame the advice in a way that meets the requester’s style. <br/><br/>

            For every subsequent login, users are prompted to tell <b>SafeSpace.</b>  how they are feeling after which, they enter the journal view where they can very quickly add an entry to their log to keep as reference for private use or to share with the community for advice. <br/><br/>

            The Journal is the central feature of this application because it allows Black women to keep track of work related trauma associated with different types of microaggressions and work through those at their own pace or have as a recorded reference for future use. <br/><br/>

            There are options for the user to check out the community posts, recommend stellar companies, add or find inspiration, and/or look through resources for support in their area.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                <Accordion.Header>How was the application developed?</Accordion.Header>
                <Accordion.Body>
                As a team, we planned the application by creating user flows, a low-fidelity wireframe and data relationships. Then, we created a prototype in Figma. We built <b>SafeSpace.</b>  using Next JS, styled-components, supabase as the database, React Bootstrap, Bootstrap 5, and React Select.<br/><br/>

            We followed accessibility (a11y) guidelines using the WAVE Web Accessibility Evaluation Tool Chrome Extension and Web Content Accessibility Guidelines (WCAG) a11y guidelines. 
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                <Accordion.Header>How to use the application</Accordion.Header>
                <Accordion.Body>
                Users can login to <b>SafeSpace.</b>  on any device with an internet connection, create journal entries of workplace microaggressions, follow, comment, and react to community posts, view resources and inspiration, and recommend companies that are doing diversity, equity and inclusion right.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                <Accordion.Header>Difficulties & Challenges</Accordion.Header>
                <Accordion.Body>
                Ensuring that we all were on the right path for the outcomes of the app because it is easy to slip into the social media path, but we intentionally worked as a team to define who and why the app exists and the how and what was easily obtained.

                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                <Accordion.Header>Go-to-Market</Accordion.Header>
                <Accordion.Body>
                <p>The current version of SafeSpace. is the MVP prototype, but is available for anyone with an internet connection to review at <a href="https://safespacemvp.netlify.app">https://safespacemvp.netlify.app</a>. While the team has done aggressive manual testing, there are no unit tests included, which would need to be completed, among other measures, prior to being prod ready. </p>

                <p>There would also need to be some algorithms in place to check content standards to ensure content meets guidelines as well as terms and conditions as admins manually reviewing posts is not scalable. There is also a need to ensure that users are actually Black women, which we did not cover in this MVP version.</p>

                <p>Once those underlying concerns are addressed, the application runs itself as it was created for and belongs to anyone who identifies as a Black woman. The core is to have a journal and SafeSpace. does this really well.</p>

                </Accordion.Body>
                </Accordion.Item>
            </Accordion> 
       </>
    );
}
