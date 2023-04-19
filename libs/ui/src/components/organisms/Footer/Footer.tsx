import { useRouter } from 'next/router'
import { Button } from '../../atoms/Button'
import { Container } from '../../atoms/Container'

export interface IFooterProps {}

const JoinClub = () => {
  const router = useRouter()
  return (
    <div>
      <div className="font-bold">Join Common Kitchen Club</div>
      <div className="max-w-md mt-4 space-y-2 text-sm">
        <div>
          Common Kitchen is the largest network of <b>home chefs</b> in the
          world, offering a diverse range of delicious dishes prepared with
          love.
        </div>
        <div>
          With our convenient online platform, you can easily discover and order
          your favorite meals in just seconds from the comfort of your own home.
        </div>
      </div>
      <Button
        color="primary"
        size="lg"
        className="mt-8"
        onClick={() => router.push('register')}
      >
        Join us
      </Button>
    </div>
  )
}

const FooterMenu = ({ title, items }: { title: string; items: string[] }) => (
  <div className="max-w-sm space-y-2">
    <div className="mb-4 font-semibold">{title}</div>
    {items.map((item) => (
      <div key={item} className="text-sm">
        {item}
      </div>
    ))}
  </div>
)
const menuItems = {
  CommonKitchenClub: [
    'Log in',
    'Join the Common Kitchen Club',
    'Member offers',
    'Workshops & Events',
  ],

  Services: [
    'Browse dishes',
    'Delivery Service',
    'Pick-up Service',
    'Catering Service',
    'Meal Planning',
    'Dietary Preferences',
    'Customer Service',
    'Sustainability Program',
    'Track Your Order',
  ],

  Help: [
    'How to order',
    'Return policy',
    'Pricing',
    'Contact us',
    'FAQs',
    'Allergy information',
    'Size guide - Meals',
    'Cooking guides',
    'Gift Card',
    'Feedback',
  ],

  AboutCommonKitchen: [
    'Our Company',
    'Meet the Team',
    'Newsroom',
    'Sustainability',
    'Partner With Us',
  ],
}

const FooterFooter = () => (
  <div className="justify-between pt-8 mt-8 text-xs border-t sm:flex">
    <a target="_blank" href="https://www.iamkarthick.com" rel="noreferrer">
      Made by
      <span
        // Brand color!
        className="font-black px-1 py-0.5"
      >
        Karthick Ragavendran
      </span>{' '}
      2023
    </a>
    <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
      <div>Privacy policy</div>
      <div>Cookie policy</div>
      <div>Cookie settings</div>
      <div>Terms and Conditions</div>
    </div>
  </div>
)

export const Footer = () => (
  <footer className="py-12 mt-24 bg-gray-50">
    <Container>
      <div className="gap-4 sm:flex">
        <JoinClub />
        <div className="grid w-full grid-cols-1 gap-4 mt-6 xs:grid-cols-2 lg:grid-cols-4 sm:mt-0">
          <FooterMenu
            title="About Common Kitchen"
            items={menuItems.AboutCommonKitchen}
          />
          <FooterMenu
            title="Home Chefs Club"
            items={menuItems.CommonKitchenClub}
          />
          <FooterMenu title="Help" items={menuItems.Help} />
          <FooterMenu title="Services" items={menuItems.Services} />
        </div>
      </div>
      <FooterFooter />
    </Container>
  </footer>
)
