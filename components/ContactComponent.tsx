import { FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { IoMdCopy } from 'react-icons/io'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Container from './Container'

const ContactComponent = ({
  title,
  name,
  description,
  subDescription,
  instagram,
  email,
  phone,
}: any) => {
  return (
    <Container>
      <div className="ml-10 min-h-screen bg-black text-white md:pl-52">
        <h1 className="lg:6xl mt-10">{title}</h1>
        <section className=" mt-10 lg:mt-16">
          <p className=" text-3xl">{description}</p>
          <p className="mt-4 text-3xl">{subDescription}</p>
          <a className="cursor-pointer" href="tel:+46" {...phone}>
            <p className="inline text-2xl">+46(0){phone}</p>
          </a>
        </section>
        {/* ICONS */}
        <section className="mt-16">
          <a href={instagram} className="block">
           
            <FaInstagram className="mb-5 inline cursor-pointer" size="1.5rem"/>
            <span className='ml-3 -mt-3'>Instagram</span>
          </a>

          <div className="flex">
            <FiMail size="1.5rem" />
            <p className="ml-3 mr-1">{email}</p>
            <div
              className="cursor-pointer"
              onClick={() => alert('Email copied to clipboard')}
            >
              <CopyToClipboard text={email}>
                <IoMdCopy size="1rem" />
              </CopyToClipboard>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default ContactComponent
