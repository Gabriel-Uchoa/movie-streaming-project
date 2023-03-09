import { StyleFooter, DescribeFooter, TitleDescribe, Paragraph, NewsLetter, NewsLetterInput, NavFooter, Row, Heading, FooterLink, Contact, Column } from "./styles"

const Footer = () => {
    return (
        <StyleFooter>
            <DescribeFooter>
                <TitleDescribe>Watchflix</TitleDescribe>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.
                </Paragraph>
                <NewsLetter>
                    <p>Join Newsletters</p>
                    <NewsLetterInput>
                        <input type="text" placeholder="Insert your mail gere" />
                        <button type="submit">
                            <img width={25} src="https://cdn-icons-png.flaticon.com/512/9199/9199645.png" alt="enviar" />
                        </button>
                    </NewsLetterInput>
                </NewsLetter>
            </DescribeFooter>
            <NavFooter>
                <Row>
                    <Column>
                        <Heading>Product</Heading>
                        <FooterLink href="#">Movies</FooterLink>
                        <FooterLink href="#">TV Show</FooterLink>
                        <FooterLink href="#">Videos</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Media Group</Heading>
                        <FooterLink href="#">Nice Studio</FooterLink>
                        <FooterLink href="#">Nice News</FooterLink>
                        <FooterLink href="#">Nice TV</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Sitemap</Heading>
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Press</FooterLink>
                    </Column>
                </Row>
                <Contact>
                    <div>
                        <img width={24} src="https://img.icons8.com/external-dashed-line-kawalan-studio/48/ffffff/external-map-shopping-e-commerce-dashed-line-kawalan-studio.png" alt="Localização" />
                        <span>8819 Ohio St. South Gate, California 90280</span>
                    </div>
                    <div>
                        <img width={24} src="https://img.icons8.com/fluency-systems-regular/48/ffffff/filled-message.png" alt="Email" />
                        <span>ourstudio@hello.com</span>
                    </div>
                    <div>
                        <img width={24} src="https://img.icons8.com/ios/50/ffffff/phone--v1.png" alt="Phone Contact" />
                        <span>+271 386-647-3637</span>
                    </div>
                </Contact>
            </NavFooter>
        </StyleFooter>
    )
}

export default Footer