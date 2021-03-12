import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import "./sass/index-page.scss"

// images
import Roof from '../img/roof1.webp'
import Image1 from '../img/image1.webp'
import Image2 from '../img/image2.webp'
import Image3 from '../img/image3.webp'
import Add1 from '../img/add1.webp'
import Add2 from '../img/add2.webp'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        height: '80vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen slider-title"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            marginBottom: '10px',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen slider-subheading"
          style={{
            textAlign: 'center',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
        <Link className="slide-btn" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section section1">
          <div className="columns">
            <div className="column is-20 is-offset-1 service-column">
              <div className="content">
                <div className="services">
                  <h3 className="has-text-weight-semibold is-size-2">Our Services</h3>
                  <div className="services-content">
                    <div className="services-content__card">
                      <div className="card-image"><img src={Image1} alt="Roof maintenance"/></div>
                      <div className="card-content">
                        <h3>Roof Maintenance</h3>
                        <div className="card-description">
                          Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor.
                        </div>
                      </div>
                    </div>
                    <div className="services-content__card">
                      <div className="card-image"><img src={Image2} alt="Roof Inspection"/></div>
                      <div className="card-content">
                        <h3>Roof Inspection</h3>
                        <div className="card-description">
                          Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor.
                        </div>
                      </div>
                    </div>
                    <div className="services-content__card">
                      <div className="card-image"><img src={Image3} alt="Insulation and Reparis"/></div>
                      <div className="card-content">
                        <h3>Insulation & Repairs</h3>
                        <div className="card-description">
                          Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="phone-contact">
        <div className="phone-contact__text">
          <h1>
            Call us now for a FREE consultation!
          </h1>
          <div className="phone-number">
            1 (800) 123 - 1234
          </div>
        </div>
    </section>
    <section className="additional-info">
      <div className="container">
        <div className="add-info-content">
          <div className="add-row add-margin-bottom">
            <div className="add-row__image add-space-between">
              <img src={Add1} alt="Professional"/>
            </div>
            <div className="add-row__text">
              <h3>
                Built by Professionals
              </h3>
              <div className="text-description">
                Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor. Lorem ipsum dolor sit ametys consecteturadipisicing elit, sed eiusmod tempor incididunt ut labore dolore magna aliq sed ipsum ua dolor exercitation ullamco. Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor. Lorem ipsum dolor sit ametys consecteturadipisicing elit, sed eiusmod tempor incididunt ut labore dolore magna aliq sed ipsum ua dolor exercitation ullamco.
              </div>
              <Link className="slide-btn" to="/blog">
                Learn More
              </Link>
            </div>
          </div>
          <div className="add-row">
            <div className="add-row__image top-image">
              <img src={Add2} alt="Service"/>
            </div>
            <div className="add-row__text add-space-between">
              <h3>
                Quality Service
              </h3>
              <div className="text-description">
                Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor. Lorem ipsum dolor sit ametys consecteturadipisicing elit, sed eiusmod tempor incididunt ut labore dolore magna aliq sed ipsum ua dolor exercitation ullamco.Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua enim lorem ipsum gui dolor sit amet tempor. Lorem ipsum dolor sit ametys consecteturadipisicing elit, sed eiusmod tempor incididunt ut labore dolore magna aliq sed ipsum ua dolor exercitation ullamco.
              </div>
              <Link className="slide-btn" to="/blog">
                Learn More
              </Link>
            </div>
            <div className="add-row__image bottom-image">
              <img src={Add2} alt="Service"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="form">
        <div className="form-content">
          <h3>Request Consultation</h3>
          <form>
            <div className="form-row">
              <label>
                First Name:
                <input type="text" name="name" />
              </label>
              <label>
                Last Name:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email:
                <input type="text" name="name" />
              </label>
              <label>
                Phone Number:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="userText">
              <h4>Case details:</h4>
              <textarea rows="10"></textarea>
            </div>
            <input type="submit" value="Send Request" />
          </form>
        </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`



/* 
blog index
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>

*/