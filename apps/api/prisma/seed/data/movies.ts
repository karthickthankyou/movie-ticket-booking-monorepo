import { Genre } from '@prisma/client'
import { CreateMovieInput } from 'src/models/movies/dto/create-movie.input'

export const movies: CreateMovieInput[] = [
  {
    director: 'Pa. Ranjith',
    duration: 174,
    genre: Genre.SPORT,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a6/Sarpatta_Parambarai.jpg',
    releaseDate: new Date('22 July 2021'),
    title: 'Sarpatta Parambarai',
  },
  {
    director: 'Mani Ratnam',
    duration: 155,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d0/Nayakan_poster.jpg',
    releaseDate: new Date('21 October 1987'),
    title: 'Nayakan',
  },
  {
    director: 'Mani Ratnam',
    duration: 137,
    genre: Genre.WAR,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/ta/c/c0/Kannathilfrontbig.jpg',
    releaseDate: new Date('14 February 2002'),
    title: 'Kannathil Muthamittal',
  },
  {
    director: 'Sasikumar',
    duration: 145,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/83/Subramaniapuram.jpg',
    releaseDate: new Date('4 July 2008'),
    title: 'Subramaniapuram',
  },
  {
    director: 'Vetrimaaran',
    duration: 150,
    genre: Genre.ACTION,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/38/Viduthalai_Part_1.jpg',
    releaseDate: new Date('31 March 2023'),
    title: 'Viduthalai Part 1',
  },
  {
    director: 'T. J. Gnanavel',
    duration: 164,
    genre: Genre.DRAMA,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/ad/Jai_Bhim_film_poster.jpg',

    releaseDate: new Date('2 November 2021'),
    title: 'Jai Bhim',
  },
  {
    director: 'Sudha kongara',
    duration: 149,
    genre: Genre.DRAMA,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/61/Soorarai_Pottru.JPG?20220329062623',
    releaseDate: new Date('12 November 2020'),
    title: 'Soorarai Pottru',
  },
  {
    director: 'Selvaraghavan',
    duration: 181,
    genre: Genre.ADVENTURE,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/84/Aayirathil_Oruvan_%282010%29.jpg',
    releaseDate: new Date('January 14, 2010'),
    title: 'Aayirathil Oruvan',
  },
  {
    director: 'Selvaraghavan',
    duration: 179,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7f/Pudhupettai_movie_poster.jpg',
    releaseDate: new Date('26 May 2006'),
    title: 'Pudhupettai',
  },
  {
    director: 'Lokesh Kanagaraj',
    duration: 146,
    genre: Genre.ACTION,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/79/Kaithi_2019_poster.jpg',

    releaseDate: new Date('25 October 2019'),
    title: 'Kaithi',
  },
  {
    director: 'H. Vinoth',
    duration: 163,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/4c/Theeran_Adhigaaram_Ondru_poster.jpg',
    releaseDate: new Date('17 November 2017'),
    title: 'Theeran Adhigaaram Ondru',
  },
  {
    director: 'Pa. Ranjith',
    duration: 159,
    genre: Genre.DRAMA,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/46/Kaala_Poster.jpg?20180607220444',
    releaseDate: new Date('7 June 2018'),
    title: 'Kaala',
  },
  {
    director: 'Lokesh Kanagaraj',
    duration: 174,
    genre: Genre.THRILLER,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg?20230330063441',
    releaseDate: new Date('3 June 2022'),
    title: 'Vikram',
  },
  {
    director: 'C. Premkumar',
    duration: 158,
    genre: Genre.ROMANCE,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c4/%2796_film_poster.jpg',

    releaseDate: new Date('4 October 2018'),
    title: '96',
  },
  {
    director: 'Maniratnam',
    duration: 178,
    genre: Genre.DRAMA,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/6a/Iruvar_poster.jpg',
    releaseDate: new Date('14 January 1997'),
    title: 'Iruvar',
  },
  {
    director: 'Vetrimaran',
    duration: 140,
    genre: Genre.THRILLER,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/78/Asuran_2019_poster.jpg',

    releaseDate: new Date('4 October 2019'),
    title: 'Asuran',
  },
  {
    director: 'Mari Selvaraj',
    duration: 159,
    genre: Genre.ACTION,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg',

    releaseDate: new Date('9 April 2021'),
    title: 'Karnan',
  },
  {
    director: 'Mari Selvaraj',
    duration: 154,
    genre: Genre.ACTION,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Pariyerum_Perumal.jpg/220px-Pariyerum_Perumal.jpg',
    releaseDate: new Date('28 September 2018'),
    title: 'Pariyerum Perumal',
  },
  {
    director: 'Thiagarajan Kumararaja',
    duration: 153,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f5/Aaranyakaandam.jpg',
    releaseDate: new Date('10 June 2011'),
    title: 'Aaranya Kaandam',
  },
  {
    director: 'M. Manikandan',
    duration: 144,
    genre: Genre.DRAMA,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Kadaisi_Vivasayi.jpg/220px-Kadaisi_Vivasayi.jpg',

    releaseDate: new Date('11 February 2022'),
    title: 'Kadaisi Vivasayi',
  },
  {
    director: 'Gayatri, Pushkar',
    duration: 147,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Vikram_Vedha_poster.jpg/220px-Vikram_Vedha_poster.jpg',

    releaseDate: new Date('21 July 2017'),
    title: 'Vikram Vedha',
  },
  {
    director: 'Maniratnam',
    duration: 137,
    genre: Genre.ACTION,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Roja_film_poster.jpg',

    releaseDate: new Date('15 August 1992'),
    title: 'Roja',
  },
  {
    director: 'Maniratnam',
    duration: 130,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/e/e3/Bombay_film_poster.jpg',

    releaseDate: new Date('11 March 1995'),
    title: 'Bombay',
  },
  {
    director: 'Gautham Vasudev Menon',
    duration: 163,
    genre: Genre.DRAMA,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Vaaranam_Aayiram.jpg/220px-Vaaranam_Aayiram.jpg',

    releaseDate: new Date('14 November 2008'),
    title: 'Vaaranam Aayiram',
  },
  {
    director: 'Ram',
    duration: 147,
    genre: Genre.FAMILY,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Peranbu_poster.jpg/220px-Peranbu_poster.jpg',

    releaseDate: new Date('1 February 2019'),
    title: 'Peranbu',
  },
  {
    director: 'Sundar C',
    duration: 148,
    genre: Genre.ADVENTURE,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Anbe_Sivam.jpg/220px-Anbe_Sivam.jpg',

    releaseDate: new Date('14 January 2003'),
    title: 'Anbe sivam',
  },
  {
    director: 'Vetrimaran',
    duration: 164,
    genre: Genre.CRIME,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Vada_Chennai.jpg/220px-Vada_Chennai.jpg',

    releaseDate: new Date('17 October 2018'),
    title: 'Vada Chennai',
  },
  {
    director: 'Ram Kumar',
    duration: 170,
    genre: Genre.THRILLER,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Ratsasan_poster.jpg/220px-Ratsasan_poster.jpg',

    releaseDate: new Date('5 October 2018'),
    title: 'Ratsasan',
  },
  {
    director: 'Thiagarajan Kumararaja',
    duration: 175,
    genre: Genre.FANTASY,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Super_Deluxe_film_poster.jpg/220px-Super_Deluxe_film_poster.jpg',

    releaseDate: new Date('29 March 2019'),
    title: 'Super Deluxe',
  },
  {
    director: 'Vetrimaran',
    duration: 106,
    genre: Genre.THRILLER,
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/01/Visaranai_film_release_poster.jpg',

    releaseDate: new Date('5 February 2016'),
    title: 'Visaranai',
  },
]

export const moviePosters = [
  'https://upload.wikimedia.org/wikipedia/en/d/d0/Nayakan_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/ta/c/c0/Kannathilfrontbig.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/a6/Sarpatta_Parambarai.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/83/Subramaniapuram.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/38/Viduthalai_Part_1.jpg',
  'https://upload.wikimedia.org/wikipedia/en/a/ad/Jai_Bhim_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/61/Soorarai_Pottru.JPG?20220329062623',
  'https://upload.wikimedia.org/wikipedia/en/8/84/Aayirathil_Oruvan_%282010%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/7f/Pudhupettai_movie_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/79/Kaithi_2019_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/4c/Theeran_Adhigaaram_Ondru_poster.jpg',

  'https://upload.wikimedia.org/wikipedia/en/4/46/Kaala_Poster.jpg?20180607220444',
  'https://upload.wikimedia.org/wikipedia/en/b/b3/Thalapathi_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg?20230330063441',
  'https://upload.wikimedia.org/wikipedia/en/c/c4/%2796_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/6a/Iruvar_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/7/78/Asuran_2019_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Pariyerum_Perumal.jpg/220px-Pariyerum_Perumal.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/f5/Aaranyakaandam.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Kadaisi_Vivasayi.jpg/220px-Kadaisi_Vivasayi.jpg',

  'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Vikram_Vedha_poster.jpg/220px-Vikram_Vedha_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/d7/Roja_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/e3/Bombay_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Vaaranam_Aayiram.jpg/220px-Vaaranam_Aayiram.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Peranbu_poster.jpg/220px-Peranbu_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Anbe_Sivam.jpg/220px-Anbe_Sivam.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Vada_Chennai.jpg/220px-Vada_Chennai.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Ratsasan_poster.jpg/220px-Ratsasan_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Super_Deluxe_film_poster.jpg/220px-Super_Deluxe_film_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/01/Visaranai_film_release_poster.jpg',
]
