const fs = require('fs')

const cinemas = `AGS Cinemas Navalur Chennai
5th Floor, Vivara Mall, 87/1A,
Rajiv Gandhi Salai, Navalur,
Chennai - 603103.
Phone: 04440167777
Book Online: https://www.agscinemas.com/

AGS Cinemas Maduravoyal Chennai
3/47, Alapakkam Main Road,
Pallavan Nagar, Maduravoyal,
Chennai - 600095.
Phone: 04440167777
Book Online: https://www.agscinemas.com/

AGS Cinemas T Nagar Chennai
No. 24, 1, Gopathi Narayanaswami Chetty Rd,
opp.to barathidasan hospital,
Parthasarathi Puram, T. Nagar,
Chennai - 600017.
Phone: 04440167777
Book Online: https://www.agscinemas.com/

AGS Cinemas Villivakkam Chennai
Mettu St, Rajiv Gandhi Nagar,
Villivakkam,
Chennai - 600049.
Phone: 04440167777
Book Online: https://www.agscinemas.com/

Anand theatre Maduranthakam Chennai
103, Grand Southern Trunk Road,
near Divya TVS Motor Dealer, Maduranthakam,
Chennai - 603306
Phone: 04427552230
Book Online: https://in.bookmyshow.com/anandtheatre

Anna Cinemas Chennai
21, Anna Salai, Mount Road,
Anna Salai, Triplicane,
Chennai - 600014
Phone: 04428511219
Book Online: https://in.bookmyshow.com/annacinemas

Parimalam Cinemas Chennai
Porur, Main Rd, Kundrathur,
Chennai - 600069
Phone: 8438584385
Book Online: https://in.bookmyshow.com/parimalamcinemas

Cinepolis BSR Mall Thoraipakkam Chennai
BSR Mall, Pallavaram-Thuraipakkam Rd,
Seevaram, Thoraipakkam,
Chennai - 600097
Book Online: https://in.bookmyshow.com/cinepolisbsrmall

EVP Cinemas Chembarambakkam Chennai
Survey no 167/4A & 3A,
Santhosha Nagar,
Chennai - 600123
Phone: +91 8525811111 / 7305578887 / 7305678887
Email: info@evpcinemas.com
Book Online: https://in.bookmyshow.com/evpcinemaschennai

G Cinemas Chennai
204, GNT Road,
Near Sri Krishna Indane Gramin Vitrak,
Karanodai,
Chennai - 600067
Email: info@kauveryhospital.com
Book Online: https://in.bookmyshow.com/gcinemaskaranodai

Ganapathi Theater Gummidipoondi Chennai
No 109, GNT Road,
Opposite Rajeshwari Theater,
Gummidipoondi,
Chennai - 601201
Phone: +91 9380930282
Book Online: https://in.bookmyshow.com/ganapathitheater

Ganapathy Ram Theatre Adyar Chennai
Lattice Bridge Road,
Adyar,
Chennai - 600020
Phone: +91 44 40435050 / 66545050
Email: helpdesk@bookmyshow.com
Book Online: https://in.bookmyshow.com/ganapathyramtheater

Gayathri Cinemas Maduranthakam Chennai
Chennai - Theni Highway,
Near Kaggai Amman kovil,
Chennai - 603306
Phone: 044 66661951
Book Online: https://in.bookmyshow.com/gayathricinemas

GK Cinemas 4K 3D Chennai
Lakshmi Nagar,
Porur,
Chennai - 600116
Phone: +91 44 40435050 / 66545050
Email: helpdesk@bookmyshow.com
Book Online: https://in.bookmyshow.com/gkcinemasporur

Gokulam Cinemas Poonamallee Chennai
795C, Old Sundar Theatre Complex, Rukmani Nagar,
Poonamallee - Avadi High Rd,
Near Ambedkar Statue,
Poonamallee,
Chennai - 600056
Phone: 044 26272427
Book Online: https://in.bookmyshow.com/gokulamchinemaspoonamalle

Gowri Theatre Ponneri Thiruvallur Chennai
NGO Nagar Extension,
Opposite RR Cafe,
Chennai - 601204
Phone: +91 9840684266

Green Cinemas 4K Atmos (Radha Theatre) Padi Chennai
64 Railway Station Road,
Periyar Nagar, Korattur,
Korattur, Padi,
Chennai - 600050
Book Online: https://in.bookmyshow.com/greencinemaspadi

Inox National Virugambakkam Chennai
INOX Leisure Ltd., 3rd Chandra Metro Mall,
Arcot Rd, Virugambakkam,
Chennai - 600092
Phone: +91 9176025501
Book Online: https://in.bookmyshow.com/inoxnationalvirugambakkam

INOX Chennai Citi Centre Chennai
Chennai City Centre, Dr Radha Krishnan Salai,
Loganathan Colony, Mylapore,
Chennai - 600004
Phone: +91 96772 94265
Book Online: https://in.bookmyshow.com/inoxnationalmylapore

INOX Cinemas The Marina Mall, OMR, Chennai
3rd Floor, The Marina mall,
Old Mahabalipuram Road, Egatoor,
Navalur,
Chennai - 603103
Phone: +91 44 40173060
Book Online: https://in.bookmyshow.com/inoxmarinamallomr

Janatha Theatre Pallavaram Chennai
2K Theatre, Cantoment,
Srinivasa perumal koil, Rajendra Nagar,
Pallavaram,
Chennai - 600043
Book Online: https://in.bookmyshow.com/janathatheatrepallavaramchennai

Jothi Theatre St Thomas Mount, Alandur Chennai
40, N Parade Rd, near Kathipara Junction,
Parangi Malai, Alandur,
Chennai - 600016
Phone: 044 22340151
Book Online: https://in.bookmyshow.com/jothitheatrealandurchennai

Kasi Talkies Dolby Atmos 4k Ashok Nagar Chennai
60, Pillaiyar Koil St,
Kasi Estate, West Jafferkhanpet,
Chennai - 600083
Phone: +91 44 35549315
Book Online: https://in.bookmyshow.com/kasitheatrechennai

Krishnaveni Cinemas T.Nagar Chennai
Old No 2, New, 3,
N Usman Rd, T. Nagar,
Chennai - 600017
Phone: +91 44 24341828
Book Online: https://in.bookmyshow.com/krishnavenicinemastnagar

KK Cinemas Minjur Chennai
Near Railway Gate, Kattur Road,
Near SST Computer Centre,
Minjur,
Chennai - 601203
Phone: +91 44 27933001

Kumaran Theatre Puzhuthivakkam Madipakkam Chennai
5, Muthu Mohamed Street,
Puzhuthivakkam, Madipakkam,
Chennai - 600091
Phone: 044 22421309
Email: drmadhu@brshospital.com
Book Online: https://in.bookmyshow.com/kumarantheatremadipakkam

Jazz Cinemas Luxe Velachery Chennai
Phoenix Market City,
No. 142, 2nd Floor, Velachery Road,
Indira Gandhi Nagar, Velachery,
Chennai - 600042
Book Online: https://in.bookmyshow.com/luxecinemasvelachery

Malliga Cinema Hall Mangadu Chennai
No. 250, Near Kamatchi Amman Koil,
Shivananda Park,
Kunrathur Road,
Chennai - 600056
Phone: +91 9840272605

Mani Talkies Minjur Chennai
27, Thiruvottiyur High Road,
Minjur,
Chennai - 601203
Phone: 044 27934259
Book Online: https://in.bookmyshow.com/manitalkiesminjur

Mayajaal Multiplex East Coast Road Chennai
34/1, East Coast Road,
Kanathur,
Chennai - 603112
Phone: 044 40435050 / 66545050
Email: helpdesk@bookmyshow.com
Book Online: https://in.bookmyshow.com/mayajaalecrchennai

Kumaran Cinemas Medavakkam Chennai
Velachery Rd, Babu Nagar,
Medavakkam,
Chennai - 600100
Phone: 044 22421309
Book Online: https://in.bookmyshow.com/kumarancinemasmedavakkam

Meenakshi Theatre Old Washermanpet Chennai
No.45, Kamaraj Salai,
Salai Ma Nagar, Old Washermanpet,
Chennai - 600068
Phone: 099412 79606
Book Online: https://in.bookmyshow.com/meenakshitheatermanali

National Theatre 4K Dolby Atmos Tambaram Chennai
109, Rajaji Road,
Tambaram West,
Tambaram,
Chennai - 600045
Phone: 098402 97134
Book Online: https://in.bookmyshow.com/nationaltheatertambaram

Odeon Mani Theatre Tiruvottiyur Chennai
W Mada Street, Kaladipet,
Tiruvottiyur,
Chennai - 600019
Phone: 044 25992676

PVR Cinemas Skywalk Aminjikarai Chennai
No.1, Nelson Manickam Road,
Aminjikarai
Chennai - 600029
Phone: 088009 00009
Book Online: https://in.bookmyshow.com/pvrcinemasaminjikarai

PVR Grand Galada Pallavaram Chennai
PVR Ltd., Grand Galada,
Mall Kohinoor-2, Arumalai Chavadi,
Pallavaram,
Chennai - 600043
Phone: 088009 00009
Book Online: https://in.bookmyshow.com/pvrgrandgaladapallavaram

PVR Grand Mall Velachery Chennai
137, Velachery - Tambaram Main Road,
V.O.C Nagar, Doctor Seetaram Nagar,
Velachery,
Chennai - 600042
Phone: 088009 00009
Book Online: https://in.bookmyshow.com/pvrgrandmallvelachery

PVR Heritage RSL ECR Chennai
1st Floor Near Uthandi Toll Gate,
Survey No: 3/488B1A And 3/700 No 17,
Uthandi Village,
Chennai - 600119
Phone: 088009 00009
Book Online: https://in.bookmyshow.com/pvrgrandmallvelachery

PVR SKLS Galaxy Mall Red Hills Chennai
PVR Ltd. PVR Cinemas 4th Floor Galaxy Mall,
Mall Survey No. 93/IC, 2B, GNT Road,
Red Hills,
Chennai - 600052
Phone: 088009 00009
Book Online: https://in.bookmyshow.com/pvrsklsgalaxymallredhills

PVR VR Mall Anna Nagar Chennai
3rd Floor VR Mall Metro Zone,
No.44, Pillaiyar Koil Street,
100 Feet Rd, Anna Nagar,
Chennai - 600040
Phone: 088009 00009
Book Online: https://in.bookmyshow.com/pvrvrmallannanagar

Raj Theatre Saidapet Chennai
20, Abdul Razzak Street,
Saidapet,
Chennai - 600015
Phone: 044 24350374
Book Online: https://in.bookmyshow.com/rajtheatresaidapet

Remy Cinemas Avadi Chennai
JB Estate, Chelliamman Kovil Street,
next to Bank Of Baroda bank,
exactly, opp. to pandian, rice mill,
Avadi,
Chennai - 600054
Phone: 044 26555793
Book Online: https://in.bookmyshow.com/remycinemassaidapet

Rohini Silver Screens Koyambedu Chennai
141/2, Poonamallee High Road,
Koyambedu,
Chennai - 600107
Phone: 044 29312481
Book Online: https://in.bookmyshow.com/rohinisilverscreenskoyambedu

SB (Sri Bhagavathi) Cinemas Poonamallee Chennai
25, Amman Koil Street,
Indhira Nagar, Kumananchavadi,
Chennai - 600056
Phone: 044 48589293
Book Online: https://in.bookmyshow.com/sbcinemaspoonamallee

SDC Mahalakshmi Cinema Hall Purasaiwakkam Chennai
Old No. 538, 762, Strahans Road,
Pattalam,
Purasaiwakkam,
Chennai - 600012
Phone: 044 26421637
Book Online: https://in.bookmyshow.com/sdcmahalakshmipurasaiwakkam

Shree Radha cinemas 4K DOLBY ATMOS Redhills Chennai
GNT Rd, Red Hills,
Padianallur,
Chennai - 600052
Phone: 044 26320462
Book Online: https://in.bookmyshow.com/shreeradhacinemasredhills

Sivasakthi Cinemas Padi Chennai
No-1, Moorthy Nagar,
Padi,
Chennai - 600050
Phone: 07397320257
Book Online: https://in.bookmyshow.com/sivasakthicinemaspadi

SK Marlen Cinemas Alandur Guindy Chennai
Subramania Mudali Street,
No:18, Appavu Street,
Alandur,
Chennai - 600016
Phone: 09962998080
Book Online: https://in.bookmyshow.com/skmarlenalandur

Sree Gopi Krishna Complex (GK Marlen) Ayanavaram Chennai
13, Muthamman Koil Street,
Gopal Pillai Nagar, Bharathi Nagar,
Ayanavaram,
Chennai - 600023
Phone: 09962998090
Book Online: https://www.ticketnew.com/gkmarlenayanavaram

SPI Palazzo Nexus Vadapalani Chennai
3rd Floor, Forum Vijaya Mall,
No. 183, Arcot Road,
Vadapalani,
Chennai - 600026
Book Online: https://in.bookmyshow.com/spipalazzovadapalani

SPI Escape Royapettah Chennai
Express Avenue, Express Estate,
Royapettah,
Chennai - 600014
Book Online: https://in.bookmyshow.com/spiescaperoyapettah

SPI S2 Cinemas Perambur Chennai
3rd floor, The Grand Venus Mall,
Paper Mills Road,
Perambur,
Chennai - 600011
Book Online: https://in.bookmyshow.com/spis2cinemasperambur

SPI S2 Cinemas Theyagaraja Thiruvanmiyur Chennai
No. 60, Lattice Bridge Road,
Ranganatha Puram,
Adyar,
Chennai - 600113
Book Online: https://in.bookmyshow.com/spis2theyagarajathiruvanmiyur

SPI Sathyam Cinemas Royapettah Chennai
No. 8, Thiruvika Road,
Peters Colony,
Royapettah,
Chennai - 600014
Book Online: https://in.bookmyshow.com/spisathyamcinemasroyapettah

Sree Lakshmibala Moviepark Padi Chennai
Moorthy Nagar, Anna Nagar,
Padi,
Chennai - 600050
Phone: 09789929158
Book Online: https://in.bookmyshow.com/sreelakshmibalamovieparkpadi

Sree Roja Theatre Periyakuppam Thiruvallur Chennai
State Highway 57, Periyakuppam,
Thiruvallur,
Chennai - 602003
Phone: 044 27660550
Book Online: https://in.bookmyshow.com/sreerojatheatretiruvallur

Sree Thulasi Theatre Thiruvallur Chennai
State Highway 57, Periyakuppam,
Thiruvallur,
Chennai - 602001
Phone: 098656 44796
Book Online: https://in.bookmyshow.com/sreethulasitheatretiruvallur

Vetrivel Cinemas Nanganallur Madipakkam Chennai
18, M.G.R. Road,
Telegraph Colony,
Nanganallur,
Chennai - 600061
Phone: 044 22244544
Book Online: https://in.bookmyshow.com/vetrivelcinemasnanganallur

Sri Vigneshwara Theatre (RGB Laser Projector) Poonamallee Chennai
MG Nagar, Trunk Road,
Poonamallee,
Chennai - 600123
Phone: 094423 24993
Book Online: https://in.bookmyshow.com/vigneshwaratheatrepoonamallee

VVM Cinemas Ponneri Chennai
57, Newcar Street,
Ponneri,
Thiruvallur District,
Chennai - 601204
Phone: 044 27972305

Woodlands Cinemas Royapettah Chennai
25, Westcott Road,
near Hindustan Petroleum Petrol Pump,
Royapettah,
Chennai - 600014
Phone: 044 66545050`

const entries = cinemas.split('\n\n')

// console.log('entries, ', entries)

const extractedData = entries.map((entry) => {
  const lines = entry.split('\n')
  const name = lines[0].trim()
  const address = lines
    .slice(1, lines.indexOf(lines.find((line) => line.startsWith('Phone:'))))
    .join(', ')

  return { name, address }
})

console.log(extractedData)

async function getLatLng(address, accessToken) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address,
  )}.json?access_token=${accessToken}`

  const response = await fetch(url)
  const data = await response.json()

  if (data.features.length > 0) {
    const [lng, lat] = data.features[0].geometry.coordinates
    return { lat, lng }
  } else {
    throw new Error('Geocoding failed: No results found')
  }
}

const accessToken =
  'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'
// Replace with your Mapbox access token

;(async () => {
  const output = []

  for (const entry of extractedData) {
    try {
      const location = await getLatLng(entry.address, accessToken)
      console.log('Infof', { ...entry, location })
      output.push({ ...entry, location })
    } catch (error) {
      console.error(
        `Error getting coordinates for ${entry.name}:`,
        error.message,
      )
    }
  }

  fs.writeFileSync('output.json', JSON.stringify(output, null, 2))
  console.log('Data saved to output.json')
})()
