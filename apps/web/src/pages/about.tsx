import Head from 'next/head'
import { Container } from '@showtime-org/ui/src/components/atoms/Container'

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div className="mb-4 text-xl font-semibold">About us</div>
          <div className="max-w-md space-y-4 text-lg">
            <p>
              Once upon a time in a world where laughter was a rare commodity, a
              group of visionary jesters dreamed of bringing joy to every corner
              of the earth. They hatched a plan to create an online ticket
              booking company that would celebrate the power of humor, art, and
              entertainment. And thus, Showtime! was born.
            </p>{' '}
            <p>
              Showtime! set out on a mission to revolutionize the ticket booking
              experience. Our founders believed that every event – be it a play,
              a concert, or a movie – should begin with a smile. Driven by this
              belief, they created a platform that combined seamless booking
              technology with a dose of whimsy, ensuring that every Showtime!
              interaction was as enjoyable as the events themselves.
            </p>
            <p>
              At Showtime!, our goal is to transform the mundane into the
              extraordinary. We aim to make every customer&apos;s experience a
              delightful journey filled with surprise, laughter, and excitement.
              As part of our commitment to infusing joy into the ticket booking
              process, our team works tirelessly to curate a diverse array of
              events that cater to all tastes and preferences.
            </p>
            <p>
              Our ever-growing community of satisfied customers is a testament
              to our success in spreading happiness. So why not join us in our
              quest to make the world a brighter place, one ticket at a time?
              Whether you&apos;re seeking the thrill of live music, the allure
              of the silver screen, or the enchantment of a theatrical
              performance, Showtime! has got you covered.
            </p>
            <p>
              And remember, at Showtime!, we don&apos;t just book tickets – we
              create unforgettable experiences that put a smile on your face and
              a spring in your step. So, sit back, relax, and let the good times
              roll. After all, life&apos;s too short not to enjoy the Showtime!
            </p>
          </div>
        </Container>
      </main>
    </>
  )
}
