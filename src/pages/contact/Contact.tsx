import {
  Container,
  HomeRoute,
  PageBody,
  PageContent,
  PageDescription,
  PageDescriptionContainer,
  PageRouteContainer,
  PageTitle,
  PageTitleContainer,
  Route,
} from '../../components/common/Common.styles'
import {
  Address,
  Button,
  ButtonContainer,
  Contacts,
  ContactsContainer,
  Form,
  Icon,
  Input,
  TextArea,
} from './Contact.styles'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import { MdLocationPin, MdEmail, MdCall } from 'react-icons/md'

const Contact = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <PageTitleContainer>
        <PageTitle>CONTACT</PageTitle>
      </PageTitleContainer>
      <PageRouteContainer>
        <HomeRoute onClick={() => navigate('/')}>HOME </HomeRoute>{' '}
        <span>/</span>
        <Route>CONTACT</Route>
      </PageRouteContainer>
      <PageContent>
        <PageDescriptionContainer>
          <PageDescription>
            You can contact me any way that is convenient for you. I am
            available 24/7 via fax, email or telephone. You can also use a quick
            contact form located on this page to ask a question about my
            services and projects I work on. I would be happy to answer your
            questions or offer any help.
          </PageDescription>
        </PageDescriptionContainer>
        <PageBody>
          <Form>
            <Input placeholder='Name' />
            <Input placeholder='Phone' />
            <Input placeholder='Email' />
            <TextArea placeholder='Message' />
            <ButtonContainer>
              <Button>Send</Button>
            </ButtonContainer>
            <ContactsContainer>
              <Contacts>
                <Icon>
                  <MdLocationPin />
                </Icon>
                <Address>Paaskylanrinne 6 B50 Helsinki 00500 Finland</Address>
              </Contacts>
              <Contacts>
                <Icon>
                  <MdCall />
                </Icon>
                <Address>+358123456789</Address>
              </Contacts>
              <Contacts>
                <Icon>
                  <MdEmail />
                </Icon>
                <Address>siegy.gamboa@gmail.com</Address>
              </Contacts>
            </ContactsContainer>
          </Form>
        </PageBody>
      </PageContent>
    </Container>
  )
}

export default Contact
